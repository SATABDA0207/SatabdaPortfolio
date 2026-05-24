# TASK 007 — Experience Section

## Objective

Build the experience timeline section.

---

## Dependencies

TASK 004
TASK 005

---

## Scope

Included:

- timeline layout
- experience cards
- metrics
- technologies

---

## Non-Goals

Do NOT:

- create backend integrations
- fetch remote data

---

## Deliverables

Responsive experience section.

---

## Acceptance Criteria

- clean timeline layout
- readable on mobile
- visually consistent

---

## Completion Status

Status: Completed on May 24, 2026

Implemented:

- data-driven experience model in `src/data/experience.ts`
- production-ready timeline section in `src/sections/ExperienceSection.tsx`
- alternating left/right desktop timeline with central rail and milestone markers
- mobile-friendly stacked card layout
- reusable experience cards with expandable bullets (`see more` / `see less`)
- technology tags and quantified impact bullets
- smooth reveal/stagger/hover motion via shared motion system
- integrated single-page flow by rendering Experience section directly below Hero in `src/App.tsx`

Verification:

- `npm run lint` passes
- `npm run build` passes
