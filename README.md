<img width="1512" height="826" alt="Ảnh màn hình 2026-10-12 lúc 15 26 13" src="https://github.com/user-attachments/assets/feb9fd57-4e60-4c23-96b9-43ff800b60e1" />

# Web Starter

A reusable Next.js starter using the App Router, TypeScript, Zustand, React Hook Form, Tailwind CSS, and shadcn/ui.

## Requirements

- Node.js 20.9 or newer
- pnpm

## Start developing

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Create routes in `src/app` and compose them from reusable components.

## Architecture

Next.js pages and layouts are Server Components by default and render on the server. Use Client Components for browser interaction, React Hook Form, and Zustand state.

- `src/app`: routes, layouts, global styles, and page composition
- `src/components`: shared application components
- `src/components/ui`: shadcn/ui primitives
- `src/hooks`: shared React hooks
- `src/lib`: utilities and shared configuration
- `src/store`: Zustand stores
- `src/types`: shared TypeScript types

The `@/*` import alias points to `src/*`. shadcn/ui is configured to use Base UI primitives and Tailwind CSS v4.
