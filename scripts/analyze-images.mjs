import fs from 'fs';
import path from 'path';

const IMAGE_DIR = 'public/images';
const EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg', '.gif', '.ico', '.avif']);

function toPosix(p) {
  return p.split(path.sep).join('/');
}

function walk(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walk(full));
    else if (EXT.has(path.extname(entry.name).toLowerCase())) {
      results.push(toPosix(full));
    }
  }
  return results;
}

function walkCode(dir, files = []) {
  const skip = new Set(['node_modules', '.next', '.git', 'public', 'scripts']);
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (skip.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkCode(full, files);
    else {
      const ext = path.extname(entry.name).toLowerCase();
      if (
        ['.tsx', '.ts', '.jsx', '.js', '.css', '.scss', '.html', '.json', '.mdx', '.md', '.mjs', '.cjs'].includes(
          ext,
        )
      ) {
        files.push(full);
      }
    }
  }
  return files;
}

function formatBytes(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${bytes} B`;
}

const mode = process.argv[2] || 'analyze';
const allImages = walk(IMAGE_DIR);
const codeFiles = walkCode('.');
let corpus = '';
for (const file of codeFiles) {
  try {
    corpus += `${fs.readFileSync(file, 'utf8')}\n`;
  } catch {
    // ignore unreadable files
  }
}

function isReferenced(imagePath) {
  const posix = toPosix(imagePath);
  const webPath = `/${posix.replace(/^public\//, '')}`;
  const relFromImages = posix.replace(/^public\/images\//, '');

  if (corpus.includes(webPath)) return true;
  if (corpus.includes(posix)) return true;
  if (corpus.includes(`images/${relFromImages}`)) return true;

  return false;
}

const unused = [];
const used = [];

for (const img of allImages) {
  if (isReferenced(img)) used.push(img);
  else unused.push(img);
}

if (mode === 'verify-basename') {
  const basenameMatches = [];
  for (const img of unused) {
    const basename = path.basename(img);
    if (corpus.includes(basename)) basenameMatches.push({ img, basename });
  }
  console.log(`Basename-only matches among unused: ${basenameMatches.length}`);
  basenameMatches.forEach(({ img, basename }) => console.log(`${basename} -> ${img}`));
} else if (mode === 'delete') {
  let deletedBytes = 0;
  for (const img of unused) {
    deletedBytes += fs.statSync(img).size;
    fs.unlinkSync(img);
  }
  console.log(`Deleted ${unused.length} unused images (${formatBytes(deletedBytes)} freed).`);
} else if (mode === 'sizes') {
  const withSizes = allImages
    .map((img) => ({
      path: img,
      bytes: fs.statSync(img).size,
    }))
    .sort((a, b) => b.bytes - a.bytes);

  const totalBytes = withSizes.reduce((sum, item) => sum + item.bytes, 0);
  console.log(`Total images: ${withSizes.length}`);
  console.log(`Total size: ${formatBytes(totalBytes)}`);
  console.log('\n--- TOP 30 LARGEST ---');
  withSizes.slice(0, 30).forEach((item, index) => {
    console.log(`${String(index + 1).padStart(2, ' ')}. ${formatBytes(item.bytes).padStart(10)}  ${item.path}`);
  });

  const byExt = {};
  for (const item of withSizes) {
    const ext = path.extname(item.path).toLowerCase();
    byExt[ext] = byExt[ext] || { count: 0, bytes: 0 };
    byExt[ext].count += 1;
    byExt[ext].bytes += item.bytes;
  }

  console.log('\n--- BY EXTENSION ---');
  Object.entries(byExt)
    .sort((a, b) => b[1].bytes - a[1].bytes)
    .forEach(([ext, data]) => {
      console.log(`${ext.padEnd(6)} ${String(data.count).padStart(4)} files  ${formatBytes(data.bytes).padStart(10)}`);
    });
} else {
  console.log(`Total images: ${allImages.length}`);
  console.log(`Used: ${used.length}`);
  console.log(`Unused: ${unused.length}`);
  console.log('\n--- UNUSED FILES ---');
  unused.sort().forEach((file) => console.log(file));
}
