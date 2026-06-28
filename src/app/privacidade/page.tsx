"use client";
import React, { useState } from "react";
import SharedNav from "../components/SharedNav";
import SharedFooter from "../components/SharedFooter";

type Lang = "pt" | "en";

const DICT = {
  pt: {
    eyebrow: "LEGAL",
    title: "Política de Privacidade",
    updated: "Vigente desde 27 de junho de 2026",
    toc: [
      "Quem somos",
      "Dados que coletamos",
      "Como usamos seus dados",
      "Compartilhamento de dados",
      "Retenção de dados",
      "Seus direitos (LGPD)",
      "Cookies",
      "Segurança",
      "Contato e DPO",
    ],
    sections: [
      {
        title: "1. Quem somos",
        body: `A Lake Tecnologia · CNPJ 57.924.952/0001-19 ("Lake Finance", "nós") é uma empresa brasileira de tecnologia financeira registrada em São Paulo — SP, Brasil. Somos o controlador dos dados pessoais coletados por meio do nosso aplicativo e plataforma web.

Para questões relacionadas a esta Política, entre em contato com nosso Encarregado de Proteção de Dados (DPO): Jefferson Laurindo da Silva — jeffersonlds3009@gmail.com.`,
      },
      {
        title: "2. Dados que coletamos",
        body: `Coletamos apenas os dados necessários para prestar o Serviço:

Dados de identificação: nome, e-mail, número de telefone fornecidos no cadastro.

Dados financeiros: transações bancárias, saldos, e metadados de contas coletados via Open Finance Brasil, mediante autorização explícita sua.

Dados de uso: interações com o app, preferências de configuração, histórico de perguntas ao copiloto (sem associação a dados bancários reais fora do seu perfil).

Dados técnicos: endereço IP, tipo de dispositivo, sistema operacional, identificadores de sessão.

Não coletamos senhas bancárias. A conexão com bancos ocorre exclusivamente via OAuth2 através do Open Finance Brasil.`,
      },
      {
        title: "3. Como usamos seus dados",
        body: `Usamos seus dados pessoais para:

• Fornecer e melhorar o Serviço, incluindo categorização automática e análises financeiras;
• Personalizar sua experiência com o copiloto e recomendações;
• Enviar alertas e notificações relevantes às suas finanças;
• Cumprir obrigações legais e regulatórias;
• Prevenir fraudes e garantir a segurança do Serviço;
• Realizar análises agregadas e anônimas para melhorias do produto.

Nunca usamos seus dados para fins publicitários de terceiros.`,
      },
      {
        title: "4. Compartilhamento de dados",
        body: `Não vendemos seus dados pessoais. Podemos compartilhá-los apenas com:

Parceiros de infraestrutura: provedores de cloud (AWS, Google Cloud) que processam dados em nosso nome, sob contrato de proteção de dados.

Open Finance Brasil: a conexão com suas instituições financeiras é mediada pelo ecossistema regulado do Banco Central.

Obrigações legais: autoridades competentes quando exigido por lei, ordem judicial ou regulamentação.

Qualquer terceiro que processe dados em nosso nome assina um Acordo de Processamento de Dados (DPA) e cumpre a LGPD.`,
      },
      {
        title: "5. Retenção de dados",
        body: `Mantemos seus dados pessoais pelo tempo necessário para prestar o Serviço e cumprir obrigações legais:

Dados de conta: enquanto sua conta estiver ativa. Após encerramento, deletamos em até 3 meses.

Dados financeiros: máximo de 23 meses de histórico de transações no app. Você pode exportar ou solicitar exclusão a qualquer momento.

Logs de segurança: 12 meses, exigidos para detecção de fraudes e conformidade regulatória.`,
      },
      {
        title: "6. Seus direitos (LGPD)",
        body: `Nos termos da Lei Geral de Proteção de Dados (LGPD), você tem o direito de:

• Confirmação da existência de tratamento dos seus dados;
• Acesso aos dados que temos sobre você;
• Correção de dados incompletos, inexatos ou desatualizados;
• Anonimização, bloqueio ou eliminação de dados desnecessários;
• Portabilidade dos seus dados para outro fornecedor;
• Eliminação dos dados tratados com seu consentimento;
• Informação sobre compartilhamentos realizados;
• Revogação do consentimento a qualquer momento.

Para exercer seus direitos, acesse as configurações do app ou entre em contato com jeffersonlds3009@gmail.com. Respondemos em até 15 dias.`,
        isList: true,
      },
      {
        title: "7. Cookies",
        body: `Usamos cookies e tecnologias similares para:

Cookies essenciais: necessários para o funcionamento do Serviço (autenticação, segurança).

Cookies analíticos: coletamos dados anônimos de uso para melhorar o produto (PostHog, anônimos).

Não usamos cookies de rastreamento de terceiros para publicidade. Você pode gerenciar preferências de cookies nas configurações do seu navegador.`,
      },
      {
        title: "8. Segurança",
        body: `Adotamos medidas técnicas e organizacionais para proteger seus dados:

• Criptografia AES-256 em trânsito (TLS 1.3) e em repouso;
• Autenticação multifator disponível para sua conta;
• Acesso a dados financeiros restrito por controles de acesso baseados em função;
• Testes de penetração periódicos por empresa independente;
• Programa de divulgação responsável de vulnerabilidades.

Em caso de incidente de segurança que afete seus dados, notificaremos você e a ANPD conforme exigido pela LGPD.`,
      },
      {
        title: "9. Contato e DPO",
        body: `Encarregado de Proteção de Dados (DPO):
Jefferson Laurindo da Silva
E-mail: jeffersonlds3009@gmail.com
Prazo de resposta: até 15 dias úteis

Lake Tecnologia · CNPJ 57.924.952/0001-19
São Paulo, SP, Brasil

Para retirar seu consentimento ou solicitar exclusão de dados, acesse Configurações → Privacidade no app ou envie e-mail para o DPO.`,
      },
    ],
  },
  en: {
    eyebrow: "LEGAL",
    title: "Privacy Policy",
    updated: "Effective June 27, 2026",
    toc: [
      "Who we are",
      "Data we collect",
      "How we use your data",
      "Data sharing",
      "Data retention",
      "Your rights (LGPD)",
      "Cookies",
      "Security",
      "Contact & DPO",
    ],
    sections: [
      {
        title: "1. Who we are",
        body: `Lake Finance Technology · CNPJ 57.924.952/0001-19 ("Lake Finance", "we") is a Brazilian financial technology company registered in São Paulo — SP, Brazil. We are the controller of personal data collected through our app and web platform.

For questions related to this Policy, contact our Data Protection Officer (DPO): Jefferson Laurindo da Silva — jeffersonlds3009@gmail.com.`,
      },
      {
        title: "2. Data we collect",
        body: `We collect only the data necessary to provide the Service:

Identification data: name, email, phone number provided during registration.

Financial data: bank transactions, balances, and account metadata collected via Open Finance Brazil, with your explicit authorization.

Usage data: app interactions, configuration preferences, copilot question history (not associated with real banking data outside your profile).

Technical data: IP address, device type, operating system, session identifiers.

We do not collect banking passwords. Bank connections occur exclusively via OAuth2 through Open Finance Brazil.`,
      },
      {
        title: "3. How we use your data",
        body: `We use your personal data to:

• Provide and improve the Service, including automatic categorization and financial analyses;
• Personalize your experience with the copilot and recommendations;
• Send alerts and notifications relevant to your finances;
• Comply with legal and regulatory obligations;
• Prevent fraud and ensure Service security;
• Conduct aggregated, anonymous analyses for product improvements.

We never use your data for third-party advertising purposes.`,
      },
      {
        title: "4. Data sharing",
        body: `We do not sell your personal data. We may share it only with:

Infrastructure partners: cloud providers (AWS, Google Cloud) that process data on our behalf, under data protection contracts.

Open Finance Brazil: the connection to your financial institutions is mediated by the Central Bank's regulated ecosystem.

Legal obligations: competent authorities when required by law, court order, or regulation.

Any third party that processes data on our behalf signs a Data Processing Agreement (DPA) and complies with LGPD.`,
      },
      {
        title: "5. Data retention",
        body: `We retain your personal data for as long as necessary to provide the Service and meet legal obligations:

Account data: while your account is active. After closure, we delete within 3 months.

Financial data: maximum 23 months of transaction history in the app. You can export or request deletion at any time.

Security logs: 12 months, required for fraud detection and regulatory compliance.`,
      },
      {
        title: "6. Your rights (LGPD)",
        body: `Under Brazil's General Data Protection Law (LGPD), you have the right to:

• Confirmation that your data is being processed;
• Access to the data we hold about you;
• Correction of incomplete, inaccurate, or outdated data;
• Anonymization, blocking, or deletion of unnecessary data;
• Portability of your data to another provider;
• Deletion of data processed with your consent;
• Information about sharing that has occurred;
• Withdrawal of consent at any time.

To exercise your rights, go to app Settings or contact jeffersonlds3009@gmail.com. We respond within 15 days.`,
        isList: true,
      },
      {
        title: "7. Cookies",
        body: `We use cookies and similar technologies for:

Essential cookies: necessary for Service operation (authentication, security).

Analytics cookies: we collect anonymous usage data to improve the product (PostHog, anonymized).

We do not use third-party tracking cookies for advertising. You can manage cookie preferences in your browser settings.`,
      },
      {
        title: "8. Security",
        body: `We adopt technical and organizational measures to protect your data:

• AES-256 encryption in transit (TLS 1.3) and at rest;
• Multi-factor authentication available for your account;
• Access to financial data restricted by role-based access controls;
• Periodic penetration testing by an independent firm;
• Responsible vulnerability disclosure program.

In the event of a security incident affecting your data, we will notify you and the ANPD as required by LGPD.`,
      },
      {
        title: "9. Contact & DPO",
        body: `Data Protection Officer (DPO):
Jefferson Laurindo da Silva
Email: jeffersonlds3009@gmail.com
Response time: up to 15 business days

Lake Finance Technology · CNPJ 57.924.952/0001-19
São Paulo, SP, Brazil

To withdraw consent or request data deletion, go to Settings → Privacy in the app or email the DPO.`,
      },
    ],
  },
};

export default function PrivacidadePage() {
  const [lang, setLang] = useState<Lang>("pt");
  const t = DICT[lang];

  return (
    <div id="main-content" style={{ fontFamily: "var(--font-sans)", background: "var(--paper)", color: "var(--text-body)", minHeight: "100vh" }}>
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

          {/* TOC */}
          <aside style={{ position: "sticky", top: 84 }}>
            <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {t.toc.map((item, i) => (
                <a key={i} href={`#priv-${i}`} style={{ fontSize: 13.5, color: "var(--text-muted)", textDecoration: "none", padding: "5px 10px", borderRadius: 8, lineHeight: 1.4, display: "block" }}>
                  {item}
                </a>
              ))}
            </nav>
          </aside>

          {/* Sections */}
          <main style={{ minWidth: 0 }}>
            {t.sections.map((section, i) => (
              <section key={i} id={`priv-${i}`} style={{ marginBottom: 48, scrollMarginTop: 100 }}>
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
