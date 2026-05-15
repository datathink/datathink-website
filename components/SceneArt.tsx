/**
 * Stylized "scene" graphics that stand in for Robinhood's cinematic photography.
 * Each is a self-contained dark visual evoking the practice — code editor,
 * R package manifest, AI audit console — using only SVG + CSS.
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

export function AiScene() {
  return (
    <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[28px] border border-line-strong bg-gradient-to-br from-[#0e0e0e] via-[#0a0a0a] to-[#050505] shadow-[0_40px_120px_-40px_rgba(61,122,255,0.16)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(61,122,255,0.12),transparent_55%)]" />

      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-[11px]">
        <div className="flex items-center gap-2 text-foreground/60">
          <span className="inline-flex h-5 items-center rounded bg-blue/20 px-1.5 text-[10px] font-semibold text-blue">
            AUDIT
          </span>
          run · 0938.json
        </div>
        <div className="flex items-center gap-1.5 text-foreground/40">
          <span className="h-1.5 w-1.5 rounded-full bg-blue" />
          reviewed · 2026-05-14
        </div>
      </div>

      <div className="grid h-[calc(100%-44px)] grid-rows-[auto_1fr_auto] font-mono text-[11px] leading-[1.6]">
        {/* Prompt */}
        <div className="border-b border-line px-5 py-3.5">
          <div className="text-[10px] uppercase tracking-wider text-foreground/40">
            Prompt
          </div>
          <div className="mt-1.5 text-foreground/85">
            <span className="text-blue">›</span> Summarize Q3 cohort retention
            and flag any segment with{" "}
            <span className="text-foreground">CI lower bound</span> below the
            target.
          </div>
        </div>

        {/* Run metadata + steps */}
        <div className="px-5 py-3.5">
          <div className="grid grid-cols-[110px_1fr] gap-y-2 text-foreground/70">
            <div className="text-foreground/40">Model</div>
            <div className="text-foreground/90">
              claude-opus-4.7 · temp 0.2 · seed 42
            </div>

            <div className="text-foreground/40">Sources</div>
            <div className="text-foreground/90">
              4 internal datasets ·{" "}
              <span className="text-blue">cited inline</span>
            </div>

            <div className="text-foreground/40">Tool calls</div>
            <div className="flex flex-wrap gap-1.5">
              {[
                "read_csv",
                "fit_cohort_model",
                "validate",
                "render_report",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-line bg-white/[0.02] px-1.5 py-0.5 text-[10px] text-foreground/75"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="text-foreground/40">Validation</div>
            <div className="text-foreground/90">
              held-out check <span className="text-blue">·</span> 94.1% match{" "}
              <span className="text-foreground/40">vs. ground truth</span>
            </div>

            <div className="text-foreground/40">Human review</div>
            <div className="flex items-center gap-1.5 text-blue">
              <svg
                width="11"
                height="11"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <title>approved</title>
                <path
                  d="M3 7.5l2.5 2.5L11 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Approved by E. Glenn
            </div>
          </div>
        </div>

        {/* Footer hash */}
        <div className="flex items-center justify-between border-t border-line bg-black/40 px-5 py-2.5 text-[10px] text-foreground/40">
          <span>sha256 · 7a4f…e21b</span>
          <span>reproducible · ✓</span>
        </div>
      </div>
    </div>
  );
}
