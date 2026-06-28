"use client";
import React, { useState } from "react";
import Link from "next/link";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

type Lang = "pt" | "en";

const DICT = {
  pt: {
    eyebrow: "CONTATO",
    title: "Estamos aqui para ajudar",
    sub: "Escolha o canal mais adequado para a sua dúvida.",
    formLabel: "Envie uma mensagem",
    fields: {
      name: "Seu nome",
      email: "E-mail",
      subject: "Assunto",
      message: "Mensagem",
      submit: "Enviar mensagem",
    },
    subjects: ["Suporte técnico", "Financeiro", "Imprensa", "Parceria", "Outro"],
    success: { title: "Mensagem enviada!", desc: "Nossa equipe responderá em até 24h úteis." },
    infoLabel: "Canais de contato",
    contacts: [
      { title: "Suporte geral", email: "jeffersonlds3009@gmail.com", desc: "Para dúvidas sobre o app e a conta" },
      { title: "Imprensa", email: "jeffersonlds3009@gmail.com", desc: "Para jornalistas e criadores de conteúdo" },
      { title: "Proteção de dados (DPO)", email: "jeffersonlds3009@gmail.com", desc: "Para solicitações relacionadas aos seus dados" },
    ],
    responseTime: "Respondemos em até 24h úteis",
    helpHint: "Antes de entrar em contato, veja se sua dúvida já está respondida na",
    helpLink: "Central de Ajuda",
  },
  en: {
    eyebrow: "CONTACT",
    title: "We're here to help",
    sub: "Choose the most appropriate channel for your question.",
    formLabel: "Send a message",
    fields: {
      name: "Your name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      submit: "Send message",
    },
    subjects: ["Technical support", "Billing", "Press", "Partnership", "Other"],
    success: { title: "Message sent!", desc: "Our team will respond within 24 business hours." },
    infoLabel: "Contact channels",
    contacts: [
      { title: "General support", email: "jeffersonlds3009@gmail.com", desc: "For questions about the app and your account" },
      { title: "Press", email: "jeffersonlds3009@gmail.com", desc: "For journalists and content creators" },
      { title: "Data protection (DPO)", email: "jeffersonlds3009@gmail.com", desc: "For requests related to your personal data" },
    ],
    responseTime: "We respond within 24 business hours",
    helpHint: "Before reaching out, check if your question is already answered in the",
    helpLink: "Help Center",
  },
};

function IcoLinkedin() {
  return <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx={4} cy={4} r={2}/></svg>;
}
function IcoInstagram() {
  return <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x={2} y={2} width={20} height={20} rx={5}/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1={17.5} y1={6.5} x2={17.51} y2={6.5}/></svg>;
}
function IcoTwitter() {
  return <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 12,
  border: "1.5px solid var(--border-default)",
  background: "var(--surface-card)",
  fontFamily: "var(--font-sans)",
  fontSize: 15,
  color: "var(--text-strong)",
  outline: "none",
  boxSizing: "border-box",
  transition: "border-color 140ms ease",
};

export default function ContatoPage() {
  const [lang, setLang] = useState<Lang>("pt");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("0");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const t = DICT[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 40px 80px" }}>

        {/* Help hint */}
        <div style={{ marginBottom: 48, padding: "14px 20px", background: "var(--ink-50)", borderRadius: 12, fontSize: 14.5, color: "var(--text-muted)", display: "flex", gap: 6, flexWrap: "wrap", alignItems: "center" }}>
          <span>{t.helpHint}</span>
          <Link href="/ajuda" style={{ color: "var(--brand)", fontWeight: 600, textDecoration: "none" }}>{t.helpLink} →</Link>
        </div>

        <div className="lk-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}>

          {/* Form */}
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 500, color: "var(--text-strong)", margin: "0 0 28px", letterSpacing: "-0.01em" }}>{t.formLabel}</h2>

            {submitted ? (
              <div style={{ padding: "32px", background: "var(--positive-100)", border: "1px solid #BBE4CF", borderRadius: 18, textAlign: "center" }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>✓</div>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#0F6B40", marginBottom: 8 }}>{t.success.title}</div>
                <div style={{ fontSize: 15, color: "#1A8F5C" }}>{t.success.desc}</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--text-body)", marginBottom: 6 }}>{t.fields.name}</label>
                  <input type="text" required value={name} onChange={e => setName(e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--text-body)", marginBottom: 6 }}>{t.fields.email}</label>
                  <input type="email" required value={email} onChange={e => setEmail(e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--text-body)", marginBottom: 6 }}>{t.fields.subject}</label>
                  <select value={subject} onChange={e => setSubject(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                    {t.subjects.map((s, i) => <option key={i} value={String(i)}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: 13.5, fontWeight: 600, color: "var(--text-body)", marginBottom: 6 }}>{t.fields.message}</label>
                  <textarea required rows={5} value={message} onChange={e => setMessage(e.target.value)} style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }} />
                </div>
                <button type="submit" style={{ width: "100%", padding: "14px", borderRadius: 999, background: "var(--brand)", color: "var(--on-brand)", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15, border: "none", cursor: "pointer" }}>
                  {t.fields.submit}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 500, color: "var(--text-strong)", margin: "0 0 28px", letterSpacing: "-0.01em" }}>{t.infoLabel}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {t.contacts.map((c, i) => (
                <div key={i} style={{ padding: "22px 24px", background: "var(--surface-card)", border: "1px solid var(--border-subtle)", borderRadius: 16 }}>
                  <div style={{ fontSize: 14.5, fontWeight: 700, color: "var(--text-strong)", marginBottom: 4 }}>{c.title}</div>
                  <a href={`mailto:${c.email}`} style={{ fontSize: 14, color: "var(--brand)", fontWeight: 600, textDecoration: "none", display: "block", marginBottom: 4 }}>{c.email}</a>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{c.desc}</div>
                </div>
              ))}

              <div style={{ padding: "18px 24px", background: "var(--lake-50)", border: "1px solid var(--lake-100)", borderRadius: 14, marginTop: 4 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--lake-700)" }}>{t.responseTime}</div>
              </div>

              <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
                {[
                  { Ico: IcoLinkedin, href: "#", label: "LinkedIn" },
                  { Ico: IcoInstagram, href: "https://www.instagram.com/grupo.lake", label: "Instagram" },
                  { Ico: IcoTwitter, href: "#", label: "X" },
                ].map(({ Ico, href, label }) => (
                  <a key={label} href={href} aria-label={label} style={{ width: 40, height: 40, borderRadius: 12, border: "1.5px solid var(--border-default)", background: "var(--surface-card)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", textDecoration: "none" }}>
                    <Ico />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <SharedFooter lang={lang} />
    </div>
  );
}
