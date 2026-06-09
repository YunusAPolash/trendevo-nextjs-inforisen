---
name: globalize
description: >-
  Refactors a page-local component into a shared, props-driven component under
  components/, then updates every usage site. Use when the user invokes
  /globalize, says "globalize" a component, or asks to extract, share, or make
  a component dynamic and reusable across pages.
disable-model-invocation: false
---

# Globalize Component

Extract a hardcoded page-local component, make it dynamic via props, move it to `components/`, and refactor all call sites.

**Invocation:** `/globalize <component>` — the user provides a file path, `@` reference, or component name.

---

## Step 1 — Identify the source component

1. Read the provided component file (usually under `app/**/_components/`).
2. Grep the codebase for:
   - Direct imports of that file
   - Duplicate implementations of the same UI (similar filenames, copy-pasted markup)
   - The component's default export name
3. List every file that renders this component or contains a near-duplicate.

**Announce before coding:**

```
Globalizing: {ComponentName}
Source: {source-path}
Usages found: {n} files
Target: components/{category}/{component-name}.tsx
```

---

## Step 2 — Diff usages and extract props

Compare every usage (or duplicate) and catalog what varies vs what is fixed.

| Varies per page | → prop |
|-----------------|--------|
| Headings, labels, copy | `string` or `ReactNode` props |
| Lists (FAQ items, features, stats) | typed array prop + exported item type |
| Images / icons | `src`, `alt`, optional `width`/`height` |
| Links / CTAs | `href`, `label`, or `buttonsOutlet?: ReactNode` |
| Section/card background | `bg?: SectionBgKey` / `bg?: CardBgKey` |
| Layout tweaks | `className?` |

**Rules:**

- Export a named props type (e.g. `FaqSectionProps`, `CountryHeroProps`) from the globalized file.
- Export item/sub-types consumers need for data files (e.g. `FaqItem`).
- Use sensible defaults only for values that are truly shared across all current usages.
- Keep page-specific **data** out of the component — colocate in `{page}-content.ts` or inline in the page file.
- Do **not** over-abstract: only prop-ify what actually differs today.

---

## Step 3 — Choose target path

| Component kind | Path |
|----------------|------|
| Full-width section | `components/sections/{name}-section.tsx` |
| Card / tile | `components/cards/{name}-card.tsx` |
| Hero (country, service, etc.) | `components/{domain}/{name}.tsx` |
| Small UI primitive | `components/ui/{name}.tsx` |
| Feature-specific block | `components/features/{feature}/{name}.tsx` |
| Layout chrome | `components/layout/{name}.tsx` |

Use kebab-case filenames. One default export per file.

---

## Step 4 — Build the globalized component

1. Create the file at the target path.
2. Preserve existing markup, styles, and behavior — only replace hardcoded values with props.
3. Keep mandatory project wrappers:
   - Sections → `PrimarySection` + inner `.container` (unless the source intentionally uses a hero layout without `.container`)
   - Cards → `PrimaryCard`
   - Standard headers → `SectionHeading` when applicable
4. Add `'use client'` only if the source used client hooks/state.
5. Import shared types from their source of truth (`SectionBgKey` from `primary-section`, etc.).

**Reference implementations in this repo:**

- `components/sections/faq-section.tsx` — array data, optional CTA props, `SectionBgKey`
- `components/sections/cta-section.tsx` — `ReactNode` slots for title/buttons
- `components/country/country-hero.tsx` — hero with illustration props

---

## Step 5 — Extract page data (when needed)

When multiple pages share the same component with different content:

1. Keep **content constants** near the page or in a dedicated data file:

```
app/(home)/_components/home-faq-content.tsx   ← exports homeFaqItems, homeFaqHeading
app/(country)/smm-panel-uk/page.tsx         ← inline props for one-off pages
```

2. Data files import **types only** from the globalized component:

```tsx
import type { FaqItem } from '@/components/sections/faq-section';
```

3. Pages import the component + their data, then pass props:

```tsx
<FaqSection
  label={homeFaqHeading.label}
  title={homeFaqHeading.title}
  subtitle={homeFaqHeading.subtitle}
  items={homeFaqItems}
/>
```

---

## Step 6 — Refactor all usages

For each file found in Step 1:

1. Replace the old import with `@/components/...`.
2. Pass the props that preserve the page's current rendered output exactly.
3. Remove inline duplicates — do not leave dead copies in `_components/`.
4. Delete the original source file if nothing else imports it.
5. If a thin page wrapper remains necessary, it should only compose props — no duplicated markup.

**Import alias:** always `@/components/...`, never relative paths across app boundaries.

---

## Step 7 — Verify

```
Globalize progress:
- [ ] Props type exported
- [ ] Component at components/{category}/{name}.tsx
- [ ] All usages updated (grep confirms zero old imports)
- [ ] Original duplicate file(s) deleted
- [ ] Page-specific data extracted where shared
- [ ] Visual output unchanged per page
- [ ] Lint clean on touched files
```

Run `npm run lint` on all touched files.

Grep checks:

```bash
# No stale imports to old path
rg "{old-filename}" --glob "*.{tsx,ts}"

# All pages import from components/
rg "{ComponentName}" --glob "*.{tsx,ts}"
```

---

## Example

**Before** — `app/(home)/_components/faq-section.tsx` with hardcoded FAQs and copy.

**After:**

| File | Role |
|------|------|
| `components/sections/faq-section.tsx` | Dynamic `FaqSection` with `items`, `label`, `title`, … |
| `app/(home)/_components/home-faq-content.tsx` | Home FAQ data |
| `app/(home)/page.tsx` | `<FaqSection {...homeFaqHeading} items={homeFaqItems} />` |
| `app/about-us/page.tsx` | Same component, same or different data |
| `app/(home)/_components/faq-section.tsx` | **Deleted** |

---

## Anti-patterns

- Leaving hardcoded page copy inside the shared component
- Creating props for values that never differ across usages
- Skipping a usage site (always grep the whole repo)
- Moving to `components/` without updating imports
- Replacing `PrimarySection` / `PrimaryCard` / `SectionHeading` with custom markup
- Keeping both the old `_components/` file and the new global file
- Putting shared components back under `app/**/_components/`
