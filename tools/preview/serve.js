/* Serves the rendered site from ./_site on http://localhost:8099 (override with
   `node serve.js 1234` or PORT=1234). Run `node render.js` first. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '_site');
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png', '.gif': 'image/gif', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.eot': 'application/vnd.ms-fontobject',
  '.pdf': 'application/pdf', '.json': 'application/json', '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
};
const port = Number(process.env.PORT || process.argv[2] || 8099);
http
  .createServer((req, res) => {
    const url = decodeURIComponent(req.url.split('?')[0]);
    // The pages are written for the site's `baseurl: /wiki` (see _config.yml), so
    // strip that prefix when serving locally from the root.
    const rel = url.replace(/^\/wiki(?=\/|$)/, '');
    let file = path.join(root, rel);
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404); res.end('404 ' + url); return; }
      res.writeHead(200, { 'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream' });
      res.end(data);
    });
  })
  .listen(port, () => console.log('serving ' + root + ' on http://localhost:' + port));
