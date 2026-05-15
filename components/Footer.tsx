import Link from "next/link";
import { Logo } from "./Logo";

const productCol = [
  { l: "Web", href: "#web" },
  { l: "Packages", href: "#packages" },
  { l: "Data wrangling", href: "#data" },
  { l: "Approach", href: "#approach" },
];

const companyCol = [
  { l: "About", href: "#" },
  { l: "Writing", href: "#" },
  { l: "Partner with us", href: "#contact" },
  { l: "Careers", href: "#" },
];

const contactCol = [
  { l: "hello@datathink.io", href: "mailto:hello@datathink.io" },
  { l: "Rexburg, Idaho 83440", href: "#" },
  { l: "GitHub", href: "#" },
  { l: "LinkedIn", href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-blue text-foreground">
      <div className="mx-auto max-w-[1400px] px-6 pt-20 pb-0 lg:px-10 lg:pt-24">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-5 max-w-[14rem] text-[13px] leading-relaxed text-foreground/75">
              A software and statistics studio. We build what comes after the
              analysis.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <Social label="GitHub">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.55 0-.27-.01-1-.02-1.96-3.2.69-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39.99 0 1.98.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.07.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.35.78 1.05.78 2.11 0 1.52-.01 2.74-.01 3.12 0 .3.21.66.8.55C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
              </Social>
              <Social label="LinkedIn">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 11.01-4.13 2.06 2.06 0 010 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
              </Social>
              <Social label="X">
                <path d="M18.244 2H21.5l-7.4 8.46L23 22h-6.78l-5.32-6.95L4.84 22H1.58l7.92-9.06L1 2h6.92l4.81 6.36L18.244 2zm-1.19 18h1.83L7.04 4H5.1l11.95 16z" />
              </Social>
            </div>
          </div>

          <Col title="Practice" items={productCol} />
          <Col title="Studio" items={companyCol} />
          <Col title="Contact" items={contactCol} />
        </div>

        <div className="mt-16 max-w-3xl text-[11px] leading-relaxed text-foreground/70">
          <p>
            DataThink is an independent software and statistics studio.
            Engagements are scoped per project; no equity, no retainer minimums.
            We do not provide investment advice, legal advice, or medical
            analysis. All work is delivered under mutual NDA.
          </p>
          <p className="mt-3">
            Statistical packages published to CRAN and PyPI by DataThink are
            licensed under the MIT license unless otherwise specified.
            Reproducibility guarantees apply only to pipelines delivered as part
            of an active engagement.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/20 pt-6 text-[12px] text-foreground/70">
          <div>© {new Date().getFullYear()} DataThink, LLC.</div>
          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground">
              Terms
            </Link>
            <span className="font-mono">Rexburg, ID 83440</span>
          </div>
        </div>

        {/* Giant brand wordmark */}
        <div
          aria-hidden="true"
          className="-mb-[3vw] mt-12 select-none overflow-hidden text-center"
        >
          <span className="block whitespace-nowrap font-display text-[18vw] font-medium leading-[0.85] tracking-[-0.04em] text-foreground">
            DataThink
          </span>
        </div>
      </div>
    </footer>
  );
}

function Col({
  title,
  items,
}: {
  title: string;
  items: { l: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/65">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((it) => (
          <li key={it.l}>
            <Link
              href={it.href}
              className="text-[14px] font-medium text-foreground transition-colors hover:opacity-70"
            >
              {it.l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Social({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href="#"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-foreground transition-colors hover:bg-foreground hover:text-blue"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <title>{label}</title>
        {children}
      </svg>
    </Link>
  );
}
