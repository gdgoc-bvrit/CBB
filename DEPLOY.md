# Deploying the Coding Brigade BVRIT website

The site is a **static single-page app** (plain HTML, CSS and JavaScript — no
database, no Node.js, no server-side code). It can be hosted on any web server.

It is intended to run at the **root of its own subdomain**, e.g.
`https://codingbrigade.bvrit.ac.in/` or `https://cbb.bvrit.ac.in/`.
(If it must live in a sub-folder like `bvrit.ac.in/cbb/` instead, the site has
to be rebuilt with a base path — tell the developer before deploying.)

---

## 1. What to upload

Everything **inside the `dist/` folder** (not the folder itself) goes into the
web root:

```
dist/
├── index.html
├── 404.html
├── .htaccess          ← Apache config (already set up)
├── web.config         ← IIS config (already set up)
├── robots.txt
├── assets/            ← hashed JS + CSS bundles
├── images/  img/  img2/  posters/  home-gallery/  about-images/  fonts/
├── logo.png  logo-light.jpg  About-video.mp4
└── ...
```

Upload the **contents** of `dist/` so that `index.html` sits at the web root.

---

## 2. Make deep links / refresh work

Because routing happens in the browser, the server must return `index.html` for
any path that isn't a real file (otherwise refreshing `/about` gives a 404).

### Apache
`.htaccess` is included and handles this automatically. Just make sure:
- `mod_rewrite`, `mod_headers` and `mod_deflate` are enabled
- the site's `<Directory>` block allows overrides: `AllowOverride All`

### IIS (Windows Server)
`web.config` is included and handles this automatically. It requires the free
**URL Rewrite** module: <https://www.iis.net/downloads/microsoft/url-rewrite>
(install once on the server, then recycle the app pool).

### Nginx
Nginx ignores `.htaccess` / `web.config`. Add this to the `server { }` block:

```nginx
server {
    listen 443 ssl;
    server_name codingbrigade.bvrit.ac.in;   # adjust
    root /var/www/cbb;                        # folder where you put dist/ contents
    index index.html;

    # SPA fallback — the important line
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Long cache for hashed build assets
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    gzip on;
    gzip_types text/css application/javascript application/json image/svg+xml;
}
```

Then `nginx -t && systemctl reload nginx`.

---

## 3. Verify after deploying

1. Open `https://<domain>/` — the home page loads.
2. Click through to **Team**, then press **F5 / refresh**. It should reload the
   Team page, **not** show a 404. Do the same on **About** and **Events**.
3. Open `https://<domain>/about` directly in a new tab — it should load.
4. Check the browser console (F12) for errors — there should be none.

If step 2 or 3 fails, the SPA-fallback rule above is not active.

---

## 4. Rebuilding (only if source code changes)

Requires Node.js 20+.

```bash
npm install
npm run optimize:images   # optional — only needed if new photos were added
npm run build             # outputs a fresh dist/
```

Then re-upload the contents of `dist/`.
