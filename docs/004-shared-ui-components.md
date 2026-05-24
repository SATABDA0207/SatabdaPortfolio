# TASK 004 — Shared UI Components

## Objective

Build reusable UI primitives used across the portfolio.

---

## Dependencies

TASK 003

---

## Components To Build

### SectionHeader

Responsibilities:

- chapter label
- title
- subtitle

---

### NotebookCard

Responsibilities:

- border
- radius
- shadow
- padding

---

### StickyNote

Responsibilities:

- sticky-note appearance
- accent variants

---

### CTAButton

Variants:

- primary
- secondary
- outline
- teal

---

### SkillPill

Responsibilities:

- label
- optional tag

---

### DoodleDivider

Reusable squiggle divider.

---

### SocialButton

Reusable social/contact button.

---

## Non-Goals

Do NOT:

- build full sections
- hardcode content

---

## Deliverables

Reusable UI component library.

---

## Acceptance Criteria

- components reusable
- props configurable
- styles consistent
- components responsive

---

## Completion Status

Status: Completed on May 24, 2026

Implemented reusable components in `src/components/ui/`:

- `SectionHeader.tsx`
- `NotebookCard.tsx`
- `StickyNote.tsx`
- `CTAButton.tsx`
- `SkillPill.tsx`
- `DoodleDivider.tsx`
- `SocialButton.tsx`
- `index.ts` barrel exports

Implementation notes:

- all components are prop-driven and reusable
- style variants added where required (`CTAButton`, `StickyNote`, `SkillPill`)
- components follow token-based visual language from Tasks 002 and 003
- demo usage added in `src/App.tsx` without hardcoding section architecture

Verification:

- `npm run lint` passes
- `npm run build` passes
