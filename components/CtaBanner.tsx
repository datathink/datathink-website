import Link from "next/link";

/**
 * Blue full-bleed CTA — analog for Robinhood's "Become a better investor" section.
 */
export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-blue">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(255,255,255,0.18), transparent 55%), radial-gradient(circle at 10% 95%, rgba(30,64,175,0.55), transparent 55%)",
        }}
      />
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center px-6 py-28 text-center lg:px-10 lg:py-36">
        <h2 className="mx-auto max-w-4xl font-display text-[48px] font-normal leading-[1.0] tracking-tight text-foreground sm:text-[72px] lg:text-[96px]">
          Hire the team that{" "}
          <em className="italic">cares about the long tail.</em>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/85 sm:text-lg">
          DataThink takes on a small number of engagements each quarter. If you
          have a question that won't fit in a spreadsheet, we want to hear about
          it.
        </p>
        <Link
          href="#contact"
          className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-foreground px-8 text-[15px] font-semibold text-black transition-colors hover:bg-white"
        >
          Start a project
        </Link>
      </div>
    </section>
  );
}
