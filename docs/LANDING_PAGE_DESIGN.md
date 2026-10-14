# Landing Page: Blueprint & Interactions

## 1. Navbar (Sticky & Dynamic)

* **Layout:** Floating slightly below the top edge of the screen, full width minus margins (rounded pill shape). On mobile (`sm`), shrinks to a condensed icon-based bar or hamburger menu.
* **Visual:** Glassmorphism (`backdrop-blur-md`, semi-transparent white background, thin border).
* **Left:** "AbrarYeasir" written in the primary Serif font, bold.
* **Middle:** Nav links (About, Projects, Skills). *Interaction:* A fluid underline that slides to the active/hovered item using `motion.dev` layout animations. Hidden on mobile.
* **Right:** "Let's Discuss" Button. Solid Accent Color (`#E04D2D`), rounded corners. *Interaction:* Magnetic hover effect.

## 2. Hero Section

* **Layout:** Asymmetrical split on desktop (`lg:flex-row`), collapsing to a centered vertical stack on mobile (`flex-col-reverse`).
  * **Left (60%):** Huge Typography. "Hello, I am" (small sans-serif) followed by "Abrar Yeasir" (Massive Serif, fluid sizing). Below it, a 2-line punchy description.
  * **CTAs:** "View Projects" (Solid Accent) and "Download Resume" (Outline/Ghost button). Both feature a small animated arrow icon on hover. Full width on mobile.
  * **Right (40%):** The `abrar_profile.jpeg` styled inside an Arch frame (as defined in `DESIGN.md`). Scales appropriately for smaller screens.
* **Floating Elements:** Use `motion.dev` to orbit 3-4 trending tech logos (e.g., Next.js, Prisma, Tailwind) around your profile image. They should have a continuous, slow, and random "floating" animation (`yoyo` effect).

## 3. About Me (Typographic Focus)

* **Layout:** Centered, narrow max-width for optimal reading. Padding heavily adjusted for mobile readability.
* **Visual:** A single, large, paragraph of text (Sans-serif, fluid `24px+` down to `18px` on mobile).
* **Interaction:** As the user scrolls down, the text color transitions from light gray to dark charcoal, word by word, tied to the scroll position (`useScroll` from `motion.dev`).

## 4. Featured Projects (Interactive Cards)

* **Layout:** A vertical stack of large, expansive cards (not a traditional grid). Each project takes up mostly the full width of the container.
* **Card Anatomy:**
  * **Background:** Pure White (`#FFFFFF`).
  * **Left/Top:** Project Image/Mockup. Stacks on top of text for mobile views. *Interaction:* On card hover (desktop), the image scales up by 5% smoothly.
  * **Right/Bottom:** Project details. Title (Serif), 2-line description (Sans-serif, gray).
  * **Tags:** Pill-shaped tech tags. Wrap cleanly on smaller screens.
  * **CTAs:** "View Case Study" (Primary) -> routes to `/projects/[slug]`. "Live / Repo" icons (Secondary).
* **Scroll Animation:** Cards stack on top of each other as the user scrolls down (CSS `position: sticky` combined with scaling down the previous card slightly).

## 5. Skills (Interactive Bento Box)

* **Layout:** A CSS Grid "Bento Box" layout. `grid-cols-1` on mobile, `md:grid-cols-2`, `lg:grid-cols-3` or custom spans.
* **Boxes:**
  * Box 1 (Large): Frontend (React, Next.js, Motion)
  * Box 2 (Medium): Backend (Node, Prisma, SQL)
  * Box 3 (Medium): AI Integration
  * Box 4 (Wide): DevOps & Tools
* **Visual:** Each box is pure white with a very subtle border. Contains a title and a grid of monochrome logos.
* **Interaction:** Hovering over a bento box (or tapping on mobile) shifts the border color to the Accent color and turns the logos inside from monochrome to full color, popping them up via a `motion.dev` spring animation.

## 6. Contact (High Impact)

* **Layout:** Two columns on desktop, single column on mobile.
* **Left:** Massive typographic prompt: "HAVE AN IDEA?" or "LET'S BUILD IT." (Serif font).
* **Right:** Large, clickable text blocks for Email and WhatsApp.
* **Interaction:** Hovering over the Email or WhatsApp link applies a text-stroke outline effect or reveals a background marquee of the word "CONNECT CONNECT CONNECT".

## 7. Footer (The Sign-Off)

* **Layout:** Minimalist top section (copyright, social links). Stacked on mobile.
* **Hero Feature:** The absolute bottom of the page is dominated by the word "ABRARYEASIR" stretched to fit 100% of the viewport width.
* **Visual:** Font size calculated via `vw` units. Color: Very light gray (`#E2E2DE`) so it acts as a subtle watermark texture rather than loud text.
* **Interaction:** Moves upward at a different parallax speed than the rest of the page when reaching the bottom (desktop only).

