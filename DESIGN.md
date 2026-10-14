# Global Design System & Architecture

## 1. Visual Language: "Editorial Engineering"

To achieve an award-winning, unique look, we will break away from standard SaaS-like developer portfolios. The design will blend the sophisticated, typographic focus of a high-end editorial magazine with the precise, interactive elements of modern software engineering.

### 1.1 Color Palette (Light Mode Exclusive)

The palette avoids harsh stark white to create a premium, printed-paper feel, utilizing high-contrast typography and a singular, vibrant accent.

* **Background (Base):** `#F4F4F0` (Alabaster / Warm Off-White) - Soft on the eyes, elegant.
* **Background (Surface):** `#FFFFFF` (Pure White) - For overlapping cards or floating elements.
* **Primary Text:** `#1A1C20` (Deep Charcoal / Ink) - Softer than pure black, adds sophistication.
* **Secondary Text:** `#686A6C` (Medium Slate) - For descriptions and metadata.
* **Accent Color:** `#E04D2D` (Burnt Sienna / Terracotta) - A classy, energetic pop of color for CTAs, highlights, and micro-interactions.
* **Borders/Lines:** `#E2E2DE` - For subtle dividers and bento-box borders.

### 1.2 Typography Structure

We will use a pairing of a dramatic serif for display and a highly legible sans-serif for UI/Body.

* **Display/Headings:** *Instrument Serif* (or *Playfair Display*). Used for large names, section titles, and massive footer text. Gives the "classy" and unique edge. Use fluid typography (`clamp()`) to ensure graceful scaling across devices.
* **Body/UI/Code:** *Geist* (or *Inter*). Clean, modern, highly readable for descriptions, nav links, and tags.

### 1.3 Responsive & Mobile-First Strategy (CRITICAL)

The entire portfolio must be highly responsive, prioritizing a seamless experience across all screen sizes (mobile, tablet, desktop, and ultra-wide).

* **Tailwind Breakpoints:** Strictly utilize standard Tailwind breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`) to fluidly adjust layouts.
* **Mobile Navigation:** The floating pill navbar should transform into a condensed hamburger menu or a bottom-fixed app-like navigation bar on mobile devices (`< md`).
* **Touch Targets:** Ensure all CTAs, links, and bento-box interactive elements have a minimum touch target size of 44x44px for mobile users.
* **Animation Scaling:** Complex `motion.dev` scroll animations (like parallax) should be reduced or disabled on mobile to preserve performance and prevent scrolling jank, relying instead on simpler fade-up/stagger reveals.
* **Layout Shifting:** Multi-column layouts (like the Hero split or Bento Box) must gracefully collapse into single-column stacks on smaller screens without horizontal scrolling.

### 1.4 Motion & Interaction (`motion.dev`)

Animations must feel physical, fluid, and intentional—not floaty or slow.

* **Spring Physics:** Use `type: "spring", stiffness: 100, damping: 20` for a snappy, premium feel.
* **Magnetic Elements:** Nav items, social links, and primary buttons should have a slight magnetic pull when the cursor approaches (desktop only).
* **Reveal Animations:** Text should reveal character-by-character or word-by-word (staggered) using `clip-path` or mask-image for a clean slide-up effect, rather than just fading in.
* **Scroll Parallax:** Images and large text should move at slightly different speeds on scroll to create depth (desktop/tablet only).

## 2. Image Treatment Guidelines

**Regarding `abrar_profile.jpeg`:**
The image provided is a clean, professional headshot. To make it fit an "award-winning" artistic aesthetic:

1. **Treatment:** Apply a high-contrast grayscale CSS filter by default to match the editorial look. On mouse hover, smoothly transition the image into full, vibrant color (tap to toggle on mobile).
2. **Framing:** Do not use a standard circle or square. Place the image inside an "Arch" mask (rounded top, flat bottom) or a subtle asymmetrical blob mask. Give it a very soft, offset drop shadow (`shadow-xl` using the Burnt Sienna accent color at 10% opacity) to make it lift off the Alabaster background.

## 3. Data Architecture (Prisma/Backend Ready)

To ensure smooth backend transition later, structure your static JSON mocks matching this future Prisma schema:

* `Project`: `{ id, slug, title, shortDesc, fullDesc, imageUrl, techStack: string[], liveUrl, githubUrl, featured: boolean }`
* `SkillCategory`: `{ id, name, skills: [{ name, iconUrl }] }`
* `Experience`: `{ id, company, role, startDate, endDate, description }`

