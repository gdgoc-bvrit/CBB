/**
 * One-off / repeatable image optimiser for public/.
 * Downscales oversized images and re-encodes them at web-sane quality,
 * writing back to the same path (same extension). Never upscales.
 *
 *   npm run optimize:images          # optimise everything under public/
 *   npm run optimize:images -- --dry # report only, change nothing
 *
 * Re-run any time new photos are added — already-small files are skipped.
 */
import { readdir, stat, writeFile } from "node:fs/promises";
import { join, extname, relative, sep, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const DRY = process.argv.includes("--dry");

// max display width (px) by path prefix, most-specific first
const RULES = [
  { match: /[\\/]posters[\\/]/, maxW: 1100, q: 84 },
  { match: /[\\/]home-gallery[\\/]/, maxW: 1600, q: 82 },
  { match: /[\\/]about-images[\\/]/, maxW: 900, q: 80 },
  { match: /[\\/](img|img2)[\\/]/, maxW: 640, q: 82 },
  { match: /Team\.jpe?g$/i, maxW: 1600, q: 82 },
  { match: /[\\/]images[\\/]/, maxW: 1280, q: 82 },
  { match: /logo(-light)?\.(png|jpe?g)$/i, maxW: 420, q: 88 },
];
const DEFAULT = { maxW: 1400, q: 82 };

const ruleFor = (p) => RULES.find((r) => r.match.test(p)) ?? DEFAULT;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

const EXT = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
let inBytes = 0;
let outBytes = 0;
let changed = 0;
let skipped = 0;

for await (const file of walk(ROOT)) {
  const ext = extname(file).toLowerCase();
  if (!EXT.has(ext)) continue;

  const before = (await stat(file)).size;
  const { maxW, q } = ruleFor(file);
  const rel = relative(ROOT, file).split(sep).join("/");

  try {
    const img = sharp(file, { animated: ext === ".gif" });
    const meta = await img.metadata();
    const needsResize = (meta.width ?? 0) > maxW;
    // skip files that are already small and don't need a resize
    if (!needsResize && before < 180 * 1024) {
      skipped++;
      inBytes += before;
      outBytes += before;
      continue;
    }

    let pipe = img.rotate(); // honour EXIF orientation, then strip metadata
    if (needsResize) pipe = pipe.resize({ width: maxW, withoutEnlargement: true });

    if (ext === ".png") pipe = pipe.png({ quality: q, compressionLevel: 9, palette: true });
    else if (ext === ".webp") pipe = pipe.webp({ quality: q });
    else if (ext === ".gif") pipe = pipe.gif();
    else pipe = pipe.jpeg({ quality: q, mozjpeg: true });

    const buf = await pipe.toBuffer();

    if (buf.length >= before) {
      // re-encoding made it bigger — keep the original
      skipped++;
      inBytes += before;
      outBytes += before;
      continue;
    }

    inBytes += before;
    outBytes += buf.length;
    changed++;
    const pct = (100 - (buf.length / before) * 100).toFixed(0);
    console.log(`  ${rel}  ${(before / 1024).toFixed(0)}KB -> ${(buf.length / 1024).toFixed(0)}KB  (-${pct}%)`);

    if (!DRY) {
      // overwrite in place; retry a few times for transient Windows / OneDrive locks
      for (let attempt = 1; ; attempt++) {
        try {
          await writeFile(file, buf);
          break;
        } catch (e) {
          if (attempt >= 5) throw e;
          await new Promise((r) => setTimeout(r, 400 * attempt));
        }
      }
    }
  } catch (err) {
    console.warn(`  ! skipped ${rel}: ${err.message}`);
    skipped++;
    inBytes += before;
    outBytes += before;
  }
}

console.log(
  `\n${DRY ? "[dry run] " : ""}${changed} optimised, ${skipped} left as-is` +
    `\ntotal ${(inBytes / 1024 / 1024).toFixed(1)} MB -> ${(outBytes / 1024 / 1024).toFixed(1)} MB` +
    `  (-${(100 - (outBytes / inBytes) * 100).toFixed(0)}%)`
);
