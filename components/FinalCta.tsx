import Link from "next/link";

/**
 * Final dark CTA — analog for Robinhood's "Join a new generation of investors"
 * grainy black panel before the footer.
 */
export function FinalCta() {
  return (
    <section
      id="contact"
      className="grain relative overflow-hidden border-t border-line bg-black"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(61,122,255,0.12),transparent_70%)]" />

      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center px-6 py-32 text-center lg:px-10 lg:py-40">
        <h2 className="mx-auto max-w-4xl font-display text-[56px] font-normal leading-[0.98] tracking-tight text-foreground sm:text-[88px] lg:text-[112px]">
          Bring us <em className="italic text-blue">the part that's hard.</em>
        </h2>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="mailto:hello@datathink.io"
            className="inline-flex h-14 items-center justify-center rounded-full bg-blue px-8 text-[15px] font-semibold text-foreground transition-colors hover:bg-blue-2"
          >
            hello@datathink.io
          </Link>
          <Link
            href="#"
            className="inline-flex h-14 items-center justify-center rounded-full border border-line-strong px-8 text-[15px] font-medium text-foreground transition-colors hover:bg-white/5"
          >
            Schedule a call
          </Link>
        </div>
      </div>
    </section>
  );
}
