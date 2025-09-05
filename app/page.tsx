"use client";

import CTA from "@/components/CTA";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const TELEGRAM_URL =
  process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/bonusgreenvip_bot";

export default function Page() {
  return (
    <main className="relative min-h-screen bg-[color:var(--brand-bg)] text-slate-100 overflow-hidden">
      {/* BACKGROUND: spotlight dourado (posicionado mais alto) */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div
          className="mx-auto h-[26rem] max-w-5xl blur-3xl opacity-40"
          style={{ background: "radial-gradient(60% 60% at 50% 22%, rgba(222,195,115,.35) 0%, transparent 60%)" }}
        />
      </div>

      {/* BACKGROUND: grid sutil */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-35"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.07) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          WebkitMaskImage: "radial-gradient(70% 60% at 50% 24%, black 60%, transparent 100%)",
          maskImage: "radial-gradient(70% 60% at 50% 24%, black 60%, transparent 100%)",
        }}
      />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
        {/* LOGO menor e mais perto do topo */}
        <div className="mt-0 mb-3 flex justify-center">
          <div className="avatar-glow">
            <Image
              src="/bonus-green.jpg"
              alt="Bônus Green"
              width={120}
              height={120}
              priority
              className="rounded-full object-cover block"
            />
          </div>
        </div>

        {/* selo */}
        <p className="mb-2 text-[11px] sm:text-xs uppercase tracking-wide text-center text-slate-400">
          7 dias grátis — acesso imediato
        </p>

        {/* TÍTULO */}
        <h1 className="text-center font-bold">
          <span className="block leading-[1.08]">
            <span className="block shimmer-text text-glow text-3xl sm:text-4xl lg:text-5xl">
              COMECE SUA
            </span>
            <span className="block shimmer-text text-glow text-3xl sm:text-4xl lg:text-5xl">
              JORNADA COM
            </span>
            <span className="block shimmer-text text-glow text-3xl sm:text-4xl lg:text-5xl">
              BÔNUS ESPORTIVOS!
            </span>
          </span>
          <span className="block mt-1 text-2xl sm:text-3xl lg:text-4xl text-white leading-[1.12]">
            7 DIAS DE TESTE GRÁTIS!
          </span>
        </h1>

        {/* Subtexto curto */}
        <p className="mt-3 mx-auto max-w-2xl text-center">
          <span className="block text-base sm:text-lg font-semibold text-white/95">
            380+ membros já acompanham alertas diários e passo a passo
          </span>
        </p>

        {/* CTA com logo Telegram (webp) + animações do globals.css */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <CTA
            href={TELEGRAM_URL}
            label="hero"
            className="cta-telegram cta-pulse inline-flex items-center gap-2 rounded-2xl px-7 py-4 text-base sm:text-lg font-semibold text-white"
          >
           <Image
  src="/telegram-blue.webp"
  alt="Telegram"
  width={35}
  height={35}
  priority
  className="shrink-0 rounded-full -translate-y-[1px]"
/>

            LIBERAR MEU TESTE!
          </CTA>
        </div>
      </section>

      {/* RESULTADOS */}
      <section id="resultados" className="border-t border-white/10 py-12 sm:py-18">
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

      {/* FAQ */}
      <section id="faq" className="border-t border-white/10 bg-white/5 py-12 sm:py-18">
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
