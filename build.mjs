import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");
const files = [
  "index.html",
  "privacy.html",
  "terms.html",
  "styles.css",
  "script.js",
  "site-config.js",
  "robots.txt",
  "sitemap.xml"
];

if (existsSync(dist)) rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

for (const file of files) {
  cpSync(resolve(root, file), resolve(dist, file));
}

console.log(`Built ${files.length} static files into ${dist}`);
