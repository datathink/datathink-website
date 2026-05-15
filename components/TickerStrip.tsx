const items = [
  "tidyverse",
  "pandas",
  "polars",
  "duckdb",
  "Stan",
  "Next.js",
  "TypeScript",
  "Postgres",
  "scikit-learn",
  "ggplot2",
  "rmarkdown",
  "Databricks",
  "Quarto",
  "Snowflake",
  "dplyr",
  "FastAPI",
  "Prisma",
  "Tailwind",
];

export function TickerStrip() {
  return (
    <div className="relative overflow-hidden border-y border-line bg-black py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-black to-transparent" />
      <div className="flex w-max animate-marquee items-center gap-12">
        <Row />
        <Row aria-hidden />
      </div>
    </div>
  );
}

function Row({ "aria-hidden": ariaHidden }: { "aria-hidden"?: boolean } = {}) {
  return (
    <div className="flex items-center gap-12" aria-hidden={ariaHidden}>
      {items.map((i) => (
        <span
          key={i}
          className="font-mono text-sm font-medium text-foreground/45"
        >
          {i}
        </span>
      ))}
    </div>
  );
}
