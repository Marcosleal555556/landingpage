"use client";

import CTA from "@/components/CTA";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const TELEGRAM_URL =
  process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/bonusgreenvip_bot";

/** Imagens do carrossel (exatamente estes nomes em /public) */
/** Imagens do carrossel (exatamente estes nomes em /public) */
const ENTRADAS = [
  "/procedimento.png",
  "/procedimento1.png",
  "/procedimento2.png",
  "/procedimento3.png",
  "/procedimento4.png",
];


export default function Page() {
  return (
    <main className="relative min-h-screen bg-[color:var(--brand-bg)] text-slate-100 overflow-hidden">
      {/* BG mágico: aurora + grid + vignette */}
      {/* container tipo “largura de celular” (um pouco menor) */}
<div className="mt-8 mx-auto w-full max-w-[340px] sm:max-w-[400px]">
  <Carousel images={ENTRADAS} interval={3500} />
</div>

      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-vignette" aria-hidden="true" />

      {/* HERO — ocupa quase a tela inteira */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 min-h-[92svh] flex flex-col items-center justify-center">
        {/* LOGO maior */}
        <div className="mb-3 flex justify-center">
          <div className="avatar-glow">
            <Image
              src="/bonus-green.jpg"
              alt="Bônus Green"
              width={240}
              height={240}
              priority
              className="rounded-full object-cover block w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56"
            />
          </div>
        </div>

        {/* selo pequeno */}
        <p className="mb-1 text-[11px] sm:text-xs uppercase tracking-wide text-center text-slate-400">
          7 dias grátis — acesso imediato
        </p>

        {/* TÍTULO: apenas o dourado (maior) */}
        <h1 className="text-center font-bold">
          <span className="block shimmer-text text-glow leading-[1.05] text-5xl sm:text-6xl lg:text-7xl">
            COMECE SUA
          </span>
          <span className="block shimmer-text text-glow leading-[1.05] text-5xl sm:text-6xl lg:text-7xl">
            JORNADA COM
          </span>
          <span className="block shimmer-text text-glow leading-[1.05] text-5xl sm:text-6xl lg:text-7xl">
            BÔNUS ESPORTIVOS!
          </span>
        </h1>

        {/* CTA dominante — logo Telegram + gradiente animado + pulso */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <CTA
            href={TELEGRAM_URL}
            label="hero"
            className="cta-telegram cta-pulse inline-flex items-center gap-3 rounded-2xl px-8 py-5 text-lg sm:text-xl font-extrabold text-white"
          >
            <Image
              src="/telegram-blue.webp"  // arquivo em /public
              alt="Telegram"
              width={22}
              height={22}
              priority
              className="shrink-0 rounded-full -translate-y-[1px]"
            />
            LIBERAR MEU TESTE!
          </CTA>
        </div>
      </section>

      {/* DIVISOR brilhante */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="divider-glow animated" />
      </div>

      {/* RESULTADOS -> Texto + Carrossel retrato */}
      <section id="resultados" className="relative z-10 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold">
            Confira algumas entradas
          </h2>

          {/* container tipo “largura de celular” */}
          <div className="mt-8 mx-auto w-full max-w-[430px] sm:max-w-[500px]">
            <Carousel images={ENTRADAS} interval={3500} />
          </div>
        </div>
      </section>

      {/* DIVISOR brilhante */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="divider-glow animated" />
      </div>

      {/* FAQ */}
      <section id="faq" className="relative z-10 bg-white/5 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-center sm:text-left">
            Perguntas frequentes
          </h2>
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

/* ================
   Carrossel retrato
   ================ */
function Carousel({
  images,
  interval = 3500,
}: {
  images: string[];
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const startX = useRef<number | null>(null);
  const count = images.length;

  useEffect(() => {
    const id = setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % count);
    }, interval);
    return () => clearInterval(id);
  }, [count, interval]);

  const go = (dir: number) => setIndex((i) => (i + dir + count) % count);

  return (
    <div
      className="relative select-none"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={(e) => (startX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (startX.current === null) return;
        const dx = e.changedTouches[0].clientX - startX.current;
        if (Math.abs(dx) > 40) go(dx > 0 ? -1 : 1);
        startX.current = null;
      }}
    >
      {/* moldura tipo phone */}
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
        {/* trilho */}
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={src + i} className="min-w-full">
              {/* quadro com proporção retrato */}
              <div className="relative w-full aspect-[9/16] sm:aspect-[10/16] bg-black/30">
                <Image
                  src={src}
                  alt={`Entrada ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 500px"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* setas */}
      <button
        aria-label="Imagem anterior"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 px-3 py-2 text-white backdrop-blur"
      >
        ‹
      </button>
      <button
        aria-label="Próxima imagem"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/60 px-3 py-2 text-white backdrop-blur"
      >
        ›
      </button>

      {/* bullets */}
      <div className="mt-3 flex justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Ir para imagem ${i + 1}`}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
