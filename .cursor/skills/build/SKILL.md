---
name: build
description: >-
  Figma-to-code workflow for this project. Use when the user invokes
  `/build <figma-link>` or asks to build a page, section, card, or component
  from a Figma design URL. Automatically detects frame type (page, section,
  card, component) and target route from Figma metadata and project context —
  never asks the user. Full pages are built one section at a time: list sections
  first, build section 1 completely, pause for user review, then proceed section
  by section.
disable-model-invocation: false
---

# Build (Figma → Code)

Convert a Figma frame into production React/Next.js code for this repository.

**Invocation:** `/build <figma-link>`

The link may point to any frame: a full page, section, card, component, or part of a component. **Do not ask the user what frame type it is** — detect it automatically (Step 0) before writing code.

**Important:** Full-page builds are done **one section at a time**. Never implement an entire page in a single pass — that leads to rushed, incomplete output. List all sections first, build section 1 completely, pause for review, then proceed section by section.

---

## Step 0 — Auto-detect frame type and target page

**Never use AskQuestion or conversational prompts to ask what frame type this is or which page to use.** Infer both from Figma metadata, the screenshot, and project context. Proceed immediately once detection is done.

### 0a — Parse URL and fetch structure

1. Parse the Figma URL (Step 1) to get `fileKey` and `nodeId`.
2. Call **`get_metadata`** on the linked `nodeId` to read the node name, type, dimensions, parent chain, and direct children.
3. Call **`get_design_context`** (and rely on its screenshot) on the same `nodeId` for visual confirmation.

If metadata and screenshot disagree, trust the **screenshot + child layout** over the frame name alone.

### 0b — Classify frame type

Assign exactly one type: `page` | `section` | `card` | `component`. Use the **first matching rule** in this order:

| Type | Detect when |
|------|-------------|
| **`page`** | The node is a top-level page frame or a direct child of a Figma `PAGE` node; **or** it has **3+** major sibling frames stacked vertically at full content width (~1440px); **or** its height is very tall (typically ≥ 2000px) with multiple distinct content bands (hero, body sections, footer); **or** the frame/file name contains `page` (e.g. `Home Page`, `Services & Pricing Page`). |
| **`section`** | A single full-width vertical slice with one cohesive purpose (hero, features grid, FAQ, CTA, testimonials, etc.); typically one `PrimarySection`-sized band; **or** the name contains `section`, `hero`, `footer`, `cta`, `faq`, `testimonials`, `pricing`, `grid`, `banner`; **or** it is one of several same-width siblings under a page parent. |
| **`card`** | A bounded, repeatable tile (pricing plan, service panel, testimonial card, contact detail card); smaller than a section (typically &lt; 600px tall); **or** the name contains `card`; **or** it sits inside a grid/list of similar siblings. |
| **`component`** | Everything else: atomic UI (button group, badge, stat block, filter chip, avatar row, form field, part of a card). Small, not full-width, or a nested child with no section-level layout. |

**Tie-breakers:**

- Parent is a `page` frame and this node is one of many vertical children → `section` (not `page`).
- User linked a child `node-id` inside a larger page → classify **that node**, not the parent page.
- A frame named `Hero Section` linked directly → `section`, even if it is tall.

### 0c — Infer target page (when type ≠ `page`)

Resolve the App Router route **without asking the user**. Apply rules in order; stop at the first confident match:

1. **User message** — explicit route or page name in the `/build` message or surrounding chat (e.g. "for pricing", `/services/pricing`).
2. **IDE / chat context** — recently viewed or open files under `app/{route}/` (e.g. open `app/services/pricing/page.tsx` → target `services/pricing`).
3. **Figma parent chain** — walk metadata parents; the nearest ancestor named like a page (`Home`, `Services & Pricing`, `Contact Us`) maps to a route.
4. **Figma file / frame name** — kebab-case the page-level frame or file name and match an existing `app/**/page.tsx` route.
5. **Existing routes** — list `app/**/page.tsx` and pick the closest semantic match to the Figma page or section name.

**Route mapping examples:**

| Figma name | Route |
|------------|-------|
| `Home`, `Home Page` | `/` → `app/page.tsx`, sections in `app/_components/` |
| `Services & Pricing`, `Pricing` | `services/pricing` |
| `Contact Us` | `contact-us` |
| `Blog` | `blog` |
| `Privacy Policy` | `privacy-policy` (under `(legal)/`) |

If no match is found after all rules, derive a new kebab-case route from the Figma page name and create it (only for `page` builds). For `section` / `card` / `component`, prefer the parent page frame name over inventing a new route.

### 0d — Announce and record (no confirmation gate)

Before writing code, state your detection in one short block — **do not wait for approval**:

```
Detected: section → services/pricing (from parent frame "Services & Pricing Page", node "Heading Section")
```

Then continue to the workflow for that type. Only revisit detection if the user explicitly corrects you.

---

## Page builds — section-by-section workflow

**Apply this workflow whenever Step 0 detects type `page`.** Do not skip or compress it.

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

### Full page link (`page` frame type)

**For `page` frames:** use this step in Phase A to produce the section list. During Phase B, repeat this step scoped to **only the current section** before coding it.

Treat Figma output as **reference only**. Adapt to this project's stack and components.

---

## Step 3 — Read project rules before coding

- Read `AGENTS.md` and relevant guides in `node_modules/next/dist/docs/` before writing Next.js code.
- Stack: **Next.js App Router**, **React 19**, **Tailwind CSS v4**, **shadcn/ui**, `@/lib/utils` `cn()`.
- Reuse existing UI from `components/ui/` (e.g. `Button`, `SectionHeading`) when they match the design.

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

### Section headings

When a Figma section has the standard header pattern — gradient badge label, underline, main title, optional subtitle — **always** use `SectionHeading` from `components/ui/section-heading.tsx`. Do not hand-roll duplicate header markup.

```tsx
import SectionHeading from '@/components/ui/section-heading';

<SectionHeading
  badge="Why Choose Us"
  title={
    <>
      Why <span className="text-gradient">Choose Us</span>
    </>
  }
  subtitle="Boost your social media growth with our fast, reliable..."
/>
```

**SectionHeading rules (strict):**

- **DO** use `SectionHeading` for every section that has a badge + title header in Figma (Services, Why Choose Us, Pricing, FAQ, Working Process, etc.).
- **DO** pass gradient words inside `title` via `<span className="text-gradient">...</span>`.
- **DO** use exact badge, title, and subtitle copy from Figma.
- **DO** override typography only when Figma differs from defaults, using optional props:
  - `underlineSrc` / `underlineWidth` — when the underline asset or width differs per section
  - `titleClassName` — when title size/tracking differs (e.g. `48px` headings)
  - `subtitleClassName` — when subtitle color, weight, or max-width differs
- **DO NOT** rebuild the badge + underline + title block inline when `SectionHeading` applies.
- **DO NOT** skip `SectionHeading` on hero sections — hero uses its own layout and is exempt.

Default underline: `/images/our-services/ui/underline.svg` (131px). Download a section-specific underline to `public/images/{section}/underline.svg` when Figma shows a different width.

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

**SEO-friendly naming:** name every downloaded image after its **visible title or label** in Figma — not the Figma layer name or export hash.

**Priority order:**

1. **Card / tile icons** — use the card title in kebab-case (e.g. card titled `Facebook Page Follower` → `facebook-page-follower.png`).
2. **Section / feature images** — use the section or feature name (e.g. `decorative-facebook-left.png`).
3. **Everything else** — use the nearest heading, badge, or semantic role in the design.

```
{title-or-label-in-kebab-case}.{ext}
```

Examples:

- Card icon titled `Facebook Page Like` → `facebook-page-like.png`
- Card icon titled `Facebook Story Views` → `facebook-story-views.png`
- `pricing-check-icon.svg`
- `hero-platform-dashboard.webp`
- `reviews-sarah-mitchell-avatar.webp`

Use kebab-case, lowercase, no spaces. Prefer `.svg` for icons, `.webp` or `.png` for photos. **Never** keep Figma auto-generated names like `imgi_191_1-view-3d-icon` or `Screenshot 2026-03-29`.

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

Add to the target page inferred in Step 0c:

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

### Page builds — track at two levels

**Page-level (once, in Phase A):**

```
Page build progress:
- [ ] Frame type and target page auto-detected (Step 0)
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
- [ ] `SectionHeading` used for section header (when Figma has badge + title pattern)
- [ ] `.container` wrapper inside `PrimarySection`
- [ ] Wired into page.tsx
- [ ] Lint clean
- [ ] User reviewed and approved ← required before next section
```

### Single frame builds (`section`, `card`, `component`)

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
- [ ] SectionHeading used for section header (when Figma has badge + title pattern)
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
5. Confirm `SectionHeading` is used wherever the Figma section has a badge + title header (not hand-rolled).
6. Confirm downloaded assets are named descriptively and referenced correctly.
7. **Side-by-side check:** implementation matches the Figma screenshot for this section's `nodeId`.
8. **Do not proceed** to the next section until checks 1–7 pass and the user approves.

---

## Example invocations

### Single section

```
/build https://www.figma.com/design/AbCdEf/My-Page?node-id=12-34
```

1. `get_metadata` + `get_design_context` on node `12:34` → detect `section` (name "Hero Section", parent "Pricing Page") → target `services/pricing`
2. Announce: `Detected: section → services/pricing`
3. Create `app/services/pricing/_components/hero-section.tsx` with `PrimarySection bg="section-2"` and a `.container` inside
4. Download icons to `public/images/icons/pricing-*.svg`
5. Match spacing/typography/colors to Figma screenshot
6. Import section in `app/services/pricing/page.tsx`
7. Run lint, report done, **stop**

### Full page (section-by-section)

```
/build https://www.figma.com/design/AbCdEf/Home-Page?node-id=1-2
```

1. `get_metadata` on node `1:2` → detect `page` (5 vertical section children, ~6000px tall) → target `/`
2. Announce: `Detected: page → / (Home Page)`
3. List sections from metadata: Hero, Stats, Services, About, …
4. Build **Hero only** (first section `nodeId`)
5. Match hero to Figma perfectly → lint → report → **stop**
6. User reviews, says `/build` → build **Stats** section
7. User says "match Figma" on Stats → refine Stats until perfect → **stop**
8. Repeat until all sections are built and approved

---

## Anti-patterns (do not do)

- Building an entire page in one pass when frame type is `page`
- Creating placeholder/skeleton section files for sections not yet built
- Starting the next section before the current one is user-approved
- Using `<section>` or `<div>` with custom background instead of `PrimarySection`
- Placing section content directly on `PrimarySection` without a `.container` wrapper
- Using `mx-auto max-w-[1440px]` instead of the `.container` class
- Hand-rolling section headers (badge + underline + title) instead of `SectionHeading`
- Using a raw card container instead of `PrimaryCard`
- Exporting Figma background images into the repo
- Applying `bg-gradient-*` or arbitrary background-url utilities on section/card wrappers outside the allowed keys
- Asking the user what frame type or target page to use instead of auto-detecting (Step 0)
- Skipping `get_metadata` and guessing file paths from the URL alone
- Leaving Figma asset URLs in source instead of downloading content images locally
