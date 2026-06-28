"use client";
import React, { useState } from "react";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

type Lang = "pt" | "en";

const DICT = {
  pt: {
    eyebrow: "CARREIRAS",
    title: "Construa o futuro financeiro do Brasil",
    sub: "Somos um time pequeno e focado, com impacto desproporcional. Cada pessoa aqui conta.",
    headcount: "1 pessoa",
    benefitsLabel: "Por que o Lake",
    benefits: [
      { title: "Trabalho remoto", desc: "100% remoto, de onde você quiser, com encontros presenciais opcionais em São Paulo." },
      { title: "Plano de saúde premium", desc: "Cobertura nacional para você e dependentes, sem coparticipação." },
      { title: "Stock options", desc: "Todos têm participação no que estamos construindo — desde o primeiro dia." },
      { title: "Horário flexível", desc: "Você define como e quando trabalha, desde que as entregas aconteçam." },
      { title: "Orçamento de aprendizado", desc: "R$ 2.000/ano para cursos, livros, conferências — o que te fizer crescer." },
      { title: "Equipamento top", desc: "MacBook Pro M3 e monitor 4K para quem é aprovado no processo seletivo." },
    ],
    cultureLabel: "Nossa cultura",
    cultureQuote: "Construímos com cuidado.",
    culturePrinciples: [
      "Tomamos decisões baseadas em dados, mas ouvimos a intuição quando os dados são escassos.",
      "Prefirimos lentidão deliberada à velocidade descuidada. Qualidade não é negociável.",
      "Discordâncias são bem-vindas. O melhor argumento vence, não o mais alto.",
    ],
    rolesLabel: "Vagas em breve",
    roles: [
      {
        title: "Engenheiro(a) Full-stack",
        dept: "Engenharia",
        location: "Remoto · Brasil",
        type: "Em breve",
        desc: "Estamos em fase beta. Em breve abriremos vagas para engenheiros que queiram construir o futuro das finanças pessoais com Next.js, Node.js e IA.",
        cta: "Avisem-me",
      },
      {
        title: "Product Designer",
        dept: "Produto",
        location: "Remoto · Brasil",
        type: "Em breve",
        desc: "Em breve abriremos vagas para designers que queiram definir como a IA financeira deve parecer e se comportar para ser realmente útil.",
        cta: "Avisem-me",
      },
      {
        title: "Cientista de Dados — ML Financeiro",
        dept: "Dados",
        location: "Remoto · Brasil",
        type: "Em breve",
        desc: "Em breve abriremos vagas para cientistas de dados e engenheiros de ML interessados em modelos de categorização e Health Score financeiro.",
        cta: "Avisem-me",
      },
    ],
    noRole: "Quer ser avisado quando abrirmos vagas?",
    noRoleDesc: "Mande um e-mail com seu perfil para",
    email: "jeffersonlds3009@gmail.com",
  },
  en: {
    eyebrow: "CAREERS",
    title: "Build the financial future of Brazil",
    sub: "We're a small, focused team with disproportionate impact. Every person here counts.",
    headcount: "1 person",
    benefitsLabel: "Why Lake",
    benefits: [
      { title: "Remote work", desc: "100% remote, from wherever you want, with optional in-person meetups in São Paulo." },
      { title: "Premium health plan", desc: "Nationwide coverage for you and dependents, no copay." },
      { title: "Stock options", desc: "Everyone has a stake in what we're building — from day one." },
      { title: "Flexible hours", desc: "You define how and when you work, as long as the deliverables happen." },
      { title: "Learning budget", desc: "R$ 2,000/year for courses, books, conferences — whatever makes you grow." },
      { title: "Top equipment", desc: "MacBook Pro M3 and 4K monitor for everyone who joins." },
    ],
    cultureLabel: "Our culture",
    cultureQuote: "We build with care.",
    culturePrinciples: [
      "We make decisions based on data, but listen to intuition when data is scarce.",
      "We prefer deliberate slowness to careless speed. Quality is non-negotiable.",
      "Disagreements are welcome. The best argument wins, not the loudest.",
    ],
    rolesLabel: "Positions coming soon",
    roles: [
      {
        title: "Full-stack Engineer",
        dept: "Engineering",
        location: "Remote · Brazil",
        type: "Coming soon",
        desc: "We're in beta. Soon we'll open positions for engineers who want to build the future of personal finance with Next.js, Node.js, and AI.",
        cta: "Notify me",
      },
      {
        title: "Product Designer",
        dept: "Product",
        location: "Remote · Brazil",
        type: "Coming soon",
        desc: "Soon we'll open positions for designers who want to define how financial AI should look and behave to be truly useful.",
        cta: "Notify me",
      },
      {
        title: "Data Scientist — Finance ML",
        dept: "Data",
        location: "Remote · Brazil",
        type: "Coming soon",
        desc: "Soon we'll open positions for data scientists and ML engineers interested in categorization models and financial Health Score.",
        cta: "Notify me",
      },
    ],
    noRole: "Want to be notified when we open positions?",
    noRoleDesc: "Send an email with your profile to",
    email: "jeffersonlds3009@gmail.com",
  },
};

export default function CarreirasPage() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = DICT[lang];

  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "var(--paper)", color: "var(--text-body)", minHeight: "100vh" }}>
      <SharedNav lang={lang} setLang={setLang} />

      {/* Hero */}
      <section style={{ background: "var(--lake-50)", padding: "72px 40px 64px", borderBottom: "1px solid var(--lake-100)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--lake-700)", background: "var(--lake-100)", padding: "4px 12px", borderRadius: 999 }}>
              {t.eyebrow}
            </span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)" }}>{t.headcount}</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 5vw, 50px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--text-strong)", fontWeight: 500, margin: "0 0 16px" }}>
            {t.title}
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--text-body)", margin: 0, maxWidth: 560 }}>{t.sub}</p>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 40px" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, color: "var(--text-strong)", margin: "0 0 36px", letterSpacing: "-0.015em" }}>{t.benefitsLabel}</h2>
        <div className="lk-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {t.benefits.map((b, i) => (
            <div key={i} style={{ padding: "24px", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 16 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "var(--lake-100)", marginBottom: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ width: 14, height: 14, borderRadius: "50%", background: "var(--brand)", display: "block" }} />
              </div>
              <strong style={{ display: "block", fontSize: 15, fontWeight: 600, color: "var(--text-strong)", marginBottom: 6 }}>{b.title}</strong>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--text-muted)" }}>{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Culture */}
      <section style={{ background: "var(--ink-900)", padding: "72px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="lk-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--lake-300)", textTransform: "uppercase", marginBottom: 20 }}>{t.cultureLabel}</div>
              <blockquote style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 500, fontStyle: "italic", color: "var(--text-on-dark)", margin: 0, lineHeight: 1.2 }}>
                &ldquo;{t.cultureQuote}&rdquo;
              </blockquote>
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 22 }}>
              {t.culturePrinciples.map((p, i) => (
                <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ flexShrink: 0, fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--lake-400)", marginTop: 2 }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ fontSize: 15, lineHeight: 1.6, color: "var(--text-on-dark-muted)" }}>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 40px" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, color: "var(--text-strong)", margin: "0 0 36px", letterSpacing: "-0.015em" }}>{t.rolesLabel}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {t.roles.map((role, i) => (
            <div key={i} style={{ padding: "28px 32px", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 18, display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: 240 }}>
                <div style={{ display: "flex", gap: 10, marginBottom: 10, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.07em", padding: "3px 10px", borderRadius: 999, background: "var(--lake-100)", color: "var(--lake-700)" }}>{role.dept}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.07em", padding: "3px 10px", borderRadius: 999, background: "var(--ink-50)", color: "var(--text-muted)" }}>{role.location}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.07em", padding: "3px 10px", borderRadius: 999, background: "var(--ink-50)", color: "var(--text-muted)" }}>{role.type}</span>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: "var(--text-strong)", margin: "0 0 8px" }}>{role.title}</h3>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "var(--text-muted)" }}>{role.desc}</p>
              </div>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", padding: "10px 22px", borderRadius: 999, background: "var(--brand)", color: "var(--on-brand)", fontWeight: 600, fontSize: 14, textDecoration: "none", flexShrink: 0 }}>
                {role.cta}
              </a>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, padding: "28px 32px", background: "var(--lake-50)", border: "1px solid var(--lake-100)", borderRadius: 18, display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: "var(--text-strong)" }}>{t.noRole}</span>
          <span style={{ fontSize: 15, color: "var(--text-muted)" }}>{t.noRoleDesc}</span>
          <a href={`mailto:${t.email}`} style={{ color: "var(--brand)", fontWeight: 600, textDecoration: "none", fontSize: 15 }}>{t.email}</a>
        </div>
      </section>

      <SharedFooter lang={lang} />
    </div>
  );
}
