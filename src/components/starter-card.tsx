import { Button } from "@/components/ui/button";

export function StarterCard() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-16 sm:px-10">
      <section
        aria-labelledby="starter-title"
        className="w-full max-w-2xl rounded-2xl border bg-card p-8 shadow-sm sm:p-12"
      >
        <p className="text-sm font-medium text-muted-foreground">
          Next.js App Router
        </p>
        <h1
          id="starter-title"
          className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          Your starter is ready.
        </h1>
        <p className="mt-4 max-w-xl text-muted-foreground">
          Build pages from shared components. Server Components are the
          default; add client state and browser interaction only where needed.
        </p>
        <div className="mt-8">
          <Button
            nativeButton={false}
            render={
              <a
                href="https://ui.shadcn.com/docs/components/button"
                target="_blank"
                rel="noreferrer"
              />
            }
          >
            Explore shadcn/ui
          </Button>
        </div>
      </section>
    </main>
  );
}
