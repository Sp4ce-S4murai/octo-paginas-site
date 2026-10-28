"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  ChevronLeft,
  Sparkles,
  ShieldCheck,
  FileText,
  Package,
  Wrench,
  Star,
  Quote,
  CheckCircle,
} from "lucide-react";

function useScrollAnimation() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".aos").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Dados ─── */
/* ─── Depoimentos de EXEMPLO. Substituir por relatos verídicos e autorizados
   pelo cliente ao fechar com uma oficina real. ─── */
const promessas = [
  {
    icon: FileText,
    titulo: "Orçamento antes de tudo",
    descricao:
      "Nenhum serviço começa sem a sua aprovação. Você recebe um laudo completo com o que encontramos e o valor — antes de apertar qualquer parafuso.",
  },
  {
    icon: ShieldCheck,
    titulo: "Garantia real no papel",
    descricao:
      "Todo serviço tem garantia documentada. Se algo não funcionar como prometido no prazo, voltamos sem custo adicional. Simples assim.",
  },
  {
    icon: Package,
    titulo: "Peça certa, sem atalho",
    descricao:
      "Trabalhamos com peças originais ou de primeira linha homologadas. Apresentamos a nota fiscal de tudo que usamos no seu veículo.",
  },
];

const etapas = [
  { num: "01", titulo: "Diagnóstico gratuito", desc: "Seu carro chega, nossa equipe faz a leitura eletrônica e checagem física. Sem cobrança." },
  { num: "02", titulo: "Orçamento detalhado", desc: "Você recebe um laudo claro: o que encontramos, o que precisa fazer, o tempo e o valor." },
  { num: "03", titulo: "Aprovação sua", desc: "Nenhum serviço começa sem o seu OK. Você decide o que e quando fazer." },
  { num: "04", titulo: "Serviço com garantia", desc: "Executamos com os materiais acordados e entregamos com garantia documentada." },
];

const depoimentos = [
  { nome: "Cliente da oficina", texto: "Primeiro lugar que fui que me mostrou o problema antes de cobrar qualquer coisa. Nunca mais levo meu carro em outro lugar.", servico: "Revisão completa (exemplo)" },
  { nome: "Cliente da oficina", texto: "Orçamento honesto, prazo cumprido e garantia de verdade. Isso faz toda a diferença.", servico: "Freios e suspensão (exemplo)" },
  { nome: "Cliente da oficina", texto: "Me mandaram foto das peças antes de trocar. Nunca vi isso em outra oficina. Confiança total.", servico: "Embreagem (exemplo)" },
];

/* ─── Componentes ─── */

function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden" style={{ background: "#0a0f1e" }}>
      {/* Background — imagem com overlay pesado */}
      <Image
        src="/oficinas/layout-confianca/hero.webp"
        alt="Oficina AutoConfiança — estrutura profissional"
        fill
        className="object-cover brightness-[0.35]"
        priority
      />
      {/* grade de linhas estilo blueprint — visual técnico */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(251,191,36,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(251,191,36,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Nav */}
      <div className="absolute top-6 left-6 right-6 z-20 flex items-center justify-between">
        <Link
          href="/oficinas"
          className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors border border-white/10 hover:border-white/30 rounded-full px-4 py-2"
        >
          <ChevronLeft className="w-4 h-4" /> Voltar
        </Link>
        <span className="inline-flex items-center gap-1.5 bg-orange-700 text-white text-xs font-bold px-3 py-1.5 rounded-full">
          <Sparkles className="w-3 h-3" /> Exemplo de Layout
        </span>
      </div>

      {/* Conteúdo — bottom aligned */}
      <div className="relative z-10 w-full px-8 sm:px-14 lg:px-20 pb-16 sm:pb-24">
        <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.3em] mb-4">
          Mecânica · Elétrica · Funilaria
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-none mb-6 max-w-4xl">
          A oficina onde você<br />
          <span className="text-amber-400">não precisa acreditar</span> —<br />
          <span className="text-white/60">você pode verificar.</span>
        </h1>
        <p className="text-white/40 text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
          Na AutoConfiança, cada etapa é documentada e aprovada por você. Sem surpresa no final, sem peça cobrada que não foi trocada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de um orçamento na Oficina AutoConfiança."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-8 py-4 rounded-xl transition-all hover:scale-[1.02] text-sm"
          >
            <MessageSquare className="w-4 h-4" />
            Pedir orçamento grátis
          </a>
          <a
            href="tel:+5511999999999"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:border-amber-400/50 font-bold px-8 py-4 rounded-xl transition-all text-sm"
          >
            <Phone className="w-4 h-4" />
            (11) 99999-9999
          </a>
        </div>

        {/* Info bar */}
        <div className="mt-10 flex flex-wrap gap-6 text-xs text-white/30 border-t border-white/5 pt-8">
          <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-amber-400/60" /> Av. Industrial, 789</div>
          <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-amber-400/60" /> Seg–Sex 7h–18h · Sáb 7h–12h</div>
          <div className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-amber-400/60" /> Diagnóstico gratuito</div>
        </div>
      </div>
    </section>
  );
}

/* 3 PROMESSAS — fundo escuro com cards */
function Promessas() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#0f1624" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Nosso compromisso
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            3 promessas que cumprimos<br />com todos os clientes
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {promessas.map((p, i) => (
            <div
              key={i}
              className="aos rounded-2xl p-8 border border-amber-400/10 hover:border-amber-400/40 transition-colors"
              style={{ background: "#15202b", transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-400/10 flex items-center justify-center mb-6">
                <p.icon className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-white font-black text-lg mb-3">{p.titulo}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{p.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* COMO FUNCIONA — timeline vertical */
function ComoFunciona() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">Processo</p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            Como funciona na prática
          </h2>
        </div>

        <div className="space-y-0">
          {etapas.map((e, i) => (
            <div
              key={i}
              className="aos flex gap-6 sm:gap-10 items-start"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Linha + número */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-900 font-black text-lg flex items-center justify-center shadow-lg shadow-amber-200">
                  {e.num}
                </div>
                {i < etapas.length - 1 && (
                  <div className="w-0.5 h-14 bg-amber-200 mt-2" />
                )}
              </div>
              {/* Conteúdo */}
              <div className="pb-12">
                <h3 className="text-slate-900 font-black text-lg mb-2">{e.titulo}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* EQUIPE — seção escura com foto */
function EquipeEstrutura() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#0a0f1e" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="aos">
            <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.2em] mb-4">
              Quem cuida do seu carro
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
              Uma equipe que você<br />pode olhar nos olhos
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Nossos mecânicos têm mais de [Nº] anos de experiência e são treinados regularmente. Quando falamos de uma peça, você pode ver ela. Quando dizemos o problema, mostramos onde é.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "[Nº]+ veículos", sub: "atendidos" },
                { label: "[Nº] anos", sub: "de experiência" },
                { label: "Garantia", sub: "em todo serviço" },
                { label: "Diagnóstico", sub: "gratuito" },
              ].map((s, i) => (
                <div key={i} className="rounded-xl p-4 border border-white/5" style={{ background: "#15202b" }}>
                  <div className="text-amber-400 font-black text-xl">{s.label}</div>
                  <div className="text-white/30 text-xs mt-1 uppercase tracking-wider">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="aos relative rounded-3xl overflow-hidden h-80 sm:h-96 lg:h-[480px]" style={{ transitionDelay: "0.15s" }}>
            <Image
              src="/oficinas/layout-confianca/team.webp"
              alt="Equipe técnica da AutoConfiança"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(to top, #0a0f1e 0%, transparent 50%)" }} />
            <div className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold">
              Equipe técnica — [Nº] mecânicos especializados
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* DEPOIMENTOS */
function Depoimentos() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <p className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em] mb-12 text-center">
          O que nossos clientes dizem
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {depoimentos.map((d, i) => (
            <div
              key={i}
              className="aos bg-white rounded-2xl p-7 shadow-sm border border-slate-100 relative"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-amber-100 absolute top-5 right-5" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed italic mb-5">&ldquo;{d.texto}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center text-slate-900 font-black text-xs">
                  {d.nome.charAt(0)}
                </div>
                <div>
                  <div className="text-slate-700 text-xs font-semibold">{d.nome}</div>
                  <div className="text-slate-400 text-xs">{d.servico}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* CTA FINAL */
function CTAFinal() {
  return (
    <section className="py-24 sm:py-36" style={{ background: "#0a0f1e" }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-amber-400/60 text-xs font-bold uppercase tracking-widest mb-6">
          Deu algum problema?
        </p>
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-5">
          Traga seu carro.<br />
          <span className="text-amber-400">A gente diz o que tem</span><br />
          antes de cobrar.
        </h2>
        <p className="text-white/30 mb-10 text-sm sm:text-base max-w-md mx-auto">
          Diagnóstico gratuito, orçamento claro, serviço com garantia. É assim em todo atendimento.
        </p>
        <a
          href="https://wa.me/5511999999999?text=Olá! Quero agendar um diagnóstico na Oficina AutoConfiança."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-10 py-5 rounded-2xl text-base sm:text-lg shadow-2xl shadow-amber-400/20 hover:scale-[1.03] transition-all"
        >
          <Wrench className="w-5 h-5" />
          Agendar diagnóstico grátis
        </a>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-white/60">
          <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-amber-400/40" /> Orçamento grátis</div>
          <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-amber-400/40" /> Aprovação antes do serviço</div>
          <div className="flex items-center gap-1.5"><CheckCircle className="w-3.5 h-3.5 text-amber-400/40" /> Garantia documentada</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-10 text-xs text-white/60"
      style={{ background: "#0a0f1e" }}>
      <p>© {new Date().getFullYear()} Oficina AutoConfiança</p>
      <Link href="/" className="text-amber-400 hover:text-amber-300 transition-colors">
        Página por OCTO Páginas
      </Link>
    </footer>
  );
}

function WA() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Quero um orçamento na Oficina AutoConfiança."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir orçamento pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black pl-4 pr-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-sm"
    >
      <MessageSquare className="w-4 h-4" />
      <span className="hidden sm:inline">Orçamento grátis</span>
    </a>
  );
}

export default function LayoutConfiancaPage() {
  useScrollAnimation();
  return (
    <>
      <style>{`.aos{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}.aos.is-visible{opacity:1;transform:none}`}</style>
      <Hero />
      <Promessas />
      <ComoFunciona />
      <EquipeEstrutura />
      <Depoimentos />
      <CTAFinal />
      <Footer />
      <WA />
    </>
  );
}
