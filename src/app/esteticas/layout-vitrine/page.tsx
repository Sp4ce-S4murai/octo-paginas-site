"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare,
  MapPin,
  Clock,
  ChevronLeft,
  Sparkles,
  Star,
  ArrowRight,
} from "lucide-react";

function useScrollAnimation() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".aos").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Dados ─── */
/* NOTA DE COMPLIANCE: procedimentos de saúde estética (toxina, preenchimento,
   lasers médicos) exigem responsável técnico habilitado conforme RDC 204/2017 e
   legislação estadual. Verificar antes de publicar qualquer conteúdo. */

/* ─── Estes depoimentos são de EXEMPLO. Ao fechar com uma estética real,
   substituir por relatos verídicos e autorizados pela cliente, sem prometer
   resultados específicos. ─── */
const portfolio = [
  { label: "Sobrancelha Design", tag: "Fio a fio" },
  { label: "Coloração", tag: "Balayage" },
  { label: "Limpeza de Pele", tag: "Protocolo exclusivo" },
  { label: "Manicure em Gel", tag: "Longa duração" },
  { label: "Escova Modeladora", tag: "Anti-frizz" },
  { label: "Depilação", tag: "Cera quente" },
];

const depoimentos = [
  { nome: "Cliente da estética", texto: "Sai de lá me sentindo outra pessoa. Atendimento impecável e resultado incrível.", servico: "Coloração (exemplo)" },
  { nome: "Cliente da estética", texto: "O design de sobrancelhas mudou meu rosto. Profissional altíssimo nível.", servico: "Design de sobrancelhas (exemplo)" },
  { nome: "Cliente da estética", texto: "Ambiente lindo e equipe muito atenciosa. Já virou meu ritual mensal.", servico: "Limpeza de pele (exemplo)" },
];

/* ─── Componentes ─── */

function Nav() {
  return (
    <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-6">
      <Link
        href="/esteticas"
        className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors bg-white/10 border border-white/25 backdrop-blur-md rounded-full px-4 py-2"
      >
        <ChevronLeft className="w-4 h-4" /> Voltar
      </Link>
      <span className="inline-flex items-center gap-1.5 bg-orange-700 text-white text-xs font-bold px-3 py-1.5 rounded-full">
        <Sparkles className="w-3 h-3" /> Exemplo de Layout
      </span>
    </div>
  );
}

/* HERO — Split layout escuro com imagem à direita */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-stretch" style={{ background: "#0d0b10" }}>
      <Nav />

      {/* Left — typography */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-32">
        <div className="flex items-center gap-2 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-pink-400 text-pink-400" />
          ))}
          <span className="text-white/50 text-xs ml-1 uppercase tracking-widest">Studio premiado</span>
        </div>

        <p className="text-pink-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">
          Beleza · Arte · Cuidado
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
          Você não muda,<br />
          <span className="text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(90deg, #f472b6, #e879f9)" }}>
            você revela
          </span>
        </h1>

        <p className="text-white/50 text-base leading-relaxed mb-10 max-w-md">
          No Studio Noir, cada atendimento é uma sessão de arte. Nossa equipe
          especializada cuida de cada detalhe para você sair exatamente como
          sempre imaginou.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar um horário no Studio Noir."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-[1.03] text-sm"
            style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)" }}
          >
            <MessageSquare className="w-4 h-4" />
            Agendar horário
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 text-white/60 hover:text-white font-medium px-8 py-4 rounded-xl border border-white/10 hover:border-white/30 transition-all text-sm"
          >
            Ver portfólio <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-12 flex gap-8 text-sm text-white/30">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Rua das Flores, 88 — Jardins
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Ter – Sáb · 9h–20h
          </div>
        </div>
      </div>

      {/* Right — imagem */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/esteticas/layout-vitrine/hero.webp"
          alt="Studio Noir — ambiente e produtos"
          fill
          className="object-cover"
          priority
        />
        {/* vignette overlay */}
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #0d0b10 0%, transparent 40%)" }} />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(to top, #0d0b10 0%, transparent 30%)" }} />
      </div>

      {/* Mobile bg */}
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/esteticas/layout-vitrine/hero.webp"
          alt="Studio Noir"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
    </section>
  );
}

/* NÚMEROS — faixa horizontal */
function NumerosFaixa() {
  const stats = [
    { n: "[Nº]+", label: "Clientes atendidas" },
    { n: "[Nº]", label: "Especialidades" },
    { n: "[Nota]★", label: "Avaliação Google" },
    { n: "[Nº]+", label: "Anos de studio" },
  ];
  return (
    <div className="border-y border-white/5" style={{ background: "#100d14" }}>
      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <div key={i} className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">{s.n}</div>
            <div className="text-xs text-white/30 uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* PORTFÓLIO — grid assimétrico */
function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-32" style={{ background: "#0d0b10" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-pink-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
              Portfólio
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Cada trabalho,<br />uma história
            </h2>
          </div>
          <p className="text-white/30 text-sm max-w-xs leading-relaxed">
            Resultados reais de clientes reais — substituir por fotos autorizadas ao fechar com uma estética.
          </p>
        </div>

        {/* Grid 3 cols, item 1 ocupa 2 linhas */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Grande — ocupa col-span-1 row-span-2 */}
          <div className="row-span-2 relative rounded-2xl overflow-hidden group cursor-pointer">
            <Image
              src="/esteticas/layout-vitrine/gallery.webp"
              alt="Portfólio de tratamentos"
              width={600}
              height={700}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-white font-bold text-sm block">Tratamentos em destaque</span>
              <span className="text-pink-300 text-xs">Ver todos</span>
            </div>
          </div>

          {/* Demais cards com imagem real */}
          {[
            { src: "/esteticas/layout-vitrine/portfolio-1.webp", label: "Sobrancelha Design", tag: "Fio a fio" },
            { src: "/esteticas/layout-vitrine/portfolio-2.webp", label: "Coloração", tag: "Balayage" },
            { src: "/esteticas/layout-vitrine/portfolio-3.webp", label: "Limpeza de Pele", tag: "Protocolo exclusivo" },
            { src: "/esteticas/layout-vitrine/portfolio-4.webp", label: "Manicure em Gel", tag: "Longa duração" },
          ].map((item, i) => (
            <div
              key={i}
              className="aos relative rounded-2xl overflow-hidden group cursor-pointer aspect-square"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/70 to-transparent">
                <div>
                  <div className="text-white font-semibold text-sm">{item.label}</div>
                  <div className="text-pink-300 text-xs mt-0.5">{item.tag}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* DEPOIMENTOS — strip horizontal escura */
function Depoimentos() {
  return (
    <section className="py-20 sm:py-28 border-t border-white/5" style={{ background: "#100d14" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <p className="text-pink-400 text-xs font-bold uppercase tracking-[0.2em] mb-10 text-center">
          O que dizem nossas clientes
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {depoimentos.map((dep, i) => (
            <div
              key={i}
              className="aos rounded-2xl p-6 border border-white/5 hover:border-pink-500/30 transition-colors"
              style={{ background: "#1a1520", transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
                ))}
              </div>
              <p className="text-white/50 text-sm leading-relaxed italic mb-5">
                &ldquo;{dep.texto}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)" }}>
                  {dep.nome.charAt(0)}
                </div>
                <div>
                  <div className="text-white/70 text-xs font-semibold">{dep.nome}</div>
                  <div className="text-white/30 text-xs">{dep.servico}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* CTA FINAL — full bleed com imagem */
function CTAFinal() {
  return (
    <section className="relative py-28 sm:py-40 overflow-hidden">
      <Image
        src="/esteticas/layout-vitrine/hero.webp"
        alt="Studio Noir"
        fill
        className="object-cover brightness-[0.25]"
      />
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, rgba(131,24,67,0.6), rgba(88,28,135,0.6))" }} />

      <div className="relative z-10 text-center px-6">
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-4">
          Reserve seu horário agora
        </h2>
        <p className="text-white/50 mb-10 max-w-xl mx-auto text-sm sm:text-base">
          Atendimento exclusivo, com hora marcada. Nossa agenda tem vagas limitadas.
        </p>
        <a
          href="https://wa.me/5511999999999?text=Olá! Quero reservar meu horário no Studio Noir."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-white font-bold px-10 py-5 rounded-2xl text-base sm:text-lg shadow-2xl hover:scale-[1.04] transition-all"
          style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)" }}
        >
          <MessageSquare className="w-5 h-5" />
          Quero reservar meu horário
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 px-10 text-xs text-white/60"
      style={{ background: "#0d0b10" }}>
      <p>© {new Date().getFullYear()} Studio Noir Estética</p>
      <Link href="/" className="text-pink-400 hover:text-pink-300 transition-colors">
        Página por OCTO Páginas
      </Link>
    </footer>
  );
}

/* ─── WhatsApp flutuante ─── */
function WA() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Quero agendar no Studio Noir."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
      style={{ background: "linear-gradient(135deg, #ec4899, #a855f7)" }}
    >
      <MessageSquare className="w-6 h-6 text-white" />
    </a>
  );
}

export default function LayoutVitrinePage() {
  useScrollAnimation();
  return (
    <>
      <style>{`.aos{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}.aos.is-visible{opacity:1;transform:none}`}</style>
      <Hero />
      <NumerosFaixa />
      <Portfolio />
      <Depoimentos />
      <CTAFinal />
      <Footer />
      <WA />
    </>
  );
}
