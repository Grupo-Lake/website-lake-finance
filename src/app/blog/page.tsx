"use client";
import React, { useState } from "react";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

type Lang = "pt" | "en";

const DICT = {
  pt: {
    eyebrow: "BLOG",
    title: "Finanças pessoais sem complicação",
    sub: "Artigos, guias e análises do time do Lake para você dominar o seu dinheiro. Conteúdo em breve.",
    categories: ["Todos", "Educação", "Produto", "Dicas"],
    featured: {
      cat: "PRODUTO",
      title: "Lake Finance Beta — nosso primeiro artigo está a caminho",
      excerpt: "Estamos preparando conteúdo educativo sobre finanças pessoais, Open Finance e inteligência artificial financeira. Em breve nossos primeiros artigos estarão disponíveis aqui.",
      author: "Jefferson Laurindo",
      date: "27 Jun 2026",
      read: "Em breve",
      initials: "JL",
    },
    articles: [
      { cat: "PRODUTO", title: "Como o Lake Finance usa IA para entender seus gastos", excerpt: "Conteúdo em breve — estamos preparando nossos primeiros artigos sobre a tecnologia por trás do Lake Finance.", author: "Jefferson Laurindo", date: "Em breve", read: "—", initials: "JL" },
      { cat: "EDUCAÇÃO", title: "O que é Open Finance e como o Lake usa para te ajudar", excerpt: "Em breve publicaremos conteúdo educativo sobre Open Finance e como isso transforma a gestão financeira.", author: "Jefferson Laurindo", date: "Em breve", read: "—", initials: "JL" },
      { cat: "PRODUTO", title: "Health Score: como medimos sua saúde financeira", excerpt: "Um guia completo sobre como calculamos o Health Score e o que você pode fazer para melhorá-lo.", author: "Jefferson Laurindo", date: "Em breve", read: "—", initials: "JL" },
      { cat: "DICAS", title: "Categorização automática: sem configuração, sem trabalho manual", excerpt: "Como nossa IA aprende com seus gastos e categoriza automaticamente cada transação.", author: "Jefferson Laurindo", date: "Em breve", read: "—", initials: "JL" },
      { cat: "EDUCAÇÃO", title: "LGPD e Open Finance: seus dados estão em boas mãos", excerpt: "Transparência sobre como protegemos seus dados financeiros e o que a LGPD garante para você.", author: "Jefferson Laurindo", date: "Em breve", read: "—", initials: "JL" },
      { cat: "DICAS", title: "Como aproveitar ao máximo o Lake Finance Beta", excerpt: "Guia para os primeiros usuários do Lake Finance Beta — dicas para tirar o máximo da plataforma.", author: "Jefferson Laurindo", date: "Em breve", read: "—", initials: "JL" },
    ],
  },
  en: {
    eyebrow: "BLOG",
    title: "Personal finance made simple",
    sub: "Articles, guides, and analysis from the Lake team to help you master your money. Content coming soon.",
    categories: ["All", "Education", "Product", "Tips"],
    featured: {
      cat: "PRODUCT",
      title: "Lake Finance Beta — our first article is on the way",
      excerpt: "We're preparing educational content about personal finance, Open Finance, and financial AI. Our first articles will be available here soon.",
      author: "Jefferson Laurindo",
      date: "Jun 27, 2026",
      read: "Coming soon",
      initials: "JL",
    },
    articles: [
      { cat: "PRODUCT", title: "How Lake Finance uses AI to understand your spending", excerpt: "Content coming soon — we're preparing our first articles about the technology behind Lake Finance.", author: "Jefferson Laurindo", date: "Coming soon", read: "—", initials: "JL" },
      { cat: "EDUCATION", title: "What is Open Finance and how Lake uses it to help you", excerpt: "Soon we'll publish educational content about Open Finance and how it transforms financial management.", author: "Jefferson Laurindo", date: "Coming soon", read: "—", initials: "JL" },
      { cat: "PRODUCT", title: "Health Score: how we measure your financial health", excerpt: "A complete guide on how we calculate the Health Score and what you can do to improve it.", author: "Jefferson Laurindo", date: "Coming soon", read: "—", initials: "JL" },
      { cat: "TIPS", title: "Auto-categorization: no configuration, no manual work", excerpt: "How our AI learns from your spending and automatically categorizes every transaction.", author: "Jefferson Laurindo", date: "Coming soon", read: "—", initials: "JL" },
      { cat: "EDUCATION", title: "LGPD and Open Finance: your data is in good hands", excerpt: "Transparency about how we protect your financial data and what LGPD guarantees for you.", author: "Jefferson Laurindo", date: "Coming soon", read: "—", initials: "JL" },
      { cat: "TIPS", title: "How to make the most of Lake Finance Beta", excerpt: "A guide for the first Lake Finance Beta users — tips to get the most out of the platform.", author: "Jefferson Laurindo", date: "Coming soon", read: "—", initials: "JL" },
    ],
  },
};

const CAT_COLORS: Record<string, { bg: string; color: string }> = {
  EDUCAÇÃO: { bg: "#DCE7FA", color: "#1F54AC" },
  EDUCATION: { bg: "#DCE7FA", color: "#1F54AC" },
  PRODUTO: { bg: "#D6EFE7", color: "#0A4D43" },
  PRODUCT: { bg: "#D6EFE7", color: "#0A4D43" },
  DICAS: { bg: "#FFE3DC", color: "#C5371F" },
  TIPS: { bg: "#FFE3DC", color: "#C5371F" },
};

export default function BlogPage() {
  const [lang, setLang] = useState<Lang>("pt");
  const [activecat, setActivecat] = useState(0);
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
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--text-strong)", fontWeight: 500, margin: "0 0 16px" }}>
            {t.title}
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>{t.sub}</p>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px 80px" }}>
        {/* Featured */}
        <div style={{ background: "var(--grad-lake)", borderRadius: 20, padding: "48px", marginBottom: 56, color: "var(--text-on-dark)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 680 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", padding: "4px 11px", borderRadius: 999, background: "rgba(255,255,255,.15)", color: "rgba(255,255,255,.9)", display: "inline-flex", width: "fit-content" }}>
              {t.featured.cat}
            </span>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 3vw, 34px)", fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.015em", margin: 0, color: "#fff" }}>
              {t.featured.title}
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,.75)", margin: 0 }}>{t.featured.excerpt}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 8 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, color: "#fff" }}>{t.featured.initials}</div>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,.75)" }}>{t.featured.author}</span>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,.45)" }}>·</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(255,255,255,.6)" }}>{t.featured.date}</span>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,.45)" }}>·</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(255,255,255,.6)" }}>{t.featured.read}</span>
            </div>
          </div>
        </div>

        {/* Category filter */}
        <div style={{ display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
          {t.categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActivecat(i)}
              style={{
                padding: "7px 18px",
                borderRadius: 999,
                border: "1.5px solid",
                borderColor: activecat === i ? "var(--brand)" : "var(--border-default)",
                background: activecat === i ? "var(--lake-50)" : "var(--surface-card)",
                color: activecat === i ? "var(--brand)" : "var(--text-body)",
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="lk-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
          {t.articles.map((article, i) => {
            const catStyle = CAT_COLORS[article.cat] ?? { bg: "var(--ink-50)", color: "var(--text-muted)" };
            return (
              <article key={i} style={{ background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 18, padding: "24px", display: "flex", flexDirection: "column", gap: 14, cursor: "pointer" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", padding: "3px 9px", borderRadius: 999, background: catStyle.bg, color: catStyle.color, display: "inline-flex", width: "fit-content" }}>
                  {article.cat}
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 500, lineHeight: 1.25, color: "var(--text-strong)", margin: 0, letterSpacing: "-0.01em" }}>
                  {article.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: "var(--text-muted)", margin: 0, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {article.excerpt}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: "auto", paddingTop: 8, borderTop: "1px solid var(--border-subtle)" }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--lake-100)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 600, color: "var(--lake-700)" }}>
                    {article.initials}
                  </div>
                  <span style={{ fontSize: 13, color: "var(--text-body)" }}>{article.author}</span>
                  <span style={{ fontSize: 13, color: "var(--text-muted)", marginLeft: "auto" }}>{article.read}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <SharedFooter lang={lang} />
    </div>
  );
}
