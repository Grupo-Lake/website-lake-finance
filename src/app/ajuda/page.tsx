"use client";
import React, { useState } from "react";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

type Lang = "pt" | "en";

const DICT = {
  pt: {
    eyebrow: "SUPORTE",
    title: "Como podemos ajudar?",
    sub: "Encontre respostas rápidas, guias e suporte para tudo no Lake Finance.",
    searchPlaceholder: "Buscar na central de ajuda…",
    categoriesLabel: "Navegar por categoria",
    categories: [
      { emoji: "👤", name: "Conta e cadastro", count: "8 artigos" },
      { emoji: "🏦", name: "Conexão bancária", count: "12 artigos" },
      { emoji: "✨", name: "Copiloto e IA", count: "6 artigos" },
      { emoji: "💳", name: "Planos e cobrança", count: "5 artigos" },
    ],
    popularLabel: "Artigos mais lidos",
    popular: [
      "Como conectar meu banco?",
      "O que é o Health Score?",
      "Como cancelar meu plano?",
      "Como exportar um relatório?",
      "Como criar uma meta financeira?",
      "Por que não vejo minhas transações?",
    ],
    contactLabel: "Ainda precisa de ajuda?",
    contact: [
      {
        icon: "💬",
        title: "Chat ao vivo",
        desc: "Fale com nossa equipe em tempo real.",
        note: "Disponível seg–sex, 9h–18h",
        cta: "Iniciar chat",
        primary: true,
      },
      {
        icon: "✉️",
        title: "E-mail",
        desc: "jeffersonlds3009@gmail.com",
        note: "Respondemos em até 1h",
        cta: "Enviar e-mail",
        primary: false,
      },
    ],
  },
  en: {
    eyebrow: "SUPPORT",
    title: "How can we help?",
    sub: "Find quick answers, guides, and support for everything in Lake Finance.",
    searchPlaceholder: "Search the help center…",
    categoriesLabel: "Browse by category",
    categories: [
      { emoji: "👤", name: "Account & signup", count: "8 articles" },
      { emoji: "🏦", name: "Bank connection", count: "12 articles" },
      { emoji: "✨", name: "Copilot & AI", count: "6 articles" },
      { emoji: "💳", name: "Plans & billing", count: "5 articles" },
    ],
    popularLabel: "Most-read articles",
    popular: [
      "How do I connect my bank?",
      "What is the Health Score?",
      "How do I cancel my plan?",
      "How do I export a report?",
      "How do I create a financial goal?",
      "Why can't I see my transactions?",
    ],
    contactLabel: "Still need help?",
    contact: [
      {
        icon: "💬",
        title: "Live chat",
        desc: "Talk to our team in real time.",
        note: "Available Mon–Fri, 9am–6pm",
        cta: "Start chat",
        primary: true,
      },
      {
        icon: "✉️",
        title: "Email",
        desc: "jeffersonlds3009@gmail.com",
        note: "We respond within 1 hour",
        cta: "Send email",
        primary: false,
      },
    ],
  },
};

export default function AjudaPage() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = DICT[lang];

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div id="main-content" style={{ fontFamily: "var(--font-sans)", background: "var(--paper)", color: "var(--text-body)", minHeight: "100vh" }}>
      <SharedNav lang={lang} setLang={setLang} />

      {/* Hero with search */}
      <section style={{ background: "var(--grad-lake)", padding: "72px 40px 68px" }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--lake-300)", display: "block", marginBottom: 16 }}>
            {t.eyebrow}
          </span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#fff", fontWeight: 500, margin: "0 0 16px" }}>
            {t.title}
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.7)", margin: "0 0 32px" }}>{t.sub}</p>
          <div style={{ position: "relative", maxWidth: 520, margin: "0 auto" }}>
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth={2} strokeLinecap="round" style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}>
              <circle cx={11} cy={11} r={8}/><line x1={21} y1={21} x2={16.65} y2={16.65}/>
            </svg>
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              readOnly
              style={{ width: "100%", padding: "14px 20px 14px 48px", borderRadius: 999, border: "none", fontSize: 15, fontFamily: "var(--font-sans)", background: "#fff", color: "var(--text-body)", outline: "none", boxSizing: "border-box", boxShadow: "var(--shadow-lg)" }}
            />
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 40px 80px" }}>

        {/* Categories */}
        <section style={{ marginBottom: 72 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, color: "var(--text-strong)", margin: "0 0 28px", letterSpacing: "-0.01em" }}>{t.categoriesLabel}</h2>
          <div className="lk-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {t.categories.map((cat, i) => (
              <a key={i} href="#" style={{ padding: "28px 24px", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 18, textDecoration: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ fontSize: 28 }}>{cat.emoji}</span>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "var(--text-strong)", marginBottom: 4 }}>{cat.name}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>{cat.count}</div>
                </div>
                <span style={{ color: "var(--brand)", fontSize: 18, marginTop: "auto" }}>→</span>
              </a>
            ))}
          </div>
        </section>

        {/* Popular */}
        <section style={{ marginBottom: 72 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, color: "var(--text-strong)", margin: "0 0 24px", letterSpacing: "-0.01em" }}>{t.popularLabel}</h2>
          <div className="lk-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
            {t.popular.map((article, i) => (
              <a key={i} href="#" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "18px 0", borderBottom: "1px solid var(--border-subtle)", textDecoration: "none", color: "var(--text-body)", fontSize: 15, borderLeft: i % 2 === 1 ? "none" : undefined, paddingLeft: i % 2 === 1 ? 28 : 0, borderRight: i % 2 === 0 ? "1px solid var(--border-subtle)" : "none", paddingRight: i % 2 === 0 ? 28 : 0 }}>
                <span style={{ fontWeight: 500 }}>{article}</span>
                <span style={{ color: "var(--text-muted)", flexShrink: 0, fontSize: 16 }}>→</span>
              </a>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 500, color: "var(--text-strong)", margin: "0 0 24px", letterSpacing: "-0.01em" }}>{t.contactLabel}</h2>
          <div className="lk-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {t.contact.map((c, i) => (
              <div key={i} style={{ padding: "32px 28px", background: c.primary ? "var(--lake-50)" : "var(--surface-card)", border: `1px solid ${c.primary ? "var(--lake-100)" : "var(--border-subtle)"}`, borderRadius: 18, display: "flex", flexDirection: "column", gap: 12 }}>
                <span style={{ fontSize: 28 }}>{c.icon}</span>
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>{c.title}</div>
                  <div style={{ fontSize: 14.5, color: "var(--text-muted)", marginBottom: 4 }}>{c.desc}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>{c.note}</div>
                </div>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", padding: "10px 22px", borderRadius: 999, background: c.primary ? "var(--brand)" : "transparent", border: c.primary ? "none" : "1.5px solid var(--border-default)", color: c.primary ? "var(--on-brand)" : "var(--text-body)", fontWeight: 600, fontSize: 14, textDecoration: "none", marginTop: "auto", width: "fit-content" }}>
                  {c.cta}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>

      <SharedFooter lang={lang} />
    </div>
  );
}
