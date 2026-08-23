const TAILWIND_UTILITIES_MARKER = '/* ! tailwindcss';

/**
 * Prefix every rule selector so editor utilities beat Tailwind v4 globals
 * and never touch site-wide `body` / `:root` (DaisyUI block is stripped).
 */
function prefixSelectors(css: string, scopeClass: string): string {
  const scope = `.${scopeClass}`;
  let result = '';
  let i = 0;

  while (i < css.length) {
    if (css[i] === '@') {
      const atStart = i;
      let j = i + 1;
      while (j < css.length && css[j] !== '{') j++;
      if (j >= css.length) break;
      const prelude = css.slice(atStart, j + 1);
      let depth = 1;
      const innerStart = j + 1;
      j = innerStart;
      while (j < css.length && depth > 0) {
        if (css[j] === '{') depth++;
        else if (css[j] === '}') depth--;
        j++;
      }
      const inner = css.slice(innerStart, j - 1);
      result += prelude + prefixSelectors(inner, scopeClass) + '}';
      i = j;
      continue;
    }

    const brace = css.indexOf('{', i);
    if (brace === -1) {
      result += css.slice(i);
      break;
    }

    const selectors = css.slice(i, brace).trim();
    let depth = 1;
    let j = brace + 1;
    while (j < css.length && depth > 0) {
      if (css[j] === '{') depth++;
      else if (css[j] === '}') depth--;
      j++;
    }
    const body = css.slice(brace + 1, j - 1);

    const scopedSelectors = selectors
      .split(',')
      .map((sel) => {
        const s = sel.trim();
        if (!s) return s;
        if (s === 'html' || s === 'body' || s === ':root') return scope;
        if (s.startsWith('*') || s.startsWith('::')) return `${scope} ${s}`;
        return `${scope} ${s}`;
      })
      .join(',');

    result += `${scopedSelectors}{${body}}`;
    i = j;
  }

  return result;
}

/**
 * Tailwind v4 registers @property --tw-gradient-* as <color> only.
 * Editor v3 utilities use "#hex var(--tw-gradient-from-position)" which the
 * browser drops, leaving transparent gradients. Strip position tokens.
 */
function fixGradientCustomProperties(css: string): string {
  return css
    .replace(
      /(--tw-gradient-from:[^;{}]+)\s+var\(--tw-gradient-from-position\)/g,
      '$1',
    )
    .replace(
      /(--tw-gradient-to:[^;{}]+)\s+var\(--tw-gradient-to-position\)/g,
      '$1',
    );
}

/**
 * Editor saves DaisyUI + Tailwind v3 utilities in one blob.
 * Only the Tailwind utilities section is injected, scoped to the canvas wrapper.
 */
export function prepareEditorCss(
  raw: string,
  scopeClass = 'blog-canvas-content',
): string {
  const trimmed = raw?.trim();
  if (!trimmed) return '';

  const markerIdx = trimmed.indexOf(TAILWIND_UTILITIES_MARKER);
  const utilities = markerIdx >= 0 ? trimmed.slice(markerIdx) : trimmed;

  const scoped = prefixSelectors(utilities, scopeClass);
  const fixed = fixGradientCustomProperties(scoped);

  return `${fixed}\n.${scopeClass} .bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))!important}`;
}

export function prepareCompiledEditorCss(
  raw: string,
  scopeClass = 'blog-canvas-content',
): string {
  const trimmed = raw?.trim();
  if (!trimmed) return '';

  const normalized = trimmed
    .replace(/\bbody\s*\{/g, `.${scopeClass} {`)
    .replace(/^\*\s*\{/m, `.${scopeClass} * {`);

  return prefixSelectors(normalized, scopeClass);
}
