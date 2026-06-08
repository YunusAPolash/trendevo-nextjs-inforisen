---
name: build
description: >-
  Figma-to-code workflow for this project. Use when the user invokes
  `/build <figma-link>` or asks to build a page, section, card, or component
  from a Figma design URL. Full pages are built one section at a time:
  list sections first, build section 1 completely, pause for user review,
  then proceed section by section.
disable-model-invocation: false
---

# Build (Figma → Code)

Convert a Figma frame into production React/Next.js code for this repository.

**Invocation:** `/build <figma-link>`

The link may point to any frame: a full page, section, card, component, or part of a component. Always start by asking the scoping questions below before writing code.

**Important:** Full-page builds are done **one section at a time**. Never implement an entire page in a single pass — that leads to rushed, incomplete output. List all sections first, build section 1 completely, pause for review, then proceed section by section.

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

## Page builds — section-by-section workflow

**Apply this workflow whenever Question 1 answer is `page`.** Do not skip or compress it.

### Phase A — Discover sections (no code yet)

1. Parse the Figma URL and call **`get_design_context`** on the **full page frame**.
2. From the screenshot, metadata, and layout hierarchy, **list every major section** on the page in top-to-bottom order.
3. Present the numbered list to the user before writing any code. Example:

   ```
   Sections on this page:
   1. Hero
   2. Logo strip
   3. Features grid
   4. Testimonials
   5. CTA
   6. FAQ
   ```

4. Ask the user to confirm the list or correct names/order. Wait for confirmation.

### Phase B — Build one section at a time

Work through the list **sequentially**. For each section:

1. **Scope to that section only** — fetch or re-read design context for just that section's node if a child `node-id` is available; otherwise crop mentally to that section from the page frame.
2. **Build it completely** — follow Steps 3–9 below for this single section: wrappers, assets, file creation, lint. Do not stub or placeholder future sections.
3. **Wire into the page** — create or update `app/{route}/page.tsx` to import the section(s) built so far, in order. Leave unbuilt sections out until their turn.
4. **Stop and report** — tell the user which section is done, which file(s) were created/updated, and what section comes next.
5. **Wait for review** — do not start the next section until the user approves or requests fixes.
6. **Apply fixes** — if the user asks for changes, fix that section until they are satisfied.
7. **Advance** — only after the current section is approved, move to the next section in the list and repeat from step 1.

### Phase C — Page complete

When every section is built and approved:

- Confirm `page.tsx` imports all sections in design order.
- Run a final lint pass on all touched files.

### Rules for page builds

- **DO** build one section fully per iteration (layout, typography, spacing, assets, wrappers).
- **DO** pause after each section for user review.
- **DO** keep a running section checklist and mark items complete as you go.
- **DO NOT** create skeleton/placeholder files for sections you have not built yet.
- **DO NOT** attempt to implement multiple sections in one response unless the user explicitly asks to batch them.
- **DO NOT** move to the next section while the current one has open fix requests.

For `section`, `card`, or `component` frame types, skip this workflow and build the single frame in one pass (Steps 1–9 as usual).

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

1. Call Figma MCP **`get_design_context`** with `fileKey`, `nodeId`, `clientLanguages: "typescript"`, `clientFrameworks: "react,nextjs"`.
2. Review the returned screenshot, reference code, metadata, and asset download URLs.
3. Call **`get_code_connect_map`** when available — prefer mapped codebase components over generated markup.
4. Identify the layout hierarchy: sections, cards, text, buttons, icons, content images, and decorative backgrounds.

**For `page` frames:** use this step in Phase A to produce the section list. During Phase B, repeat this step scoped to **only the current section** before coding it.

Treat Figma output as **reference only**. Adapt to this project's stack and components.

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

Create an App Router route and colocate section components. **Build incrementally** — one section file per iteration, not all at once:

```
app/{route}/
├── page.tsx                 # composes section components as they are built
└── _components/
    ├── hero-section.tsx     # built in iteration 1
    ├── features-section.tsx # built in iteration 2
    └── ...                  # one file per major section, added one at a time
```

- `{route}` = kebab-case (e.g. `pricing`, `about-us`). Home uses `app/page.tsx` with `app/_components/` if sections are split out.
- Each section file exports one default component wrapped in `PrimarySection` with a `.container` inside.
- `page.tsx` imports and stacks only the sections built so far; add the next import after each section is approved.

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

## Step 8 — Implementation checklist

### Page builds — track at two levels

**Page-level (once, in Phase A):**

```
Page build progress:
- [ ] Scoping questions answered
- [ ] Full-page Figma design fetched
- [ ] Section list identified and confirmed with user
```

**Per-section (repeat in Phase B for each section):**

```
Section: {name} ({n} of {total})
- [ ] Design fetched/analyzed for this section only
- [ ] Section bg key chosen (no Figma backgrounds downloaded)
- [ ] Card bg keys chosen (no Figma backgrounds downloaded)
- [ ] Icons/content images downloaded with SEO names
- [ ] Section file created at correct path
- [ ] PrimarySection / PrimaryCard used
- [ ] `.container` wrapper inside `PrimarySection`
- [ ] Wired into page.tsx
- [ ] Lint clean
- [ ] User reviewed and approved ← required before next section
```

### Single frame builds (`section`, `card`, `component`)

```
Build progress:
- [ ] Scoping questions answered
- [ ] Figma design fetched (get_design_context)
- [ ] Layout analyzed; sections/cards identified
- [ ] Section bg keys chosen (no Figma backgrounds downloaded)
- [ ] Card bg keys chosen (no Figma backgrounds downloaded)
- [ ] Icons/content images downloaded with SEO names
- [ ] Files created at correct paths
- [ ] PrimarySection / PrimaryCard used for all sections/cards
- [ ] Every section has a `.container` wrapper inside `PrimarySection`
- [ ] Target page updated (if not a new page)
- [ ] Lint clean
```

### Code quality

- Match spacing, typography, and colors from Figma using Tailwind utilities and project CSS variables (`globals.css`).
- Prefer semantic HTML (`section` content inside `PrimarySection`, headings in order).
- Keep components small; one section per file for pages.
- Use `@/` path alias for imports.

---

## Step 9 — Verify

1. Run `npm run lint` on touched files.
2. Confirm no new files under `public/images/backgrounds/`.
3. Confirm every section uses `PrimarySection` and every card uses `PrimaryCard`.
4. Confirm every `PrimarySection` has a `.container` div wrapping its content.
5. Confirm downloaded assets are named descriptively and referenced correctly.

---

## Example invocations

### Full page (section-by-section)

```
/build https://www.figma.com/design/AbCdEf/Pricing-Page?node-id=1-2
```

1. Ask: frame type → `page`
2. Fetch design for node `1:2`
3. List sections: Hero, Logo strip, Features, Pricing table, FAQ, CTA
4. User confirms the list
5. **Iteration 1:** Build Hero only → `app/pricing/_components/hero-section.tsx`, wire into `page.tsx`, stop for review
6. User approves (or requests fixes → fix → approve)
7. **Iteration 2:** Build Logo strip → `logo-strip-section.tsx`, update `page.tsx`, stop for review
8. Repeat until all sections are done

### Single section

```
/build https://www.figma.com/design/AbCdEf/My-Page?node-id=12-34
```

1. Ask: frame type → `section`
2. Ask: target page → `pricing`
3. Fetch design for node `12:34`
4. Create `app/pricing/_components/hero-section.tsx` with `PrimarySection bg="section-2"` and a `.container` inside
5. Download icons to `public/images/icons/pricing-*.svg`
6. Import section in `app/pricing/page.tsx`

---

## Anti-patterns (do not do)

- Building an entire page in one pass when frame type is `page`
- Creating placeholder/skeleton section files for sections not yet built
- Starting the next section before the current one is user-approved
- Using `<section>` or `<div>` with custom background instead of `PrimarySection`
- Placing section content directly on `PrimarySection` without a `.container` wrapper
- Using `mx-auto max-w-[1440px]` instead of the `.container` class
- Using a raw card container instead of `PrimaryCard`
- Exporting Figma background images into the repo
- Applying `bg-gradient-*` or arbitrary `bg-[url(...)]` on section/card wrappers outside the allowed keys
- Skipping scoping questions and guessing file paths
- Leaving Figma asset URLs in source instead of downloading content images locally
