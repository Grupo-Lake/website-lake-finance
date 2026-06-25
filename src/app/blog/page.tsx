"use client";
import React, { useState } from "react";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

type Lang = "pt" | "en";

const DICT = {
  pt: {
    eyebrow: "BLOG",
    title: "Finanças pessoais sem complicação",
    sub: "Artigos, guias e análises do time do Lake para você dominar o seu dinheiro.",
    categories: ["Todos", "Educação", "Produto", "Dicas"],
    featured: {
      cat: "EDUCAÇÃO",
      title: "Como o Open Finance está mudando a gestão financeira no Brasil",
      excerpt: "A regulamentação do Open Finance pelo Banco Central criou uma oportunidade única: pela primeira vez, você tem o direito de mover seus dados bancários para qualquer app. Entenda o que isso significa para o seu bolso.",
      author: "Mariana Lima",
      date: "12 Jun 2025",
      read: "8 min",
    },
    articles: [
      { cat: "EDUCAÇÃO", title: "5 hábitos financeiros que separam quem prospera de quem patina", excerpt: "Pequenas decisões diárias que fazem diferença enorme no longo prazo.", author: "Rafael Souza", date: "5 Jun 2025", read: "6 min", initials: "RS" },
      { cat: "PRODUTO", title: "Health Score: entenda como calculamos sua saúde financeira", excerpt: "De onde vêm os 0 a 100 pontos que resumem sua vida financeira.", author: "Diego Costa", date: "28 Mai 2025", read: "5 min", initials: "DC" },
      { cat: "PRODUTO", title: "Categorização automática: como a IA entende seus gastos", excerpt: "Por que nossa IA classifica gastos com 85%+ de precisão sem você fazer nada.", author: "Diego Costa", date: "19 Mai 2025", read: "4 min", initials: "DC" },
      { cat: "DICAS", title: "Metas financeiras: o guia prático para começar hoje", excerpt: "Você não precisa de planilha. Precisa de clareza sobre o que quer conquistar.", author: "Mariana Lima", date: "9 Mai 2025", read: "7 min", initials: "ML" },
      { cat: "EDUCAÇÃO", title: "O que é Open Finance e por que você deveria se importar", excerpt: "Em linguagem simples: o que muda na sua vida quando os bancos compartilham dados.", author: "Rafael Souza", date: "2 Mai 2025", read: "5 min", initials: "RS" },
      { cat: "DICAS", title: "Como poupar R$ 200 por mês sem sentir diferença", excerpt: "Onde esse dinheiro está escondido nas suas contas — e como resgatá-lo.", author: "Mariana Lima", date: "24 Abr 2025", read: "6 min", initials: "ML" },
    ],
  },
  en: {
    eyebrow: "BLOG",
    title: "Personal finance made simple",
    sub: "Articles, guides, and analysis from the Lake team to help you master your money.",
    categories: ["All", "Education", "Product", "Tips"],
    featured: {
      cat: "EDUCATION",
      title: "How Open Finance is changing financial management in Brazil",
      excerpt: "The Central Bank's Open Finance regulation created a unique opportunity: for the first time, you have the right to move your banking data to any app. Understand what this means for your wallet.",
      author: "Mariana Lima",
      date: "Jun 12, 2025",
      read: "8 min",
    },
    articles: [
      { cat: "EDUCATION", title: "5 financial habits that separate those who thrive from those who struggle", excerpt: "Small daily decisions that make an enormous difference in the long run.", author: "Rafael Souza", date: "Jun 5, 2025", read: "6 min", initials: "RS" },
      { cat: "PRODUCT", title: "Health Score: how we calculate your financial health", excerpt: "Where the 0–100 points that summarize your financial life come from.", author: "Diego Costa", date: "May 28, 2025", read: "5 min", initials: "DC" },
      { cat: "PRODUCT", title: "Auto-categorization: how AI understands your spending", excerpt: "Why our AI classifies expenses with 85%+ accuracy without you doing a thing.", author: "Diego Costa", date: "May 19, 2025", read: "4 min", initials: "DC" },
      { cat: "TIPS", title: "Financial goals: the practical guide to start today", excerpt: "You don't need a spreadsheet. You need clarity on what you want to achieve.", author: "Mariana Lima", date: "May 9, 2025", read: "7 min", initials: "ML" },
      { cat: "EDUCATION", title: "What is Open Finance and why you should care", excerpt: "In plain language: what changes in your life when banks share data.", author: "Rafael Souza", date: "May 2, 2025", read: "5 min", initials: "RS" },
      { cat: "TIPS", title: "How to save R$ 200 per month without feeling the difference", excerpt: "Where that money is hiding in your accounts — and how to reclaim it.", author: "Mariana Lima", date: "Apr 24, 2025", read: "6 min", initials: "ML" },
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
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,.2)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-mono)", fontSize: 11, fontWeight: 600, color: "#fff" }}>ML</div>
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
