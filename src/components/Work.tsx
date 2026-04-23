import { experience } from "../data/experience";
import { Section } from "./Section";

export function Work() {
  return (
    <Section
      id="work"
      eyebrow="01 · Work"
      title="Selected work"
      intro="Three years of backend-heavy engineering across aviation, telecom, and music tech. Recurring themes: legacy modernization, performance, and designing systems junior engineers can safely extend."
    >
      <ol className="space-y-20">
        {experience.map((role, i) => (
          <li
            key={role.company}
            className="grid gap-6 md:grid-cols-[12rem_1fr] md:gap-12"
          >
            <div className="md:sticky md:top-24 md:self-start">
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-num">
                {String(i + 1).padStart(2, "0")} / {role.period}
              </p>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">
                {role.location}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                <a
                  href={role.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline hover:text-accent"
                >
                  {role.company}
                </a>
                <span className="ml-3 text-sm font-normal text-zinc-500">
                  {role.role}
                </span>
              </h3>

              <ul className="mt-6 space-y-4 text-[15px] leading-relaxed text-zinc-700 dark:text-zinc-300">
                {role.bullets.map((b, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-[0.85em] h-px w-4 shrink-0 bg-zinc-300 dark:bg-zinc-700"
                    />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-mono text-xs text-zinc-500 dark:text-zinc-500">
                {role.stack.join(" · ")}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
