# Generic Next.js Starter Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create a reusable Next.js starter with the approved stack and shared-component structure.

**Architecture:** Use the Next.js App Router with Server Components by default, placing browser-interactive state in Client Components. Keep reusable UI under `src/components`, shadcn/ui primitives under `src/components/ui`, and shared hooks, utilities, stores, and types in their dedicated directories.

**Tech Stack:** Next.js, TypeScript, pnpm, Zustand, React Hook Form, Tailwind CSS, shadcn/ui.

**Spec:** `docs/superpowers/specs/2026-10-11-generic-nextjs-starter-design.md`

## Global Constraints

- Next.js App Router with TypeScript and server rendering through Server Components by default.
- Zustand for client-side shared state.
- React Hook Form for form state and submission.
- Tailwind CSS for styling.
- shadcn/ui for reusable interface primitives.
- pnpm as the package manager.
- The starter will not create a `src/features` directory.
- No domain-specific forms or business behavior.
- No automated test framework setup.

## Review Focus

- The Next.js scaffold selected App Router, TypeScript, Tailwind CSS, and `src/`.
- The `@/*` alias points to `src/*`, matching shadcn/ui imports.
- `src/app` routes and layouts remain Server Components by default.
- Zustand is only imported by client-side code.
- The source tree contains no `src/features` directory.

---

### Task 1: Scaffold the Next.js application

**Files:**
- Create: Next.js project configuration and dependencies at the repository root.
- Create: `src/app`, `src/components`, and `src/lib` base directories.

**Interfaces:**
- Produces: a pnpm-managed Next.js App Router app with TypeScript, Tailwind CSS, ESLint, and the `@/*` alias targeting `src/*`.

- [ ] **Step 1: Generate the scaffold outside the non-empty repository root**

Run `pnpm create next-app@latest /tmp/funiture-website-scaffold --yes --src-dir` and use the documented recommended defaults for TypeScript, Tailwind CSS, ESLint, App Router, and `@/*`.

- [ ] **Step 2: Copy generated project files into the repository root**

Copy the generated files, including hidden config files, while excluding the generated `.git` directory and preserving the repository's existing `.git` and `docs` directories.

- [ ] **Step 3: Confirm project configuration and structure by inspection**

Check that `package.json`, `pnpm-lock.yaml`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs`, `src/app/layout.tsx`, and `src/app/page.tsx` are present; check that `@/*` maps to `./src/*`.

### Task 2: Add the requested client libraries and shadcn/ui

**Files:**
- Modify: `package.json` and `pnpm-lock.yaml`.
- Create: `components.json` and shadcn/ui utility/component files.

**Interfaces:**
- Consumes: Task 1's Next.js, TypeScript, Tailwind CSS, and `@/*` configuration.
- Produces: installable `zustand` and `react-hook-form` packages; shadcn/ui configuration and a Button primitive at `src/components/ui/button.tsx`.

- [ ] **Step 1: Install Zustand and React Hook Form**

Run `pnpm add zustand react-hook-form`.

- [ ] **Step 2: Initialize shadcn/ui for the existing Next.js app**

Run `pnpm dlx shadcn@latest init` and use its standard Next.js defaults with components under `src/components/ui` and utilities under `src/lib`.

- [ ] **Step 3: Add the shared Button primitive**

Run `pnpm dlx shadcn@latest add button` and confirm generated imports use the `@/*` alias.

### Task 3: Add the minimal shared-component starter page

**Files:**
- Create: `src/components/starter-card.tsx`.
- Modify: `src/app/page.tsx`, `src/app/layout.tsx`, and `README.md`.
- Create: `src/hooks/.gitkeep`, `src/store/.gitkeep`, and `src/types/.gitkeep` to preserve the approved shared directories until they contain project code.

**Interfaces:**
- Consumes: Task 2's Button primitive and Task 1's App Router configuration.
- Produces: a server-rendered home page composed from a reusable shared component, with basic project setup and architecture documented in the README.

- [ ] **Step 1: Create `StarterCard` as a reusable Server Component**

Export `StarterCard` from `src/components/starter-card.tsx`. It accepts no props and renders a short starter description plus the shadcn/ui Button. Do not add a `'use client'` directive.

- [ ] **Step 2: Compose the home route from `StarterCard`**

Update `src/app/page.tsx` to render `StarterCard`; keep the page a Server Component. Set generic title and description metadata in `src/app/layout.tsx`.

- [ ] **Step 3: Document the starter conventions**

Update `README.md` with the Node.js minimum documented by Next.js, pnpm install and development commands, the requested stack, and the shared directory responsibilities. State that Server Components are the default and Client Components are reserved for browser interaction and client state.

- [ ] **Step 4: Review the final source tree and package scripts**

Inspect the files against the Review Focus list and acceptance criteria in the spec. Do not add a test framework or domain example.

## References

- [Next.js installation](https://nextjs.org/docs/app/getting-started/installation)
- [shadcn/ui Next.js installation](https://ui.shadcn.com/docs/installation/next)
