# Los Santos Roleplay - Visual Style Guide

## Brand Identity

### Logo & Wordmark

**Primary Logo:**
- Square badge with "LS" initials
- Gradient background (amber/gold)
- Dark text for contrast
- Size: Minimum 32px, ideal 40-48px

**Wordmark:**
- Font: Orbitron Bold
- Format: "Los Santos" + colored "RP"
- Color: Foreground + Primary accent on "RP"

---

## Color System

### Primary Colors

```css
/* Background & Surfaces */
--background: hsl(220, 20%, 8%)        /* #0F1419 - Base dark */
--foreground: hsl(40, 10%, 95%)        /* #F5F3F0 - Text */
--card: hsl(220, 18%, 11%)             /* #171D25 - Elevated */
--secondary: hsl(220, 15%, 15%)        /* #1E242D - Deeper */

/* Accent & Brand */
--primary: hsl(38, 92%, 50%)           /* #F59E0B - Amber */
--primary-glow: hsl(38, 100%, 65%)     /* #FBBF24 - Gold */
--primary-foreground: hsl(220, 20%, 10%) /* Dark on light */

/* Interactive States */
--border: hsl(220, 15%, 18%)           /* #282F39 - Subtle */
--muted: hsl(220, 15%, 13%)            /* #1A2028 - Background */
--muted-foreground: hsl(40, 5%, 60%)   /* #999189 - Secondary text */
```

### Status Colors

```css
--success: hsl(142, 72%, 45%)  /* #16A34A - Green */
--warning: hsl(38, 92%, 50%)   /* #F59E0B - Amber */
--info: hsl(199, 89%, 48%)     /* #0EA5E9 - Blue */
--destructive: hsl(0, 70%, 50%) /* #DC2626 - Red */
```

### Gradients

```css
/* Hero Background */
--gradient-hero: linear-gradient(135deg, 
  hsl(220, 20%, 8%) 0%, 
  hsl(220, 25%, 12%) 100%
);

/* Accent Gradient (Buttons, badges) */
--gradient-accent: linear-gradient(135deg, 
  hsl(38, 92%, 50%) 0%, 
  hsl(38, 100%, 65%) 100%
);

/* Card Gradient */
--gradient-card: linear-gradient(180deg, 
  hsl(220, 18%, 11%) 0%, 
  hsl(220, 18%, 9%) 100%
);
```

### Shadows

```css
/* Standard Elevation */
--shadow-sm: 0 2px 8px hsl(220 20% 4% / 0.15);
--shadow-md: 0 4px 16px hsl(220 20% 4% / 0.25);
--shadow-lg: 0 8px 32px hsl(220 20% 4% / 0.35);

/* Special Effects */
--shadow-glow: 0 0 24px hsl(38 92% 50% / 0.25);
```

---

## Typography

### Font Families

**Display/Headings:**
```css
font-family: 'Orbitron', system-ui, sans-serif;
font-weight: 600-900;
/* Use for: H1-H3, numbers, brand name, CTA buttons */
```

**Body/UI:**
```css
font-family: 'Inter', system-ui, sans-serif;
font-weight: 300-800;
/* Use for: Paragraphs, navigation, cards, forms */
```

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|---------------|---------------|--------|-------------|
| H1 (Hero) | 72-96px (6xl) | 48-60px (4xl) | 800 | 1.1 |
| H2 (Section) | 48-60px (5xl) | 36-48px (3xl) | 700 | 1.2 |
| H3 (Card) | 30-36px (3xl) | 24-30px (2xl) | 700 | 1.3 |
| Body Large | 18-20px (lg) | 16-18px (base) | 400 | 1.6 |
| Body | 16px (base) | 16px (base) | 400 | 1.6 |
| Small | 14px (sm) | 14px (sm) | 500 | 1.5 |
| Tiny | 12px (xs) | 12px (xs) | 600 | 1.4 |

### Type Styles

**Display Heading:**
```css
.display-heading {
  font-family: 'Orbitron', sans-serif;
  font-weight: 800;
  font-size: clamp(3rem, 8vw, 6rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: hsl(var(--foreground));
}
```

**Section Heading:**
```css
.section-heading {
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  font-size: clamp(2rem, 5vw, 3.75rem);
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: hsl(var(--foreground));
}
```

**Body Text:**
```css
.body-text {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.6;
  color: hsl(var(--muted-foreground));
}
```

---

## Spacing System

### Base Unit: 4px

```css
/* Tailwind scale used throughout */
0.5 = 2px   (0.125rem)
1   = 4px   (0.25rem)
2   = 8px   (0.5rem)
3   = 12px  (0.75rem)
4   = 16px  (1rem)
6   = 24px  (1.5rem)
8   = 32px  (2rem)
12  = 48px  (3rem)
16  = 64px  (4rem)
24  = 96px  (6rem)
```

### Component Spacing

| Component | Padding | Margin | Gap |
|-----------|---------|--------|-----|
| Card | 24px (6) | 24px (6) | 16px (4) |
| Button | 12px 32px | - | 8px (2) |
| Section | 96px (24) | - | 64px (16) |
| Container | 16-32px | auto | - |
| Grid | - | - | 24px (6) |

---

## Components

### Buttons

**Primary Button:**
```tsx
<Button className="bg-gradient-accent shadow-glow">
  Click Me
</Button>
```
- Background: Gradient accent
- Shadow: Glow effect
- Height: 40px (md), 56px (lg)
- Padding: 16px-32px
- Font: Inter Medium, 14-16px
- Border radius: 12px

**Outline Button:**
```tsx
<Button variant="outline">
  Click Me
</Button>
```
- Background: Transparent
- Border: 1px solid border color
- Hover: Border becomes primary
- No shadow

**States:**
- Hover: Scale 1.02, brightness 1.1
- Active: Scale 0.98
- Focus: Ring 2px primary
- Disabled: Opacity 0.5, no hover

### Cards

**Standard Card:**
```tsx
<Card className="bg-gradient-card border-border">
  <CardHeader>...</CardHeader>
  <CardContent>...</CardContent>
</Card>
```
- Background: Gradient card
- Border: 1px solid border
- Border radius: 12px
- Padding: 24px
- Shadow: md
- Hover: Border primary/50, translate -4px, shadow lg

### Status Badge

**Online Badge:**
```tsx
<div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border">
  <span className="relative flex h-2 w-2">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
    <span className="relative inline-flex rounded-full h-2 w-2 bg-success"></span>
  </span>
  <span className="text-sm font-medium">Online</span>
</div>
```

### Server Status Widget

- Layout: Grid 3 columns
- Background: Card/50 with backdrop blur
- Border: Border color
- Padding: 16-24px
- Gap: 16px
- Icons: 16px (status), 20px (features)

---

## Layout & Grid

### Container

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem; /* Mobile */
  padding: 0 2rem; /* Desktop */
}
```

### Grid Systems

**Features Grid:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 3 columns on desktop, 2 on tablet, 1 on mobile */}
</div>
```

**Stats Grid:**
```tsx
<div className="grid grid-cols-3 gap-4">
  {/* Always 3 columns, responsive sizes */}
</div>
```

### Breakpoints

```css
sm: 640px   /* Small tablet */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

---

## Animations & Motion

### Timing Functions

```css
/* Smooth (default) */
--transition-smooth: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);

/* Ease Out (entrance) */
transition: opacity 0.3s ease-out, transform 0.3s ease-out;

/* Ease In (exit) */
transition: opacity 0.2s ease-in, transform 0.2s ease-in;
```

### Keyframe Animations

**Fade Up (Page sections):**
```css
@keyframes fade-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-up {
  animation: fade-up 0.6s ease-out;
}
```

**Glow Pulse (Status indicator):**
```css
@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 0 0 20px hsl(var(--primary) / 0.3);
  }
  50% {
    box-shadow: 0 0 40px hsl(var(--primary) / 0.6);
  }
}
.animate-glow-pulse {
  animation: glow-pulse 2s ease-in-out infinite;
}
```

### Hover States

**Cards:**
```css
.card:hover {
  transform: translateY(-4px);
  border-color: hsl(var(--primary) / 0.5);
  box-shadow: var(--shadow-lg);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
}
```

**Buttons:**
```css
.button:hover {
  transform: scale(1.02);
  filter: brightness(1.1);
}
.button:active {
  transform: scale(0.98);
}
```

---

## Icons

### Icon System: Lucide React

**Sizes:**
- Small: 16px (h-4 w-4)
- Medium: 20px (h-5 w-5)
- Large: 24px (h-6 w-6)
- XLarge: 32px (h-8 w-8)

**Usage:**
```tsx
import { Users, Shield, Car } from "lucide-react";

<Users className="h-5 w-5 text-primary" />
```

**Color Usage:**
- Primary actions: `text-primary`
- Secondary: `text-muted-foreground`
- Status: `text-success`, `text-warning`, `text-destructive`

---

## Image Guidelines

### Hero Images

- **Dimensions:** 1920x800px (16:9 aspect)
- **Format:** WebP with JPG fallback
- **Quality:** 85%
- **Lazy Load:** Yes
- **Alt Text:** Descriptive, SEO-friendly

### Badge Icons

- **Dimensions:** 512x512px (1:1 aspect)
- **Format:** PNG with transparency
- **Quality:** High (no compression)
- **Usage:** Import as ES6 module

### Screenshots

- **Dimensions:** Variable, max 1920px width
- **Format:** WebP with JPG fallback
- **Quality:** 80%
- **Lazy Load:** Yes
- **Caption:** Always include

---

## Accessibility Standards

### WCAG 2.1 AA Compliance

**Color Contrast Ratios:**
- ✅ Primary on dark: 7.2:1 (AAA)
- ✅ Foreground on background: 11.5:1 (AAA)
- ✅ Muted on background: 5.1:1 (AA)
- ✅ Links: 4.5:1 minimum (AA)

**Focus States:**
```css
.focusable:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
  border-radius: 4px;
}
```

**Motion Preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Responsive Design

### Mobile First Approach

**Base styles:** 360px minimum width  
**Tablet:** 768px (md breakpoint)  
**Desktop:** 1024px (lg breakpoint)  
**Wide:** 1280px+ (xl breakpoint)

### Component Adaptations

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Header Height | 64px | 64px | 64px |
| Hero Title | 48px | 60px | 96px |
| Section Padding | 64px | 80px | 96px |
| Grid Columns | 1 | 2 | 3 |
| Card Padding | 16px | 20px | 24px |
| Button Height | 48px | 48px | 56px |

### Navigation

**Mobile (<768px):**
- Hamburger menu
- Slide-in drawer
- Full-screen overlay

**Desktop (≥768px):**
- Horizontal nav bar
- Inline menu items
- Dropdown submenus

---

## Dark Mode (Current)

**Current Implementation:** Dark theme only

**Future Light Mode:**
```css
.light {
  --background: hsl(0, 0%, 98%);
  --foreground: hsl(220, 20%, 10%);
  --primary: hsl(38, 92%, 50%);
  /* Inverted but maintains amber accent */
}
```

---

## Code Style

### Naming Conventions

**Components:**
```tsx
// PascalCase for component files
export function HeroSection() {}
```

**Utilities:**
```tsx
// camelCase for functions
export function formatPlayerCount() {}
```

**CSS Classes:**
```css
/* Tailwind utility classes preferred */
.custom-gradient { /* kebab-case if needed */ }
```

### File Organization

```
src/
├── components/
│   ├── ui/             # shadcn components
│   ├── HeroSection.tsx # Feature components
│   ├── Header.tsx
│   └── Footer.tsx
├── assets/
│   ├── hero-cityscape.jpg
│   └── badge-*.png
├── lib/
│   └── utils.ts
└── pages/
    └── Index.tsx
```

---

## Performance Optimization

### Image Loading

```tsx
// Lazy load below fold
<img loading="lazy" src={image} alt="Description" />

// Eager load above fold
<img loading="eager" src={hero} alt="Hero" />
```

### Font Loading

```html
<!-- Preconnect to Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Display swap for no FOIT -->
<link href="...&display=swap" rel="stylesheet">
```

### Code Splitting

```tsx
// Route-based splitting (automatic with Vite)
const Rules = lazy(() => import('./pages/Rules'));
```

---

## Design Tokens Reference

### Quick Copy/Paste

**Amber Primary:**
```css
bg-primary text-primary-foreground
```

**Card with Hover:**
```css
bg-gradient-card border-border hover:border-primary/50 transition-all duration-300
```

**Section Container:**
```css
container mx-auto px-4 lg:px-8
```

**Centered Content:**
```css
max-w-4xl mx-auto text-center
```

**Button Primary:**
```css
bg-gradient-accent shadow-glow
```

---

This style guide serves as the single source of truth for all visual design decisions. Any deviations should be documented and approved.
