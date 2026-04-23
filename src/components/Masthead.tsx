export function Masthead() {
  return (
    <section id="top" className="pt-40 pb-28 sm:pt-48 sm:pb-40">
      <div className="mx-auto max-w-page px-6">
        <p className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          Antalya, TR · Available for remote collaboration
        </p>

        <h1 className="text-[2.25rem] font-semibold leading-[1.15] tracking-tightest text-zinc-900 sm:text-5xl sm:leading-[1.08] md:text-6xl dark:text-zinc-50">
          <span className="whitespace-nowrap">Recep Erdoğan.</span>
          <br className="hidden sm:inline" />{" "}
          <span className="text-zinc-400 dark:text-zinc-500">
            Senior software engineer
          </span>
          <br className="hidden sm:inline" />{" "}
          <span className="text-zinc-900 dark:text-zinc-50">
            building high&#8209;scale backends
          </span>
          <br className="hidden sm:inline" />{" "}
          <span className="text-zinc-900 dark:text-zinc-50">
            and <span className="text-accent">agentic developer tooling</span>.
          </span>
        </h1>

        <p className="mt-10 max-w-prose text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          I work on resilient backend architectures, migrate multi-decade legacy
          systems to modern cloud-native stacks, and drive AI-native development
          practices through agent frameworks, MCP servers, and observability
          tooling. Currently at{" "}
          <a
            href="https://www.sunexpress.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-900 dark:text-zinc-200"
          >
            SunExpress
          </a>
          .
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-widest text-zinc-500">
          <a
            href="mailto:rerdogan@receperdogan.dev"
            className="no-underline transition-colors hover:text-accent"
          >
            Email →
          </a>
          <a
            href="https://linkedin.com/in/erdoganr"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-colors hover:text-accent"
          >
            LinkedIn →
          </a>
          <a
            href="https://github.com/receperdgan"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-colors hover:text-accent"
          >
            GitHub →
          </a>
          <a
            href="https://medium.com/@receperdogan"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-colors hover:text-accent"
          >
            Medium →
          </a>
        </div>
      </div>
    </section>
  );
}
