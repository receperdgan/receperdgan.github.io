import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section
      id={id}
      className="border-t border-zinc-200 py-24 sm:py-32 dark:border-zinc-900"
    >
      <div className="mx-auto max-w-page px-6">
        <header className="mb-16 grid gap-8 md:grid-cols-[12rem_1fr] md:gap-12">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
          <div className="max-w-prose">
            <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
              {title}
            </h2>
            {intro ? (
              <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                {intro}
              </p>
            ) : null}
          </div>
        </header>
        {children}
      </div>
    </section>
  );
}
