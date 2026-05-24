# Satabda Portfolio — Development Plan

## Vision

Build a highly polished personal developer portfolio that feels:

- handcrafted
- engineering-focused
- modern but personal
- playful without looking childish
- structured but warm

The portfolio should communicate:

- strong backend engineering experience
- production-grade systems thinking
- fintech + AI exposure
- personality and authenticity
- strong engineering taste

This is NOT:

- a generic template portfolio
- a dark glassmorphism clone
- an overanimated agency website

The portfolio should feel like:
"an engineer's notebook brought to life."

---

# Core Design Language

## Visual Style

The entire portfolio should consistently follow these principles:

### Borders

- Thick borders (2px–2.5px)
- Dark outline-based UI

### Shadows

- Offset shadows
- Example:
  - `3px 3px 0px`
  - `4px 4px 0px`

### Shapes

- Rounded cards
- Rounded buttons
- Pill tags

### Background

- Soft notebook/grid texture
- Light neutral background

### Typography

Primary:

- Archivo

Secondary / handwritten:

- Caveat

### Color Palette

#### Base Background

- `#F5F5F5`

#### Dark

- `#303841`

#### Accent Orange

- `#FF5722`

#### Accent Teal

- `#76ABAE`

---

# Product Goals

## Primary Goal

Create a memorable engineering portfolio.

## Secondary Goals

- Improve personal branding
- Showcase engineering ability
- Showcase frontend craftsmanship
- Learn modern frontend architecture
- Create reusable portfolio foundation

---

# Technical Stack

## Frontend Framework

React + Vite

Reason:

- simpler than Next.js
- easier learning curve
- fast development
- lightweight setup
- ideal for static portfolio

---

## Language

TypeScript

Reason:

- better maintainability
- safer contracts
- scalable codebase
- industry standard

---

## Styling

TailwindCSS

Reason:

- utility-first workflow
- rapid development
- reusable design system
- easy responsive design

---

## Animation

Framer Motion

Reason:

- subtle animations
- smooth interactions
- lightweight
- React-friendly

---

## Icons

Lucide React

Reason:

- clean icon style
- lightweight
- customizable

---

## Deployment

Vercel

Reason:

- easiest deployment flow
- automatic GitHub integration
- fast global CDN
- free hosting suitable for portfolio

---

# Architecture Principles

## Principle 1 — Component Driven

All sections should be broken into reusable components.

Avoid:

- giant JSX files
- duplicated styles
- repeated markup

---

## Principle 2 — Data Driven

Content should live in data files.

Avoid hardcoding content directly inside UI components.

Use:

- arrays
- objects
- typed data models

---

## Principle 3 — Design System First

Reusable styles should be centralized.

Avoid:

- random spacing
- inconsistent shadows
- arbitrary colors

---

## Principle 4 — Mobile Responsive

The portfolio must work flawlessly on:

- desktop
- tablet
- mobile

Mobile responsiveness is mandatory.

---

## Principle 5 — Subtle Motion

Animations should enhance UX.

Avoid:

- heavy animations
- scroll hijacking
- flashy transitions

---

# High-Level Application Structure

```txt
portfolio/
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── resume/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── shared/
│   │
│   ├── sections/
│   │   ├── Hero/
│   │   ├── Experience/
│   │   ├── Projects/
│   │   ├── Skills/
│   │   ├── Contact/
│   │
│   ├── data/
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   ├── socials.ts
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   ├── animations.css
│   │
│   ├── hooks/
│   │
│   ├── utils/
│   │
│   ├── constants/
│   │
│   ├── App.tsx
│   ├── main.tsx
│
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
```
