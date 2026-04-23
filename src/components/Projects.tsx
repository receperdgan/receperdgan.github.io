import { projects } from "../data/projects";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 · Projects"
      title="Selected open source"
      intro="A few repositories I return to — microservices studies, transaction deep-dives, and production-shaped utilities."
    >
      <ul className="grid gap-px bg-zinc-200 dark:bg-zinc-900 md:grid-cols-3">
        {projects.map((p) => (
          <li key={p.title} className="bg-white p-8 dark:bg-zinc-950">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {p.title}
              </h3>
              <a
                href={p.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.title} on GitHub`}
                className="shrink-0 text-zinc-500 no-underline transition-colors hover:text-accent"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577 0-.286-.01-1.04-.016-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.107-.775.42-1.305.762-1.604-2.665-.304-5.467-1.334-5.467-5.932 0-1.31.468-2.382 1.236-3.222-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 016.003 0c2.293-1.552 3.3-1.23 3.3-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.913 1.235 3.222 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.9-.015 3.293 0 .319.217.694.825.576C20.565 21.796 24 17.297 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {p.summary}
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-zinc-500">
              {p.stack.join(" · ")}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-center font-mono text-xs uppercase tracking-widest text-zinc-500">
        <a
          href="https://github.com/receperdgan"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline transition-colors hover:text-accent"
        >
          See more on GitHub →
        </a>
      </p>
    </Section>
  );
}
