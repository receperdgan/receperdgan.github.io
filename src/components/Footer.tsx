export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 py-10 dark:border-zinc-900">
      <div className="mx-auto flex max-w-page flex-col items-start justify-between gap-3 px-6 font-mono text-xs uppercase tracking-widest text-zinc-500 sm:flex-row sm:items-center">
        <span>
          © {year} Recep Erdoğan · Built with React, Tailwind, and a few good
          opinions.
        </span>
        <a
          href="https://github.com/receperdgan/receperdgan.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline transition-colors hover:text-accent"
        >
          Source
        </a>
      </div>
    </footer>
  );
}
