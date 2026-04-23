import { Section } from "./Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="04 · Contact"
      title="Let’s talk."
      intro="Open to staff/senior backend and platform-engineering roles, agentic tooling work, and thoughtful conversations about the AI-assisted SDLC."
    >
      <div className="grid gap-6 md:grid-cols-[12rem_1fr] md:gap-12">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          Best reached at
        </p>

        <div>
          <a
            href="mailto:rerdogan@receperdogan.dev"
            className="inline-block text-2xl font-semibold text-zinc-900 transition-colors hover:text-accent sm:text-3xl dark:text-zinc-100"
          >
            rerdogan@receperdogan.dev
          </a>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
            <a
              href="https://linkedin.com/in/erdoganr"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-colors hover:text-accent"
            >
              LinkedIn / erdoganr
            </a>
            <a
              href="https://github.com/receperdgan"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-colors hover:text-accent"
            >
              GitHub / receperdgan
            </a>
            <a
              href="https://medium.com/@receperdogan"
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline transition-colors hover:text-accent"
            >
              Medium / @receperdogan
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
