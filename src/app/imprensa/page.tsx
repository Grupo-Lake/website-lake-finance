"use client";
import React, { useState } from "react";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

type Lang = "pt" | "en";

const DICT = {
  pt: {
    eyebrow: "IMPRENSA",
    title: "Lake na mídia",
    sub: "Recursos para jornalistas, blogueiros e criadores de conteúdo cobrindo o Lake Finance.",
    kitLabel: "Kit de Imprensa",
    kitDesc: "Tudo o que você precisa para cobrir o Lake Finance: logotipos, diretrizes de marca, fotos dos fundadores e dados da empresa.",
    kitFiles: [
      { name: "Pacote de Logos", type: "SVG + PNG", size: "2,4 MB" },
      { name: "Guia de Marca", type: "PDF", size: "1,8 MB" },
      { name: "Fotos dos Fundadores", type: "JPG · Alta res.", size: "12 MB" },
      { name: "Fact Sheet", type: "PDF", size: "340 KB" },
    ],
    releasesLabel: "Press Releases",
    releases: [
      { date: "Jun 2026", title: "Lake Finance inicia fase beta de sua plataforma de gestão financeira com IA", excerpt: "A fintech brasileira abre inscrições para acesso antecipado ao Lake Finance, plataforma que usa inteligência artificial e Open Finance para simplificar a gestão financeira pessoal." },
      { date: "Em breve", title: "Próximos press releases em breve", excerpt: "Novidades e marcos do Lake Finance serão divulgados aqui conforme a empresa evolui. Acompanhe." },
      { date: "Em breve", title: "Mais novidades a caminho", excerpt: "Estamos em fase beta. Em breve teremos mais novidades para compartilhar com a imprensa e o mercado." },
    ],
    readMore: "Ler mais →",
    coverageLabel: "Cobertura",
    outlets: ["Em breve", "A anunciar", "Em breve", "A anunciar"],
    contactLabel: "Contato de Imprensa",
    contactDesc: "Para entrevistas, dados e material de divulgação, entre em contato com nosso time de comunicação.",
    contactEmail: "jeffersonlds3009@gmail.com",
    contactNote: "Respondemos em até 1 dia útil.",
    downloadBtn: "Baixar",
  },
  en: {
    eyebrow: "PRESS",
    title: "Lake in the media",
    sub: "Resources for journalists, bloggers, and content creators covering Lake Finance.",
    kitLabel: "Press Kit",
    kitDesc: "Everything you need to cover Lake Finance: logos, brand guidelines, founder photos, and company data.",
    kitFiles: [
      { name: "Logo Package", type: "SVG + PNG", size: "2.4 MB" },
      { name: "Brand Guidelines", type: "PDF", size: "1.8 MB" },
      { name: "Founder Photos", type: "JPG · High res.", size: "12 MB" },
      { name: "Fact Sheet", type: "PDF", size: "340 KB" },
    ],
    releasesLabel: "Press Releases",
    releases: [
      { date: "Jun 2026", title: "Lake Finance launches beta phase of its AI-powered financial management platform", excerpt: "The Brazilian fintech opens early access registrations for Lake Finance, a platform that uses artificial intelligence and Open Finance to simplify personal financial management." },
      { date: "Coming soon", title: "More press releases on the way", excerpt: "Updates and milestones from Lake Finance will be announced here as the company grows. Stay tuned." },
      { date: "Coming soon", title: "More news coming", excerpt: "We're in beta. More news to share with the press and market will be available here soon." },
    ],
    readMore: "Read more →",
    coverageLabel: "Coverage",
    outlets: ["Coming soon", "To be announced", "Coming soon", "To be announced"],
    contactLabel: "Press Contact",
    contactDesc: "For interviews, data, and press materials, contact our communications team.",
    contactEmail: "jeffersonlds3009@gmail.com",
    contactNote: "We respond within 1 business day.",
    downloadBtn: "Download",
  },
};

export default function ImprensaPage() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = DICT[lang];

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div id="main-content" style={{ fontFamily: "var(--font-sans)", background: "var(--paper)", color: "var(--text-body)", minHeight: "100vh" }}>
      <SharedNav lang={lang} setLang={setLang} />

      {/* Hero */}
      <section style={{ background: "var(--lake-50)", padding: "72px 40px 64px", borderBottom: "1px solid var(--lake-100)" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--lake-700)", background: "var(--lake-100)", padding: "4px 12px", borderRadius: 999, display: "inline-block", marginBottom: 20 }}>
            {t.eyebrow}
          </span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(30px, 5vw, 48px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--text-strong)", fontWeight: 500, margin: "0 0 16px" }}>
            {t.title}
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>{t.sub}</p>
        </div>
      </section>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "72px 40px 80px" }}>

        {/* Press Kit */}
        <section style={{ marginBottom: 72 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 500, color: "var(--text-strong)", margin: "0 0 8px", letterSpacing: "-0.015em" }}>{t.kitLabel}</h2>
          <p style={{ fontSize: 15, color: "var(--text-muted)", margin: "0 0 32px", maxWidth: 560 }}>{t.kitDesc}</p>
          <div className="lk-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {t.kitFiles.map((file, i) => (
              <a key={i} href="#" style={{ padding: "20px 20px", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 16, textDecoration: "none", display: "flex", flexDirection: "column", gap: 10, transition: "border-color 120ms ease" }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "var(--ink-50)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth={1.8} strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><polyline points="9 15 12 18 15 15"/></svg>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-strong)", marginBottom: 3 }}>{file.name}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>{file.type} · {file.size}</div>
                </div>
                <span style={{ fontSize: 13, color: "var(--brand)", fontWeight: 600, marginTop: "auto" }}>{t.downloadBtn} ↓</span>
              </a>
            ))}
          </div>
        </section>

        {/* Press Releases */}
        <section style={{ marginBottom: 72 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 500, color: "var(--text-strong)", margin: "0 0 28px", letterSpacing: "-0.015em" }}>{t.releasesLabel}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {t.releases.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 32, padding: "28px 0", borderTop: "1px solid var(--border-subtle)", alignItems: "flex-start", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", flexShrink: 0, paddingTop: 3, minWidth: 72 }}>{r.date}</span>
                <div style={{ flex: 1, minWidth: 240 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--text-strong)", margin: "0 0 8px", lineHeight: 1.3 }}>{r.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)", margin: "0 0 12px" }}>{r.excerpt}</p>
                  <a href="#" style={{ fontSize: 14, color: "var(--brand)", fontWeight: 600, textDecoration: "none" }}>{t.readMore}</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coverage */}
        <section style={{ marginBottom: 72 }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 500, color: "var(--text-strong)", margin: "0 0 28px", letterSpacing: "-0.015em" }}>{t.coverageLabel}</h2>
          <div className="lk-grid-4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {t.outlets.map((outlet, i) => (
              <div key={i} style={{ padding: "28px 20px", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 500, color: "var(--text-muted)", letterSpacing: "-0.01em" }}>{outlet}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Press Contact */}
        <section>
          <div style={{ background: "var(--lake-50)", border: "1px solid var(--lake-100)", borderRadius: 20, padding: "36px 40px", display: "flex", gap: 40, alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 240 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 500, color: "var(--text-strong)", margin: "0 0 10px" }}>{t.contactLabel}</h2>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--text-muted)", margin: "0 0 16px" }}>{t.contactDesc}</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-muted)", margin: 0 }}>{t.contactNote}</p>
            </div>
            <a href={`mailto:${t.contactEmail}`} style={{ display: "inline-flex", alignItems: "center", padding: "12px 26px", borderRadius: 999, background: "var(--brand)", color: "var(--on-brand)", fontWeight: 600, fontSize: 15, textDecoration: "none", flexShrink: 0 }}>
              {t.contactEmail}
            </a>
          </div>
        </section>
      </div>

      <SharedFooter lang={lang} />
    </div>
  );
}
