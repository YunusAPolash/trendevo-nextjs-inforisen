---
name: build
description: >-
  Figma-to-code workflow for this project. Use when the user invokes
  `/build <figma-link>` or asks to build a page, section, card, or component
  from a Figma design URL. Builds one section at a time and requires a
  pixel-perfect Figma match before moving to the next section.
disable-model-invocation: true
---

# Build (Figma → Code)

Convert a Figma frame into production React/Next.js code for this repository.

**Invocation:** `/build <figma-link>`

The link may point to any frame: a full page, section, card, component, or part of a component. Always start by asking the scoping questions below before writing code.

## Core rule — one section at a time, match Figma perfectly

**Never build an entire page in one pass.** Work section by section:

1. Identify all sections in the page (from Figma metadata).
2. Build **only the first section** (or the section the user names).
3. Match that section **as closely as possible** to the Figma screenshot — spacing, typography, colors, layout, assets, and component states.
4. **Stop** after that section. Tell the user which section is done and which is next.
5. Wait for the user to review. They will say `/build` again (or ask to fix/match) for the same section or approve and move on.
6. If the section is not a perfect match, refine it against Figma until it is — **do not start the next section** until the current one is approved.
7. Repeat for each section until the full page is complete.

**Figma fidelity is mandatory for every section.** A section is not done when code compiles — it is done when it visually matches the Figma design for that frame.

---

## Step 0 — Ask scoping questions

Use **AskQuestion** (or ask conversationally if unavailable).

### Question 1 — What frame is this?

**Prompt:** What frame is this?

**Options:**
- `page`
- `section`
- `card`
- `component` (any component / part of a component)

### Question 2 — Target page (only if answer ≠ page)

**Prompt:** In which page should this be added?

**Options:**
- `let-me-type` — user provides the route or page name (e.g. `home`, `/pricing`, `about`)

Record answers before fetching Figma or creating files.

---

## Step 1 — Parse the Figma URL

Extract `fileKey` and `nodeId` from the link:

| URL pattern | fileKey | nodeId |
|-------------|---------|--------|
| `figma.com/design/:fileKey/:fileName?node-id=1-2` | `:fileKey` | `1:2` (convert `-` to `:`) |
| `figma.com/design/:fileKey/branch/:branchKey/:fileName` | `:branchKey` | from `node-id` param |
| `/make/` URLs | make file key | `0:1` for `get_design_context` only |

If the URL has **no `node-id`**, ask the user for a node-specific link. Do not guess a node ID.

---

## Step 2 — Fetch and analyze the design

### Full page link (`page` frame type)

1. Call **`get_metadata`** or **`get_design_context`** on the page node to list child section frames and their `nodeId`s.
2. Present the section list to the user (name + node ID + order).
3. Fetch design context for **only the current section's `nodeId`** — not the whole page at once.
4. If the page is too large for one `get_design_context` call, always split by section sublayer.

### Single section / card / component link

1. Call Figma MCP **`get_design_context`** with `fileKey`, `nodeId`, `clientLanguages: "typescript"`, `clientFrameworks: "react,nextjs"`.
2. Call **`get_screenshot`** on the same node for visual comparison while building.

### For every build (all frame types)

1. Review the returned screenshot, reference code, metadata, and asset download URLs.
2. Call **`get_code_connect_map`** when available — prefer mapped codebase components over generated markup.
3. Identify the layout hierarchy: sections, cards, text, buttons, icons, content images, and decorative backgrounds.
4. Note exact values from Figma: font sizes, font weights, line heights, gaps, padding, border radius, gradients, and image positions.

Treat Figma output as **reference only**. Adapt to this project's stack and components — but the **visual result must match Figma**.

---

## Step 3 — Read project rules before coding

- Read `AGENTS.md` and relevant guides in `node_modules/next/dist/docs/` before writing Next.js code.
- Stack: **Next.js App Router**, **React 19**, **Tailwind CSS v4**, **shadcn/ui**, `@/lib/utils` `cn()`.
- Reuse existing UI from `components/ui/` (e.g. `Button`) when they match the design.

---

## Step 4 — Mandatory wrappers (never substitute)

### Sections

**Always** wrap section content in `PrimarySection`, then place all layout/content inside a `.container` div as the **direct child** (or wrapping all children):

```tsx
import PrimarySection from '@/components/sections/primary-section';

<PrimarySection bg="section-N" className="...">
  <div className="container">
    {/* all section content goes here */}
  </div>
</PrimarySection>
```

**Container rules (strict):**

- **DO** use the `.container` class on an inner wrapper inside every `PrimarySection`.
- **DO** put headings, grids, cards, images, and CTAs inside `.container` — not directly on `PrimarySection`.
- **DO** use `.container` in the site header and footer too.
- **DO NOT** replace `.container` with ad-hoc `mx-auto max-w-[1440px]` classes.
- **DO NOT** skip `.container` even when a section has a full-bleed background — the background stays on `PrimarySection`; content stays in `.container`.

The `.container` class is defined in `app/globals.css`:

```
mx-auto w-full max-w-[1440px] px-6 lg:px-0
```

Matches the Figma 1440px content width with responsive side padding.

Available `bg` keys (read `components/sections/primary-section.tsx` for the current list):

| Key | Asset |
|-----|-------|
| `section-1` | `/images/backgrounds/section-bg-1.svg` |
| `section-2` | `/images/backgrounds/section-bg-2.svg` |
| `section-3` | `/images/backgrounds/section-bg-3.svg` |
| `section-4` | `/images/backgrounds/section-bg-4.svg` |
| `section-5` | `/images/backgrounds/section-bg-5.svg` |
| `section-6` | `/images/backgrounds/section-bg-6.svg` |
| `section-7` | `/images/backgrounds/section-bg-7.svg` |
| `section-8` | `/images/backgrounds/section-bg-8.svg` |

### Cards

**Always** wrap card content in:

```tsx
import PrimaryCard from '@/components/cards/primary-card';

<PrimaryCard bg="card-N" className="...">
  {/* card content */}
</PrimaryCard>
```

Available `bg` keys (read `components/cards/primary-card.tsx` for the current list):

| Key | Asset |
|-----|-------|
| `card-1` | `/images/backgrounds/card-bg-1.svg` |
| `card-2` | `/images/backgrounds/card-bg-2.svg` |

### Background rules (strict)

When adding a section or card:

- **DO** pick the closest matching key from the tables above using the Figma screenshot (color, tone, pattern, light/dark feel).
- **DO NOT** download section or card backgrounds from Figma.
- **DO NOT** add custom gradients, inline `backgroundImage`, or new files under `public/images/backgrounds/`.
- **DO NOT** use any wrapper other than `PrimarySection` / `PrimaryCard` for sections and cards.

---

## Step 5 — Assets: download vs skip

### Never download

- Section backgrounds
- Card backgrounds
- Full-frame background fills that belong on a section/card wrapper

### Download and save

Download from Figma asset URLs (via shell `curl` or equivalent) for:

- Icons
- Hero / feature photos
- Product shots
- User avatars (e.g. review sections)
- Logos and illustrative content images

**Save locations:**

| Asset type | Directory |
|------------|-----------|
| Icons | `public/images/icons/` |
| Photos, avatars, illustrations | `public/images/{context}/` (e.g. `public/images/hero/`, `public/images/reviews/`) |

**SEO-friendly naming:** derive filenames from nearby text or semantic role in the design.

```
{section-or-feature}-{role}-{short-description}.{ext}
```

Examples:

- `pricing-check-icon.svg`
- `hero-platform-dashboard.webp`
- `reviews-sarah-mitchell-avatar.webp`
- `features-ai-automation-icon.svg`

Use kebab-case, lowercase, no spaces. Prefer `.svg` for icons, `.webp` or `.png` for photos.

Reference assets with Next.js `Image` or static paths from `/images/...`. Add meaningful `alt` text from the design copy.

---

## Step 6 — Custom components

If the design includes UI that cannot be built from existing primitives:

- Create a focused custom component (e.g. stat block, testimonial row, pricing feature list).
- Place it at the correct path for the frame type (see Step 7).
- **Never** replace `PrimarySection` or `PrimaryCard` with a custom section/card wrapper.

---

## Step 7 — File placement by frame type

### `page`

Create an App Router route and colocate section components:

```
app/{route}/
├── page.tsx                 # composes all section components
└── _components/
    ├── hero-section.tsx
    ├── features-section.tsx
    └── ...                  # one file per major section from the design
```

- `{route}` = kebab-case (e.g. `pricing`, `about-us`). Home uses `app/page.tsx` with `app/_components/` if sections are split out.
- Each section file exports one default component wrapped in `PrimarySection` with a `.container` inside.
- `page.tsx` imports and stacks sections in design order.
- **Build and wire one section file at a time.** Add the new import to `page.tsx` only after the current section matches Figma.
- Keep a running section tracker and report progress after each section:

```
Page build progress:
- [x] Hero section — matched ✓
- [ ] Stats section — next
- [ ] Services section
- [ ] ...
```

### `section`

Add to the target page from Question 2:

```
app/{target-page}/_components/{section-name}-section.tsx
```

Wire the new section into that page's `page.tsx`.

### `card`

If page-specific:

```
app/{target-page}/_components/{card-name}-card.tsx
```

If shared across pages:

```
components/cards/{card-name}-card.tsx
```

Content must use `PrimaryCard` with a valid `bg` key.

### `component` (or part of a component)

Place relative to scope:

| Scope | Path |
|-------|------|
| Used only on one page | `app/{target-page}/_components/{component-name}.tsx` |
| Shared app-wide | `components/{category}/{component-name}.tsx` |

---

## Step 8 — Section build loop (mandatory)

For each section, repeat this loop until the user approves:

```
Current section: {section-name}
Section build progress:
- [ ] Figma design fetched for this section only (get_design_context + get_screenshot)
- [ ] Layout analyzed against Figma screenshot
- [ ] Section bg key chosen (no Figma backgrounds downloaded)
- [ ] Card bg keys chosen (no Figma backgrounds downloaded)
- [ ] Icons/content images downloaded with SEO names
- [ ] Section file created at correct path
- [ ] PrimarySection + .container used
- [ ] PrimaryCard used for all cards in section
- [ ] Spacing, typography, colors match Figma
- [ ] Asset sizes and positions match Figma
- [ ] Responsive layout checked
- [ ] Lint clean on touched files
- [ ] Visually compared to Figma screenshot — match confirmed
- [ ] User approved — ready for next section
```

**After each section:**

1. Run `npm run lint` on touched files.
2. Compare the built section against the Figma `get_screenshot` output — fix any visual gaps.
3. Report: section name, what was built, what matches, and **which section is next**.
4. **Stop.** Do not begin the next section until the user runs `/build` again or explicitly approves.

**When the user says "match Figma" or `/build` on the same section:**

- Re-fetch `get_design_context` and `get_screenshot` for that section's node.
- Diff the implementation against the screenshot: spacing, font sizes, colors, image placement, button styles, card borders.
- Fix until the section is a pixel-accurate match, then stop again.

### Code quality

- Match spacing, typography, and colors from Figma using Tailwind utilities and project CSS variables (`globals.css`).
- Prefer semantic HTML (`section` content inside `PrimarySection`, headings in order).
- Keep components small; one section per file for pages.
- Use `@/` path alias for imports.
- Use exact copy text from Figma — do not paraphrase headings or labels.

---

## Step 9 — Verify (per section, before marking done)

1. Run `npm run lint` on touched files.
2. Confirm no new files under `public/images/backgrounds/`.
3. Confirm the section uses `PrimarySection` and every card uses `PrimaryCard`.
4. Confirm the section has a `.container` div wrapping its content.
5. Confirm downloaded assets are named descriptively and referenced correctly.
6. **Side-by-side check:** implementation matches the Figma screenshot for this section's `nodeId`.
7. **Do not proceed** to the next section until checks 1–6 pass and the user approves.

---

## Example invocations

### Single section

```
/build https://www.figma.com/design/AbCdEf/My-Page?node-id=12-34
```

1. Ask: frame type → `section`
2. Ask: target page → `pricing`
3. Fetch design + screenshot for node `12:34`
4. Create `app/pricing/_components/hero-section.tsx` with `PrimarySection bg="section-2"` and a `.container` inside
5. Download icons to `public/images/icons/pricing-*.svg`
6. Match spacing/typography/colors to Figma screenshot
7. Import section in `app/pricing/page.tsx`
8. Run lint, report done, **stop**

### Full page (section-by-section)

```
/build https://www.figma.com/design/AbCdEf/Home-Page?node-id=1-2
```

1. Ask: frame type → `page`
2. Fetch page metadata → list sections: Hero, Stats, Services, About, …
3. Build **Hero only** (first section `nodeId`)
4. Match hero to Figma perfectly → lint → report → **stop**
5. User reviews, says `/build` → build **Stats** section
6. User says "match Figma" on Stats → refine Stats until perfect → **stop**
7. Repeat until all sections are built and approved

---

## Anti-patterns (do not do)

- Building multiple sections in one pass when the frame type is `page`
- Moving to the next section before the current section matches Figma
- Marking a section done without comparing against the Figma screenshot
- Skipping `get_screenshot` visual comparison for the current section
- Approximating spacing, font sizes, or colors instead of matching Figma values
- Using `<section>` or `<div>` with custom background instead of `PrimarySection`
- Placing section content directly on `PrimarySection` without a `.container` wrapper
- Using `mx-auto max-w-[1440px]` instead of the `.container` class
- Using a raw card container instead of `PrimaryCard`
- Exporting Figma background images into the repo
- Applying `bg-gradient-*` or arbitrary background-url utilities on section/card wrappers outside the allowed keys
- Skipping scoping questions and guessing file paths
- Leaving Figma asset URLs in source instead of downloading content images locally
