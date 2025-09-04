import type { Metadata } from "next";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Bônus Green VIP — 7 dias grátis",
  description: "Entre e veja como lucramos sem fórmula mágica: execução guiada, passo a passo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const hasPixel = !!process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID; // só injeta se tiver ID

  return (
    <html lang="pt-BR">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {hasPixel ? (
          <Suspense fallback={null}>
            <MetaPixel />
          </Suspense>
        ) : null}
        {children}
      </body>
    </html>
  );
}
