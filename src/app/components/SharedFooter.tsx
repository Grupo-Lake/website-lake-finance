"use client";

import React from "react";
import Link from "next/link";

type Lang = "pt" | "en";

function MarkLight({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx={20} cy={20} r={19} fill="#EDF7F3" />
      <path d="M9 22.5c2.4 1.8 4.2 1.8 6.6 0s4.2-1.8 6.6 0 4.2 1.8 6.6 0" stroke="#0C6052" strokeWidth={2.2} strokeLinecap="round" />
      <path d="M9 16c2.4 1.8 4.2 1.8 6.6 0s4.2-1.8 6.6 0 4.2 1.8 6.6 0" stroke="#0A4D43" strokeWidth={2.2} strokeLinecap="round" />
    </svg>
  );
}

function IcoLinkedin() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx={4} cy={4} r={2} />
    </svg>
  );
}

function IcoInstagram() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1={17.5} y1={6.5} x2={17.51} y2={6.5} />
    </svg>
  );
}

function IcoTwitter() {
  return (
    <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const FOOTER = {
  pt: {
    legal: "Lake Tecnologia · CNPJ 57.924.952/0001-19 · Sujeita às regras do Open Finance Brasil.",
    copyright: "© 2024 Lake Finance",
    tag: "FEITO COM ♥ NO BRASIL",
    cols: [
      {
        head: "Produto",
        items: [
          { label: "Recursos", href: "/#recursos" },
          { label: "Segurança", href: "/#seguranca" },
          { label: "Preços", href: "/#precos" },
          { label: "Roadmap", href: "/roadmap" },
        ],
      },
      {
        head: "Empresa",
        items: [
          { label: "Sobre", href: "/sobre" },
          { label: "Blog", href: "/blog" },
          { label: "Carreiras", href: "/carreiras" },
          { label: "Imprensa", href: "/imprensa" },
        ],
      },
      {
        head: "Suporte",
        items: [
          { label: "Central de Ajuda", href: "/ajuda" },
          { label: "Termos de Uso", href: "/termos" },
          { label: "Privacidade", href: "/privacidade" },
          { label: "Contato", href: "/contato" },
        ],
      },
    ],
  },
  en: {
    legal: "Lake Finance Technology · CNPJ 57.924.952/0001-19 · Subject to Open Finance Brazil rules.",
    copyright: "© 2024 Lake Finance",
    tag: "BUILT WITH ♥ IN BRAZIL",
    cols: [
      {
        head: "Product",
        items: [
          { label: "Features", href: "/#recursos" },
          { label: "Security", href: "/#seguranca" },
          { label: "Pricing", href: "/#precos" },
          { label: "Roadmap", href: "/roadmap" },
        ],
      },
      {
        head: "Company",
        items: [
          { label: "About", href: "/sobre" },
          { label: "Blog", href: "/blog" },
          { label: "Careers", href: "/carreiras" },
          { label: "Press", href: "/imprensa" },
        ],
      },
      {
        head: "Support",
        items: [
          { label: "Help Center", href: "/ajuda" },
          { label: "Terms of Use", href: "/termos" },
          { label: "Privacy", href: "/privacidade" },
          { label: "Contact", href: "/contato" },
        ],
      },
    ],
  },
};

interface SharedFooterProps {
  lang: Lang;
}

export default function SharedFooter({ lang }: SharedFooterProps) {
  const t = FOOTER[lang];

  return (
    <footer style={{ background: "var(--ink-900)", color: "var(--text-on-dark-muted)" }}>
      <div
        className="lk-container"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "64px 40px 40px" }}
      >
        <div
          className="lk-footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr repeat(3, 1fr)",
            gap: 40,
            paddingBottom: 40,
            borderBottom: "1px solid rgba(255,255,255,.1)",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <MarkLight size={28} />
              <span style={{ fontFamily: "var(--font-display)", fontSize: 21, color: "var(--text-on-dark)", fontWeight: 500 }}>
                Lake Finance
              </span>
            </div>
            <p style={{ fontSize: 13.5, lineHeight: 1.6, maxWidth: 300, margin: "0 0 18px" }}>
              {t.legal}
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { Ico: IcoLinkedin, href: "#", label: "Lake Finance no LinkedIn" },
                { Ico: IcoInstagram, href: "https://www.instagram.com/grupo.lake", label: "Lake Finance no Instagram" },
                { Ico: IcoTwitter, href: "#", label: "Lake Finance no X" },
              ].map(({ Ico, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: 11,
                    background: "rgba(255,255,255,.06)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--text-on-dark-muted)",
                    textDecoration: "none",
                  }}
                  aria-label={label}
                >
                  <Ico />
                </Link>
              ))}
            </div>
          </div>
          {t.cols.map((col, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--lake-300)",
                  marginBottom: 16,
                }}
              >
                {col.head}
              </div>
              {col.items.map((item, j) => (
                <Link
                  key={j}
                  href={item.href}
                  style={{
                    display: "block",
                    color: "var(--text-on-dark-muted)",
                    textDecoration: "none",
                    fontSize: 14,
                    marginBottom: 11,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div
          style={{
            paddingTop: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            fontSize: 13,
          }}
        >
          <span>{t.copyright}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>{t.tag}</span>
        </div>
      </div>
    </footer>
  );
}
