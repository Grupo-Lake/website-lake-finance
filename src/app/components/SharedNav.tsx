"use client";

import React, { useState } from "react";
import Link from "next/link";

type Lang = "pt" | "en";

export function MarkDark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx={20} cy={20} r={19} fill="#0A4D43" />
      <path d="M9 22.5c2.4 1.8 4.2 1.8 6.6 0s4.2-1.8 6.6 0 4.2 1.8 6.6 0" stroke="#7CC9B6" strokeWidth={2.2} strokeLinecap="round" />
      <path d="M9 16c2.4 1.8 4.2 1.8 6.6 0s4.2-1.8 6.6 0 4.2 1.8 6.6 0" stroke="#EDF7F3" strokeWidth={2.2} strokeLinecap="round" />
    </svg>
  );
}

const NAV = {
  pt: {
    links: [
      { label: "Produto", href: "/" },
      { label: "Preços", href: "/#precos" },
      { label: "Blog", href: "/blog" },
      { label: "Sobre", href: "/sobre" },
      { label: "Ajuda", href: "/ajuda" },
    ],
    login: "Entrar",
    cta: "Abrir conta",
    menuLinks: [
      { label: "Produto", href: "/" },
      { label: "Preços", href: "/#precos" },
      { label: "Blog", href: "/blog" },
      { label: "Sobre", href: "/sobre" },
      { label: "Carreiras", href: "/carreiras" },
      { label: "Ajuda", href: "/ajuda" },
      { label: "Contato", href: "/contato" },
    ],
  },
  en: {
    links: [
      { label: "Product", href: "/" },
      { label: "Pricing", href: "/#precos" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/sobre" },
      { label: "Help", href: "/ajuda" },
    ],
    login: "Sign in",
    cta: "Open account",
    menuLinks: [
      { label: "Product", href: "/" },
      { label: "Pricing", href: "/#precos" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/sobre" },
      { label: "Careers", href: "/carreiras" },
      { label: "Help", href: "/ajuda" },
      { label: "Contact", href: "/contato" },
    ],
  },
};

interface SharedNavProps {
  lang: Lang;
  setLang: (l: Lang) => void;
}

export default function SharedNav({ lang, setLang }: SharedNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = NAV[lang];

  return (
    <>
      {menuOpen && (
        <div
          id="mobile-menu-nav"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "var(--paper)",
            display: "flex",
            flexDirection: "column",
            animation: "lkSlideIn .22s ease both",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 18px",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}
            >
              <MarkDark size={26} />
              <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: "var(--text-strong)" }}>
                Lake
              </span>
            </Link>
            <button
              onClick={() => setMenuOpen(false)}
              style={{ background: "none", border: "none", cursor: "pointer", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", color: "var(--text-muted)" }}
              aria-label="Close menu"
            >
              <span style={{ position: "absolute", width: 20, height: 2, background: "currentColor", transform: "rotate(45deg)", borderRadius: 2 }} />
              <span style={{ position: "absolute", width: 20, height: 2, background: "currentColor", transform: "rotate(-45deg)", borderRadius: 2 }} />
            </button>
          </div>
          <nav style={{ flex: 1, overflowY: "auto", padding: "8px 0" }}>
            {t.menuLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "14px 22px",
                  fontFamily: "var(--font-sans)",
                  fontSize: 17,
                  fontWeight: 500,
                  color: "var(--text-strong)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
              {(["pt", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => { setLang(l); setMenuOpen(false); }}
                  style={{
                    padding: "7px 16px",
                    borderRadius: 999,
                    border: "1.5px solid",
                    borderColor: lang === l ? "var(--brand)" : "var(--border-default)",
                    background: lang === l ? "var(--lake-50)" : "transparent",
                    color: lang === l ? "var(--brand)" : "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                    textTransform: "uppercase",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>
            <Link
              href="#"
              style={{
                display: "block",
                padding: "14px",
                borderRadius: 999,
                background: "var(--brand)",
                color: "var(--on-brand)",
                textAlign: "center",
                textDecoration: "none",
                fontWeight: 600,
                fontFamily: "var(--font-sans)",
                fontSize: 15,
              }}
            >
              {t.cta}
            </Link>
          </div>
        </div>
      )}

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(251,251,247,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 40px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", flexShrink: 0 }}
          >
            <MarkDark size={28} />
            <span style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 600, color: "var(--text-strong)" }}>
              Lake Finance
            </span>
          </Link>

          <nav className="lk-nav-links" style={{ display: "flex", gap: 4 }}>
            {t.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "6px 14px",
                  borderRadius: 999,
                  fontSize: 14.5,
                  fontWeight: 500,
                  color: "var(--text-body)",
                  textDecoration: "none",
                  transition: "background 140ms ease, color 140ms ease",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <div className="lk-nav-lang" style={{ display: "flex", gap: 2, background: "var(--ink-50)", borderRadius: 999, padding: 3 }}>
              {(["pt", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  style={{
                    padding: "4px 12px",
                    borderRadius: 999,
                    border: "none",
                    background: lang === l ? "var(--surface-card)" : "transparent",
                    color: lang === l ? "var(--text-strong)" : "var(--text-muted)",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    cursor: "pointer",
                    boxShadow: lang === l ? "var(--shadow-xs)" : "none",
                    textTransform: "uppercase",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>

            <div className="lk-nav-actions" style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <Link
                href="#"
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text-body)",
                  textDecoration: "none",
                  border: "1.5px solid var(--border-default)",
                  background: "transparent",
                }}
              >
                {t.login}
              </Link>
              <Link
                href="#"
                style={{
                  padding: "8px 18px",
                  borderRadius: 999,
                  fontSize: 14,
                  fontWeight: 600,
                  background: "var(--brand)",
                  color: "var(--on-brand)",
                  textDecoration: "none",
                }}
              >
                {t.cta}
              </Link>
            </div>

            <button
              className="lk-hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu-nav"
              style={{ display: "none", flexDirection: "column", gap: 4, width: 22, cursor: "pointer", background: "none", border: "none", padding: 4, flexShrink: 0 }}
            >
              <span style={{ display: "block", width: "100%", height: 2, background: "var(--text-strong)", borderRadius: 2 }} />
              <span style={{ display: "block", width: "100%", height: 2, background: "var(--text-strong)", borderRadius: 2 }} />
              <span style={{ display: "block", width: "100%", height: 2, background: "var(--text-strong)", borderRadius: 2 }} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
