const guarantees = [
  {
    title: "Senior engineers write the code.",
    body: "Not handed off, not abstracted behind an account manager. The same people on the kickoff call ship the code.",
  },
  {
    title: "Reproducible by default.",
    body: "Every pipeline, every model, every analysis runs the same way the next time you touch it.",
  },
  {
    title: "We document the boring parts.",
    body: "Onboarding notes, run-books, and decision logs so your team owns what we built when we leave.",
  },
  {
    title: "Available when it matters.",
    body: "Working remotely with teams in 14 states. Headquartered in Rexburg, Idaho — on your hours, not ours.",
  },
];

export function Approach() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden border-t border-line bg-ink-2"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-blue">
            How we work
          </div>
          <h2 className="mt-4 font-display text-[44px] font-normal leading-[1.02] tracking-tight text-foreground sm:text-[56px] lg:text-[64px]">
            The <em className="italic">DataThink</em> guarantee.
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {guarantees.map((g) => (
            <div
              key={g.title}
              className="bg-ink-2 p-8 transition-colors hover:bg-ink-3 lg:p-10"
            >
              <Diamond />
              <h3 className="mt-5 font-display text-2xl leading-snug text-foreground">
                {g.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                {g.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Diamond() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <title>mark</title>
      <path
        d="M20 4 L36 20 L20 36 L4 20 Z"
        stroke="#3d7aff"
        strokeWidth="1.4"
        fill="none"
      />
      <path
        d="M20 12 L28 20 L20 28 L12 20 Z"
        fill="#3d7aff"
        fillOpacity="0.18"
        stroke="#3d7aff"
        strokeWidth="1"
      />
      <circle cx="20" cy="20" r="2" fill="#3d7aff" />
    </svg>
  );
}
