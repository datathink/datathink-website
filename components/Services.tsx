import Link from "next/link";
import { AiScene, CodeScene, PackageScene } from "./SceneArt";

type SceneProps = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  cta: string;
  art: React.ReactNode;
  artOnLeft?: boolean;
};

export function Services() {
  return (
    <div className="bg-black">
      <Scene
        id="web"
        eyebrow="Web Engineering"
        title={
          <>
            Software, <em className="italic text-blue">built to last.</em>
          </>
        }
        body="Marketing sites, internal tools, customer portals, dashboards, full product UIs. TypeScript, Next.js, Postgres, modern design systems. DataThink builds web software that serves your users today — and that your team can maintain and extend for years to come."
        cta="See the web practice"
        art={<CodeScene />}
        artOnLeft={false}
      />
      <Scene
        id="packages"
        eyebrow="R Package Development"
        title={
          <>
            <em className="italic">R packages</em> that outlast the analyst who
            wrote them.
          </>
        }
        body="DataThink writes, tests, and maintains R packages — tidyverse-compatible, S4 where it matters, documented with roxygen, shipped to CRAN. The kind of statistical tooling that quietly runs inside dozens of teams' pipelines, year after year."
        cta="See our packages"
        art={<PackageScene />}
        artOnLeft
      />
      <Scene
        id="ai"
        eyebrow="Responsible AI"
        title={
          <>
            We use AI{" "}
            <em className="italic text-blue">when it actually helps.</em>
          </>
        }
        body="LLMs help us read faster, draft tests, scaffold migrations, and pressure-test analyses. We reach for them when they earn their keep — and not when they don't. Either way: auditable prompts, validated outputs, and no model decides anything alone."
        cta="See our AI principles"
        art={<AiScene />}
        artOnLeft={false}
      />
    </div>
  );
}

function Scene({ id, eyebrow, title, body, cta, art, artOnLeft }: SceneProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden border-t border-line bg-black"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-y-12 px-6 py-20 lg:grid-cols-2 lg:gap-x-16 lg:px-10 lg:py-32">
        <div
          className={`relative ${
            artOnLeft ? "lg:order-1" : "lg:order-2"
          } lg:pr-4`}
        >
          {art}
        </div>
        <div
          className={`${artOnLeft ? "lg:order-2" : "lg:order-1"} lg:max-w-xl`}
        >
          <div className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-blue">
            {eyebrow}
          </div>
          <h2 className="mt-5 font-display text-[44px] font-normal leading-[1.02] tracking-tight text-foreground sm:text-[56px] lg:text-[64px]">
            {title}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70 sm:text-lg">
            {body}
          </p>
          <Link
            href="#contact"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-[15px] font-semibold text-black transition-colors hover:bg-blue hover:text-foreground"
          >
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
