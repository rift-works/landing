"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import type { Locale } from "@/lib/i18n";
import { getCopy } from "@/lib/site";

export function Phases({ locale }: { locale: Locale }) {
  const c = getCopy(locale);
  const [current, setCurrent] = useState(0);
  const active = c.phaseDetail[current] ?? c.phaseDetail[0];

  return (
    <section className="rw-split">
      <Reveal>
        <span className="rw-kicker">{c.phasesKicker}</span>
        <h2 className="rw-display">{c.phasesHead}</h2>
        <p className="rw-lead">{c.phasesLead}</p>
      </Reveal>
      <Reveal delay={80}>
        <div className="rw-phase-bars">
          {c.phaseDetail.map((phase, index) => {
            const isCurrent = index === current;
            const done = index < current;
            return (
              <button
                key={phase.name}
                type="button"
                className="rw-phase-bar"
                aria-pressed={isCurrent}
                onClick={() => setCurrent(index)}
              >
                <span
                  className="rw-phase-meter"
                  style={{
                    background: isCurrent
                      ? "var(--rw-accent)"
                      : done
                        ? "var(--rw-invert)"
                        : "var(--rw-rule)",
                  }}
                />
                <span
                  style={{
                    font: `${isCurrent ? "var(--rw-weight-medium)" : "var(--rw-weight-regular)"} 9px/1 var(--rw-font-mono)`,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: isCurrent ? "var(--rw-accent-text)" : "var(--rw-text-secondary)",
                  }}
                >
                  {phase.name}
                </span>
              </button>
            );
          })}
        </div>
        <p className="rw-phase-code">{active.code}</p>
        <p className="rw-phase-body">{active.body}</p>
      </Reveal>
    </section>
  );
}
