"use client";

import CTA from "@/components/CTA";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const TELEGRAM_URL =
  process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/bonusgreenvip_bot";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden">
{/* BACKGROUND: spotlight */}
<div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
  <div
    className="mx-auto h-[32rem] max-w-5xl blur-3xl opacity-30"
    style={{ background: "radial-gradient(60% 60% at 50% 35%, #60a5fa55 0%, #0000 60%)" }}
  />
</div>

{/* BACKGROUND: grid sutil com máscara */}
<div
  className="pointer-events-none absolute inset-0 -z-10 opacity-20"
  aria-hidden="true"
  style={{
    backgroundImage:
      "linear-gradient(to right, rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.05) 1px, transparent 1px)",
    backgroundSize: "24px 24px",
    WebkitMaskImage: "radial-gradient(60% 60% at 50% 35%, black 55%, transparent 100%)",
            maskImage: "radial-gradient(60% 60% at 50% 35%, black 55%, transparent 100%)",
  }}
/>

      {/* Navbar super simples */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
          <div className="font-semibold tracking-tight">Bônus Green</div>
          <CTA href={TELEGRAM_URL} label="navbar">Entrar no teste</CTA>
        </div>
      </header>

      {/* HERO base */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
       {/* LOGO redondo + anel de brilho na borda */}
<div className="mt-2 mb-6 flex justify-center">
  <div className="avatar-glow">
    <Image
      src="/bonus-green.jpg"   // garanta que o arquivo está em /public/bonus-green.jpg
      alt="Bônus Green"
      width={180}
      height={180}
      priority
      className="rounded-full object-cover block"
    />
  </div>
</div>


        <p className="mb-3 text-xs uppercase tracking-wide text-slate-400 text-center">
          7 dias grátis — acesso imediato
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl text-center">
          <span className="shimmer-text text-glow">Mais de 380 pessoas</span> lucrando todos os dias — sem fórmula mágica.
        </h1>
        <p className="mt-5 text-lg text-slate-300 text-center max-w-3xl mx-auto">
          Quem tá na <span className="font-semibold">lista de espera</span> já tá recebendo
          entrada pra entender o fluxo e aproveitar melhor o teste do VIP.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <CTA href={TELEGRAM_URL} label="hero">Quero 7 dias grátis</CTA>
          <a
            href="#resultados"
            className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium transition bg-white/5 text-white hover:bg-white/10 ring-1 ring-white/10"
          >
            Saber mais
          </a>
        </div>
      </section>

      {/* RESULTADOS (base) */}
      <section id="resultados" className="border-t border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold">Resultados</h2>
          <p className="mt-2 max-w-3xl text-slate-300">
            Números reais, processo simples e execução guiada. Atualize estes cards com seus prints e metas.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              { k: "+R$ 1.000", v: "em um dia de oportunidades" },
              { k: "370 → 380+", v: "assinantes sem tráfego pago" },
              { k: "R$ 25 vitalício", v: "por indicação aprovada" },
            ].map((item) => (
              <div key={item.k} className="card-animated">
                <div className="inner p-6 flex items-center gap-4">
                  <CheckCircle className="h-6 w-6 text-blue-300" />
                  <div>
                    <div className="text-xl font-semibold">{item.k}</div>
                    <div className="text-slate-300">{item.v}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (base) */}
      <section id="faq" className="border-t border-white/10 bg-white/5 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold">Perguntas frequentes</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="font-semibold">É realmente sem risco?</div>
              <p className="mt-2 text-slate-300">
                Seguimos um plano com proteções. Quando executado corretamente, o risco operacional é neutralizado.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="font-semibold">Preciso já saber tudo?</div>
              <p className="mt-2 text-slate-300">
                Não. Na lista de espera você já recebe entradas para aprender o fluxo antes do teste do VIP.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="font-semibold">Como falo com alguém?</div>
              <p className="mt-2 text-slate-300">
                Abra o bot pelo botão e mande sua dúvida. Respondemos rápido e sem enrolação.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
