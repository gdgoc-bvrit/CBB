/**
 * Post-build: this is a single-page app, so any URL that isn't a real file
 * must be answered with index.html. The rewrite rules live in
 * `public/.htaccess` (Apache) and `public/web.config` (IIS); this just adds a
 * plain `404.html` copy as a last-resort fallback for servers that only allow
 * a custom 404 page.
 */
import { copyFile, access } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const dist = join(dirname(fileURLToPath(import.meta.url)), "..", "dist");

try {
  await access(join(dist, "index.html"));
} catch {
  console.error("spa-fallback: dist/index.html not found — did the build run?");
  process.exit(1);
}

await copyFile(join(dist, "index.html"), join(dist, "404.html"));

// Ship the deploy guide alongside the build so whoever unzips it has it.
const guide = join(dirname(fileURLToPath(import.meta.url)), "..", "DEPLOY.md");
await copyFile(guide, join(dist, "DEPLOY.md")).catch(() => {});

console.log("spa-fallback: wrote dist/404.html and dist/DEPLOY.md");
