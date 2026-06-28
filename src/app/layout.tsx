import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lake Finance — Seu consultor financeiro pessoal",
  description: "O Lake Finance usa inteligência artificial para antecipar problemas, sugerir soluções e automatizar a gestão do seu dinheiro.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
