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
  Coffee,
  Cake,
  Croissant,
  Cookie,
  ShoppingBag,
  UtensilsCrossed,
  Heart,
  Star,
  Quote,
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
   pelo cliente ao fechar com uma padaria real. ─── */
const destaques = [
  {
    img: "/padarias/layout-cardapio/croissant.webp",
    nome: "Croissant de manteiga",
    descricao: "Folhado 72 horas, amanteigado por dentro. Disponível das 6h.",
    tag: "Mais pedido",
    tagCor: "bg-amber-100 text-amber-700",
  },
  {
    img: "/padarias/layout-cardapio/bolo.webp",
    nome: "Bolo de cenoura com brigadeiro",
    descricao: "Receita da casa, massa úmida e cobertura generosa. Para levar inteiro ou por fatia.",
    tag: "Favorito do dia",
    tagCor: "bg-rose-100 text-rose-700",
  },
  {
    img: "/padarias/layout-cardapio/pao-artesanal.webp",
    nome: "Pão de fermentação natural",
    descricao: "24h de fermentação, casca crocante. Disponível quinta, sexta e sábado.",
    tag: "Artesanal",
    tagCor: "bg-orange-100 text-orange-700",
  },
];

const categorias = [
  { icon: UtensilsCrossed, nome: "Pães", sub: "Fresquinhos todo dia" },
  { icon: Coffee, nome: "Café da manhã", sub: "A partir das 6h" },
  { icon: Cake, nome: "Bolos e tortas", sub: "Inteiros ou fatias" },
  { icon: Croissant, nome: "Folhados", sub: "Saem quentes às 7h" },
  { icon: Cookie, nome: "Biscoitos", sub: "Artesanais da casa" },
  { icon: ShoppingBag, nome: "Frios e laticínios", sub: "Marcas selecionadas" },
];

const depoimentos = [
  { nome: "Visitante da padaria", texto: "Meu café da manhã favorito. O croissant deles é melhor do que qualquer padaria que conheci.", produto: "Café da manhã (exemplo)" },
  { nome: "Visitante da padaria", texto: "O pão de fermentação natural virou rotina semanal. Fazemos questão de buscar toda quinta.", produto: "Pão artesanal (exemplo)" },
  { nome: "Visitante da padaria", texto: "O bolo de cenoura é uma memória afetiva. Igual ao que minha avó fazia.", produto: "Bolo de cenoura (exemplo)" },
];

/* ─── Componentes ─── */

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "#1c0a00" }}>
      {/* Imagem de fundo — tela cheia com overlay quente */}
      <Image
        src="/padarias/layout-cardapio/hero.webp"
        alt="Pão & Arte — padaria artesanal"
        fill
        className="object-cover brightness-[0.55]"
        priority
      />
      {/* overlay degradê cálido */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(28,10,0,0.3) 0%, rgba(28,10,0,0.7) 60%, rgba(28,10,0,1) 100%)" }} />

      {/* Nav */}
      <div className="relative z-20 flex items-center justify-between px-6 py-6">
        <Link
          href="/padarias"
          className="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors bg-white/10 border border-white/25 backdrop-blur-md rounded-full px-4 py-2"
        >
          <ChevronLeft className="w-4 h-4" /> Voltar
        </Link>
        <span className="inline-flex items-center gap-1.5 bg-orange-700 text-white text-xs font-bold px-3 py-1.5 rounded-full">
          <Sparkles className="w-3 h-3" /> Exemplo de Layout
        </span>
      </div>

      {/* Conteúdo hero — centrado */}
      <div className="relative z-10 min-h-[85vh] flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="w-10 h-0.5 bg-amber-400 mx-auto mb-8" />
        <p className="text-amber-300/80 text-xs uppercase tracking-[0.4em] mb-5">
          Padaria · Café · Confeitaria
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 max-w-3xl"
          style={{ fontFamily: "Georgia, serif" }}>
          O cheiro de pão fresco<br />
          <span className="text-amber-400 italic">não tem preço.</span>
        </h1>
        <p className="text-white/50 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
          Na Pão & Arte, acordamos às 4h para que o seu dia comece perfeito. Produtos artesanais, sem conservantes, feitos com receitas que passam de geração em geração.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="https://wa.me/5511999999999?text=Olá! Quero fazer um pedido na Padaria Pão & Arte."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-8 py-4 rounded-full text-sm transition-all hover:scale-[1.03] shadow-2xl shadow-amber-900/50"
          >
            <MessageSquare className="w-4 h-4" />
            Fazer pedido agora
          </a>
          <a href="#cardapio"
            className="text-white/50 hover:text-white text-sm underline underline-offset-4 transition-colors">
            Ver cardápio
          </a>
        </div>

        {/* Info abaixo */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 text-xs text-white/30">
          <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-amber-400/50" /> Rua das Rosas, 100 — Centro</div>
          <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-amber-400/50" /> Todos os dias · 6h às 20h</div>
          <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-amber-400/50" /> (11) 99999-9999</div>
        </div>
      </div>
    </section>
  );
}

/* DESTAQUES DO DIA — 3 produtos em grid */
function DestaquesDia() {
  return (
    <section className="py-16 sm:py-24" style={{ background: "#1c0a00" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-12">
          <p className="text-amber-400/60 text-xs uppercase tracking-[0.3em] mb-3">Hoje em destaque</p>
          <h2 className="text-2xl sm:text-3xl font-black text-white" style={{ fontFamily: "Georgia, serif" }}>
            Saiu quente do forno
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {destaques.map((d, i) => (
            <div
              key={i}
              className="aos rounded-3xl overflow-hidden border border-white/5"
              style={{ background: "#2a1200", transitionDelay: `${i * 0.1}s` }}
            >
              {/* Foto do produto */}
              <div className="relative h-40">
                <Image
                  src={d.img}
                  alt={d.nome}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${d.tagCor} mb-3 inline-block`}>
                  {d.tag}
                </span>
                <h3 className="text-white font-black text-base mb-2">{d.nome}</h3>
                <p className="text-white/30 text-xs leading-relaxed mb-5">{d.descricao}</p>
                <a
                  href={`https://wa.me/5511999999999?text=Olá! Quero pedir ${d.nome} na Padaria Pão & Arte.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-400 text-xs font-bold hover:text-amber-300 transition-colors flex items-center gap-1"
                >
                  Pedir este item →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* CARDÁPIO — sobre fundo creme com imagem */
function Cardapio() {
  return (
    <section id="cardapio" className="py-20 sm:py-32" style={{ background: "#fdf6e3" }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Imagem de produtos */}
          <div className="aos relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
            <Image
              src="/padarias/layout-cardapio/produtos.webp"
              alt="Produtos artesanais da Pão & Arte"
              fill
              className="object-cover"
            />
          </div>

          <div className="aos" style={{ transitionDelay: "0.12s" }}>
            <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-4">
              O que servimos
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-5" style={{ fontFamily: "Georgia, serif" }}>
              Feito com ingredientes<br />de verdade
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8">
              Sem corantes artificiais, sem conservantes. Cada item do cardápio tem receita própria, preparada artesanalmente por quem ama o que faz.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
              <span className="text-slate-500">Feito com amor desde [ano de fundação]</span>
            </div>
          </div>
        </div>

        {/* Grid de categorias */}
        <div className="text-center mb-10">
          <h3 className="text-xl font-black text-slate-800">Categorias do cardápio</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {categorias.map((cat, i) => (
            <div
              key={i}
              className="aos rounded-2xl p-5 border-2 border-amber-100 hover:border-amber-400 hover:shadow-md transition-all bg-white group"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <cat.icon className="w-8 h-8 text-amber-500 mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-black text-slate-800 text-sm">{cat.nome}</div>
              <div className="text-xs text-slate-400 mt-1">{cat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* DEPOIMENTOS */
function Depoimentos() {
  return (
    <section className="py-20 sm:py-28" style={{ background: "#fdf6e3" }}>
      <div className="max-w-6xl mx-auto px-6 border-t border-amber-200 pt-16">
        <p className="text-amber-600 text-xs font-bold uppercase tracking-widest mb-12 text-center">
          Quem prova não esquece
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {depoimentos.map((d, i) => (
            <div
              key={i}
              className="aos"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Quote className="w-6 h-6 text-amber-300 mb-3" />
              <p className="text-slate-600 text-sm leading-relaxed italic mb-5">
                &ldquo;{d.texto}&rdquo;
              </p>
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-slate-400 text-xs">{d.nome} · {d.produto}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* CTA FINAL — banner escuro com imagem */
function CTAFinal() {
  return (
    <section className="relative py-32 overflow-hidden" style={{ background: "#1c0a00" }}>
      <Image
        src="/padarias/layout-cardapio/hero.webp"
        alt="Pão & Arte"
        fill
        className="object-cover opacity-20"
      />
      <div className="relative z-10 text-center px-6">
        <p className="text-amber-400/60 text-xs uppercase tracking-[0.3em] mb-4">Venha nos visitar</p>
        <h2 className="text-3xl sm:text-5xl font-black text-white mb-5" style={{ fontFamily: "Georgia, serif" }}>
          O café da manhã<br />que você merece
        </h2>
        <p className="text-white/30 mb-10 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
          Abertos todos os dias a partir das 6h. Venha tomar um café ou faça seu pedido pelo WhatsApp.
        </p>
        <a
          href="https://wa.me/5511999999999?text=Olá! Quero fazer um pedido na Padaria Pão & Arte."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black px-10 py-5 rounded-full text-base sm:text-lg shadow-2xl shadow-amber-900/40 hover:scale-[1.03] transition-all"
        >
          <MessageSquare className="w-5 h-5" />
          Fazer pedido
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 px-10 text-xs text-white/60"
      style={{ background: "#1c0a00" }}>
      <p>© {new Date().getFullYear()} Padaria Pão & Arte</p>
      <Link href="/" className="text-amber-400 hover:text-amber-300 transition-colors">
        Página por OCTO Páginas
      </Link>
    </footer>
  );
}

function WA() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Quero fazer um pedido na Pão & Arte."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fazer pedido pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 font-black pl-4 pr-5 py-3.5 rounded-full shadow-xl hover:scale-105 transition-all text-sm"
    >
      <MessageSquare className="w-4 h-4" />
      <span className="hidden sm:inline">Fazer pedido</span>
    </a>
  );
}

export default function LayoutCardapioPage() {
  useScrollAnimation();
  return (
    <>
      <style>{`.aos{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease}.aos.is-visible{opacity:1;transform:none}`}</style>
      <Hero />
      <DestaquesDia />
      <Cardapio />
      <Depoimentos />
      <CTAFinal />
      <Footer />
      <WA />
    </>
  );
}
