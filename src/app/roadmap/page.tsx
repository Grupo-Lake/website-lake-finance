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
        status: "LANÇADO",
        statusColor: "#1A8F5C",
        statusBg: "#DBF1E5",
        period: "Q1 2024",
        title: "Fundação",
        desc: "Lançamos o MVP em beta fechado e estabelecemos a base da plataforma.",
        items: [
          "Open beta com lista de espera",
          "Conexão bancária via Open Finance Brasil",
          "Categorização automática com IA",
          "Health Score v1",
          "Copiloto financeiro básico",
          "App iOS e Android",
        ],
      },
      {
        status: "EM ANDAMENTO",
        statusColor: "#1F54AC",
        statusBg: "#DCE7FA",
        period: "Q2–Q3 2025",
        title: "Inteligência",
        desc: "Aprofundamos a IA e lançamos os recursos que tornam o Lake único.",
        items: [
          "Copiloto com IA avançada (GPT-4o)",
          "Módulo de metas financeiras",
          "Retrospectiva anual estilo Wrapped",
          "Alertas preditivos de saldo",
          "Relatórios em PDF com insights de IA",
          "Suporte a mais de 200 instituições",
        ],
      },
      {
        status: "EM BREVE",
        statusColor: "#9B6B1A",
        statusBg: "#FEF3C7",
        period: "Q4 2025 — 2026",
        title: "Expansão",
        desc: "Abrimos o Lake para famílias, investidores e desenvolvedores.",
        items: [
          "Plano Família com até 5 perfis",
          "Acompanhamento de investimentos",
          "API aberta para desenvolvedores",
          "App web completo (desktop)",
          "Integração com carteiras cripto",
          "Lake Score para crédito",
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
        status: "LAUNCHED",
        statusColor: "#1A8F5C",
        statusBg: "#DBF1E5",
        period: "Q1 2024",
        title: "Foundation",
        desc: "We launched the MVP in closed beta and built the core platform.",
        items: [
          "Open beta with waitlist",
          "Bank connection via Open Finance Brazil",
          "AI-powered automatic categorization",
          "Health Score v1",
          "Basic financial copilot",
          "iOS and Android app",
        ],
      },
      {
        status: "IN PROGRESS",
        statusColor: "#1F54AC",
        statusBg: "#DCE7FA",
        period: "Q2–Q3 2025",
        title: "Intelligence",
        desc: "We're deepening the AI and launching the features that make Lake unique.",
        items: [
          "Advanced AI Copilot (GPT-4o)",
          "Financial goals module",
          "Annual Wrapped-style rewind",
          "Predictive balance alerts",
          "PDF reports with AI insights",
          "Support for 200+ institutions",
        ],
      },
      {
        status: "COMING SOON",
        statusColor: "#9B6B1A",
        statusBg: "#FEF3C7",
        period: "Q4 2025 — 2026",
        title: "Expansion",
        desc: "We're opening Lake to families, investors, and developers.",
        items: [
          "Family plan with up to 5 profiles",
          "Investment tracking",
          "Open API for developers",
          "Full web app (desktop)",
          "Crypto wallet integration",
          "Lake Score for credit",
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
    <div style={{ fontFamily: "var(--font-sans)", background: "var(--paper)", color: "var(--text-body)", minHeight: "100vh" }}>
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
            href="mailto:sugestoes@lakefi.com.br"
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
