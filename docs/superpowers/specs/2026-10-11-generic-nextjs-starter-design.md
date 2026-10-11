# Generic Next.js Starter Design

## Purpose

Create a reusable starter project for future web applications. The starter provides a server-rendered Next.js foundation and a shared-component architecture without domain-specific features.

## Approved stack

- Next.js App Router with TypeScript and server rendering through Server Components by default.
- Zustand for client-side shared state.
- React Hook Form for form state and submission.
- Tailwind CSS for styling.
- shadcn/ui for reusable interface primitives.
- pnpm as the package manager.

## Project structure

```text
src/
  app/                 # Routes, layouts, global styles, and page composition
  components/
    ui/                # shadcn/ui components
    ...                # Reusable application-wide components
  hooks/               # Shared React hooks
  lib/                 # Utilities and shared configuration
  store/               # Zustand stores
  types/               # Shared TypeScript types
```

Components are grouped for reuse across the application. The starter will not create a `src/features` directory.

## Rendering and state boundaries

Route pages and layouts use Server Components unless browser interaction or client-only state is needed. Interactive components are isolated as Client Components. Zustand stores are consumed only from client code. React Hook Form is used in client-side forms; no domain-specific forms are included in the starter.

## Initial experience

Provide a minimal home page that confirms the starter runs and demonstrates the shared component conventions without introducing business behavior. Configure the `@/*` import alias and the selected styling and UI libraries.

## Out of scope

- Authentication, API integration, database, and business-domain models.
- Example product, marketing, or dashboard flows.
- Feature-specific state or forms.
- Automated test framework setup.

## Acceptance criteria

- The project installs with pnpm and runs as a Next.js App Router application.
- TypeScript, Tailwind CSS, shadcn/ui configuration, Zustand, and React Hook Form are available.
- The source tree follows the approved shared-component structure and contains no `src/features` directory.
- The initial route renders a minimal starter page using the configured application shell.
