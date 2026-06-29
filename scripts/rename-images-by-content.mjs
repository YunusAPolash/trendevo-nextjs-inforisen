/**
 * Rename images based on section/content titles from page-data.ts files.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const PUBLIC = path.join(ROOT, 'public');
const CODE_EXT = new Set(['.ts', '.tsx', '.js', '.jsx', '.css', '.md', '.mjs']);

/** @type {Map<string, string>} global old → new (1:1 only) */
const renames = new Map();
/** @type {Array<{ file: string, oldPath: string, newPath: string }>} per-file hero updates */
const perFileUpdates = [];

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

function ext(p) {
  const i = p.lastIndexOf('.');
  return i >= 0 ? p.slice(i) : '';
}

function slugOf(fp) {
  const rel = path.relative(path.join(ROOT, 'app'), fp).replace(/\\/g, '/');
  const dir = path.dirname(rel);
  return dir === '(home)' ? 'home' : dir.replace(/^\([^)]+\)\//, '');
}

function imgDir(slug) {
  if (slug === 'home') return 'home';
  if (slug.startsWith('buy-')) return `subservice/${slug}`;
  if (slug.endsWith('-smm-panel')) return `service/${slug}`;
  if (slug.startsWith('smm-panel-')) return `country/${slug}`;
  return slug;
}

function addGlobal(oldP, newP) {
  if (!oldP?.startsWith('/images/') || oldP === newP) return;
  if (renames.has(oldP)) return;
  renames.set(oldP, newP);
}

function between(content, start, end) {
  const s = content.indexOf(start);
  if (s < 0) return '';
  const e = content.indexOf(end, s + start.length);
  return e < 0 ? content.slice(s) : content.slice(s, e);
}

function pairsTitleIcon(block) {
  const out = [];
  const re = /title:\s*['`]([^'`]+)['`][\s\S]*?icon:\s*['`]([^'`]+)['`]/g;
  let m;
  while ((m = re.exec(block))) out.push({ title: m[1], icon: m[2] });
  return out;
}

function pairsLabelPlatform(block) {
  const out = [];
  const re =
    /label:\s*['`]([^'`]+)['`][\s\S]*?icon:\s*['`]([^'`]+)['`][\s\S]*?decorationImage:\s*['`]([^'`]+)['`]/g;
  let m;
  while ((m = re.exec(block))) out.push({ label: m[1], icon: m[2], deco: m[3] });
  return out;
}

function parsePageData(fp) {
  const raw = fs.readFileSync(fp, 'utf8');
  const dataStart = raw.indexOf('export const data');
  const c = dataStart >= 0 ? raw.slice(dataStart) : raw;
  const slug = slugOf(fp);
  const dir = imgDir(slug);

  const hero =
    between(c, '  hero: {', '\n  orderForm:') ||
    between(c, '  hero: {', '\n  workingProcess:') ||
    between(c, '  hero: {', '\n  stats:') ||
    between(c, '  hero: {', '\n  panels:');
  const heroHead = hero.slice(0, 2500);
  const heroTitle =
    heroHead.match(/heading:\s*['`]([^'`]+)['`]/)?.[1] ??
    heroHead.match(/(?:^|\n)\s*title:\s*['`]([^'`]+)['`]/)?.[1];
  const heroSrc =
    heroHead.match(/illustration:\s*\{[\s\S]*?src:\s*['`]([^'`]+)['`]/)?.[1] ??
    heroHead.match(/image:\s*\{[\s\S]*?src:\s*['`]([^'`]+)['`]/m)?.[1];

  if (heroTitle && heroSrc) {
    const newSrc = `/images/${dir}/${kebab(heroTitle)}${ext(heroSrc)}`;
    if (slug.startsWith('buy-')) {
      perFileUpdates.push({ file: fp, oldPath: heroSrc, newPath: newSrc });
    } else {
      addGlobal(heroSrc, newSrc);
    }
  }

  if (slug === 'home') {
    const about = between(c, '  about: {', '\n  workingProcess:');
    const aboutTitle = about.match(/heading:\s*\{[\s\S]*?title:\s*['`]([^'`]+)['`]/)?.[1];
    const aboutSrc = about.match(/image:\s*\{[\s\S]*?src:\s*['`]([^'`]+)['`]/)?.[1];
    if (aboutTitle && aboutSrc) addGlobal(aboutSrc, `/images/about/${kebab(aboutTitle)}${ext(aboutSrc)}`);

    const pay = between(c, '  paymentMethods: {', '\n  platformMarquee:');
    const payTitle = pay.match(/heading:\s*\{[\s\S]*?title:\s*['`]([^'`]+)['`]/)?.[1];
    const paySrc = pay.match(/image:\s*\{[\s\S]*?src:\s*['`]([^'`]+)['`]/)?.[1];
    const payUnderline = pay.match(/underlineSrc:\s*['`]([^'`]+)['`]/)?.[1];
    const payBadge = pay.match(/badge:\s*['`]([^'`]+)['`]/)?.[1];
    if (payTitle && paySrc) addGlobal(paySrc, `/images/payment-methods/${kebab(payTitle)}${ext(paySrc)}`);
    if (payUnderline && payBadge) addGlobal(payUnderline, `/images/payment-methods/${kebab(payBadge)}-section-underline${ext(payUnderline)}`);

    const adv = between(c, '  advantages: {', '\n  pricing:');
    const advTitle = adv.match(/heading:\s*\{[\s\S]*?title:\s*['`]([^'`]+)['`]/)?.[1];
    const advSrc = adv.match(/image:\s*\{[\s\S]*?src:\s*['`]([^'`]+)['`]/)?.[1];
    const advUnderline = adv.match(/underlineSrc:\s*['`]([^'`]+)['`]/)?.[1];
    const advBadge = adv.match(/badge:\s*['`]([^'`]+)['`]/)?.[1];
    if (advTitle && advSrc) addGlobal(advSrc, `/images/advantages/${kebab(advTitle)}${ext(advSrc)}`);
    if (advUnderline && advBadge) addGlobal(advUnderline, `/images/advantages/${kebab(advBadge)}-section-underline${ext(advUnderline)}`);

    const svc = between(c, '  ourServices: {', '\n  about:');
    for (const { label, icon, deco } of pairsLabelPlatform(svc)) {
      const k = kebab(label);
      addGlobal(icon, `/images/our-services/platforms/${k}-platform-icon${ext(icon)}`);
      addGlobal(deco, `/images/our-services/decorations/${k}-decoration${ext(deco)}`);
    }

    const wp = between(c, '  workingProcess: {', '\n  whyChooseUs:');
    const wpUnderline = wp.match(/underlineSrc:\s*['`]([^'`]+)['`]/)?.[1];
    const wpBadge = wp.match(/badge:\s*['`]([^'`]+)['`]/)?.[1];
    if (wpUnderline && wpBadge) addGlobal(wpUnderline, `/images/working-process/${kebab(wpBadge)}-section-underline${ext(wpUnderline)}`);

    const wcu = between(c, '  whyChooseUs: {', '\n  paymentMethods:');
    const wcuUnderline = wcu.match(/underlineSrc:\s*['`]([^'`]+)['`]/)?.[1];
    const wcuBadge = wcu.match(/badge:\s*['`]([^'`]+)['`]/)?.[1];
    if (wcuUnderline && wcuBadge) addGlobal(wcuUnderline, `/images/why-choose-us/${kebab(wcuBadge)}-section-underline${ext(wcuUnderline)}`);
    for (const { title, icon } of pairsTitleIcon(wcu)) {
      if (icon.includes('/images/why-choose-us/')) {
        addGlobal(icon, `/images/why-choose-us/${kebab(title)}-icon${ext(icon)}`);
      }
    }

    const stats = between(c, '  stats: {', '\n  ourServices:');
    const statRe = /label:\s*['`]([^'`]+)['`][\s\S]*?icon:\s*['`]([^'`]+)['`]/g;
    let sm;
    while ((sm = statRe.exec(stats))) {
      if (sm[2].includes('/images/stats/')) addGlobal(sm[2], `/images/stats/${kebab(sm[1])}-icon${ext(sm[2])}`);
    }

    const pricing = between(c, '  pricing: {', '\n  testimonials:');
    const prUnderline = pricing.match(/underlineSrc:\s*['`]([^'`]+)['`]/)?.[1];
    const prBadge = pricing.match(/badge:\s*['`]([^'`]+)['`]/)?.[1];
    if (prUnderline && prBadge) addGlobal(prUnderline, `/images/pricing/${kebab(prBadge)}-section-underline${ext(prUnderline)}`);
    const prRe = /label:\s*['`]([^'`]+)['`][\s\S]*?icon:\s*['`]([^'`]+)['`]/g;
    while ((sm = prRe.exec(pricing))) {
      if (sm[2].includes('/images/icons/pricing-')) {
        addGlobal(sm[2], `/images/pricing/${kebab(sm[1])}-platform-icon${ext(sm[2])}`);
      }
    }

    const blog = between(c, '  blog: {', '\n  cta:');
    const blogUnderline = blog.match(/underlineSrc:\s*['`]([^'`]+)['`]/)?.[1];
    const blogBadge = blog.match(/badge:\s*['`]([^'`]+)['`]/)?.[1];
    const blogTitle = blog.match(/title:\s*['`]([^'`]+)['`]/)?.[1];
    const blogName = blogBadge ?? blogTitle;
    if (blogUnderline && blogName) addGlobal(blogUnderline, `/images/blog/${kebab(blogName)}-section-underline${ext(blogUnderline)}`);

    const testi = between(c, '  testimonials: {', '\n  faq:');
    const testiTitle = testi.match(/title:\s*['`]([^'`]+)['`]/)?.[1];
    const testiImg = testi.match(/image:\s*['`](\/images\/testimonials\/[^'`]+)['`]/)?.[1];
    const testiUnderline = testi.match(/underlineSrc:\s*['`]([^'`]+)['`]/)?.[1];
    const testiBadge = testi.match(/badge:\s*['`]([^'`]+)['`]/)?.[1];
    if (testiTitle && testiImg) addGlobal(testiImg, `/images/testimonials/${kebab(testiTitle)}-featured-photo${ext(testiImg)}`);
    if (testiUnderline && testiBadge) addGlobal(testiUnderline, `/images/testimonials/${kebab(testiBadge)}-section-underline${ext(testiUnderline)}`);

    const cta = between(c, '  cta: {', '\n  footer:');
    const ctaTitle = cta.match(/title:\s*['`]([^'`]+)['`]/)?.[1];
    const ctaSrc = c.match(/imageSrc:\s*['`](\/images\/cta\/[^'`]+)['`]/)?.[1];
    if (ctaTitle && ctaSrc) addGlobal(ctaSrc, `/images/cta/${kebab(ctaTitle)}${ext(ctaSrc)}`);
  }

  if (slug === 'about-us' && heroTitle && heroSrc) {
    addGlobal(heroSrc, `/images/about-us/${kebab(heroTitle)}${ext(heroSrc)}`);
    const mission = between(c, '  missionVision: {', '\n  trust:');
    const mTitle = mission.match(/title:\s*['`]([^'`]+)['`]/)?.[1];
    const mSrc = mission.match(/image:\s*\{[\s\S]*?src:\s*['`]([^'`]+)['`]/)?.[1];
    if (mTitle && mSrc) addGlobal(mSrc, `/images/about/${kebab(mTitle)}${ext(mSrc)}`);
  }

  if (slug === 'contact-us' && heroTitle && heroSrc) {
    addGlobal(heroSrc, `/images/contact-us/${kebab(heroTitle)}${ext(heroSrc)}`);
  }

  if (slug === 'services' && heroTitle && heroSrc) {
    addGlobal(heroSrc, `/images/services/${kebab(heroTitle)}${ext(heroSrc)}`);
  }

  if (slug.endsWith('-smm-panel') && heroTitle && heroSrc) {
    addGlobal(heroSrc, `/images/${dir}/${kebab(heroTitle)}${ext(heroSrc)}`);
    const social = between(c, '  socialServices: {', '\n  advantages:');
    const socialTitle = social.match(/title:\s*['`]([^'`]+)['`]/)?.[1];
    const base = socialTitle ? kebab(socialTitle) : slug;
    const left = social.match(/decorativeLeft:\s*\{[\s\S]*?src:\s*['`]([^'`]+)['`]/)?.[1];
    const right = social.match(/decorativeRight:\s*\{[\s\S]*?src:\s*['`]([^'`]+)['`]/)?.[1];
    if (left) addGlobal(left, `/images/${dir}/${base}-decorative-left${ext(left)}`);
    if (right) addGlobal(right, `/images/${dir}/${base}-decorative-right${ext(right)}`);
  }

  // Subservice shared icons — canonical names from buy-facebook-followers only
  if (slug === 'buy-facebook-followers') {
    const wc = between(c, '  whyChoose: {', '\n  whoShouldBuy:');
    for (const { title, icon } of pairsTitleIcon(wc)) {
      if (icon.includes('/images/facebook-page-followers/') && !title.toLowerCase().includes('why choose')) {
        addGlobal(icon, `/images/subservice/shared/${kebab(title)}-icon${ext(icon)}`);
      }
    }
    const rel = between(c, '  relatedServices: {', '\n  cta:');
    for (const { title, icon } of pairsTitleIcon(rel)) {
      if (icon.includes('/images/facebook-page-followers/') && !title.toLowerCase().includes('related services')) {
        addGlobal(icon, `/images/subservice/shared/${kebab(title)}-icon${ext(icon)}`);
      }
    }
    const wp = between(c, '  workingProcess: {', '\n  thingsToKnow:');
    const wpUnderline = wp.match(/underlineSrc:\s*['`]([^'`]+)['`]/)?.[1];
    const wpBadge = wp.match(/badge:\s*['`]([^'`]+)['`]/)?.[1];
    if (wpUnderline && wpBadge) addGlobal(wpUnderline, `/images/working-process/${kebab(wpBadge)}-section-underline${ext(wpUnderline)}`);
  }

  if (slug.startsWith('buy-')) {
    const wp = between(c, '  workingProcess: {', '\n  thingsToKnow:') || between(c, '  workingProcess: {', '\n  serviceLeadingSlugs:') || between(c, '  workingProcess: {', '\n  testimonials:');
    const wpTitle = wp.match(/title:\s*['`]([^'`]+)['`]/)?.[1];
    const wpUnderline = wp.match(/underlineSrc:\s*['`]([^'`]+)['`]/)?.[1];
    if (slug === 'buy-facebook-followers' && wpTitle && wpUnderline) {
      addGlobal(wpUnderline, `/images/working-process/${kebab(wpTitle)}-section-underline${ext(wpUnderline)}`);
    }
  }
}

const manual = [
  ['/images/hero/cheapest-smm-panel-in-bangladesh-with-fast-&-secure-services.png', '/images/home/cheapest-smm-panel-in-bangladesh-with-fast-and-secure-services.png'],
  ['/images/icons/site-button-arroww-icon.png', '/images/icons/site-button-arrow-icon.png'],
  ['/images/working-process/working-process-outer-circlesvg-decoration.svg', '/images/working-process/working-process-outer-circle-decoration.svg'],
  ['/images/service-smm-panel/spotify-smm-panel/spotify-effectsvg.svg', '/images/service-smm-panel/spotify-smm-panel/spotify-effect.svg'],
  ['/images/backgrounds/section-bgg-12-dark.svg', '/images/backgrounds/section-bg-12-dark.svg'],
  ['/images/backgrounds/card-bgg-10.webp', '/images/backgrounds/card-bg-10.webp'],
];

function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name === 'page-data.ts') parsePageData(p);
  }
}

function walkCode(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next', 'scripts'].includes(e.name)) continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walkCode(p, out);
    else if (CODE_EXT.has(path.extname(e.name))) out.push(p);
  }
  return out;
}

walk(path.join(ROOT, 'app'));
for (const [o, n] of manual) addGlobal(o, n);

// Pass 2: remaining shared subservice assets from title/icon pairs
function parseContentFile(fp) {
  const c = fs.readFileSync(fp, 'utf8');
  for (const { title, icon } of pairsTitleIcon(c)) {
    if (!icon.includes('/images/facebook-page-followers/')) continue;
    if (title.length > 80) continue;
    addGlobal(icon, `/images/subservice/shared/${kebab(title)}-icon${ext(icon)}`);
  }
  const illRe = /title:\s*['`]([^'`]+)['`][\s\S]{0,400}?illustration:\s*['`]([^'`]+)['`]/g;
  let im;
  while ((im = illRe.exec(c))) {
    const src = im[2];
    if (!src.includes('/images/facebook-page-followers/')) continue;
    addGlobal(src, `/images/subservice/shared/${kebab(im[1])}${ext(src)}`);
  }
}

for (const fp of walkCode(ROOT)) {
  if (fp.includes(`${path.sep}scripts${path.sep}`)) continue;
  parseContentFile(fp);
}

// Pass 3: order form UI chrome
const orderFormRenames = [
  ['/images/facebook-page-followers/facebook-page-followers-quantity-slider-thumb-decoration.svg', '/images/subservice/shared/order-form-quantity-slider-thumb-decoration.svg'],
  ['/images/facebook-page-followers/facebook-page-followers-quantity-slider-tooltip-decoration.svg', '/images/subservice/shared/order-form-quantity-slider-tooltip-decoration.svg'],
  ['/images/facebook-page-followers/facebook-page-followers-section-underline.svg', '/images/subservice/shared/order-form-section-underline.svg'],
];
for (const [o, n] of orderFormRenames) addGlobal(o, n);

const dry = process.argv.includes('--dry-run');
console.log(`Global renames: ${renames.size}, per-file hero updates: ${perFileUpdates.length}`);
if (dry) {
  for (const [o, n] of [...renames.entries()].sort((a, b) => a[0].localeCompare(b[0]))) {
    console.log(`[global] ${o} → ${n}`);
  }
  for (const u of perFileUpdates.slice(0, 5)) {
    console.log(`[per-file] ${path.basename(path.dirname(u.file))}: ${u.oldPath} → ${u.newPath}`);
  }
  if (perFileUpdates.length > 5) console.log(`... and ${perFileUpdates.length - 5} more per-file hero updates`);
  process.exit(0);
}

function copyImage(webPath) {
  const disk = path.join(PUBLIC, webPath.slice(1));
  if (!fs.existsSync(disk)) {
    console.warn('MISSING', disk);
    return false;
  }
  return true;
}

for (const [o, n] of renames) {
  const od = path.join(PUBLIC, o.slice(1));
  const nd = path.join(PUBLIC, n.slice(1));
  if (!fs.existsSync(od)) {
    console.warn('MISSING', od);
    continue;
  }
  fs.mkdirSync(path.dirname(nd), { recursive: true });
  if (!fs.existsSync(nd)) fs.copyFileSync(od, nd);
}

for (const u of perFileUpdates) {
  const od = path.join(PUBLIC, u.oldPath.slice(1));
  const nd = path.join(PUBLIC, u.newPath.slice(1));
  if (!fs.existsSync(od)) {
    console.warn('MISSING hero', od);
    continue;
  }
  fs.mkdirSync(path.dirname(nd), { recursive: true });
  if (!fs.existsSync(nd)) fs.copyFileSync(od, nd);
  let content = fs.readFileSync(u.file, 'utf8');
  if (content.includes(u.oldPath)) {
    content = content.replace(u.oldPath, u.newPath);
    fs.writeFileSync(u.file, content);
  }
}

const sorted = [...renames.entries()].sort((a, b) => b[0].length - a[0].length);
let n = 0;
for (const f of walkCode(ROOT)) {
  let t = fs.readFileSync(f, 'utf8');
  let ch = false;
  for (const [o, nn] of sorted) {
    if (t.includes(o)) {
      t = t.split(o).join(nn);
      ch = true;
    }
  }
  if (ch) {
    fs.writeFileSync(f, t);
    n++;
  }
}
console.log(`Updated ${n} code files`);
