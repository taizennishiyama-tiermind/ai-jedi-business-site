# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

AI JEDI 事業説明 — a high-quality storybook-style website that explains AI JEDI's business services to prospective enterprise clients. The goal is a visually compelling, professional presentation that makes visitors immediately understand what AI JEDI does and want to work with them.

The site is not yet built. This repository currently contains **design docs and assets only**. The implementation will be a React SPA.

## Repository Structure

- `docs/manifest.md` — Project requirements and vision (what to build and why)
- `docs/business.md` — Full business content: 7 service areas, target customers, value propositions, and company positioning. This is the **source of truth for all text content** on the site.
- `docs/design-system.md` — Complete design system specification: color tokens, typography, spacing, components, animations, illustration usage patterns. This is the **source of truth for all visual implementation**.
- `assets/png/` — Illustration assets (background-transparent PNGs) with naming convention:
  - `l_*` (large) — hero illustrations
  - `m_*` (medium) — chapter headers, decorative elements (white/warmgray variants)
  - `s_*` (small) — icons; `s_human*` — Q&A avatars; `s_hand*` — hand illustrations
- `assets/illustration_guideline.pdf` — Official illustration usage guidelines (sizing, placement, accessibility rules)

## Target Tech Stack

Defined in `docs/design-system.md` section 14:

- **React 19** + **TypeScript**
- **Vite** (dev server & build)
- **Tailwind CSS v4** (utility-first styling with `@theme` tokens)
- **Framer Motion** (animations & page transitions)
- **Lucide React** (icons)
- **react-router-dom** (SPA routing)

## Key Design Decisions

- **Color scheme**: Black-base light mode with Blue accent (`--color-primary-*` = black/charcoal, `--color-accent-*` = blue). Defined as CSS custom properties via Tailwind v4 `@theme`.
- **Fonts**: Inter + Noto Sans JP (body), JetBrains Mono (code/terminal)
- **Layout**: Sidebar navigation (272px fixed) + main content area (max-w-3xl). Mobile: collapsible sidebar with glass-effect header.
- **Illustrations**: Always background-transparent PNG, placed with `mix-blend-multiply` or low opacity (`opacity-[0.12]`–`opacity-[0.18]`), `pointer-events-none select-none` for decorative use. Use `alt=""` for decorative images.
- **Page copy feature**: Each page has a `CopyPageButton` that exports the page as Markdown (for LLM consumption).
- **Animations**: Framer Motion with `viewport={{ once: true }}` for scroll-triggered animations. Stagger via `delay: index * 0.06`. Spring physics for interactive elements.

## Content Structure (from business.md)

The site presents AI JEDI's 7 service areas:
1. AI Strategy & Business Design
2. AI-Driven High-Speed Development
3. AI Development & Utilization Training
4. PoC to Production Implementation
5. AI Talent Placement & Staffing
6. Advisory & Consulting
7. Operations, Improvement & In-house Transition

## Language

All user-facing content is in **Japanese**. Code, comments, and component names should be in English.
