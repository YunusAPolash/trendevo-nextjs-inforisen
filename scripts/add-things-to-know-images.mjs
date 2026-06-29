import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const sourceImage = join(root, 'public/images/buy-page-thingstoknow.png');
const subserviceDir = join(root, 'app/(subservice)');

function kebab(s) {
  return (s ?? 'image')
    .replace(/gt<([^>]+)>/g, '$1')
    .replace(/lnk<([^|>]+)\|[^>]+>/g, '$1')
    .replace(/&/g, ' and ')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .toLowerCase()
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function plainTitle(s) {
  return s.replace(/gt<([^>]+)>/g, '$1').trim();
}

const pageDataFiles = readdirSync(subserviceDir, { withFileTypes: true })
  .filter((d) => d.isDirectory() && d.name.startsWith('buy-'))
  .map((d) => `app/(subservice)/${d.name}/page-data.ts`);

for (const relPath of pageDataFiles) {
  const filePath = join(root, relPath);
  const content = readFileSync(filePath, 'utf8');

  if (!content.includes('thingsToKnow:')) continue;

  const titleMatch = content.match(/thingsToKnow:\s*\{[\s\S]*?title:\s*'([^']+)'/);
  if (!titleMatch) {
    console.warn(`No title found in ${relPath}`);
    continue;
  }

  const title = titleMatch[1];
  const slug = relPath.match(/buy-[^/]+/)[0];
  const filename = `${kebab(title)}.png`;
  const imageDir = join(root, 'public/images/subservice', slug);
  const destImage = join(imageDir, filename);
  const imageSrc = `/images/subservice/${slug}/${filename}`;
  const imageAlt = plainTitle(title);

  mkdirSync(imageDir, { recursive: true });
  if (!existsSync(destImage)) {
    copyFileSync(sourceImage, destImage);
  }

  if (content.includes('thingsToKnow:') && /thingsToKnow:\s*\{[\s\S]*?image:/.test(content)) {
    console.log(`Skipped (already has image): ${relPath}`);
    continue;
  }

  const updated = content.replace(
    /(thingsToKnow:\s*\{[\s\S]*?title:\s*'[^']+',)/,
    `$1\n    image: {\n      src: '${imageSrc}',\n      alt: '${imageAlt}',\n    },`,
  );

  if (updated === content) {
    console.warn(`Failed to update ${relPath}`);
    continue;
  }

  writeFileSync(filePath, updated);
  console.log(`Updated ${relPath} -> ${filename}`);
}
