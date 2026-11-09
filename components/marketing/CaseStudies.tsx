import { Reveal } from "@/components/motion/Reveal";
import type { Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/site";

export function CaseStudies({ locale }: { locale: Locale }) {
  const c = getCopy(locale);

  return (
    <section className="rw-section" style={{ borderTop: "1px solid var(--rw-border)" }}>
      <Reveal>
        <span className="rw-kicker">{c.caseStudiesKicker}</span>
        <h2 className="rw-display">{c.caseStudiesHead}</h2>
        <p className="rw-lead">{c.caseStudiesLead}</p>
      </Reveal>

      <div style={{ marginTop: 44, display: "flex", flexDirection: "column", gap: 32 }}>
        {c.caseStudies.map((cs) => (
          <Reveal key={cs.id} delay={60}>
            <article
              style={{
                background: "var(--rw-surface-raised)",
                border: "1px solid var(--rw-border)",
                padding: "clamp(24px, 4vw, 44px)",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: 40,
                alignItems: "start",
              }}
            >
              {/* Left Column: Case Information & Outputs */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                  <span
                    style={{
                      font: "var(--rw-weight-medium) 10px/1 var(--rw-font-mono)",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      padding: "4px 8px",
                      background: "var(--rw-accent)",
                      color: "#FBFAF7",
                    }}
                  >
                    {cs.badge}
                  </span>
                  <span
                    style={{
                      font: "var(--rw-weight-medium) 11px/1 var(--rw-font-mono)",
                      letterSpacing: "0.1em",
                      color: "var(--rw-text-secondary)",
                    }}
                  >
                    {cs.code} · {cs.client}
                  </span>
                </div>

                <h3
                  style={{
                    margin: 0,
                    font: "var(--rw-weight-semibold) clamp(22px, 3vw, 30px)/1.15 var(--rw-font-sans)",
                    letterSpacing: "var(--rw-h2-track)",
                    color: "var(--rw-text)",
                  }}
                >
                  {cs.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    font: "var(--rw-weight-regular) 15px/1.6 var(--rw-font-sans)",
                    color: "var(--rw-text-secondary)",
                  }}
                >
                  {cs.summary}
                </p>

                {/* Outputs List */}
                <div style={{ borderTop: "1px solid var(--rw-border-inner)", paddingTop: 20 }}>
                  <p
                    style={{
                      margin: "0 0 12px",
                      font: "var(--rw-weight-medium) 10px/1 var(--rw-font-mono)",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--rw-text)",
                    }}
                  >
                    {c.caseStudiesOutputsLabel}
                  </p>
                  <ul style={{ margin: 0, paddingLeft: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                    {cs.outputs.map((out) => (
                      <li
                        key={out}
                        style={{
                          font: "var(--rw-weight-regular) 13.5px/1.5 var(--rw-font-sans)",
                          color: "var(--rw-text-secondary)",
                        }}
                      >
                        {out}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
                  <a
                    href={cs.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      border: "1px solid var(--rw-invert)",
                      padding: "8px 16px",
                      background: "transparent",
                      color: "var(--rw-text)",
                      font: "var(--rw-weight-semibold) var(--rw-button-size)/1 var(--rw-font-mono)",
                      letterSpacing: "var(--rw-button-track)",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      minHeight: 40,
                    }}
                  >
                    {c.caseStudiesVisit} ↗
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Product Schematic & Verified Metrics */}
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {/* Metrics Grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: 12,
                  }}
                >
                  {cs.metrics.map((m) => (
                    <div
                      key={m.label}
                      style={{
                        border: "1px solid var(--rw-border-inner)",
                        background: "var(--rw-surface-base)",
                        padding: "16px 18px",
                      }}
                    >
                      <span
                        style={{
                          display: "block",
                          font: "var(--rw-weight-medium) 9.5px/1 var(--rw-font-mono)",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "var(--rw-text-secondary)",
                          marginBottom: 8,
                        }}
                      >
                        {m.label}
                      </span>
                      <span
                        style={{
                          display: "block",
                          font: "var(--rw-weight-semibold) 18px/1.2 var(--rw-font-sans)",
                          color: "var(--rw-text)",
                        }}
                      >
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technical Product Schematic (Editorial UI Representation) */}
                <div
                  style={{
                    border: "1px solid var(--rw-border)",
                    background: "var(--rw-invert)",
                    color: "#EDE9E3",
                    padding: 24,
                    fontFamily: "var(--rw-font-mono)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderBottom: "1px solid rgba(237,233,227,0.2)",
                      paddingBottom: 12,
                      marginBottom: 16,
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "rgba(237,233,227,0.7)",
                    }}
                  >
                    <span>CANELA ECOSYSTEM · ARCHITECTURE</span>
                    <span style={{ color: "#FF6A33" }}>● LIVE</span>
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div
                      style={{
                        padding: "12px 14px",
                        background: "rgba(237,233,227,0.06)",
                        borderLeft: "2px solid #FF6A33",
                        fontSize: 12,
                        lineHeight: 1.5,
                      }}
                    >
                      <div style={{ color: "rgba(237,233,227,0.5)", fontSize: 9.5, letterSpacing: "0.1em" }}>
                        CLIENT APP · DISPATCH PIPELINE
                      </div>
                      <div style={{ color: "#EDE9E3", marginTop: 4, fontFamily: "var(--rw-font-sans)", fontWeight: 500 }}>
                        {locale === "es"
                          ? "Orden #4092 · Entregado a domicilio en Managua"
                          : "Order #4092 · Delivered to doorstep in Managua"}
                      </div>
                    </div>

                    <div
                      style={{
                        padding: "12px 14px",
                        background: "rgba(237,233,227,0.06)",
                        borderLeft: "2px solid #15693F",
                        fontSize: 12,
                        lineHeight: 1.5,
                      }}
                    >
                      <div style={{ color: "rgba(237,233,227,0.5)", fontSize: 9.5, letterSpacing: "0.1em" }}>
                        HEALTH RECORD · SYNCHRONIZATION
                      </div>
                      <div style={{ color: "#EDE9E3", marginTop: 4, fontFamily: "var(--rw-font-sans)", fontWeight: 500 }}>
                        {locale === "es"
                          ? "Expediente digital activo · Carnet de vacunas verificado"
                          : "Active digital health record · Verified vaccination ledger"}
                      </div>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingTop: 8,
                        fontSize: 10.5,
                        color: "rgba(237,233,227,0.5)",
                      }}
                    >
                      <span>IOS / ANDROID CLIENTS</span>
                      <span>100% FAULT-TOLERANT</span>
                    </div>
                  </div>
                </div>

                {/* Tech Tags */}
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {cs.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        font: "var(--rw-weight-regular) 10px/1 var(--rw-font-mono)",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        padding: "6px 10px",
                        border: "1px solid var(--rw-border-inner)",
                        color: "var(--rw-text-secondary)",
                        background: "var(--rw-surface-base)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
