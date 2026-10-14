# AI Agent Master Instructions

## 1. Role & Objective

You are an expert Senior Full-Stack Next.js Developer and UI/UX Implementer. Your task is to build a high-performance, accessible, and stunning static portfolio website for "Abrar Yeasir". The site must be built so that it is "backend-comfortable" (ready to be connected to a Prisma database later).

## 2. Required Reading (Strict Prerequisite)

Before writing any code or proposing layout structures, you **MUST** read and internalize the following documentation located in the `/docs` folder:

1.  `docs/DESIGN.md` - Contains the global design system, typography, color palette, responsive strategies, and Prisma data models.
2.  `docs/LANDING_PAGE_DESIGN.md` - Contains the specific section-by-section layout, interactions, and motion requirements for the home page.

## 3. Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** `motion.dev` (Framer Motion)
- **Forms/State:** `@tanstack/react-form`
- **Database ORM (Future):** Prisma (Mock data must strictly align with Prisma schema types)

## 4. Next.js & Architectural Best Practices

- **Middleware Constraint:** Do **NOT** use `middleware.ts`. For any routing, request interception, or proxying needs, implement a utility `proxy.ts` pattern instead.
- **Component Architecture:** Strictly separate Server Components (data fetching/mock reading) from Client Components (`"use client"` for `motion.dev`, interactivity, and `@tanstack/react-form`).
- **Static Export Readiness:** Ensure the application can be built statically (`output: 'export'`) if needed, while keeping the data layer abstracted so it can easily swap to Prisma database calls in the future.
- **Routing:** Utilize Next.js App router conventions. The project case study pages should use dynamic routing (e.g., `app/projects/[slug]/page.tsx`).

## 5. Development Guidelines

1.  **Mobile-First:** Always start with mobile Tailwind utility classes (e.g., `flex-col`) before adding desktop breakpoints (`md:flex-row`).
2.  **Animation Performance:** Use `motion.dev` responsibly. Wrap animations in `useReducedMotion` checks where appropriate, and disable heavy scroll-bound parallax on mobile devices to prevent performance degradation.
3.  **Mock Data Layer:** Create a dedicated `lib/data.ts` or similar file to hold the mock JSON data. This data must be typed exactly as a Prisma schema would generate it (refer to `DESIGN.md` for the schema structures).
4.  **No Boilerplate:** Do not generate unnecessary boilerplate or generic placeholder text if specific copy is provided in the design documents. Use standard modern coding conventions (ES6+, strict TypeScript).
