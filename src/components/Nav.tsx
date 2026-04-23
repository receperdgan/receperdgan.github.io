import { useEffect, useState } from "react";

interface NavProps {
  theme: "light" | "dark";
  onToggle: () => void;
}

const sections = [
  { id: "work", label: "Work" },
  { id: "writing", label: "Writing" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Nav({ theme, onToggle }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-200/60 dark:bg-zinc-950/80 dark:border-zinc-800/60"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-14 max-w-page items-center justify-between px-6 text-sm">
        <a
          href="#top"
          className="font-mono text-xs tracking-wider text-zinc-500 no-underline hover:text-zinc-900 dark:hover:text-zinc-100"
        >
          recep<span className="text-accent">.</span>erdogan
        </a>

        <div className="flex items-center gap-7">
          <ul className="hidden items-center gap-6 sm:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-zinc-600 no-underline transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={onToggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            className="font-mono text-xs uppercase tracking-widest text-zinc-500 transition-colors hover:text-accent"
          >
            {theme === "light" ? "dark" : "light"}
          </button>
        </div>
      </nav>
    </header>
  );
}
