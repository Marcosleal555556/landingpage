import type { Metadata } from "next";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel"; // ⬅️ ADICIONE ESTA LINHA

export const metadata: Metadata = {
  title: "Bônus Green VIP — 7 dias grátis",
  description: "Entre e veja como lucramos sem fórmula mágica: execução guiada, passo a passo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <MetaPixel /> {/* ⬅️ ADICIONE ESTA LINHA */}
        {children}
      </body>
    </html>
  );
}
