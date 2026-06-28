"use client";
import React, { useState } from "react";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

type Lang = "pt" | "en";

const DICT = {
  pt: {
    eyebrow: "EMPRESA",
    title: "Nascemos para simplificar a relação das pessoas com o dinheiro",
    sub: "O Lake Finance é uma fintech brasileira construída em São Paulo para tornar a gestão financeira pessoal simples, inteligente e acessível para todos.",
    manifesto: "A maioria das pessoas não tem problema de renda. Tem problema de visibilidade. Você ganha, gasta e chega ao fim do mês sem entender o que aconteceu. Criamos o Lake para mudar isso — sem jargão, sem planilha, sem culpa.",
    values: [
      { title: "Transparência", desc: "Explicamos cada número, cada sugestão. Nada de caixa preta." },
      { title: "Privacidade", desc: "Seus dados são seus. Não vendemos, não compartilhamos, não monetizamos." },
      { title: "Simplicidade", desc: "A IA cuida da complexidade. Você vê só o que importa." },
    ],
    stats: [
      { num: "2024", label: "Fundada em" },
      { num: "1", label: "pessoa na equipe" },
      { num: "Beta", label: "em desenvolvimento" },
      { num: "100%", label: "feito no Brasil" },
    ],
    teamLabel: "O time",
    team: [
      { name: "Jefferson Laurindo da Silva", role: "CEO & Founder", initials: "JL", bio: "Especialista em Tecnologia. 5 anos de experiência com desenvolvimento de Software. Fundador do Lake Finance." },
      { name: "Equipe em formação", role: "Em breve", initials: "?", bio: "Estamos crescendo. Em breve novos membros se juntarão ao time para construir o futuro das finanças pessoais." },
      { name: "Equipe em formação", role: "Em breve", initials: "?", bio: "Estamos buscando pessoas que acreditem que a tecnologia pode transformar a relação das pessoas com o dinheiro." },
    ],
    backersLabel: "Apoiadores",
    backers: ["Em breve · A anunciar"],
    cta: { title: "Garanta seu acesso antecipado", btn: "Entrar na lista de espera" },
  },
  en: {
    eyebrow: "COMPANY",
    title: "We exist to simplify people's relationship with money",
    sub: "Lake Finance is a Brazilian fintech built in São Paulo to make personal financial management simple, intelligent, and accessible for everyone.",
    manifesto: "Most people don't have an income problem. They have a visibility problem. Money comes in, money goes out, and by month's end you're unsure what happened. We built Lake to change that — no jargon, no spreadsheets, no guilt.",
    values: [
      { title: "Transparency", desc: "We explain every number, every suggestion. No black boxes." },
      { title: "Privacy", desc: "Your data is yours. We don't sell, share, or monetize it." },
      { title: "Simplicity", desc: "The AI handles complexity. You only see what matters." },
    ],
    stats: [
      { num: "2024", label: "Founded in" },
      { num: "1", label: "team member" },
      { num: "Beta", label: "in development" },
      { num: "100%", label: "made in Brazil" },
    ],
    teamLabel: "The team",
    team: [
      { name: "Jefferson Laurindo da Silva", role: "CEO & Founder", initials: "JL", bio: "Technology specialist with 5 years of software development experience. Founder of Lake Finance." },
      { name: "Team forming", role: "Coming soon", initials: "?", bio: "We're growing. Soon new members will join the team to build the future of personal finance." },
      { name: "Team forming", role: "Coming soon", initials: "?", bio: "We're looking for people who believe technology can transform the way people relate to money." },
    ],
    backersLabel: "Backers",
    backers: ["Coming soon · To be announced"],
    cta: { title: "Get early access", btn: "Join the waitlist" },
  },
};

export default function SobrePage() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = DICT[lang];

  return (
    <div id="main-content" style={{ fontFamily: "var(--font-sans)", background: "var(--paper)", color: "var(--text-body)", minHeight: "100vh" }}>
      <SharedNav lang={lang} setLang={setLang} />

      {/* Hero */}
      <section style={{ background: "var(--lake-50)", padding: "72px 40px 64px", borderBottom: "1px solid var(--lake-100)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--lake-700)", background: "var(--lake-100)", padding: "4px 12px", borderRadius: 999, display: "inline-block", marginBottom: 20 }}>
            {t.eyebrow}
          </span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 5vw, 50px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--text-strong)", fontWeight: 500, margin: "0 0 18px" }}>
            {t.title}
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--text-body)", margin: 0, maxWidth: 580 }}>
            {t.sub}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
        <div className="lk-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <blockquote style={{ fontFamily: "var(--font-display)", fontSize: "clamp(22px, 3vw, 30px)", lineHeight: 1.35, color: "var(--text-strong)", fontStyle: "italic", margin: 0, borderLeft: "3px solid var(--lake-400)", paddingLeft: 28 }}>
              &ldquo;{t.manifesto}&rdquo;
            </blockquote>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {t.values.map((v, i) => (
              <div key={i} style={{ padding: "22px 24px", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--brand)", display: "block", flexShrink: 0 }} />
                  <strong style={{ fontSize: 15, fontWeight: 600, color: "var(--text-strong)" }}>{v.title}</strong>
                </div>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--text-body)", paddingLeft: 18 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section style={{ background: "var(--ink-900)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 40px" }}>
          <div className="lk-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 32 }}>
            {t.stats.map((s, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 44, fontWeight: 500, color: "var(--text-on-dark)", lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-on-dark-muted)", letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 40px" }}>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 500, color: "var(--text-strong)", margin: "0 0 40px", letterSpacing: "-0.015em" }}>
          {t.teamLabel}
        </h2>
        <div className="lk-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {t.team.map((member, i) => (
            <div key={i} style={{ padding: "28px 24px", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 20 }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--lake-100)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, fontFamily: "var(--font-mono)", fontSize: 16, fontWeight: 600, color: "var(--lake-700)" }}>
                {member.initials}
              </div>
              <div style={{ fontWeight: 700, fontSize: 16, color: "var(--text-strong)", marginBottom: 4 }}>{member.name}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--brand)", marginBottom: 12, letterSpacing: "0.02em" }}>{member.role}</div>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: "var(--text-muted)" }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Backers */}
      <section style={{ borderTop: "1px solid var(--border-subtle)", padding: "52px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: 24 }}>{t.backersLabel}</div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {t.backers.map((b, i) => (
              <span key={i} style={{ padding: "8px 20px", borderRadius: 999, border: "1px solid var(--border-default)", fontSize: 14, color: "var(--text-body)", background: "var(--surface-card)" }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--lake-50)", padding: "72px 40px", borderTop: "1px solid var(--lake-100)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 500, color: "var(--text-strong)", margin: "0 0 24px" }}>{t.cta.title}</h2>
          <a href="#" style={{ display: "inline-flex", alignItems: "center", padding: "13px 30px", borderRadius: 999, background: "var(--accent)", color: "#fff", fontWeight: 600, fontSize: 15, textDecoration: "none" }}>
            {t.cta.btn}
          </a>
        </div>
      </section>

      <SharedFooter lang={lang} />
    </div>
  );
}
