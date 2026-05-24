# TASK 002 — Global Design Tokens

## Objective

Create centralized design tokens for:

- colors
- typography
- spacing
- shadows
- border radius

---

## Dependencies

TASK 001

---

## Scope

Included:

- Tailwind theme extension
- reusable color palette
- spacing system
- typography scale
- shadow system

---

## Non-Goals

Do NOT:

- build components
- create layouts
- implement sections

---

## Design Tokens

### Colors

Background:

- #F5F5F5

Dark:

- #303841

Orange:

- #FF5722

Teal:

- #76ABAE

---

### Typography

Primary:

- Archivo

Secondary:

- Caveat

---

### Shadows

Small:
2px 2px 0px

Medium:
3px 3px 0px

Large:
4px 4px 0px

---

## Deliverables

- updated tailwind config
- centralized token definitions
- reusable utility classes

---

## Acceptance Criteria

- colors reusable globally
- fonts load correctly
- shadows reusable
- no hardcoded repetitive values

---

## Completion Status

Status: Completed on May 24, 2026

Implemented:

- Tailwind theme extension for brand colors, fonts, spacing, radius, and sketch shadows
- centralized token map in `src/constants/designTokens.ts`
- global CSS token variables in `src/styles/globals.css`
- reusable utility classes: `grid-paper-bg`, `outline-sketch`, `card-sketch`, `pill-sketch`, `handwritten`
- local font loading via `@fontsource` for Archivo and Caveat (latin subsets)

Verification:

- `npm run lint` passes
- `npm run build` passes
