"use client";

import CTA from "@/components/CTA";

const TELEGRAM_URL =
  process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/bonusgreenvip_bot";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Navbar super simples */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <div className="font-semibold tracking-tight">Bônus Green</div>
          <CTA href={TELEGRAM_URL} label="navbar">Entrar no teste</CTA>
        </div>
      </header>

      {/* HERO base */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <p className="mb-3 text-xs uppercase tracking-wide text-slate-400">
          7 dias grátis — acesso imediato
        </p>
        <h1 className="text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Mais de 380 pessoas lucrando todos os dias — sem fórmula mágica.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-300">
          Quem tá na <span className="font-semibold">lista de espera</span> já tá recebendo
          entrada pra entender o fluxo e aproveitar melhor o teste do VIP.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <CTA href={TELEGRAM_URL} label="hero">Quero 7 dias grátis</CTA>
          <a href="#mais" className="btn-ghost">Saber mais</a>
        </div>
      </section>

      {/* Placeholder pra futuras seções */}
      <section id="mais" className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 text-slate-300">
          Base pronta. Próximos passos: Resultados, FAQ e Pixel (GTM/Meta).
        </div>
      </section>
    </main>
  );
}
