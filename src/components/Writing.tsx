import { writing } from "../data/writing";
import { Section } from "./Section";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
});

export function Writing() {
  return (
    <Section
      id="writing"
      eyebrow="02 · Writing"
      title="Notes on software, AI, and the craft."
      intro="Short essays, mostly about what changes when agents start sharing the keyboard with engineers."
    >
      <ul className="divide-y divide-zinc-200 dark:divide-zinc-900">
        {writing.map((article) => {
          const date = dateFormatter.format(new Date(article.date));
          return (
            <li key={article.url} className="group">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="grid gap-4 py-8 no-underline md:grid-cols-[12rem_1fr] md:gap-12"
              >
                <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-zinc-500 font-num">
                  <span>{date}</span>
                  <span className="rounded-sm border border-zinc-300 px-1.5 py-0.5 text-[10px] text-zinc-500 dark:border-zinc-700">
                    {article.lang.toUpperCase()}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 transition-colors group-hover:text-accent dark:text-zinc-100">
                    {article.title}
                  </h3>
                  <p className="mt-2 max-w-prose text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-zinc-500 transition-colors group-hover:text-accent">
                    Read on Medium
                    <span aria-hidden="true">→</span>
                  </span>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
