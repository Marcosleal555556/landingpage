"use client";

import CTA from "@/components/CTA";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Rocket, ListChecks, ShieldCheck } from "lucide-react";

const TELEGRAM_URL =
  process.env.NEXT_PUBLIC_TELEGRAM_URL || "https://t.me/bonusgreenvip_bot";

/** Imagens do carrossel (exact names em /public) */
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
      {/* BG (grid + vignette) */}
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
              src="/telegram-blue.webp"
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

      {/* COMO FUNCIONA (meio da página) */}
      <section id="como-funciona" className="relative z-10 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center sm:flex-row sm:items-end sm:justify-between gap-3">
            <h2 className="text-center sm:text-left text-2xl sm:text-3xl font-semibold">
              Como funciona (3 passos)
            </h2>
            {/* contador ao vivo */}
            <LiveCounter />
          </div>

          {/* 3 passos com ícones animados */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <StepCard
              icon={<Rocket className="h-6 w-6 text-black" />}
              title="Entre no VIP por 7 dias grátis"
              desc="Acesse o Telegram e já comece a receber entradas."
              delay={0}
            />
            <StepCard
              icon={<ListChecks className="h-6 w-6 text-black" />}
              title="Siga o passo a passo"
              desc="Entradas com links prontos e proteções explicadas."
              delay={0.08}
            />
            <StepCard
              icon={<ShieldCheck className="h-6 w-6 text-black" />}
              title="Valide por conta própria"
              desc="Curtiu os resultados? Continua. Se não, sai sem pagar."
              delay={0.16}
            />
          </div>

          {/* CTA final da seção */}
          <div className="mt-10 flex justify-center">
            <CTA
              href={TELEGRAM_URL}
              label="como-funciona-cta"
              className="cta-telegram cta-pulse inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base sm:text-lg font-extrabold text-white"
            >
              <Image
                src="/telegram-blue.webp"
                alt="Telegram"
                width={20}
                height={20}
                priority
                className="shrink-0 rounded-full -translate-y-[1px]"
              />
              ENTRAR NO VIP
            </CTA>
          </div>
        </div>
      </section>

      {/* DIVISOR brilhante */}
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="divider-glow animated" />
      </div>

      {/* DEPOIMENTOS/Evidências no FINAL: carrossel */}
      <section id="resultados" className="relative z-10 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-2xl sm:text-3xl font-semibold">
            Espia aí👇
          </h2>

        {/* container tipo “largura de celular” (um pouco menor) */}
          <div className="mt-8 mx-auto w-full max-w-[320px] sm:max-w-[380px]">
            <Carousel images={ENTRADAS} interval={6000} />
          </div>

          {/* CTA abaixo do carrossel */}
          <div className="mt-8 flex justify-center">
            <CTA
              href={TELEGRAM_URL}
              label="carousel-cta"
              className="cta-telegram cta-pulse inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base sm:text-lg font-extrabold text-white"
            >
              <Image
                src="/telegram-blue.webp"
                alt="Telegram"
                width={20}
                height={20}
                priority
                className="shrink-0 rounded-full -translate-y-[1px]"
              />
              ENTRAR NO VIP
            </CTA>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="mx-auto max-w-6xl px-4 text-center text-xs sm:text-sm text-white/60">
          © Bônus Green Copywriting — todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}

/* ===================
   Componentes auxiliares
   =================== */

/** Carrossel retrato (auto + swipe) */
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
              {/* quadro retrato */}
              <div className="relative w-full aspect-[9/16] sm:aspect-[10/16] bg-black/30">
                <Image
                  src={src}
                  alt={`Entrada ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 100vw, 380px"
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

/** Card de passo (com ícone animado) */
function StepCard({
  icon,
  title,
  desc,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay?: number;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
      {/* selo numerado/ícone com animação suave */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay }}
        className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(241,230,190,1) 0%, rgba(222,195,115,1) 60%, rgba(204,170,90,1) 100%)",
          boxShadow: "0 0 18px rgba(222,195,115,.45)",
        }}
      >
        {icon}
      </motion.div>
      <div className="font-semibold">{title}</div>
      <p className="mt-1 text-slate-300">{desc}</p>
    </div>
  );
}

/** Contador de pessoas online (simulação leve) */
function LiveCounter() {
  const [n, setN] = useState(() => {
    const base = 22 + Math.round(Math.random() * 12); // 22–34
    return base;
  });

  useEffect(() => {
    const id = setInterval(() => {
      setN((v) => {
        const delta = Math.round((Math.random() - 0.5) * 4); // -2..+2
        const next = Math.max(14, Math.min(58, v + delta)); // clamp 14–58
        return next;
      });
    }, 5000 + Math.round(Math.random() * 3000)); // 5–8s
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium text-black"
      style={{
        background:
          "linear-gradient(135deg, rgba(241,230,190,1) 0%, rgba(222,195,115,1) 60%, rgba(204,170,90,1) 100%)",
        boxShadow: "0 0 18px rgba(222,195,115,.35)",
      }}
      aria-live="polite"
    >
      <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,.9)]" />
      <span>👀 {n} pessoas online agora</span>
    </div>
  );
}
