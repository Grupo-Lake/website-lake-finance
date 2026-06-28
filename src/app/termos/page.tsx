"use client";
import React, { useState } from "react";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

type Lang = "pt" | "en";

const DICT = {
  pt: {
    eyebrow: "LEGAL",
    title: "Termos de Uso",
    updated: "Vigente desde 27 de junho de 2026",
    toc: [
      "Aceitação dos Termos",
      "Descrição do Serviço",
      "Cadastro e Conta",
      "Uso Aceitável",
      "Privacidade e Proteção de Dados",
      "Propriedade Intelectual",
      "Limitação de Responsabilidade",
      "Contato",
    ],
    sections: [
      {
        title: "1. Aceitação dos Termos",
        body: `Ao acessar ou usar os serviços do Lake Finance ("Serviço"), você concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não poderá usar o Serviço. Estes Termos constituem um acordo vinculante entre você e a Lake Tecnologia · CNPJ 57.924.952/0001-19, com sede em São Paulo, Brasil.

O uso continuado do Serviço após alterações nos Termos constitui aceitação das novas condições. Recomendamos revisão periódica desta página.`,
      },
      {
        title: "2. Descrição do Serviço",
        body: `O Lake Finance é uma plataforma de gestão financeira pessoal que utiliza inteligência artificial para auxiliar usuários no controle de despesas, planejamento financeiro e análise de dados financeiros pessoais.

O Serviço inclui: (a) conexão com contas bancárias via Open Finance Brasil; (b) categorização automática de transações; (c) análises e previsões financeiras geradas por IA; (d) Health Score financeiro; (e) copiloto financeiro conversacional; e (f) relatórios e alertas personalizados.

O Lake Finance é um serviço de leitura somente. Não realizamos movimentações financeiras em nome do usuário.`,
      },
      {
        title: "3. Cadastro e Conta",
        body: `Para usar o Serviço, você deve criar uma conta fornecendo informações verdadeiras, precisas e completas. Você é responsável por manter a confidencialidade de suas credenciais de acesso.

Você deve ter pelo menos 18 anos de idade para criar uma conta. Ao se cadastrar, você confirma que as informações fornecidas são suas e que você tem capacidade legal para aceitar estes Termos.

O Lake Finance reserva-se o direito de suspender ou encerrar contas que violem estes Termos ou que apresentem atividade fraudulenta.`,
      },
      {
        title: "4. Uso Aceitável",
        body: `Você concorda em usar o Serviço apenas para fins legais e de acordo com estes Termos. É proibido: (a) violar qualquer lei aplicável; (b) tentar acessar sistemas ou dados não autorizados; (c) transmitir código malicioso; (d) realizar engenharia reversa do Serviço; (e) revender ou transferir sua conta sem autorização.

O uso do Serviço para fins comerciais sem autorização prévia por escrito é expressamente proibido.`,
      },
      {
        title: "5. Privacidade e Proteção de Dados",
        body: `O tratamento de dados pessoais pelo Lake Finance está descrito em nossa Política de Privacidade, que integra estes Termos por referência. Cumprimos integralmente a Lei Geral de Proteção de Dados Pessoais (LGPD — Lei 13.709/2018).

A conexão com suas instituições financeiras é realizada exclusivamente via Open Finance Brasil, regulado pelo Banco Central do Brasil. Seus dados financeiros são criptografados com AES-256 em trânsito e em repouso.`,
      },
      {
        title: "6. Propriedade Intelectual",
        body: `Todo o conteúdo do Serviço — incluindo software, textos, gráficos, logos e interfaces — é de propriedade exclusiva do Lake Finance ou de seus licenciadores, protegido pelas leis de propriedade intelectual aplicáveis.

A licença concedida ao usuário é pessoal, não exclusiva, intransferível e revogável, limitada ao uso do Serviço conforme estes Termos. Nenhum direito de propriedade é transferido ao usuário.`,
      },
      {
        title: "7. Limitação de Responsabilidade",
        body: `O Lake Finance não se responsabiliza por decisões financeiras tomadas com base nas análises e sugestões do Serviço. As informações fornecidas têm caráter informativo e não constituem aconselhamento financeiro profissional.

Na extensão máxima permitida pela lei aplicável, o Lake Finance não será responsável por danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou impossibilidade de uso do Serviço.`,
      },
      {
        title: "8. Contato",
        body: `Para dúvidas sobre estes Termos, entre em contato:

Lake Tecnologia · CNPJ 57.924.952/0001-19
E-mail: jeffersonlds3009@gmail.com
Central de Ajuda: lakefi.com.br/ajuda

Para questões relacionadas à proteção de dados, contate nosso Encarregado (DPO): Jefferson Laurindo da Silva — jeffersonlds3009@gmail.com`,
      },
    ],
  },
  en: {
    eyebrow: "LEGAL",
    title: "Terms of Use",
    updated: "Effective June 27, 2026",
    toc: [
      "Acceptance of Terms",
      "Description of Service",
      "Registration and Account",
      "Acceptable Use",
      "Privacy and Data Protection",
      "Intellectual Property",
      "Limitation of Liability",
      "Contact",
    ],
    sections: [
      {
        title: "1. Acceptance of Terms",
        body: `By accessing or using Lake Finance services ("Service"), you agree to these Terms of Use. If you disagree with any part of these terms, you may not use the Service. These Terms constitute a binding agreement between you and Lake Finance Technology · CNPJ 57.924.952/0001-19, headquartered in São Paulo, Brazil.

Continued use of the Service after changes to the Terms constitutes acceptance of the new conditions. We recommend reviewing this page periodically.`,
      },
      {
        title: "2. Description of Service",
        body: `Lake Finance is a personal financial management platform that uses artificial intelligence to help users track expenses, plan finances, and analyze personal financial data.

The Service includes: (a) bank account connections via Open Finance Brazil; (b) automatic transaction categorization; (c) AI-generated financial analyses and forecasts; (d) financial Health Score; (e) conversational financial copilot; and (f) personalized reports and alerts.

Lake Finance is a read-only service. We do not perform financial transactions on behalf of users.`,
      },
      {
        title: "3. Registration and Account",
        body: `To use the Service, you must create an account providing truthful, accurate, and complete information. You are responsible for maintaining the confidentiality of your access credentials.

You must be at least 18 years old to create an account. By registering, you confirm that the information provided is yours and that you have legal capacity to accept these Terms.

Lake Finance reserves the right to suspend or terminate accounts that violate these Terms or show fraudulent activity.`,
      },
      {
        title: "4. Acceptable Use",
        body: `You agree to use the Service only for lawful purposes and in accordance with these Terms. Prohibited activities include: (a) violating any applicable law; (b) attempting to access unauthorized systems or data; (c) transmitting malicious code; (d) reverse engineering the Service; (e) reselling or transferring your account without authorization.

Using the Service for commercial purposes without prior written authorization is expressly prohibited.`,
      },
      {
        title: "5. Privacy and Data Protection",
        body: `Lake Finance's handling of personal data is described in our Privacy Policy, which is incorporated into these Terms by reference. We fully comply with Brazil's General Data Protection Law (LGPD — Law 13.709/2018).

Connection to your financial institutions is performed exclusively via Open Finance Brazil, regulated by the Central Bank of Brazil. Your financial data is encrypted with AES-256 in transit and at rest.`,
      },
      {
        title: "6. Intellectual Property",
        body: `All Service content — including software, texts, graphics, logos, and interfaces — is the exclusive property of Lake Finance or its licensors, protected by applicable intellectual property laws.

The license granted to the user is personal, non-exclusive, non-transferable, and revocable, limited to using the Service pursuant to these Terms. No ownership rights are transferred to the user.`,
      },
      {
        title: "7. Limitation of Liability",
        body: `Lake Finance is not responsible for financial decisions made based on the Service's analyses and suggestions. Information provided is informational in nature and does not constitute professional financial advice.

To the maximum extent permitted by applicable law, Lake Finance will not be liable for indirect, incidental, special, or consequential damages arising from the use or inability to use the Service.`,
      },
      {
        title: "8. Contact",
        body: `For questions about these Terms, contact us:

Lake Finance Technology · CNPJ 57.924.952/0001-19
Email: jeffersonlds3009@gmail.com
Help Center: lakefi.com.br/ajuda

For data protection matters, contact our Data Protection Officer (DPO): Jefferson Laurindo da Silva — jeffersonlds3009@gmail.com`,
      },
    ],
  },
};

export default function TermosPage() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = DICT[lang];

  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "var(--paper)", color: "var(--text-body)", minHeight: "100vh" }}>
      <SharedNav lang={lang} setLang={setLang} />

      {/* Header */}
      <section style={{ background: "var(--ink-50)", padding: "56px 40px 48px", borderBottom: "1px solid var(--border-subtle)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", color: "var(--text-muted)", display: "block", marginBottom: 16 }}>
            {t.eyebrow}
          </span>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--text-strong)", fontWeight: 500, margin: "0 0 12px" }}>
            {t.title}
          </h1>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)", margin: 0 }}>{t.updated}</p>
        </div>
      </section>

      {/* Content */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 40px 80px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 60, alignItems: "start" }}>

          {/* Sidebar TOC */}
          <aside style={{ position: "sticky", top: 84 }} className="lk-legal-sidebar">
            <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {t.toc.map((item, i) => (
                <a
                  key={i}
                  href={`#section-${i}`}
                  style={{
                    fontSize: 13.5,
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    padding: "5px 10px",
                    borderRadius: 8,
                    lineHeight: 1.4,
                    display: "block",
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </aside>

          {/* Sections */}
          <main style={{ minWidth: 0 }}>
            {t.sections.map((section, i) => (
              <section key={i} id={`section-${i}`} style={{ marginBottom: 48, scrollMarginTop: 100 }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500, color: "var(--text-strong)", margin: "0 0 16px", letterSpacing: "-0.01em" }}>
                  {section.title}
                </h2>
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j} style={{ fontSize: 16, lineHeight: 1.75, color: "var(--text-body)", margin: "0 0 14px", whiteSpace: "pre-line" }}>
                    {para}
                  </p>
                ))}
                {i < t.sections.length - 1 && <hr style={{ border: "none", borderTop: "1px solid var(--border-subtle)", margin: "40px 0 0" }} />}
              </section>
            ))}
          </main>
        </div>
      </div>

      <SharedFooter lang={lang} />
    </div>
  );
}
