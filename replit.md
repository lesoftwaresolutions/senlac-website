# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Senlac Guest House Website (`artifacts/senlac-website`)
- **Type**: React + Vite, fully static frontend
- **Preview path**: `/`
- **Pages**: Home, Rooms, Rates, Services, Breakfast, Offers, Gallery, Contact, Book Now
- **Booking link**: All buttons link to `https://via.eviivo.com/SenlacTN34`
- **No backend/database required** — 100% static
- **Design**: Boutique hotel style — beige/cream palette, Playfair Display serif headings, Inter body font
- **Key components**: Header (transparent on hero, solid on scroll), Footer, RoomCard, OfferCard, BookingButton, PageHero

### API Server (`artifacts/api-server`)
- Express 5 backend on `/api`

### Canvas (`artifacts/mockup-sandbox`)
- Design sandbox at `/__mockup`

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
