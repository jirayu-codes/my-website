# Project Brief

## 1. Website Concept
<!-- Fill in after Phase 2 — Defining the Project Brief -->

**Website Topic:** Brew Explorer — A coffee drink guide showcasing popular coffee beverages with descriptions and a cozy, warm aesthetic.

**Why:** Coffee is a universally loved topic and a drink guide is a great beginner project that practices HTML structure, CSS styling, and light JavaScript interactivity.

**Target Audience:** Coffee lovers and curious beginners who want to learn about different coffee drinks.

**Visitor Outcome:** Visitors browse a visually appealing grid of coffee drinks, learn what makes each one unique, and leave with a better understanding of their next order.

**Three Main Sections:** Header with site name and tagline, drink card grid featuring 10 coffee beverages, and a simple footer.

**Key Highlight:** A warm, cozy color palette (browns, creams, amber) that makes the site feel like stepping into a coffee shop.

---

## 2. Visual Plan
<!-- Fill in after Phase 3 — Visual Planning Prompt -->

**Mood and Tone:** "Sunday morning at a quiet café" — warm, inviting, calm. Soft textures, gentle warmth, and a handcrafted feel. Approachable and comforting.

**Color Palette:**
- Background: Warm cream `#FDF6EC`
- Primary Text: Dark espresso `#3B2F2F`
- Brand Color: Rich coffee brown `#6F4E37`
- Accent: Warm amber `#D4A574`

**Typography:**
- Heading Font: `Fraunces` (Google Fonts)
- Body Font: `Nunito Sans` (Google Fonts)

**Layout Approach:** Single column, max-width 1100px centered. CSS Grid for drink cards — 3 columns desktop, 2 tablet, 1 mobile. Header + grid + footer, no sidebar.

**Images & Graphics Style:** Emoji or simple SVG icons for each drink. Lightweight, no heavy photo dependencies.

**Button & UI Style:** Rounded corners (8px), filled brand brown `#6F4E37`, white text, subtle hover with darken + shadow. Soft, pillowy feel.

---

## 3. Interaction Specifications
<!-- Fill in after Phase 4 — Interaction Planning & Specification -->

### Interaction 1
- **Interaction Name:** Filter Drinks by Category
- **Visitor Action:** Click a category button (All, Hot, Iced)
- **Page Response:** Drink grid updates to show only matching drinks
- **HTML Elements:** Category buttons, drink cards with `data-category` attribute
- **JS Event:** `click`
- **Function Name:** `filterDrinks()`
- **CSS Class Toggled:** `.hidden` (hides non-matching cards)

### Interaction 2
- **Interaction Name:** Card Hover Reveal
- **Visitor Action:** Hover over a drink card
- **Page Response:** Card reveals extra info (ingredients or fun fact)
- **HTML Elements:** Drink card with front and back sections
- **JS Event:** `mouseenter` / `mouseleave`
- **Function Name:** `revealCard()`
- **CSS Class Toggled:** `.revealed` (flips or shows back content)

### Interaction 3
- **Interaction Name:** Favorite a Drink
- **Visitor Action:** Click the heart icon on a drink card
- **Page Response:** Heart fills in and header counter updates
- **HTML Elements:** Heart icon button on each card, counter in header
- **JS Event:** `click`
- **Function Name:** `toggleFavorite()`
- **CSS Class Toggled:** `.favorited` (fills heart icon)

---

## 4. Architecture Plan
<!-- Fill in after Phase 5 — Required Files and Architecture Prompt -->

**HTML Structure Plan:**
```
<body>
  <header>
    <h1>Site Name</h1>
    <p>Tagline</p>
    <span id="favorite-counter">0</span>
  </header>

  <section class="filters">
    <button data-filter="all">All</button>
    <button data-filter="hot">Hot</button>
    <button data-filter="iced">Iced</button>
  </section>

  <main class="drink-grid">
    <div class="drink-card" data-category="hot">
      <div class="card-front">
        <span class="drink-icon">☕</span>
        <h3>Espresso</h3>
        <p>Description</p>
        <button class="fav-btn">♡</button>
      </div>
      <div class="card-back">
        <p>Ingredients or fun fact</p>
      </div>
    </div>
    <!-- x10 cards -->
  </main>

  <footer>
    <p>Simple footer</p>
  </footer>
</body>
```

Key IDs/Classes: `#favorite-counter`, `.drink-grid`, `.drink-card`, `.card-front`, `.card-back`, `.fav-btn`, `[data-category]`, `.hidden`, `.revealed`, `.favorited`

**CSS Architecture Plan:**
| Section | Purpose |
|---------|---------|
| Reset & Base | Box-sizing, margins, body background `#FDF6EC`, font `Lato` |
| Typography | Headings use `Playfair Display`, body uses `Lato` |
| Layout | Max-width 1100px centered, responsive grid |
| Header | Centered text, tagline, favorite counter positioning |
| Filter Buttons | Rounded pill buttons, brand brown, hover state |
| Drink Cards | Grid items, card flip/reveal structure, front + back |
| Card Back | Hidden by default, shown on `.revealed` |
| Fav Button | Heart icon, `.favorited` fills with accent color |
| Footer | Minimal, centered, muted text |
| Interactive States | `.hidden`, `.revealed`, `.favorited`, hover effects |
| Responsive | Media queries: 3 cols → 2 → 1 |

**JavaScript Function Map:**
| Function | Event | Elements Manipulated |
|----------|-------|---------------------|
| `filterDrinks()` | `click` on `.filters button` | `.drink-card` — toggles `.hidden` based on `data-category` |
| `revealCard()` | `mouseenter` / `mouseleave` on `.drink-card` | `.drink-card` — toggles `.revealed` |
| `toggleFavorite()` | `click` on `.fav-btn` | `.fav-btn` — toggles `.favorited`, `#favorite-counter` — updates count |

**Implementation Steps:**
1. HTML structure — Build header, filters, grid, footer with all 10 drink cards
2. Base CSS — Reset, variables, typography, color palette
3. Layout CSS — Centered container, responsive grid
4. Component CSS — Header, buttons, cards, footer
5. Interactive CSS — `.hidden`, `.revealed`, `.favorited` states
6. JavaScript — `filterDrinks()`, `revealCard()`, `toggleFavorite()`
7. Responsive polish — Media queries for tablet and mobile
8. Final review — Test all interactions and responsiveness
