/**
 * Strip near-black text colors and near-white backgrounds from Quill/HTML
 * so body copy inherits theme colors. Intentional accent colors are kept.
 */

function parseRgbChannels(value: string): [number, number, number] | null {
  const hex = value.match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);
  if (hex) {
    let h = hex[1];
    if (h.length === 3) {
      h = h
        .split('')
        .map((ch) => ch + ch)
        .join('');
    }
    return [
      Number.parseInt(h.slice(0, 2), 16),
      Number.parseInt(h.slice(2, 4), 16),
      Number.parseInt(h.slice(4, 6), 16),
    ];
  }

  const rgb = value.match(
    /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*,\s*[\d.]+)?\s*\)$/i,
  );
  if (rgb) {
    return [
      Number.parseInt(rgb[1], 10),
      Number.parseInt(rgb[2], 10),
      Number.parseInt(rgb[3], 10),
    ];
  }

  return null;
}

function relativeLuminance(color: string): number | null {
  const value = color.trim().toLowerCase();
  if (!value || value === 'inherit' || value === 'currentcolor' || value === 'transparent') {
    return null;
  }

  if (value === 'black' || value === 'windowtext') return 0;
  if (value === 'white' || value === 'window') return 1;

  const rgb = parseRgbChannels(value);
  if (!rgb) return null;

  const [r, g, b] = rgb.map((c) => c / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function isNearBlack(color: string): boolean {
  const luminance = relativeLuminance(color);
  if (luminance === null) return false;
  return luminance < 0.35;
}

function isNearWhite(color: string): boolean {
  const luminance = relativeLuminance(color);
  if (luminance === null) return false;
  return luminance > 0.85;
}

function firstBackgroundColor(value: string): string {
  const trimmed = value.trim();
  if (/^(url|linear-gradient|radial-gradient|conic-gradient)\(/i.test(trimmed)) {
    return '';
  }

  const colorMatch = trimmed.match(
    /^(transparent|currentcolor|inherit|black|white|windowtext|window|#[0-9a-f]{3,8}|rgba?\([^)]+\)|hsla?\([^)]+\))/i,
  );
  if (colorMatch) return colorMatch[1];

  return trimmed.split(/\s+/)[0] ?? '';
}

function sanitizeInlineStyle(style: string): string {
  return style
    .split(';')
    .map((decl) => decl.trim())
    .filter(Boolean)
    .filter((decl) => {
      const colon = decl.indexOf(':');
      if (colon === -1) return true;
      const prop = decl.slice(0, colon).trim().toLowerCase();
      const value = decl.slice(colon + 1).trim();

      if (prop === 'color') {
        return !isNearBlack(value);
      }

      if (prop === 'background-color' || prop === 'background') {
        const bgColor = firstBackgroundColor(value);
        if (!bgColor) return true;
        return !isNearWhite(bgColor);
      }

      return true;
    })
    .join('; ');
}

export function sanitizeBlogHtml(html: string): string {
  return html.replace(/\scontenteditable\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '');
}

/** Rewrite Quill HTML so default text/background follow the site theme. */
export function normalizeRichTextHtml(html: string): string {
  if (!html) return html;

  const withoutEditable = sanitizeBlogHtml(html);

  return withoutEditable.replace(
    /\sstyle=(["'])([\s\S]*?)\1/gi,
    (_full, quote: string, style: string) => {
      const next = sanitizeInlineStyle(style);
      if (!next) return '';
      return ` style=${quote}${next}${quote}`;
    },
  );
}
