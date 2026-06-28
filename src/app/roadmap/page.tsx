"use client";
import React, { useState } from "react";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

type Lang = "pt" | "en";

const DICT = {
  pt: {
    eyebrow: "ROADMAP",
    title: "Nossa jornada e o que vem por aí",
    sub: "Acompanhe o que já construímos, o que está em andamento e o que planejamos para o futuro.",
    phases: [
      {
        status: "EM DESENVOLVIMENTO",
        statusColor: "#1F54AC",
        statusBg: "#DCE7FA",
        period: "Q2 2026",
        title: "Construção",
        desc: "Estamos construindo o MVP do Lake Finance. Cada feature é desenvolvida com foco em qualidade e experiência do usuário.",
        items: [
          "Desenvolvimento do MVP",
          "Integração com Open Finance Brasil",
          "Categorização automática com IA",
          "Health Score v1",
          "Copiloto financeiro Lakefi",
          "App iOS e Android",
        ],
      },
      {
        status: "PLANEJADO",
        statusColor: "#9B6B1A",
        statusBg: "#FEF3C7",
        period: "Q3 2026",
        title: "Fundação",
        desc: "Lançamento para os primeiros usuários e refinamento com base no feedback.",
        items: [
          "A definir",
        ],
      },
      {
        status: "EM BREVE",
        statusColor: "#6B6B6B",
        statusBg: "#F3F3F3",
        period: "Q4 2026",
        title: "Crescimento",
        desc: "Expansão de funcionalidades e abertura para novos perfis de usuários.",
        items: [
          "A definir",
        ],
      },
    ],
    cta: {
      title: "Tem uma sugestão?",
      desc: "Adoramos ouvir dos nossos usuários. Mande sua ideia e pode entrar no próximo ciclo.",
      btn: "Enviar sugestão",
    },
  },
  en: {
    eyebrow: "ROADMAP",
    title: "Our journey and what's coming",
    sub: "Follow what we've built, what's in progress, and what we're planning for the future.",
    phases: [
      {
        status: "IN DEVELOPMENT",
        statusColor: "#1F54AC",
        statusBg: "#DCE7FA",
        period: "Q2 2026",
        title: "Building",
        desc: "We're building the Lake Finance MVP. Every feature is developed with a focus on quality and user experience.",
        items: [
          "MVP development",
          "Open Finance Brazil integration",
          "AI-powered automatic categorization",
          "Health Score v1",
          "Lakefi financial copilot",
          "iOS and Android app",
        ],
      },
      {
        status: "PLANNED",
        statusColor: "#9B6B1A",
        statusBg: "#FEF3C7",
        period: "Q3 2026",
        title: "Foundation",
        desc: "Launch to first users and refinement based on feedback.",
        items: [
          "To be defined",
        ],
      },
      {
        status: "COMING SOON",
        statusColor: "#6B6B6B",
        statusBg: "#F3F3F3",
        period: "Q4 2026",
        title: "Growth",
        desc: "Feature expansion and opening to new user profiles.",
        items: [
          "To be defined",
        ],
      },
    ],
    cta: {
      title: "Have a suggestion?",
      desc: "We love hearing from our users. Send your idea and it might make it into the next cycle.",
      btn: "Send suggestion",
    },
  },
};

export default function RoadmapPage() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = DICT[lang];

  return (
    <div id="main-content" style={{ fontFamily: "var(--font-sans)", background: "var(--paper)", color: "var(--text-body)", minHeight: "100vh" }}>
      <SharedNav lang={lang} setLang={setLang} />

      {/* Hero */}
      <section style={{ background: "var(--lake-50)", padding: "72px 40px 64px", borderBottom: "1px solid var(--lake-100)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--lake-700)", background: "var(--lake-100)", padding: "4px 12px", borderRadius: 999, display: "inline-block", marginBottom: 20 }}>
            {t.eyebrow}
          </span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(34px, 5vw, 52px)", lineHeight: 1.08, letterSpacing: "-0.02em", color: "var(--text-strong)", fontWeight: 500, margin: "0 0 18px" }}>
            {t.title}
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--text-body)", margin: 0, maxWidth: 560 }}>
            {t.sub}
          </p>
        </div>
      </section>

      {/* Phases */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
        <div className="lk-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
          {t.phases.map((phase, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: 20,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 20,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", padding: "4px 11px", borderRadius: 999, background: phase.statusBg, color: phase.statusColor, fontWeight: 600 }}>
                  {phase.status}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>
                  {phase.period}
                </span>
              </div>
              <div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 500, color: "var(--text-strong)", margin: "0 0 8px", letterSpacing: "-0.01em" }}>
                  {phase.title}
                </h2>
                <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--text-muted)", margin: 0 }}>
                  {phase.desc}
                </p>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {phase.items.map((item, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14.5, color: "var(--text-body)" }}>
                    <span style={{ flexShrink: 0, marginTop: 2, width: 18, height: 18, borderRadius: "50%", background: i === 0 ? "var(--positive-100)" : i === 1 ? "#DCE7FA" : "var(--ink-50)", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      {i === 0 ? (
                        <svg width={10} height={10} viewBox="0 0 10 10" fill="none"><path d="M1.5 5l2.5 2.5 4.5-5" stroke={phase.statusColor} strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" /></svg>
                      ) : i === 1 ? (
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: phase.statusColor, display: "block" }} />
                      ) : (
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--ink-300)", display: "block" }} />
                      )}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--ink-900)", padding: "72px 40px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 34, fontWeight: 500, color: "var(--text-on-dark)", margin: "0 0 12px", letterSpacing: "-0.01em" }}>
            {t.cta.title}
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--text-on-dark-muted)", margin: "0 0 28px" }}>
            {t.cta.desc}
          </p>
          <a
            href="mailto:jeffersonlds3009@gmail.com"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", borderRadius: 999, background: "var(--accent)", color: "#fff", fontWeight: 600, fontSize: 15, textDecoration: "none" }}
          >
            {t.cta.btn}
          </a>
        </div>
      </section>

      <SharedFooter lang={lang} />
    </div>
  );
}
