import Link from "next/link";

export function Hero() {
  return (
    <section className="scene-hero grain relative overflow-hidden">
      <div className="scene-curve" />
      <HeroBackdrop />

      <div className="relative mx-auto flex min-h-[100vh] max-w-[1400px] flex-col items-center justify-center px-6 pt-32 pb-24 lg:px-10">
        <div className="flex max-w-4xl flex-col items-center text-center">
          <h1 className="font-display text-[64px] font-normal leading-[0.98] tracking-[-0.025em] text-foreground sm:text-[88px] lg:text-[120px]">
            Statistics,
            <br />
            <span className="italic text-foreground/95">built right.</span>
          </h1>

          <p className="mt-7 max-w-xl text-balance text-base leading-relaxed text-foreground/75 sm:text-lg">
            DataThink builds modern web applications, develops production-grade
            statistical packages, and wrangles the data underneath. Get started
            with a working session, not a statement of work.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full bg-blue px-7 text-[15px] font-semibold text-foreground transition-colors hover:bg-blue-2"
            >
              Get started
            </Link>
            <Link
              href="#approach"
              className="inline-flex h-12 items-center justify-center rounded-full border border-line-strong px-7 text-[15px] font-medium text-foreground transition-colors hover:bg-white/5"
            >
              See our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Big atmospheric arc — analog for Robinhood's concrete curve */}
      <div className="absolute -right-[20%] -top-[10%] h-[120vh] w-[120vh] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.06),rgba(255,255,255,0.01)_60%,transparent_75%)]" />
      <div className="absolute -left-[30%] -bottom-[30%] h-[140vh] w-[140vh] rounded-full bg-[radial-gradient(circle_at_60%_40%,rgba(61,122,255,0.07),transparent_65%)]" />

      {/* Stylized data-line drifting across hero */}
      <svg
        className="absolute inset-x-0 bottom-0 w-full opacity-50"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        style={{ height: "40vh" }}
      >
        <title>data line</title>
        <defs>
          <linearGradient id="hero-line" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#3d7aff" stopOpacity="0" />
            <stop offset="35%" stopColor="#3d7aff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#3d7aff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#3d7aff" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#3d7aff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0,300 C160,260 240,320 360,280 C480,240 560,200 720,210 C880,220 960,170 1080,140 C1200,110 1320,160 1440,120 L1440,400 L0,400 Z"
          fill="url(#hero-area)"
        />
        <path
          d="M0,300 C160,260 240,320 360,280 C480,240 560,200 720,210 C880,220 960,170 1080,140 C1200,110 1320,160 1440,120"
          stroke="url(#hero-line)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
