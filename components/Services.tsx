import Link from "next/link";
import { CodeScene, PackageScene, TableScene } from "./SceneArt";

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
            Build the apps your{" "}
            <em className="not-italic text-blue">
              <span className="italic">data team</span>
            </em>{" "}
            actually wants to use.
          </>
        }
        body="Internal dashboards, customer portals, research tools, and product UIs. TypeScript, Next.js, and design systems that age well — built by the same people writing the data layer underneath."
        cta="See the web practice"
        art={<CodeScene />}
        artOnLeft={false}
      />
      <Scene
        id="packages"
        eyebrow="Statistical Packages"
        title={
          <>
            <em className="italic">Production-grade</em> statistics, far past
            the notebook.
          </>
        }
        body="DataThink develops, tests, and maintains R and Python packages — the kind that ship to CRAN and PyPI and quietly run inside dozens of teams' pipelines. Versioned, documented, reviewable."
        cta="See our packages"
        art={<PackageScene />}
        artOnLeft
      />
      <Scene
        id="data"
        eyebrow="Data Wrangling"
        title={
          <>
            The original craft.{" "}
            <em className="italic text-foreground/70">Now reproducible.</em>
          </>
        }
        body="Clean, reshape, and model the data that didn't come neatly. We work across Python, R, and SQL — pandas, polars, dplyr, duckdb, Postgres, Databricks — and leave behind scripted pipelines anyone can re-run."
        cta="See the data practice"
        art={<TableScene />}
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
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-foreground px-7 text-[15px] font-semibold text-black transition-colors hover:bg-blue"
          >
            {cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
