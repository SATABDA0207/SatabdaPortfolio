# TASK 005 — Animation System

## Objective

Create reusable animation infrastructure using Framer Motion.

---

## Dependencies

TASK 004

---

## Scope

Included:

- reveal animations
- hover animations
- motion variants
- reusable wrappers

---

## Non-Goals

Do NOT:

- create flashy animations
- add scroll hijacking

---

## Required Animations

### Reveal

Fade + slight translate.

---

### Hover

Small lift effect.

---

### Sticky Notes

Subtle wobble.

---

## Deliverables

Reusable animation utilities.

---

## Acceptance Criteria

- animations reusable
- animations performant
- animations subtle

---

## Completion Status

Status: Completed on May 24, 2026

Implemented:

- added `framer-motion` dependency
- reusable motion variants in `src/constants/motion.ts`
- reusable wrappers in `src/components/motion/`:
  - `Reveal`
  - `StaggerGroup`
  - `MotionItem`
  - `HoverLift`
- subtle sticky-note wobble and hover lift utility classes in `src/styles/globals.css`
- `prefers-reduced-motion` fallback for accessibility
- integrated wrappers in `src/App.tsx` preview to validate reveal/hover behavior

Verification:

- `npm run lint` passes
- `npm run build` passes
