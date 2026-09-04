#!/usr/bin/env node
/**
 * Downloads official partner logos listed in scripts/logos.manifest.json
 * into public/integrations/<slug>.svg. Safe to re-run; never throws on a
 * single failure — prints a summary so you can fix individual URLs.
 *
 *   node scripts/fetch-logos.mjs
 */
import fs from "node:fs/promises";
import path from "node:path";

const root = path.resolve(new URL("..", import.meta.url).pathname);
const outDir = path.join(root, "public", "integrations");
const manifest = JSON.parse(await fs.readFile(path.join(root, "scripts", "logos.manifest.json"), "utf8"));
await fs.mkdir(outDir, { recursive: true });

let ok = 0, failed = [];
for (const [slug, url] of Object.entries(manifest)) {
  if (slug.startsWith("_")) continue;
  try {
    const res = await fetch(url, { headers: { "user-agent": "mercury-call-desk-site/logo-fetch" } });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    let svg = await res.text();
    if (!svg.trim().startsWith("<")) throw new Error("not SVG");
    // strip XML prolog / comments for cleanliness
    svg = svg.replace(/<\?xml[^>]*\?>\s*/i, "").replace(/<!--[\s\S]*?-->/g, "").trim();
    await fs.writeFile(path.join(outDir, `${slug}.svg`), svg);
    ok++;
    console.log(`✔ ${slug}`);
  } catch (e) {
    failed.push(`${slug} (${url}) — ${e.message}`);
    console.log(`✖ ${slug}: ${e.message}`);
  }
}
console.log(`\n${ok} downloaded, ${failed.length} failed.`);
if (failed.length) console.log(failed.map((f) => "  " + f).join("\n"));
