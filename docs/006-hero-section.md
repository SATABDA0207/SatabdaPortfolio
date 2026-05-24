# TASK 006 — Hero Section

## Objective

Build the hero section.

---

## Dependencies

TASK 004
TASK 005

---

## Scope

Included:

- greeting
- hero title
- tagline
- CTA buttons
- social links
- sticky notes
- stats strip

---

## Non-Goals

Do NOT:

- implement backend
- add routing
- add forms

---

## Design Constraints

Must match:

- notebook aesthetic
- thick borders
- playful microcopy
- handwritten accents

---

## Deliverables

Fully responsive hero section.

---

## Acceptance Criteria

- responsive
- visually polished
- animations smooth
- CTA buttons functional

---

## Completion Status

Status: Completed on May 24, 2026

Implemented:

- data-driven hero content model in `src/data/hero.ts`
- fully responsive hero section in `src/sections/HeroSection.tsx`
- standardized composition using shared UI primitives (`CTAButton`, `SkillPill`, `StickyNote`, `SocialButton`, `DoodleDivider`)
- motion integration with reusable wrappers (`Reveal`, `StaggerGroup`, `MotionItem`, `HoverLift`)
- navigation row, greeting chip, title block, tagline, skill pills, CTA row, social row, sticky notes, stats strip, and scroll hint
- resume CTA wired to `/resume/Satabda_Mandal_Resume_2026.pdf`
- resume asset copied to `public/resume/Satabda_Mandal_Resume_2026.pdf`
- app entry switched to render hero section from `App.tsx`

Verification:

- `npm run lint` passes
- `npm run build` passes
