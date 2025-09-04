"use client";

import CTA from "@/components/CTA";
import { CheckCircle } from "lucide-react";

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
          {/* aponta direto para resultados */}
          <a href="#resultados" className="btn-ghost">Saber mais</a>
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
              <div key={item.k} className="card flex items-center gap-4">
                <CheckCircle className="h-6 w-6 text-blue-300" />
                <div>
                  <div className="text-xl font-semibold">{item.k}</div>
                  <div className="text-slate-300">{item.v}</div>
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
            <div className="card">
              <div className="font-semibold">É realmente sem risco?</div>
              <p className="mt-2 text-slate-300">
                Seguimos um plano com proteções. Quando executado corretamente, o risco operacional é neutralizado.
              </p>
            </div>
            <div className="card">
              <div className="font-semibold">Preciso já saber tudo?</div>
              <p className="mt-2 text-slate-300">
                Não. Na lista de espera você já recebe entradas para aprender o fluxo antes do teste do VIP.
              </p>
            </div>
            <div className="card">
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
