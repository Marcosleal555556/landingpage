import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import MetaPixel from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "Bônus Green VIP — 7 dias grátis",
  description:
    "Entre e veja como lucramos sem fórmula mágica: execução guiada, passo a passo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[color:var(--brand-bg)] text-slate-100 antialiased">
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
