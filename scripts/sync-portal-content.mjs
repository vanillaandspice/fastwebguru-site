#!/usr/bin/env node
/**
 * sync-portal-content.mjs — one-way GitHub -> Astro content sync.
 *
 * Reads src/data/portal-manifest.json and copies each asset's source markdown
 * (which lives one level up, in the client's GitHub asset folder) into
 * src/content/portal/<slug>.md, prepending Astro frontmatter derived from the
 * manifest. The generated files are committed so the Vercel build (which does
 * NOT have the parent asset folder) can render them.
 *
 * Run locally before committing:  npm run sync:portal
 */
import { readFileSync, writeFileSync, mkdirSync, statSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const manifestPath = resolve(root, 'src/data/portal-manifest.json');
const outDir = resolve(root, 'src/content/portal');

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
mkdirSync(outDir, { recursive: true });

let written = 0;
let missing = 0;

for (const asset of manifest.assets) {
  const sourcePath = resolve(root, asset.sourceFile);
  if (!existsSync(sourcePath)) {
    console.warn(`  ! missing source for "${asset.slug}": ${asset.sourceFile}`);
    missing++;
    continue;
  }

  const body = readFileSync(sourcePath, 'utf8');
  const lastUpdated = statSync(sourcePath).mtime.toISOString().slice(0, 10);

  // JSON.stringify yields safely double-quoted scalars that are valid YAML.
  const fm = [
    '---',
    `title: ${JSON.stringify(asset.displayTitle)}`,
    `category: ${JSON.stringify(asset.category)}`,
    `skill: ${JSON.stringify(asset.skill)}`,
    `sourceFile: ${JSON.stringify(asset.sourceFile)}`,
    `lastUpdated: ${JSON.stringify(lastUpdated)}`,
    '---',
    '',
  ].join('\n');

  writeFileSync(resolve(outDir, `${asset.slug}.md`), fm + body, 'utf8');
  written++;
}

console.log(`\nPortal content sync complete: ${written} written, ${missing} missing.`);
if (missing > 0) process.exitCode = 1;
