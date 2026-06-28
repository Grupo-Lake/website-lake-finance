"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Check,
  Signal,
  Wifi,
  BatteryFull,
  Sparkles,
  BarChart3,
  Search,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  RefreshCw,
  Gauge,
  MessageCircleQuestion,
  Link as LinkIcon,
  ShieldCheck,
  Brain,
  LayoutDashboard,
  Tags,
  Bell,
  Target,
  FileText,
  Wallet,
  ArrowDownLeft,
  ArrowUpRight,
  Utensils,
  Car,
  Home,
  CalendarClock,
  TrendingDown,
  Plane,
  Shield,
  Smartphone,
  PieChart,
  Percent,
  FileDown,
  Trophy,
  Flame,
  PiggyBank,
  Lock,
  Landmark,
  EyeOff,
  KeyRound,
  Star,
  Plus,
  ArrowUp,
  Fuel,
  ShoppingBag,
} from "lucide-react";

function IcoLinkedin({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx={4} cy={4} r={2} />
    </svg>
  );
}
function IcoInstagram({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1={17.5} y1={6.5} x2={17.51} y2={6.5} />
    </svg>
  );
}
function IcoTwitter({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

// ─── Types ───────────────────────────────────────────────────────────────────

type Lang = "pt" | "en";
type BtnVariant = "primary" | "secondary" | "accent";
type BtnSize = "sm" | "md" | "lg";

// ─── Icon helper ──────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ICON_MAP: Record<string, React.FC<any>> = {
  check: Check,
  signal: Signal,
  wifi: Wifi,
  "battery-full": BatteryFull,
  sparkles: Sparkles,
  "bar-chart-3": BarChart3,
  search: Search,
  "alert-triangle": AlertTriangle,
  lightbulb: Lightbulb,
  "trending-up": TrendingUp,
  "refresh-cw": RefreshCw,
  gauge: Gauge,
  "message-circle-question": MessageCircleQuestion,
  link: LinkIcon,
  "shield-check": ShieldCheck,
  brain: Brain,
  "layout-dashboard": LayoutDashboard,
  tags: Tags,
  bell: Bell,
  target: Target,
  "file-text": FileText,
  wallet: Wallet,
  "arrow-down-left": ArrowDownLeft,
  "arrow-up-right": ArrowUpRight,
  utensils: Utensils,
  car: Car,
  home: Home,
  "calendar-clock": CalendarClock,
  "trending-down": TrendingDown,
  plane: Plane,
  shield: Shield,
  smartphone: Smartphone,
  "pie-chart": PieChart,
  percent: Percent,
  "file-down": FileDown,
  trophy: Trophy,
  flame: Flame,
  "piggy-bank": PiggyBank,
  lock: Lock,
  landmark: Landmark,
  "eye-off": EyeOff,
  "key-round": KeyRound,
  star: Star,
  plus: Plus,
  "arrow-up": ArrowUp,
  fuel: Fuel,
  "shopping-bag": ShoppingBag,
  linkedin: IcoLinkedin,
  instagram: IcoInstagram,
  twitter: IcoTwitter,
};

function Icon({
  name,
  size = 16,
  style,
}: {
  name: string;
  size?: number;
  style?: React.CSSProperties;
}) {
  const C = ICON_MAP[name];
  return C ? <C size={size} style={style} /> : null;
}

// ─── Button ───────────────────────────────────────────────────────────────────

function Btn({
  variant = "primary",
  size = "md",
  onClick,
  children,
  full,
  style: extra,
}: {
  variant?: BtnVariant;
  size?: BtnSize;
  onClick?: () => void;
  children: React.ReactNode;
  full?: boolean;
  style?: React.CSSProperties;
}) {
  const vMap: Record<BtnVariant, React.CSSProperties> = {
    primary: { background: "var(--brand)", color: "var(--on-brand)" },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--text-strong)",
      border: "1.5px solid var(--border-default)",
    },
    accent: { background: "var(--accent)", color: "var(--on-accent)" },
  };
  const sMap: Record<BtnSize, React.CSSProperties> = {
    sm: { padding: "8px 18px", fontSize: 13.5, height: 36 },
    md: { padding: "10px 22px", fontSize: 15, height: 42 },
    lg: { padding: "14px 30px", fontSize: 16, height: 54 },
  };
  return (
    <button
      onClick={onClick}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
        borderRadius: 999,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        cursor: "pointer",
        border: "none",
        transition: "all 140ms ease",
        flexShrink: 0,
        width: full ? "100%" : undefined,
        ...vMap[variant],
        ...sMap[size],
        ...extra,
      }}
    >
      {children}
    </button>
  );
}

// ─── SVG marks ────────────────────────────────────────────────────────────────

function MarkDark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx={20} cy={20} r={19} fill="#0A4D43" />
      <path
        d="M9 22.5c2.4 1.8 4.2 1.8 6.6 0s4.2-1.8 6.6 0 4.2 1.8 6.6 0"
        stroke="#7CC9B6"
        strokeWidth={2.2}
        strokeLinecap="round"
      />
      <path
        d="M9 16c2.4 1.8 4.2 1.8 6.6 0s4.2-1.8 6.6 0 4.2 1.8 6.6 0"
        stroke="#EDF7F3"
        strokeWidth={2.2}
        strokeLinecap="round"
      />
    </svg>
  );
}

function MarkLight({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx={20} cy={20} r={19} fill="#EDF7F3" />
      <path
        d="M9 22.5c2.4 1.8 4.2 1.8 6.6 0s4.2-1.8 6.6 0 4.2 1.8 6.6 0"
        stroke="#0C6052"
        strokeWidth={2.2}
        strokeLinecap="round"
      />
      <path
        d="M9 16c2.4 1.8 4.2 1.8 6.6 0s4.2-1.8 6.6 0 4.2 1.8 6.6 0"
        stroke="#0A4D43"
        strokeWidth={2.2}
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─── Content dictionary ────────────────────────────────────────────────────────

const DICT = {
  pt: {
    announce:
      "Lake Finance está em Versão Beta — garanta seu acesso antecipado gratuitamente.",
    announceTag: "BETA",
    nav: {
      links: [
        { label: "Problema", href: "#problema" },
        { label: "Solução", href: "#solucao" },
        { label: "Recursos", href: "#recursos" },
        { label: "Segurança", href: "#seguranca" },
        { label: "Preços", href: "#precos" },
      ],
      login: "Entrar",
      cta: "Abrir conta",
    },
    hero: {
      eyebrow: "Finanças pessoais com IA",
      titleA: "Clareza financeira total,",
      titleEm: "onde quer que esteja.",
      sub: "O Lake Finance usa inteligência artificial para reunir suas contas, analisar seus gastos e te dar controle real do dinheiro — sem planilha, sem complicação.",
      ctaPrimary: "Garantir acesso",
      ctaSecondary: "Acessar demo web",
      trust: [
        "100% seguro · Dados protegidos por LGPD",
        "Versão Beta · Acesso antecipado disponível",
        "Feito 100% no Brasil",
      ],
    },
    phone: {
      greeting: "Olá,",
      account: "Conta Lake · Everyday",
      month: "este mês",
      insightTitle: "Atenção ao dia 25",
      insightBody: "Seu saldo pode ficar negativo. Toque para ver o plano.",
      rows: [
        {
          icon: "fuel",
          name: "Posto Shell",
          cat: "Transporte",
          amount: "− R$ 187,40",
        },
        {
          icon: "shopping-bag",
          name: "Mercado Pão",
          cat: "Mercado",
          amount: "− R$ 312,90",
        },
      ],
    },
    problem: {
      eyebrow: "O problema",
      title: "Você sente que gasta demais, mas não sabe por quê?",
      items: [
        {
          icon: "bar-chart-3",
          title: "Sem visão clara do fluxo de caixa",
          desc: "Dinheiro entra e sai, mas falta um panorama de para onde ele realmente vai.",
        },
        {
          icon: "search",
          title: "Difícil categorizar gastos",
          desc: "Planilhas manuais consomem tempo e quase nunca ficam em dia.",
        },
        {
          icon: "alert-triangle",
          title: "Sem alertas a tempo",
          desc: "Você só descobre que estourou o orçamento quando já é tarde.",
        },
        {
          icon: "lightbulb",
          title: "Faltam recomendações reais",
          desc: "Apps mostram números, mas não dizem o que fazer com eles.",
        },
      ],
    },
    solution: {
      eyebrow: "A solução",
      title: "Lake Finance: o consultor que entende você",
      items: [
        {
          icon: "trending-up",
          title: "IA preditiva",
          desc: 'Antecipa cenários: "você pode não ter saldo no dia 25" — antes que aconteça.',
        },
        {
          icon: "lightbulb",
          title: "Recomendações inteligentes",
          desc: "Sugere cortes de despesas e realocações de orçamento sob medida.",
        },
        {
          icon: "refresh-cw",
          title: "Automação total",
          desc: "Sincroniza com todos os seus bancos via Open Finance, em tempo real.",
        },
        {
          icon: "sparkles",
          title: "Copiloto com IA",
          desc: 'Pergunte em linguagem natural: "quanto gastei com combustível?"',
        },
        {
          icon: "gauge",
          title: "Health Score",
          desc: "Sua saúde financeira em um número de 0 a 100, fácil de acompanhar.",
        },
      ],
    },
    copilot: {
      eyebrow: "Copiloto",
      title: "Converse com seu copiloto financeiro",
      sub: "Pergunte em linguagem natural e receba respostas com base nas suas transações reais. Experimente:",
      botName: "Lakefi",
      online: "Online agora",
      placeholder: "Pergunte algo sobre suas finanças…",
      greeting:
        "Oi! Sou seu copiloto financeiro. Posso analisar seus gastos, criar metas e prever seu saldo. O que você quer saber?",
      fallback:
        "Boa pergunta! Na versão completa eu analiso seu histórico real e respondo na hora. Quer experimentar uma das sugestões ao lado?",
      suggested: [
        {
          q: "Quanto gastei com combustível este mês?",
          a: "Você gastou R$ 487,30 com combustível em junho — 12% a mais que em maio. Quer que eu crie um alerta quando passar de R$ 450?",
        },
        {
          q: "Vou conseguir pagar as contas no dia 25?",
          a: "Com base no seu fluxo, seu saldo no dia 25 deve ficar em R$ 320. É apertado. Posso sugerir adiar 2 assinaturas para depois do salário?",
        },
        {
          q: "Onde posso economizar sem sofrer?",
          a: "Encontrei R$ 210/mês em assinaturas pouco usadas e delivery duplicado. Cortando isso, você mantém seu estilo de vida e economiza R$ 2.520 no ano.",
        },
      ],
    },
    steps: {
      eyebrow: "Como funciona",
      title: "Comece em 3 passos",
      items: [
        {
          n: "1",
          icon: "link",
          title: "Conecte",
          desc: "Entre com Google ou Apple e conecte suas contas bancárias com segurança.",
        },
        {
          n: "2",
          icon: "shield-check",
          title: "Autorize",
          desc: "O Lake sincroniza suas transações automaticamente via Open Finance — 100% seguro.",
        },
        {
          n: "3",
          icon: "brain",
          title: "Receba insights",
          desc: "Comece a receber alertas, recomendações e projeções em tempo real.",
        },
      ],
    },
    features: {
      eyebrow: "Recursos",
      title: "Funcionalidades poderosas",
      items: [
        {
          name: "Dashboard",
          icon: "layout-dashboard",
          title: "Dashboard unificado",
          desc: "Veja todas as contas, saldos e gastos reunidos em um único lugar — claro e legível.",
          screenTitle: "Visão geral",
          rows: [
            { icon: "wallet", label: "Saldo total", value: "R$ 48.230" },
            { icon: "arrow-down-left", label: "Entradas", value: "R$ 12.400" },
            { icon: "arrow-up-right", label: "Saídas", value: "R$ 8.910" },
          ],
        },
        {
          name: "Categorização",
          icon: "tags",
          title: "Categorização automática",
          desc: "A IA classifica seus gastos sozinha, com mais de 85% de precisão — sem planilhas.",
          screenTitle: "Categorias",
          rows: [
            { icon: "utensils", label: "Alimentação", value: "R$ 1.240" },
            { icon: "car", label: "Transporte", value: "R$ 680" },
            { icon: "home", label: "Moradia", value: "R$ 2.100" },
          ],
        },
        {
          name: "Alertas",
          icon: "bell",
          title: "Alertas inteligentes",
          desc: "Notificações antes de estourar o orçamento ou gastar demais — sempre a tempo.",
          screenTitle: "Alertas",
          rows: [
            {
              icon: "alert-triangle",
              label: "Orçamento perto do limite",
              value: "92%",
            },
            {
              icon: "calendar-clock",
              label: "Fatura vence em",
              value: "3 dias",
            },
            {
              icon: "trending-down",
              label: "Saldo projetado",
              value: "R$ 320",
            },
          ],
        },
        {
          name: "Metas",
          icon: "target",
          title: "Metas financeiras",
          desc: 'Crie e acompanhe metas como "Viagem R$ 5.000" com progresso visual e automático.',
          screenTitle: "Suas metas",
          rows: [
            { icon: "plane", label: "Viagem", value: "68%" },
            { icon: "shield", label: "Reserva", value: "45%" },
            { icon: "smartphone", label: "Novo celular", value: "90%" },
          ],
        },
        {
          name: "Relatórios",
          icon: "file-text",
          title: "Relatórios automáticos",
          desc: "Exporte relatórios em PDF com insights gerados pela IA, prontos para compartilhar.",
          screenTitle: "Relatório · junho",
          rows: [
            { icon: "pie-chart", label: "Maior categoria", value: "Moradia" },
            { icon: "percent", label: "Taxa de poupança", value: "18%" },
            { icon: "file-down", label: "Exportar PDF", value: "Pronto" },
          ],
        },
        {
          name: "Retrospectiva",
          icon: "sparkles",
          title: "Retrospectiva anual",
          desc: 'Uma análise estilo "Wrapped" dos seus gastos, com os destaques do seu ano.',
          screenTitle: "Seu ano em Lake",
          rows: [
            { icon: "trophy", label: "Mês mais econômico", value: "Março" },
            { icon: "flame", label: "Sequência de metas", value: "7 meses" },
            { icon: "piggy-bank", label: "Total poupado", value: "R$ 9.840" },
          ],
        },
      ],
    },
    security: {
      eyebrow: "Segurança",
      title: "Seus dados estão completamente seguros",
      sub: "Privacidade e segurança não são opcionais. São a base de tudo o que construímos.",
      items: [
        {
          icon: "lock",
          title: "Criptografia AES-256",
          desc: "Todos os dados financeiros são criptografados de ponta a ponta.",
        },
        {
          icon: "shield-check",
          title: "Conformidade LGPD",
          desc: "Seguimos a Lei Geral de Proteção de Dados do Brasil.",
        },
        {
          icon: "landmark",
          title: "Open Finance Brasil",
          desc: "Integração oficial regulada pelo Banco Central.",
        },
        {
          icon: "eye-off",
          title: "Dados anonimizados",
          desc: "Nenhuma informação pessoal identificável fica exposta em logs.",
        },
        {
          icon: "key-round",
          title: "Sem acesso a senhas",
          desc: "Você controla suas credenciais via OAuth2. Nunca guardamos senhas.",
        },
      ],
    },
    social: {
      eyebrow: "Prova social",
      title: "Seja um dos primeiros a controlar seu dinheiro com IA",
      stats: [
        "pessoa na equipe",
        "de disponibilidade",
        "feito no Brasil",
        "fundada em",
      ],
      testimonials: [
        {
          quote:
            "Em breve: depoimentos dos nossos primeiros usuários do Lake Finance Beta.",
          name: "Versão Beta",
          role: "Acesso antecipado disponível",
          initials: "β",
        },
        {
          quote:
            "Estamos construindo o Lake Finance com foco total na experiência do usuário. Em breve teremos depoimentos reais.",
          name: "Equipe Lake",
          role: "São Paulo, Brasil",
          initials: "JL",
        },
        {
          quote:
            "Seja um dos primeiros a usar o Lake Finance e influencie diretamente o produto que estamos construindo.",
          name: "Jefferson Laurindo",
          role: "CEO & Founder",
          initials: "JL",
        },
      ],
    },
    pricing: {
      eyebrow: "Planos",
      title: "Planos para cada momento",
      popular: "Versão Beta",
      plans: [
        {
          name: "Beta",
          price: "R$ 0",
          period: "/mês",
          featured: true,
          cta: "Garantir acesso",
          features: [
            "Acesso antecipado ao Beta",
            "Categorização automática com IA",
            "Health Score financeiro",
            "Copiloto Lakefi",
            "Feedback direto com o fundador",
          ],
        },
        {
          name: "Pro",
          price: "Em breve",
          period: "",
          featured: false,
          cta: "Em breve",
          features: [
            "Em desenvolvimento",
            "Disponível em breve após o Beta",
          ],
        },
        {
          name: "Família",
          price: "Em breve",
          period: "",
          featured: false,
          cta: "Em breve",
          features: [
            "Em desenvolvimento",
            "Disponível em breve após o Beta",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "Dúvidas",
      title: "Perguntas frequentes",
      items: [
        {
          q: "É realmente seguro conectar minha conta bancária?",
          a: "Sim. Usamos OAuth2 e o Open Finance Brasil, regulado pelo Banco Central. Nunca armazenamos suas senhas e todos os dados são criptografados com AES-256.",
        },
        {
          q: "Funciona com todos os bancos?",
          a: "Sim — mais de 200 instituições são suportadas via Open Finance Brasil, incluindo os maiores bancos e fintechs do país.",
        },
        {
          q: "Quanto custa?",
          a: "O Lake Finance está em versão beta gratuita. O acesso antecipado é completamente grátis. Planos pagos serão anunciados em breve após o lançamento oficial.",
        },
        {
          q: "O que é o Health Score?",
          a: "É um indicador de 0 a 100 que resume sua saúde financeira com base em renda, gastos, metas e reservas. Quanto maior, melhor seu momento financeiro.",
        },
        {
          q: "O Lake pode movimentar meu dinheiro?",
          a: "Não. O Lake Finance é somente leitura: apenas lê suas transações e saldos via Open Finance. Nenhuma movimentação financeira é realizada.",
        },
        {
          q: "Como cancelo minha assinatura?",
          a: "Você pode cancelar a qualquer momento direto nas configurações do app ou pelo suporte. Não há fidelidade ou multa.",
        },
      ],
    },
    cta: {
      titleA: "Comece a controlar",
      titleEm: "seu dinheiro hoje.",
      sub: "Garanta seu acesso antecipado ao Lake Finance Beta e seja um dos primeiros a usar a IA financeira do futuro.",
      ctaPrimary: "Garantir acesso",
      ctaSecondary: "Ver demonstração",
    },
    footer: {
      legal:
        "Lake Tecnologia · CNPJ 57.924.952/0001-19 · Sujeito às regras do Open Finance Brasil.",
      copyright: "© 2024 Lake Finance",
      tag: "BUILD WITH ♥ NO BRASIL",
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
            { label: "Central de ajuda", href: "/ajuda" },
            { label: "Termos de uso", href: "/termos" },
            { label: "Privacidade", href: "/privacidade" },
            { label: "Contato", href: "/contato" },
          ],
        },
      ],
    },
  },

  en: {
    announce: "Lake Finance is in Beta — get early access for free.",
    announceTag: "BETA",
    nav: {
      links: [
        { label: "Problem", href: "#problema" },
        { label: "Solution", href: "#solucao" },
        { label: "Features", href: "#recursos" },
        { label: "Security", href: "#seguranca" },
        { label: "Pricing", href: "#precos" },
      ],
      login: "Sign in",
      cta: "Open account",
    },
    hero: {
      eyebrow: "AI-powered personal finance",
      titleA: "Total financial clarity,",
      titleEm: "wherever you are.",
      sub: "Lake Finance uses AI to connect your accounts, analyze your spending, and give you real control of your money — no spreadsheets, no complexity.",
      ctaPrimary: "Get early access",
      ctaSecondary: "Try web demo",
      trust: [
        "100% secure · LGPD certified",
        "Beta version · Early access available",
        "100% made in Brazil",
      ],
    },
    phone: {
      greeting: "Hello,",
      account: "Lake Account · Everyday",
      month: "this month",
      insightTitle: "Watch out for the 25th",
      insightBody: "Your balance may go negative. Tap to see the plan.",
      rows: [
        {
          icon: "fuel",
          name: "Shell Station",
          cat: "Transport",
          amount: "− R$ 187.40",
        },
        {
          icon: "shopping-bag",
          name: "Pão Market",
          cat: "Grocery",
          amount: "− R$ 312.90",
        },
      ],
    },
    problem: {
      eyebrow: "The problem",
      title: "Do you feel you're overspending but don't know why?",
      items: [
        {
          icon: "bar-chart-3",
          title: "No clear cash flow view",
          desc: "Money comes and goes, but there's no overview of where it actually goes.",
        },
        {
          icon: "search",
          title: "Hard to categorize expenses",
          desc: "Manual spreadsheets take time and are almost never up to date.",
        },
        {
          icon: "alert-triangle",
          title: "No timely alerts",
          desc: "You only discover you've blown the budget when it's too late.",
        },
        {
          icon: "lightbulb",
          title: "Missing real recommendations",
          desc: "Apps show numbers, but don't tell you what to do with them.",
        },
      ],
    },
    solution: {
      eyebrow: "The solution",
      title: "Lake Finance: the advisor that understands you",
      items: [
        {
          icon: "trending-up",
          title: "Predictive AI",
          desc: 'Anticipates scenarios: "you may not have balance on the 25th" — before it happens.',
        },
        {
          icon: "lightbulb",
          title: "Smart recommendations",
          desc: "Suggests expense cuts and budget reallocations tailored to you.",
        },
        {
          icon: "refresh-cw",
          title: "Full automation",
          desc: "Syncs with all your banks via Open Finance, in real time.",
        },
        {
          icon: "sparkles",
          title: "AI Copilot",
          desc: 'Ask in natural language: "how much did I spend on fuel?"',
        },
        {
          icon: "gauge",
          title: "Health Score",
          desc: "Your financial health in a number from 0 to 100, easy to track.",
        },
      ],
    },
    copilot: {
      eyebrow: "Copilot",
      title: "Chat with your financial copilot",
      sub: "Ask in natural language and get answers based on your real transactions. Try it:",
      botName: "Lakefi",
      online: "Online now",
      placeholder: "Ask something about your finances…",
      greeting:
        "Hi! I'm your financial copilot. I can analyze your spending, set goals, and forecast your balance. What would you like to know?",
      fallback:
        "Great question! In the full version I analyze your real history and respond instantly. Want to try one of the suggestions on the side?",
      suggested: [
        {
          q: "How much did I spend on fuel this month?",
          a: "You spent R$ 487.30 on fuel in June — 12% more than in May. Should I create an alert when it exceeds R$ 450?",
        },
        {
          q: "Will I be able to pay bills on the 25th?",
          a: "Based on your cash flow, your balance on the 25th should be R$ 320. It's tight. I can suggest deferring 2 subscriptions until after payday?",
        },
        {
          q: "Where can I save without sacrificing lifestyle?",
          a: "I found R$ 210/month in rarely used subscriptions and duplicate delivery orders. Cutting that, you keep your lifestyle and save R$ 2,520 per year.",
        },
      ],
    },
    steps: {
      eyebrow: "How it works",
      title: "Get started in 3 steps",
      items: [
        {
          n: "1",
          icon: "link",
          title: "Connect",
          desc: "Sign in with Google or Apple and securely connect your bank accounts.",
        },
        {
          n: "2",
          icon: "shield-check",
          title: "Authorize",
          desc: "Lake syncs your transactions automatically via Open Finance — 100% secure.",
        },
        {
          n: "3",
          icon: "brain",
          title: "Get insights",
          desc: "Start receiving alerts, recommendations, and projections in real time.",
        },
      ],
    },
    features: {
      eyebrow: "Features",
      title: "Powerful functionality",
      items: [
        {
          name: "Dashboard",
          icon: "layout-dashboard",
          title: "Unified dashboard",
          desc: "See all accounts, balances, and expenses in one place — clear and readable.",
          screenTitle: "Overview",
          rows: [
            { icon: "wallet", label: "Total balance", value: "R$ 48,230" },
            { icon: "arrow-down-left", label: "Income", value: "R$ 12,400" },
            { icon: "arrow-up-right", label: "Expenses", value: "R$ 8,910" },
          ],
        },
        {
          name: "Categorization",
          icon: "tags",
          title: "Automatic categorization",
          desc: "AI classifies your spending on its own, with over 85% accuracy — no spreadsheets.",
          screenTitle: "Categories",
          rows: [
            { icon: "utensils", label: "Food", value: "R$ 1,240" },
            { icon: "car", label: "Transport", value: "R$ 680" },
            { icon: "home", label: "Housing", value: "R$ 2,100" },
          ],
        },
        {
          name: "Alerts",
          icon: "bell",
          title: "Smart alerts",
          desc: "Notifications before blowing the budget or overspending — always in time.",
          screenTitle: "Alerts",
          rows: [
            {
              icon: "alert-triangle",
              label: "Budget near limit",
              value: "92%",
            },
            { icon: "calendar-clock", label: "Bill due in", value: "3 days" },
            {
              icon: "trending-down",
              label: "Projected balance",
              value: "R$ 320",
            },
          ],
        },
        {
          name: "Goals",
          icon: "target",
          title: "Financial goals",
          desc: 'Create and track goals like "Trip R$ 5,000" with visual, automatic progress.',
          screenTitle: "Your goals",
          rows: [
            { icon: "plane", label: "Trip", value: "68%" },
            { icon: "shield", label: "Reserve", value: "45%" },
            { icon: "smartphone", label: "New phone", value: "90%" },
          ],
        },
        {
          name: "Reports",
          icon: "file-text",
          title: "Automatic reports",
          desc: "Export PDF reports with AI-generated insights, ready to share.",
          screenTitle: "Report · June",
          rows: [
            { icon: "pie-chart", label: "Top category", value: "Housing" },
            { icon: "percent", label: "Savings rate", value: "18%" },
            { icon: "file-down", label: "Export PDF", value: "Ready" },
          ],
        },
        {
          name: "Rewind",
          icon: "sparkles",
          title: "Annual rewind",
          desc: 'A "Wrapped"-style analysis of your spending, with the highlights of your year.',
          screenTitle: "Your year in Lake",
          rows: [
            { icon: "trophy", label: "Most frugal month", value: "March" },
            { icon: "flame", label: "Goal streak", value: "7 months" },
            { icon: "piggy-bank", label: "Total saved", value: "R$ 9,840" },
          ],
        },
      ],
    },
    security: {
      eyebrow: "Security",
      title: "Your data is completely safe",
      sub: "Privacy and security are not optional. They are the foundation of everything we build.",
      items: [
        {
          icon: "lock",
          title: "AES-256 encryption",
          desc: "All financial data is encrypted end-to-end.",
        },
        {
          icon: "shield-check",
          title: "LGPD compliance",
          desc: "We follow Brazil's General Data Protection Law.",
        },
        {
          icon: "landmark",
          title: "Open Finance Brazil",
          desc: "Official integration regulated by the Central Bank.",
        },
        {
          icon: "eye-off",
          title: "Anonymized data",
          desc: "No personally identifiable information is exposed in logs.",
        },
        {
          icon: "key-round",
          title: "No password access",
          desc: "You control your credentials via OAuth2. We never store passwords.",
        },
      ],
    },
    social: {
      eyebrow: "Social proof",
      title: "Be among the first to control your money with AI",
      stats: [
        "team member",
        "uptime",
        "made in Brazil",
        "founded in",
      ],
      testimonials: [
        {
          quote:
            "Coming soon: testimonials from our first Lake Finance Beta users.",
          name: "Beta Version",
          role: "Early access available",
          initials: "β",
        },
        {
          quote:
            "We're building Lake Finance with a total focus on user experience. Real testimonials coming soon.",
          name: "Lake Team",
          role: "São Paulo, Brazil",
          initials: "JL",
        },
        {
          quote:
            "Be one of the first to use Lake Finance and directly influence the product we're building.",
          name: "Jefferson Laurindo",
          role: "CEO & Founder",
          initials: "JL",
        },
      ],
    },
    pricing: {
      eyebrow: "Plans",
      title: "Plans for every stage",
      popular: "Beta Version",
      plans: [
        {
          name: "Beta",
          price: "R$ 0",
          period: "/mo",
          featured: true,
          cta: "Get early access",
          features: [
            "Early access to Beta",
            "AI-powered auto-categorization",
            "Financial Health Score",
            "Lakefi copilot",
            "Direct feedback with the founder",
          ],
        },
        {
          name: "Pro",
          price: "Coming soon",
          period: "",
          featured: false,
          cta: "Coming soon",
          features: [
            "In development",
            "Available soon after Beta",
          ],
        },
        {
          name: "Family",
          price: "Coming soon",
          period: "",
          featured: false,
          cta: "Coming soon",
          features: [
            "In development",
            "Available soon after Beta",
          ],
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          q: "Is it really safe to connect my bank account?",
          a: "Yes. We use OAuth2 and Open Finance Brazil, regulated by the Central Bank. We never store your passwords and all data is encrypted with AES-256.",
        },
        {
          q: "Does it work with all banks?",
          a: "Yes — over 200 institutions are supported via Open Finance Brazil, including the largest banks and fintechs in the country.",
        },
        {
          q: "How much does it cost?",
          a: "Lake Finance is in free beta. Early access is completely free. Paid plans will be announced soon after the official launch.",
        },
        {
          q: "What is the Health Score?",
          a: "It's a 0-to-100 indicator that summarizes your financial health based on income, expenses, goals, and reserves. The higher, the better your financial moment.",
        },
        {
          q: "Can Lake move my money?",
          a: "No. Lake Finance is read-only: it only reads your transactions and balances via Open Finance. No financial transactions are performed.",
        },
        {
          q: "How do I cancel my subscription?",
          a: "You can cancel at any time directly in the app settings or through support. There is no lock-in or cancellation fee.",
        },
      ],
    },
    cta: {
      titleA: "Start taking control",
      titleEm: "of your money today.",
      sub: "Get early access to Lake Finance Beta and be among the first to use the financial AI of the future.",
      ctaPrimary: "Get early access",
      ctaSecondary: "See demo",
    },
    footer: {
      legal:
        "Lake Finance Technology · CNPJ 57.924.952/0001-19 · Subject to Open Finance Brazil rules.",
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
            { label: "Help center", href: "/ajuda" },
            { label: "Terms of use", href: "/termos" },
            { label: "Privacy", href: "/privacidade" },
            { label: "Contact", href: "/contato" },
          ],
        },
      ],
    },
  },
} as const;

// ─── Stats ────────────────────────────────────────────────────────────────────

const STATS_META = [
  { prefix: "", decimals: 0, suffix: "", group: false },
  { prefix: "", decimals: 1, suffix: "%", group: false },
  { prefix: "", decimals: 0, suffix: "%", group: false },
  { prefix: "", decimals: 0, suffix: "", group: false },
];

function fmtStat(val: number, m: (typeof STATS_META)[number], lang: Lang) {
  const loc = lang === "pt" ? "pt-BR" : "en-US";
  if (m.decimals) {
    let n = val.toFixed(m.decimals);
    if (lang === "pt") n = n.replace(".", ",");
    return m.prefix + n + m.suffix;
  }
  const n = m.group
    ? Math.round(val).toLocaleString(loc)
    : String(Math.round(val));
  return m.prefix + n + m.suffix;
}

// ─── Main page component ──────────────────────────────────────────────────────

export default function Page() {
  const [lang, setLang] = useState<Lang>("pt");
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [chatInput, setChatInput] = useState("");
  const [chat, setChat] = useState<{ role: string; text: string }[] | null>(
    null,
  );
  const [statVals, setStatVals] = useState([0, 0, 0, 0]);

  const statsRef = useRef<HTMLElement | null>(null);
  const chatRef = useRef<HTMLDivElement | null>(null);
  const statsDone = useRef(false);

  const t = DICT[lang];
  const af = t.features.items[activeFeature];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Stats counter animation on scroll
  const animateStats = useCallback(() => {
    if (statsDone.current) return;
    statsDone.current = true;
    const targets = [1, 99.9, 100, 2024];
    const dur = 1500,
      t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / dur);
      const ease = 1 - Math.pow(1 - p, 3);
      setStatVals(targets.map((v) => v * ease));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    if ("IntersectionObserver" in window) {
      const obs = new IntersectionObserver(
        (entries) => entries.forEach((e) => e.isIntersecting && animateStats()),
        { threshold: 0.4 },
      );
      obs.observe(el);
      return () => obs.disconnect();
    }
    animateStats();
  }, [animateStats]);

  useEffect(() => {
    if (chatRef.current)
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chat]);

  const greeting = t.copilot.greeting;
  const fallback = t.copilot.fallback;

  const currentChat = chat ?? [{ role: "bot", text: greeting }];

  const ask = useCallback(
    (q: string, a: string) => {
      setChat((prev) => [
        ...(prev ?? [{ role: "bot", text: greeting }]),
        { role: "user", text: q },
      ]);
      setTimeout(
        () => setChat((prev) => [...(prev ?? []), { role: "bot", text: a }]),
        450,
      );
    },
    [greeting],
  );

  const sendFree = useCallback(() => {
    const v = chatInput.trim();
    if (!v) return;
    setChatInput("");
    setChat((prev) => [
      ...(prev ?? [{ role: "bot", text: greeting }]),
      { role: "user", text: v },
    ]);
    setTimeout(
      () =>
        setChat((prev) => [...(prev ?? []), { role: "bot", text: fallback }]),
      450,
    );
  }, [chatInput, greeting, fallback]);

  const changeLang = (l: Lang) => {
    setLang(l);
    setChat(null);
    statsDone.current = false;
    setStatVals([0, 0, 0, 0]);
  };

  return (
    <div
      id="main-content"
      style={{
        fontFamily: "var(--font-sans)",
        background: "var(--paper)",
        color: "var(--text-body)",
        overflowX: "hidden",
      }}
    >
      {/* ── MOBILE MENU OVERLAY ─────────────────────────────────────────── */}
      {menuOpen && (
        <div
          id="mobile-menu"
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
            <a
              href="#top"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                textDecoration: "none",
              }}
            >
              <MarkDark size={26} />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--text-strong)",
                }}
              >
                Lake
              </span>
            </a>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                color: "var(--text-muted)",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  width: 20,
                  height: 2,
                  background: "currentColor",
                  transform: "rotate(45deg)",
                  borderRadius: 2,
                }}
              />
              <span
                style={{
                  position: "absolute",
                  width: 20,
                  height: 2,
                  background: "currentColor",
                  transform: "rotate(-45deg)",
                  borderRadius: 2,
                }}
              />
            </button>
          </div>
          <nav
            style={{
              padding: "26px 22px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  color: "var(--text-strong)",
                  textDecoration: "none",
                  padding: "12px 0",
                  borderBottom: "1px solid var(--border-subtle)",
                  display: "block",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div
            style={{
              padding: "22px",
              borderTop: "1px solid var(--border-subtle)",
              display: "flex",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <Btn variant="secondary" size="md" full>
              {t.nav.login}
            </Btn>
            <Btn variant="accent" size="md" full>
              {t.nav.cta}
            </Btn>
            <div
              style={{
                display: "flex",
                gap: 14,
                justifyContent: "center",
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "var(--text-muted)",
                marginTop: 4,
              }}
            >
              <span>★ 4.9</span>
              <span>·</span>
              <span>FDIC insured</span>
              <span>·</span>
              <span>2M+ members</span>
            </div>
          </div>
        </div>
      )}

      {/* ── ANNOUNCEMENT BAR ────────────────────────────────────────────── */}
      <div
        style={{
          background: "var(--ink-900)",
          color: "var(--text-on-dark)",
          textAlign: "center",
          padding: "9px 16px",
          fontSize: 13.5,
          letterSpacing: "-0.005em",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.12em",
            color: "var(--lake-300)",
            marginRight: 10,
          }}
        >
          {t.announceTag}
        </span>
        {t.announce}
      </div>

      {/* ── STICKY NAV ──────────────────────────────────────────────────── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(251,251,247,.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 40px",
            height: 68,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 38 }}>
            <a
              href="#top"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                textDecoration: "none",
              }}
            >
              <MarkDark size={30} />
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 23,
                  fontWeight: 600,
                  color: "var(--text-strong)",
                  letterSpacing: "-0.01em",
                }}
              >
                Lake
              </span>
            </a>
            <nav className="lk-nav-links" style={{ display: "flex", gap: 26 }}>
              {t.nav.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    color: "var(--text-body)",
                    fontSize: 14.5,
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              className="lk-nav-lang"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "var(--ink-50)",
                border: "1px solid var(--border-subtle)",
                borderRadius: 999,
                padding: 3,
              }}
            >
              {(["pt", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => changeLang(l)}
                  aria-pressed={lang === l}
                  style={{
                    padding: "5px 12px",
                    border: "none",
                    borderRadius: 999,
                    cursor: "pointer",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    fontWeight: 600,
                    transition: "all 150ms",
                    background: lang === l ? "var(--brand)" : "transparent",
                    color: lang === l ? "#fff" : "var(--text-muted)",
                  }}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <div
              className="lk-nav-actions"
              style={{ display: "flex", alignItems: "center", gap: 14 }}
            >
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  color: "var(--text-strong)",
                  fontSize: 14.5,
                  fontWeight: 600,
                }}
              >
                {t.nav.login}
              </a>
              <Btn variant="primary" size="sm">
                {t.nav.cta}
              </Btn>
            </div>
            <button
              className="lk-hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={menuOpen ? "true" : "false"}
              aria-controls="mobile-menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section
        id="top"
        className="lk-hero"
        style={{
          position: "relative",
          background: "var(--grad-mist)",
          overflow: "hidden",
        }}
      >
        <svg
          width={720}
          height={720}
          viewBox="0 0 720 720"
          style={{
            position: "absolute",
            left: -200,
            bottom: -300,
            opacity: 0.5,
            pointerEvents: "none",
          }}
        >
          {[120, 200, 280, 360].map((r) => (
            <circle
              key={r}
              cx={360}
              cy={360}
              r={r}
              fill="none"
              stroke={r > 240 ? "var(--lake-100)" : "var(--lake-200)"}
              strokeWidth={1.5}
            />
          ))}
        </svg>
        {/* Mobile: decorative circles top-right */}
        <svg
          width={320}
          height={320}
          viewBox="0 0 320 320"
          className="lk-hero-mobile-card"
          style={{
            position: "absolute",
            right: -100,
            top: -60,
            opacity: 0.12,
            pointerEvents: "none",
            display: "none",
          }}
        >
          <circle
            cx={160}
            cy={160}
            r={60}
            fill="none"
            stroke="#9fc9bd"
            strokeWidth={2}
          />
          <circle
            cx={160}
            cy={160}
            r={110}
            fill="none"
            stroke="#9fc9bd"
            strokeWidth={2}
          />
          <circle
            cx={160}
            cy={160}
            r={155}
            fill="none"
            stroke="#9fc9bd"
            strokeWidth={2}
          />
        </svg>
        <div
          className="lk-hero-grid"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "84px 40px 92px",
            display: "grid",
            gridTemplateColumns: "1.08fr 0.92fr",
            gap: 56,
            alignItems: "center",
            position: "relative",
          }}
        >
          {/* left copy */}
          <div>
            <span
              className="lk-hero-eyebrow"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--lake-600)",
              }}
            >
              {t.hero.eyebrow}
            </span>
            <h1
              className="lk-hero-h1"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 60,
                lineHeight: 1.04,
                letterSpacing: "-0.025em",
                color: "var(--text-strong)",
                fontWeight: 500,
                margin: "18px 0 0",
              }}
            >
              {t.hero.titleA}{" "}
              <em style={{ fontStyle: "italic", color: "var(--lake-700)" }}>
                {t.hero.titleEm}
              </em>
            </h1>
            <p
              className="lk-hero-sub"
              style={{
                fontSize: 19,
                lineHeight: 1.55,
                color: "var(--text-body)",
                maxWidth: 480,
                margin: "22px 0 0",
              }}
            >
              {t.hero.sub}
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                marginTop: 34,
                flexWrap: "wrap",
              }}
            >
              <Btn variant="accent" size="lg">
                {t.hero.ctaPrimary}
              </Btn>
              <Btn variant="secondary" size="lg">
                {t.hero.ctaSecondary}
              </Btn>
            </div>
            <ul
              className="lk-hero-trust"
              style={{
                listStyle: "none",
                padding: 0,
                margin: "36px 0 0",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {t.hero.trust.map((badge, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontSize: 14.5,
                    color: "var(--text-body)",
                  }}
                >
                  <span
                    className="trust-icon"
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 999,
                      background: "var(--lake-100)",
                      color: "var(--lake-700)",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Check size={13} />
                  </span>
                  {badge}
                </li>
              ))}
            </ul>

            {/* Mobile-only floating account card (wireframe Frame A) */}
            <div
              className="lk-hero-mobile-card"
              style={{ marginTop: 30, display: "none" }}
            >
              <div
                style={{
                  background: "#f5f5ef",
                  borderRadius: 14,
                  padding: "18px 18px 20px",
                  transform: "rotate(-1.5deg)",
                  boxShadow: "0 8px 24px rgba(0,0,0,.28)",
                  maxWidth: 320,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--ink-400)",
                    }}
                  >
                    Everyday
                  </span>
                  <div
                    style={{
                      width: 30,
                      height: 18,
                      borderRadius: 4,
                      background: "var(--ink-100)",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 26,
                    color: "#454541",
                    marginTop: 14,
                    letterSpacing: "-0.01em",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  $48,230.94
                </div>
                <div
                  style={{
                    height: 9,
                    width: "55%",
                    background: "var(--ink-100)",
                    borderRadius: 3,
                    marginTop: 10,
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 18,
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "var(--ink-400)",
                  }}
                >
                  <span>•••• 4021</span>
                  <span>Mara Quinn</span>
                </div>
              </div>
            </div>
          </div>

          {/* phone mockup — desktop only */}
          <div
            className="lk-phone-wrap"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                width: 320,
                animation: "lkFloat 7s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  background: "var(--ink-900)",
                  borderRadius: 44,
                  padding: 12,
                  boxShadow: "var(--shadow-xl)",
                }}
              >
                <div
                  style={{
                    background: "var(--paper)",
                    borderRadius: 34,
                    overflow: "hidden",
                  }}
                >
                  {/* status bar */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "14px 22px 4px",
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "var(--text-strong)",
                    }}
                  >
                    <span>9:41</span>
                    <span
                      style={{
                        display: "inline-flex",
                        gap: 5,
                        alignItems: "center",
                        color: "var(--text-muted)",
                      }}
                    >
                      <Signal size={13} />
                      <Wifi size={13} />
                      <BatteryFull size={16} />
                    </span>
                  </div>
                  <div style={{ padding: "8px 18px 20px" }}>
                    {/* greeting + health ring */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 14,
                      }}
                    >
                      <div>
                        <div
                          style={{ fontSize: 12, color: "var(--text-muted)" }}
                        >
                          {t.phone.greeting}
                        </div>
                        <div
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: 20,
                            color: "var(--text-strong)",
                            fontWeight: 500,
                          }}
                        >
                          Mara Quinn
                        </div>
                      </div>
                      <div
                        style={{ position: "relative", width: 52, height: 52 }}
                      >
                        <svg
                          width={52}
                          height={52}
                          viewBox="0 0 120 120"
                          style={{ transform: "rotate(-90deg)" }}
                        >
                          <circle
                            cx={60}
                            cy={60}
                            r={50}
                            fill="none"
                            stroke="var(--ink-100)"
                            strokeWidth={11}
                          />
                          <circle
                            cx={60}
                            cy={60}
                            r={50}
                            fill="none"
                            stroke="var(--lake-500)"
                            strokeWidth={11}
                            strokeLinecap="round"
                            strokeDasharray={314}
                            style={{
                              animation:
                                "lkRing 1.6s cubic-bezier(.4,0,.2,1) forwards",
                            }}
                          />
                        </svg>
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "var(--font-mono)",
                            fontSize: 16,
                            fontWeight: 600,
                            color: "var(--lake-700)",
                          }}
                        >
                          82
                        </div>
                      </div>
                    </div>
                    {/* balance card */}
                    <div
                      style={{
                        background: "var(--grad-dusk)",
                        borderRadius: 20,
                        padding: "16px 18px",
                        color: "var(--text-on-dark)",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <svg
                        width={120}
                        height={120}
                        viewBox="0 0 120 120"
                        style={{
                          position: "absolute",
                          right: -20,
                          top: -20,
                          opacity: 0.14,
                          pointerEvents: "none",
                        }}
                      >
                        <circle
                          cx={60}
                          cy={60}
                          r={28}
                          fill="none"
                          stroke="#fff"
                          strokeWidth={2}
                        />
                        <circle
                          cx={60}
                          cy={60}
                          r={44}
                          fill="none"
                          stroke="#fff"
                          strokeWidth={2}
                        />
                      </svg>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--text-on-dark-muted)",
                        }}
                      >
                        {t.phone.account}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontVariantNumeric: "tabular-nums",
                          fontSize: 28,
                          fontWeight: 500,
                          letterSpacing: "-0.01em",
                          marginTop: 4,
                        }}
                      >
                        R$ 48.230,94
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 12,
                          color: "#9FE6CE",
                          marginTop: 2,
                        }}
                      >
                        ▲ R$ 2.140 {t.phone.month}
                      </div>
                    </div>
                    {/* AI insight chip */}
                    <div
                      style={{
                        marginTop: 12,
                        background: "var(--coral-100)",
                        border: "1px solid var(--coral-200)",
                        borderRadius: 16,
                        padding: "13px 14px",
                        display: "flex",
                        gap: 11,
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          width: 28,
                          height: 28,
                          borderRadius: 9,
                          background: "var(--coral-500)",
                          color: "#fff",
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Sparkles size={15} />
                      </span>
                      <div>
                        <div
                          style={{
                            fontSize: 13,
                            fontWeight: 600,
                            color: "var(--coral-700)",
                            lineHeight: 1.3,
                          }}
                        >
                          {t.phone.insightTitle}
                        </div>
                        <div
                          style={{
                            fontSize: 12,
                            color: "var(--ink-600)",
                            marginTop: 2,
                            lineHeight: 1.4,
                          }}
                        >
                          {t.phone.insightBody}
                        </div>
                      </div>
                    </div>
                    {/* spend rows */}
                    <div
                      style={{
                        marginTop: 14,
                        display: "flex",
                        flexDirection: "column",
                        gap: 10,
                      }}
                    >
                      {t.phone.rows.map((row, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 12,
                          }}
                        >
                          <span
                            style={{
                              width: 34,
                              height: 34,
                              borderRadius: 11,
                              background: "var(--lake-50)",
                              color: "var(--lake-700)",
                              display: "inline-flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <Icon name={row.icon} size={16} />
                          </span>
                          <div style={{ flex: 1 }}>
                            <div
                              style={{
                                fontSize: 13,
                                color: "var(--text-strong)",
                                fontWeight: 500,
                              }}
                            >
                              {row.name}
                            </div>
                            <div
                              style={{
                                fontSize: 11,
                                color: "var(--text-muted)",
                              }}
                            >
                              {row.cat}
                            </div>
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-mono)",
                              fontSize: 13,
                              color: "var(--text-strong)",
                            }}
                          >
                            {row.amount}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ─────────────────────────────────────────────────────── */}
      <section
        id="problema"
        className="lk-container"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "92px 40px" }}
      >
        <div style={{ maxWidth: 640, marginBottom: 44 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            {t.problem.eyebrow}
          </span>
          <h2
            className="lk-h-section"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 42,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--text-strong)",
              fontWeight: 500,
              margin: "14px 0 0",
            }}
          >
            {t.problem.title}
          </h2>
        </div>
        <div
          className="lk-grid-4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 20,
          }}
        >
          {t.problem.items.map((item, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: 20,
                padding: 24,
                boxShadow: "var(--shadow-xs)",
              }}
            >
              <span
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 13,
                  background: "var(--ink-50)",
                  color: "var(--ink-600)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <Icon name={item.icon} size={21} />
              </span>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "var(--text-strong)",
                  lineHeight: 1.35,
                  marginBottom: 8,
                }}
              >
                {item.title}
              </div>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: "var(--text-muted)",
                  margin: 0,
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOLUTION ────────────────────────────────────────────────────── */}
      <section
        id="solucao"
        style={{
          background: "var(--ink-900)",
          color: "var(--text-on-dark)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <svg
          width={600}
          height={600}
          viewBox="0 0 600 600"
          style={{
            position: "absolute",
            right: -160,
            top: -120,
            opacity: 0.08,
            pointerEvents: "none",
          }}
        >
          {[120, 200, 280].map((r) => (
            <circle
              key={r}
              cx={300}
              cy={300}
              r={r}
              fill="none"
              stroke="#7CC9B6"
              strokeWidth={2}
            />
          ))}
        </svg>
        <div
          className="lk-container"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "92px 40px",
            position: "relative",
          }}
        >
          <div style={{ maxWidth: 640, marginBottom: 48 }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--lake-300)",
              }}
            >
              {t.solution.eyebrow}
            </span>
            <h2
              className="lk-h-section"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 44,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                color: "var(--text-on-dark)",
                fontWeight: 500,
                margin: "14px 0 0",
              }}
            >
              {t.solution.title}
            </h2>
          </div>
          <div
            className="lk-grid-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 18,
            }}
          >
            {t.solution.items.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: 20,
                  padding: 26,
                }}
              >
                <span
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "rgba(124,201,182,.16)",
                    color: "var(--lake-300)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <Icon name={item.icon} size={23} />
                </span>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    color: "var(--text-on-dark)",
                    fontWeight: 500,
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    fontSize: 14.5,
                    lineHeight: 1.55,
                    color: "var(--text-on-dark-muted)",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COPILOT CHAT DEMO ───────────────────────────────────────────── */}
      <section
        className="lk-container"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "92px 40px" }}
      >
        <div
          className="lk-copilot-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.92fr 1.08fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div className="lk-copilot-left">
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              {t.copilot.eyebrow}
            </span>
            <h2
              className="lk-h-section"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 40,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--text-strong)",
                fontWeight: 500,
                margin: "14px 0 0",
              }}
            >
              {t.copilot.title}
            </h2>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.55,
                color: "var(--text-body)",
                maxWidth: 420,
                margin: "18px 0 24px",
              }}
            >
              {t.copilot.sub}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {t.copilot.suggested.map((sug, i) => (
                <button
                  key={i}
                  onClick={() => ask(sug.q, sug.a)}
                  style={{
                    textAlign: "left",
                    background: "var(--surface-card)",
                    border: "1px solid var(--border-default)",
                    borderRadius: 999,
                    padding: "11px 18px",
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    color: "var(--text-strong)",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <MessageCircleQuestion
                    size={16}
                    style={{ color: "var(--lake-600)", flexShrink: 0 }}
                  />
                  {sug.q}
                </button>
              ))}
            </div>
          </div>
          {/* chat surface */}
          <div
            style={{
              background: "var(--surface-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 24,
              boxShadow: "var(--shadow-lg)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "16px 20px",
                borderBottom: "1px solid var(--border-subtle)",
                background: "var(--paper)",
              }}
            >
              <span
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 11,
                  background: "var(--grad-dusk)",
                  color: "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Sparkles size={18} />
              </span>
              <div>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--text-strong)",
                  }}
                >
                  {t.copilot.botName}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--positive-500)",
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: 999,
                      background: "var(--positive-500)",
                      display: "inline-block",
                    }}
                  />
                  {t.copilot.online}
                </div>
              </div>
            </div>
            <div
              ref={chatRef}
              style={{
                padding: "22px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 14,
                height: 360,
                overflowY: "auto",
                background: "var(--paper)",
              }}
            >
              {currentChat.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent:
                      msg.role === "user" ? "flex-end" : "flex-start",
                  }}
                >
                  <div
                    style={{
                      maxWidth: "80%",
                      padding: "11px 15px",
                      borderRadius: 16,
                      fontSize: 14,
                      lineHeight: 1.5,
                      ...(msg.role === "user"
                        ? {
                            background: "var(--brand)",
                            color: "#fff",
                            borderBottomRightRadius: 4,
                          }
                        : {
                            background: "var(--surface-card)",
                            color: "var(--text-body)",
                            border: "1px solid var(--border-subtle)",
                            borderBottomLeftRadius: 4,
                          }),
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                gap: 10,
                padding: "14px 16px",
                borderTop: "1px solid var(--border-subtle)",
                background: "var(--surface-card)",
              }}
            >
              <input
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendFree()}
                placeholder={t.copilot.placeholder}
                style={{
                  flex: 1,
                  border: "1px solid var(--border-default)",
                  borderRadius: 12,
                  padding: "0 14px",
                  height: 44,
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  color: "var(--text-strong)",
                  outline: "none",
                  background: "var(--paper)",
                }}
              />
              <button
                aria-label="Enviar mensagem"
                onClick={sendFree}
                style={{
                  width: 44,
                  height: 44,
                  border: "none",
                  borderRadius: 12,
                  background: "var(--brand)",
                  color: "#fff",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowUp size={19} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--lake-50)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div
          className="lk-container"
          style={{ maxWidth: 1100, margin: "0 auto", padding: "92px 40px" }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: 600,
              margin: "0 auto 52px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--lake-600)",
              }}
            >
              {t.steps.eyebrow}
            </span>
            <h2
              className="lk-h-section"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 42,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--text-strong)",
                fontWeight: 500,
                margin: "14px 0 0",
              }}
            >
              {t.steps.title}
            </h2>
          </div>
          <div
            className="lk-steps-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 28,
            }}
          >
            {t.steps.items.map((step, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 64,
                    height: 64,
                    margin: "0 auto 20px",
                    borderRadius: 20,
                    background: "var(--surface-card)",
                    border: "1px solid var(--border-subtle)",
                    boxShadow: "var(--shadow-sm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Icon
                    name={step.icon}
                    size={28}
                    style={{ color: "var(--lake-700)" }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: -10,
                      right: -10,
                      width: 26,
                      height: 26,
                      borderRadius: 999,
                      background: "var(--coral-500)",
                      color: "#fff",
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      fontWeight: 600,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {step.n}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    color: "var(--text-strong)",
                    fontWeight: 500,
                    marginBottom: 10,
                  }}
                >
                  {step.title}
                </div>
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.55,
                    color: "var(--text-body)",
                    margin: "0 auto",
                    maxWidth: 280,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES TABS ───────────────────────────────────────────────── */}
      <section
        id="recursos"
        className="lk-container"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "92px 40px" }}
      >
        <div style={{ maxWidth: 640, marginBottom: 40 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            {t.features.eyebrow}
          </span>
          <h2
            className="lk-h-section"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 42,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--text-strong)",
              fontWeight: 500,
              margin: "14px 0 0",
            }}
          >
            {t.features.title}
          </h2>
        </div>
        <div
          role="tablist"
          aria-label="Funcionalidades do Lake Finance"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            marginBottom: 32,
          }}
        >
          {t.features.items.map((feat, i) => {
            const on = i === activeFeature;
            return (
              <button
                key={i}
                role="tab"
                id={`feature-tab-${i}`}
                aria-selected={on}
                aria-controls={`feature-panel-${i}`}
                tabIndex={on ? 0 : -1}
                onClick={() => setActiveFeature(i)}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 16px",
                  borderRadius: 999,
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  fontWeight: 600,
                  transition: "all 140ms ease",
                  border: on
                    ? "1px solid transparent"
                    : "1px solid var(--border-default)",
                  background: on ? "var(--brand)" : "var(--surface-card)",
                  color: on ? "#fff" : "var(--text-body)",
                }}
              >
                <Icon name={feat.icon} size={16} />
                {feat.name}
              </button>
            );
          })}
        </div>
        {t.features.items.map((feature, i) => (
          <div
            key={i}
            role="tabpanel"
            id={`feature-panel-${i}`}
            aria-labelledby={`feature-tab-${i}`}
            hidden={activeFeature !== i}
            tabIndex={0}
            style={{
              display: activeFeature === i ? "grid" : "none",
              gridTemplateColumns: "1fr 1fr",
              background: "var(--surface-card)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 24,
              boxShadow: "var(--shadow-md)",
              overflow: "hidden",
              minHeight: 360,
            }}
          >
            <div
              key={`d-${i}-${lang}`}
              style={{
                padding: 48,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                animation: "lkRise .4s ease both",
              }}
            >
              <span
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 15,
                  background: "var(--lake-50)",
                  color: "var(--lake-700)",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 22,
                }}
              >
                <Icon name={feature.icon} size={26} />
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 30,
                  lineHeight: 1.12,
                  letterSpacing: "-0.02em",
                  color: "var(--text-strong)",
                  fontWeight: 500,
                  margin: "0 0 12px",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--text-body)",
                  margin: 0,
                }}
              >
                {feature.desc}
              </p>
            </div>
            <div
              className="lk-feature-screen"
              style={{
                background: "var(--grad-mist)",
                borderLeft: "1px solid var(--border-subtle)",
                padding: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                key={`p-${i}-${lang}`}
                style={{
                  width: "100%",
                  maxWidth: 320,
                  background: "var(--surface-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: 18,
                  boxShadow: "var(--shadow-md)",
                  overflow: "hidden",
                  animation: "lkRise .45s ease both",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 18px",
                    borderBottom: "1px solid var(--border-subtle)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--text-strong)",
                    }}
                  >
                    {feature.screenTitle}
                  </span>
                  <span style={{ display: "inline-flex", gap: 5 }}>
                    {[0, 1, 2].map((j) => (
                      <span
                        key={j}
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: 999,
                          background:
                            j === 2 ? "var(--lake-400)" : "var(--ink-200)",
                          display: "inline-block",
                        }}
                      />
                    ))}
                  </span>
                </div>
                <div style={{ padding: "8px 18px 18px" }}>
                  {feature.rows.map((r, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 0",
                        borderBottom:
                          idx < feature.rows.length - 1
                            ? "1px solid var(--border-subtle)"
                            : "none",
                      }}
                    >
                      <div
                        style={{ display: "flex", alignItems: "center", gap: 11 }}
                      >
                        <span
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 10,
                            background: "var(--lake-50)",
                            color: "var(--lake-700)",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Icon name={r.icon} size={15} />
                        </span>
                        <span
                          style={{ fontSize: 13.5, color: "var(--text-strong)" }}
                        >
                          {r.label}
                        </span>
                      </div>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 13,
                          color: "var(--text-body)",
                        }}
                      >
                        {r.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── SECURITY ────────────────────────────────────────────────────── */}
      <section
        id="seguranca"
        style={{ background: "var(--ink-900)", color: "var(--text-on-dark)" }}
      >
        <div
          className="lk-container lk-security-layout"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "92px 40px",
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--lake-300)",
              }}
            >
              {t.security.eyebrow}
            </span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 40,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--text-on-dark)",
                fontWeight: 500,
                margin: "14px 0 0",
              }}
            >
              {t.security.title}
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "var(--text-on-dark-muted)",
                maxWidth: 360,
                margin: "18px 0 0",
              }}
            >
              {t.security.sub}
            </p>
            <div
              style={{
                marginTop: 32,
                width: 96,
                height: 96,
                borderRadius: 28,
                background: "rgba(124,201,182,.14)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ShieldCheck size={46} style={{ color: "var(--lake-300)" }} />
            </div>
          </div>
          <div
            className="lk-security-inner"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            {t.security.items.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: 18,
                  padding: 22,
                }}
              >
                <span
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: "rgba(124,201,182,.16)",
                    color: "var(--lake-300)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 14,
                  }}
                >
                  <Icon name={item.icon} size={20} />
                </span>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    color: "var(--text-on-dark)",
                    marginBottom: 6,
                  }}
                >
                  {item.title}
                </div>
                <p
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.5,
                    color: "var(--text-on-dark-muted)",
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ──────────────────────────────────────────────────── */}
      <section
        ref={statsRef as React.RefObject<HTMLElement>}
        style={{ background: "var(--grad-lake)", color: "var(--text-on-dark)" }}
      >
        <div
          className="lk-stats-grid"
          style={{
            maxWidth: 1000,
            margin: "0 auto",
            padding: "64px 40px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
          }}
        >
          {t.social.stats.map((label, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div
                className="lk-stats-num"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontVariantNumeric: "tabular-nums",
                  fontSize: 42,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                {fmtStat(statVals[i], STATS_META[i], lang)}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "var(--text-on-dark-muted)",
                  marginTop: 8,
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────────────────── */}
      <section
        className="lk-container"
        style={{ maxWidth: 1200, margin: "0 auto", padding: "92px 40px" }}
      >
        <div
          style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 48px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            {t.social.eyebrow}
          </span>
          <h2
            className="lk-h-section"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 40,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--text-strong)",
              fontWeight: 500,
              margin: "14px 0 0",
            }}
          >
            {t.social.title}
          </h2>
        </div>
        <div
          className="lk-grid-3"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {t.social.testimonials.map((tst, i) => (
            <div
              key={i}
              style={{
                background: "var(--surface-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: 20,
                padding: 28,
                boxShadow: "var(--shadow-sm)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 3,
                  marginBottom: 16,
                  color: "var(--coral-500)",
                }}
              >
                {[0, 1, 2, 3, 4].map((j) => (
                  <Star key={j} size={16} fill="currentColor" />
                ))}
              </div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 19,
                  lineHeight: 1.45,
                  color: "var(--text-strong)",
                  fontWeight: 400,
                  margin: "0 0 22px",
                  flex: 1,
                }}
              >
                &ldquo;{tst.quote}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 999,
                    background: "var(--lake-100)",
                    color: "var(--lake-700)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  {tst.initials}
                </span>
                <div>
                  <div
                    style={{
                      fontSize: 14.5,
                      fontWeight: 600,
                      color: "var(--text-strong)",
                    }}
                  >
                    {tst.name}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>
                    {tst.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRICING ─────────────────────────────────────────────────────── */}
      <section
        id="precos"
        style={{
          background: "var(--lake-50)",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <div
          className="lk-container"
          style={{ maxWidth: 1100, margin: "0 auto", padding: "92px 40px" }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: 600,
              margin: "0 auto 52px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--lake-600)",
              }}
            >
              {t.pricing.eyebrow}
            </span>
            <h2
              className="lk-h-section"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 42,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--text-strong)",
                fontWeight: 500,
                margin: "14px 0 0",
              }}
            >
              {t.pricing.title}
            </h2>
          </div>
          <div
            className="lk-pricing-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
              alignItems: "start",
            }}
          >
            {t.pricing.plans.map((plan, i) => (
              <div
                key={i}
                style={{
                  borderRadius: 24,
                  padding: 32,
                  ...(plan.featured
                    ? {
                        background: "var(--ink-900)",
                        boxShadow: "var(--shadow-lg)",
                        transform: "translateY(-8px)",
                      }
                    : {
                        background: "var(--surface-card)",
                        border: "1px solid var(--border-subtle)",
                        boxShadow: "var(--shadow-sm)",
                      }),
                }}
              >
                {plan.featured && (
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      background: "var(--coral-500)",
                      color: "#fff",
                      padding: "4px 10px",
                      borderRadius: 999,
                      marginBottom: 14,
                    }}
                  >
                    {t.pricing.popular}
                  </span>
                )}
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    fontWeight: 500,
                    color: plan.featured
                      ? "var(--text-on-dark)"
                      : "var(--text-strong)",
                  }}
                >
                  {plan.name}
                </div>
                <div
                  style={{
                    margin: "14px 0 4px",
                    display: "flex",
                    alignItems: "baseline",
                    gap: 4,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 38,
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                      color: plan.featured
                        ? "var(--text-on-dark)"
                        : "var(--text-strong)",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: plan.featured
                        ? "var(--text-on-dark-muted)"
                        : "var(--text-muted)",
                    }}
                  >
                    {plan.period}
                  </span>
                </div>
                <div
                  style={{
                    height: 1,
                    background: plan.featured
                      ? "rgba(255,255,255,.12)"
                      : "var(--border-subtle)",
                    margin: "20px 0",
                  }}
                />
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                >
                  {plan.features.map((f, j) => (
                    <li
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        fontSize: 14,
                        color: plan.featured
                          ? "var(--text-on-dark-muted)"
                          : "var(--text-body)",
                      }}
                    >
                      <Check
                        size={17}
                        style={{
                          color: plan.featured
                            ? "var(--lake-300)"
                            : "var(--lake-600)",
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Btn
                  variant={plan.featured ? "accent" : "secondary"}
                  size="md"
                  full
                >
                  {plan.cta}
                </Btn>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <section
        id="faq"
        className="lk-container"
        style={{ maxWidth: 820, margin: "0 auto", padding: "92px 40px" }}
      >
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            {t.faq.eyebrow}
          </span>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 42,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "var(--text-strong)",
              fontWeight: 500,
              margin: "14px 0 0",
            }}
          >
            {t.faq.title}
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {t.faq.items.map((item, i) => {
            const open = i === openFaq;
            return (
              <div
                key={i}
                style={{
                  background: "var(--surface-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                <button
                  id={`faq-question-${i}`}
                  aria-expanded={open ? "true" : "false"}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenFaq(open ? -1 : i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "20px 22px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 16,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 16.5,
                      fontWeight: 600,
                      color: "var(--text-strong)",
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 9,
                      flexShrink: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "transform 180ms ease, background 180ms ease",
                      background: open ? "var(--lake-700)" : "var(--ink-50)",
                      color: open ? "#fff" : "var(--text-muted)",
                      transform: open ? "rotate(45deg)" : "none",
                    }}
                  >
                    <Plus size={18} />
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  hidden={!open}
                  style={{
                    padding: open ? "0 22px 22px" : "0 22px 22px",
                    fontSize: 15,
                    lineHeight: 1.6,
                    color: "var(--text-body)",
                    display: open ? "block" : "none",
                  }}
                >
                  {item.a}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────────────── */}
      <section
        id="download"
        style={{
          position: "relative",
          background: "var(--grad-dusk)",
          color: "var(--text-on-dark)",
          overflow: "hidden",
        }}
      >
        <svg
          width={700}
          height={700}
          viewBox="0 0 700 700"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            opacity: 0.1,
            pointerEvents: "none",
          }}
        >
          {[120, 210, 300].map((r) => (
            <circle
              key={r}
              cx={350}
              cy={350}
              r={r}
              fill="none"
              stroke="#fff"
              strokeWidth={2}
            />
          ))}
        </svg>
        <div
          className="lk-container"
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "100px 40px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <h2
            className="lk-h-cta"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 50,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--text-on-dark)",
              fontWeight: 500,
              margin: 0,
            }}
          >
            {t.cta.titleA}{" "}
            <span style={{ fontStyle: "italic", color: "var(--lake-300)" }}>
              {t.cta.titleEm}
            </span>
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "var(--text-on-dark-muted)",
              margin: "18px auto 34px",
              maxWidth: 460,
            }}
          >
            {t.cta.sub}
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Btn variant="accent" size="lg">
              {t.cta.ctaPrimary}
            </Btn>
            <Btn
              variant="secondary"
              size="lg"
              style={{
                background: "transparent",
                color: "var(--text-on-dark)",
                border: "1px solid rgba(255,255,255,.3)",
              }}
            >
              {t.cta.ctaSecondary}
            </Btn>
          </div>
          <div
            style={{
              marginTop: 24,
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              color: "var(--text-on-dark-muted)",
              display: "flex",
              gap: 22,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <span>App Store</span>
            <span>·</span>
            <span>Google Play</span>
            <span>·</span>
            <span>app.lakefi.com.br</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer
        style={{
          background: "var(--ink-900)",
          color: "var(--text-on-dark-muted)",
        }}
      >
        <div
          className="lk-container"
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "64px 40px 40px",
          }}
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 14,
                }}
              >
                <MarkLight size={28} />
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 21,
                    color: "var(--text-on-dark)",
                    fontWeight: 500,
                  }}
                >
                  Lake Finance
                </span>
              </div>
              <p
                style={{
                  fontSize: 13.5,
                  lineHeight: 1.6,
                  maxWidth: 300,
                  margin: "0 0 18px",
                }}
              >
                {t.footer.legal}
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { name: "linkedin", href: "/sobre" },
                  { name: "instagram", href: "/blog" },
                  { name: "twitter", href: "/imprensa" },
                ].map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
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
                  >
                    <Icon name={social.name} size={18} />
                  </Link>
                ))}
              </div>
            </div>
            {t.footer.cols.map((col, i) => (
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
                {col.items.map((link, j) => (
                  <Link
                    key={j}
                    href={link.href}
                    style={{
                      display: "block",
                      color: "var(--text-on-dark-muted)",
                      textDecoration: "none",
                      fontSize: 14,
                      marginBottom: 11,
                    }}
                  >
                    {link.label}
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
            <span>{t.footer.copyright}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>
              {t.footer.tag}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
