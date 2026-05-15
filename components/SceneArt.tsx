/**
 * Stylized "scene" graphics that stand in for Robinhood's cinematic photography.
 * Each is a self-contained dark visual evoking the practice — code editor,
 * package manifest, data table — using only SVG + CSS.
 */

export function CodeScene() {
  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[28px] border border-line-strong bg-gradient-to-br from-[#0e0e0e] via-[#0a0a0a] to-[#050505] shadow-[0_40px_120px_-40px_rgba(61,122,255,0.18)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_15%,rgba(61,122,255,0.12),transparent_50%)]" />

      {/* Browser chrome */}
      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="font-mono text-[11px] text-foreground/40">
          app.datathink.io / dashboard
        </div>
        <div className="h-2.5 w-12" />
      </div>

      {/* App shell */}
      <div className="grid h-[calc(100%-44px)] grid-cols-[140px_1fr]">
        <aside className="border-r border-line bg-black/40 px-3 py-4">
          <div className="mb-3 font-mono text-[10px] uppercase tracking-wider text-foreground/40">
            Workspace
          </div>
          {["Overview", "Cohorts", "Forecasts", "Experiments", "Reports"].map(
            (n, i) => (
              <div
                key={n}
                className={`mb-1 rounded-md px-2 py-1.5 text-[11px] ${
                  i === 2 ? "bg-blue/15 text-blue" : "text-foreground/60"
                }`}
              >
                {n}
              </div>
            ),
          )}
        </aside>

        <div className="relative p-5">
          <div className="flex items-baseline justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-wider text-foreground/40">
                Q3 Forecast · weekly
              </div>
              <div className="mt-1 font-display text-2xl text-foreground">
                $1.846M{" "}
                <span className="ml-1 text-sm font-medium text-blue">
                  +18.4%
                </span>
              </div>
            </div>
            <div className="flex gap-1 rounded-full border border-line p-1 text-[10px]">
              {["1W", "1M", "1Q"].map((t, i) => (
                <span
                  key={t}
                  className={`rounded-full px-2 py-0.5 ${
                    i === 2 ? "bg-foreground text-black" : "text-foreground/60"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <svg
            viewBox="0 0 400 160"
            preserveAspectRatio="none"
            className="mt-4 h-[55%] w-full"
            aria-hidden="true"
          >
            <title>forecast preview</title>
            <defs>
              <linearGradient id="code-area" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#3d7aff" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#3d7aff" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[30, 70, 110].map((y) => (
              <line
                key={y}
                x1="0"
                x2="400"
                y1={y}
                y2={y}
                stroke="rgba(255,255,255,0.06)"
                strokeDasharray="3 4"
              />
            ))}
            <path
              d="M0,120 L40,110 L80,115 L120,90 L160,80 L200,70 L240,52 L280,40 L320,30 L360,22 L400,15 L400,160 L0,160 Z"
              fill="url(#code-area)"
            />
            <path
              d="M0,120 L40,110 L80,115 L120,90 L160,80 L200,70 L240,52 L280,40 L320,30 L360,22 L400,15"
              stroke="#3d7aff"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="400" cy="15" r="3.5" fill="#3d7aff" />
          </svg>

          <div className="mt-4 grid grid-cols-3 gap-2 text-[10px]">
            {[
              { l: "MAE", v: "0.012" },
              { l: "Coverage", v: "94.1%" },
              { l: "R²", v: "0.946" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-lg border border-line bg-white/[0.02] px-2.5 py-2"
              >
                <div className="text-foreground/50">{s.l}</div>
                <div className="mt-0.5 font-mono text-sm text-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function PackageScene() {
  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[28px] border border-line-strong bg-gradient-to-br from-[#0e0e0e] via-[#0a0a0a] to-[#050505] shadow-[0_40px_120px_-40px_rgba(61,122,255,0.14)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_85%,rgba(61,122,255,0.10),transparent_55%)]" />

      <div className="flex items-center justify-between border-b border-line px-5 py-3">
        <div className="flex items-center gap-2 font-mono text-[11px] text-foreground/60">
          <span className="inline-flex h-5 items-center rounded bg-blue/20 px-1.5 text-[10px] font-semibold text-blue">
            CRAN
          </span>
          datathink/forecastr
        </div>
        <div className="font-mono text-[11px] text-foreground/40">v2.4.0</div>
      </div>

      <div className="grid h-[calc(100%-44px)] grid-cols-1 lg:grid-cols-[1fr_1fr]">
        {/* DESCRIPTION */}
        <div className="border-line p-5 font-mono text-[11px] leading-[1.7] text-foreground/75 lg:border-r">
          <div className="text-foreground/40">DESCRIPTION</div>
          <div className="mt-1.5">
            <span className="text-foreground/50">Package: </span>
            <span className="text-foreground">forecastr</span>
          </div>
          <div>
            <span className="text-foreground/50">Title: </span>Hierarchical
            Forecasting Models
          </div>
          <div>
            <span className="text-foreground/50">Version: </span>2.4.0
          </div>
          <div>
            <span className="text-foreground/50">Authors@R: </span>
            DataThink
          </div>
          <div>
            <span className="text-foreground/50">Depends: </span>R (≥ 4.2)
          </div>
          <div>
            <span className="text-foreground/50">Imports: </span>
            <br />
            <span className="ml-3 text-foreground/80">
              tibble, dplyr, rlang,
            </span>
            <br />
            <span className="ml-3 text-foreground/80">cmdstanr, posterior</span>
          </div>
          <div className="mt-1">
            <span className="text-foreground/50">License: </span>MIT
          </div>
          <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-blue/15 px-2 py-0.5 text-[10px] text-blue">
            ✓ R CMD check — 0 errors, 0 warnings
          </div>
        </div>

        {/* CODE */}
        <div className="p-5 font-mono text-[11px] leading-[1.7]">
          <div className="text-foreground/40">forecastr.R</div>
          <div className="mt-1.5">
            <span className="text-[#c792ea]">forecast_hb</span>
            <span className="text-foreground/70"> &lt;- </span>
            <span className="text-[#82aaff]">function</span>
            <span className="text-foreground/70">(data, horizon = 12) </span>
            <span className="text-foreground/40">{"{"}</span>
          </div>
          <div className="ml-3">
            <span className="text-foreground/40"># fit hierarchical model</span>
          </div>
          <div className="ml-3">
            <span className="text-foreground/70">fit </span>
            <span className="text-foreground/70">&lt;- </span>
            <span className="text-[#c792ea]">cmdstanr::sample</span>
            <span className="text-foreground/70">(</span>
          </div>
          <div className="ml-6 text-foreground/80">stan_model,</div>
          <div className="ml-6 text-foreground/80">
            data = <span className="text-[#3d7aff]">stan_data</span>,
          </div>
          <div className="ml-6 text-foreground/80">chains = 4,</div>
          <div className="ml-6 text-foreground/80">iter = 2000</div>
          <div className="ml-3 text-foreground/70">)</div>
          <div>
            <span className="text-foreground/40">{"}"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TableScene() {
  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[28px] border border-line-strong bg-gradient-to-br from-[#0e0e0e] via-[#0a0a0a] to-[#050505] shadow-[0_40px_120px_-40px_rgba(61,122,255,0.14)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(61,122,255,0.10),transparent_55%)]" />

      <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-[11px]">
        <div className="flex items-center gap-2 text-foreground/60">
          <span className="inline-flex h-5 items-center rounded bg-white/10 px-1.5 text-[10px] font-semibold text-foreground/80">
            SQL
          </span>
          duckdb · cohorts.parquet
        </div>
        <div className="text-foreground/40">2,847 rows</div>
      </div>

      <div className="grid h-[calc(100%-44px)] grid-rows-[auto_1fr]">
        {/* Query */}
        <div className="border-b border-line p-5 font-mono text-[11px] leading-[1.75]">
          <div className="text-foreground/40">query.sql</div>
          <div className="mt-1.5 text-foreground/80">
            <span className="text-[#82aaff]">SELECT</span> cohort_month,
          </div>
          <div className="ml-7 text-foreground/80">
            <span className="text-[#c792ea]">avg</span>(ltv){" "}
            <span className="text-[#82aaff]">AS</span> mean_ltv,
          </div>
          <div className="ml-7 text-foreground/80">
            <span className="text-[#c792ea]">quantile_cont</span>(ltv, 0.5){" "}
            <span className="text-[#82aaff]">AS</span> p50
          </div>
          <div className="text-foreground/80">
            <span className="text-[#82aaff]">FROM</span> users{" "}
            <span className="text-[#82aaff]">GROUP BY</span> cohort_month
          </div>
        </div>

        {/* Result table */}
        <div className="overflow-hidden p-5">
          <div className="grid grid-cols-[1.4fr_1fr_1fr] gap-x-3 border-b border-line pb-1.5 font-mono text-[10px] uppercase tracking-wider text-foreground/40">
            <div>cohort_month</div>
            <div>mean_ltv</div>
            <div>p50</div>
          </div>
          {[
            ["2026-01", "$284.10", "$210.00"],
            ["2026-02", "$311.74", "$248.50"],
            ["2026-03", "$298.02", "$226.00"],
            ["2026-04", "$342.91", "$272.50"],
            ["2026-05", "$361.18", "$295.00", true],
          ].map(([m, mean, p50, hl], _i) => (
            <div
              key={m as string}
              className={`grid grid-cols-[1.4fr_1fr_1fr] gap-x-3 border-b border-line/60 py-1.5 font-mono text-[11px] ${
                hl ? "text-blue" : "text-foreground/85"
              }`}
            >
              <div>{m}</div>
              <div>{mean}</div>
              <div>{p50}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
