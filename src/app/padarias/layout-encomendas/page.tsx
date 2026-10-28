"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  ChevronLeft,
  Sparkles,
  Cake,
  Croissant,
  Coffee,
  Cookie,
  Truck,
  Check,
  Send,
  CheckCircle,
  User,
  FileText,
  ArrowRight,
  ShoppingBag,
  Gift,
  Star,
} from "lucide-react";

function useScrollAnimation() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".aos").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Dados ─── */
const produtos = [
  {
    icon: Cake,
    nome: "Bolo de festa personalizado",
    descricao: "Escolha o sabor, o tema e o tamanho. Prazo mínimo de 3 dias.",
    preco: "A partir de R$ [valor]",
    destaque: true,
    cor: "from-rose-400 to-pink-500",
  },
  {
    icon: Coffee,
    nome: "Cesta de café da manhã",
    descricao: "Pão de queijo, croissant, bolo, frutas, café e suco. Ideal para presentear.",
    preco: "A partir de R$ [valor]",
    destaque: false,
    cor: "from-amber-400 to-orange-500",
  },
  {
    icon: Croissant,
    nome: "Caixa de croissants",
    descricao: "6 ou 12 unidades, recheios variados: chocolate, amêndoas, queijo ou presunto.",
    preco: "A partir de R$ [valor]",
    destaque: false,
    cor: "from-yellow-400 to-amber-500",
  },
  {
    icon: Cookie,
    nome: "Kit biscoitos decorados",
    descricao: "Perfeito para lembranças de casamento, aniversário ou eventos corporativos.",
    preco: "A partir de R$ [valor]",
    destaque: false,
    cor: "from-pink-400 to-rose-500",
  },
];

const passosPedido = [
  { icon: MessageSquare, titulo: "Escolha e descreva", desc: "Preencha o formulário ou chame pelo WhatsApp com os detalhes da sua encomenda." },
  { icon: Check, titulo: "Confirmamos e orçamos", desc: "Nossa equipe confirma disponibilidade e envia o valor com prazo em até 2h." },
  { icon: Truck, titulo: "Retira ou recebe", desc: "Busque na loja ou solicite entrega (consulte área de cobertura e prazo)." },
];

/* ─── Componentes ─── */

/* HERO — clean split branco/rosé */
function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-white flex flex-col lg:flex-row">
      {/* Nav */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-6">
        <Link
          href="/padarias"
          className="flex items-center gap-2 bg-white/90 backdrop-blur text-slate-600 hover:text-slate-900 text-xs font-medium transition-colors rounded-full px-4 py-2 shadow-sm border border-rose-100"
        >
          <ChevronLeft className="w-3.5 h-3.5" /> Voltar
        </Link>
        <span className="inline-flex items-center gap-1.5 bg-orange-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
          <Sparkles className="w-3 h-3" /> Exemplo de Layout
        </span>
      </div>

      {/* Esquerda — conteúdo */}
      <div className="lg:w-[50%] flex flex-col justify-center px-8 sm:px-14 lg:px-20 pt-28 pb-16 lg:py-24">
        <div className="flex items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-rose-400 text-rose-400" />)}
          <span className="text-slate-400 text-xs ml-2">Confeitaria artesanal</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-5">
          Encomende algo{" "}
          <span className="text-rose-500 italic">especial</span>{" "}
          para a sua ocasião especial
        </h1>

        <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-md">
          Na Doce Encanto, cada encomenda é tratada como única. Bolos personalizados, cestas de café e doces finos feitos à mão para o seu momento.
        </p>

        {/* 3 trust badges horizontais */}
        <div className="flex flex-col gap-3 mb-10">
          {[
            { icon: Gift, t: "Personalizado", s: "Cores, temas e recheios à sua escolha" },
            { icon: Truck, t: "Entrega disponível", s: "Consulte a área de cobertura" },
            { icon: Check, t: "Artesanal e sem conservantes", s: "Ingredientes selecionados" },
          ].map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                <b.icon className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-800 font-semibold text-xs">{b.t}</span>
                <span className="text-slate-400 text-xs"> — {b.s}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#encomenda"
            className="inline-flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-black px-8 py-4 rounded-2xl text-sm transition-all hover:scale-[1.02] shadow-lg shadow-rose-200"
          >
            <ShoppingBag className="w-4 h-4" />
            Fazer encomenda
          </a>
          <a
            href="tel:+5511999999999"
            className="inline-flex items-center justify-center gap-2 border border-rose-100 text-slate-600 hover:text-rose-500 hover:border-rose-300 font-medium px-6 py-4 rounded-2xl text-sm transition-all"
          >
            <Phone className="w-4 h-4" /> (11) 99999-9999
          </a>
        </div>
      </div>

      {/* Direita — imagem com moldura */}
      <div className="lg:w-[50%] relative">
        <Image
          src="/padarias/layout-encomendas/hero.webp"
          alt="Doce Encanto — confeitaria boutique"
          fill
          className="object-cover"
          priority
        />
        {/* overlay suave na esquerda */}
        <div className="hidden lg:block absolute inset-0"
          style={{ background: "linear-gradient(to right, white 0%, transparent 20%)" }} />

        {/* Badge flutuante */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:-left-6 bg-white rounded-2xl shadow-xl px-5 py-4 border border-rose-100">
          <div className="text-rose-500 font-black text-2xl">✦</div>
          <div className="text-slate-800 font-black text-sm mt-1">Feito<br />à mão</div>
        </div>
      </div>
    </section>
  );
}

/* COMO FUNCIONA — strip de 3 passos */
function ComoFunciona() {
  return (
    <section className="py-14 sm:py-20 bg-rose-50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-rose-500 text-xs font-bold uppercase tracking-widest text-center mb-10">
          Como fazer sua encomenda
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {passosPedido.map((p, i) => (
            <div
              key={i}
              className="aos flex flex-col items-center text-center"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="relative w-14 h-14 rounded-2xl bg-rose-500 text-white flex items-center justify-center mb-4 shadow-lg shadow-rose-200">
                <p.icon className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-slate-900 text-white text-xs font-black flex items-center justify-center">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-black text-slate-800 text-sm mb-1">{p.titulo}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* PRODUTOS — cards boutique */
function ProdutosGrid() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-rose-500 text-xs font-bold uppercase tracking-widest mb-3">Encomendas</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">O que você pode pedir</h2>
          </div>
          <a
            href="#encomenda"
            className="inline-flex items-center gap-2 text-rose-500 text-sm font-bold hover:text-rose-700 transition-colors"
          >
            Solicitar encomenda <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {produtos.map((p, i) => (
            <div
              key={i}
              className={`aos rounded-3xl overflow-hidden group cursor-pointer hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-lg border border-slate-100 ${p.destaque ? "sm:col-span-2 lg:col-span-1" : ""}`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Imagem do produto — gradiente colorido por categoria */}
              <div className={`h-40 sm:h-48 bg-gradient-to-br ${p.cor} flex items-center justify-center relative`}>
                <p.icon className="w-16 h-16 text-white/60" />
                {p.destaque && (
                  <span className="absolute top-3 left-3 bg-white text-rose-500 text-xs font-black px-2.5 py-1 rounded-full">
                    ★ Mais pedido
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-black text-slate-800 text-sm mb-1.5">{p.nome}</h3>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">{p.descricao}</p>
                <div className="flex items-center justify-between">
                  <span className="text-rose-500 font-bold text-xs">{p.preco}</span>
                  <a
                    href={`https://wa.me/5511999999999?text=Olá! Quero encomendar ${p.nome} na Doce Encanto.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-400 hover:text-rose-500 transition-colors"
                  >
                    Encomendar →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FORMULÁRIO */
function FormularioEncomenda() {
  const [enviado, setEnviado] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3500);
  };

  return (
    <section id="encomenda" className="py-20 sm:py-28" style={{ background: "linear-gradient(135deg, #fff1f2, #fdf2f8)" }}>
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-rose-500 text-xs font-bold uppercase tracking-widest mb-3">Solicitar encomenda</p>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Preencha e receba seu orçamento
          </h2>
          <p className="mt-3 text-slate-500 text-sm">
            Nossa equipe confirma disponibilidade e envia o valor em até 2 horas úteis.
          </p>
        </div>

        {!enviado ? (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-rose-100 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="text" required placeholder="Nome completo"
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-400" />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="tel" required placeholder="WhatsApp"
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-400" />
              </div>
            </div>

            <div className="relative">
              <Cake className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <select className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-rose-400 appearance-none bg-white">
                <option value="">O que quer encomendar?</option>
                <option>Bolo de festa personalizado</option>
                <option>Cesta de café da manhã</option>
                <option>Caixa de croissants</option>
                <option>Kit biscoitos decorados</option>
                <option>Outro</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input type="date"
                  className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-rose-400" />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <select className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 text-sm text-slate-600 focus:outline-none focus:ring-2 focus:ring-rose-400 appearance-none bg-white">
                  <option value="">Retirada ou entrega?</option>
                  <option>Retirada na loja</option>
                  <option>Entrega (consultar área)</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <FileText className="absolute left-3 top-3.5 w-4 h-4 text-slate-400" />
              <textarea rows={3} placeholder="Detalhes: tema, cores, sabores, quantidade, ocasião..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-rose-400 resize-none" />
            </div>

            <div className="flex items-start gap-2">
              <input type="checkbox" id="lgpd-enc" required className="mt-0.5 w-4 h-4 accent-rose-500" />
              <label htmlFor="lgpd-enc" className="text-xs text-slate-400 leading-relaxed">
                Autorizo o uso dos meus dados para contato sobre esta encomenda, conforme a{" "}
                <Link href="/privacidade" className="text-rose-500 underline">Política de Privacidade</Link>.
              </label>
            </div>

            <button type="submit"
              className="w-full bg-rose-500 hover:bg-rose-600 text-white font-black py-4 rounded-2xl text-sm transition-all hover:scale-[1.01] shadow-lg shadow-rose-200 flex items-center justify-center gap-2">
              <Send className="w-4 h-4" /> Solicitar encomenda
            </button>
            <p className="text-center text-xs text-slate-400">
              Dados usados apenas para retorno desta encomenda.
            </p>
          </form>
        ) : (
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-rose-100 text-center">
            <CheckCircle className="w-16 h-16 text-rose-400 mx-auto mb-5" />
            <h3 className="text-slate-900 font-black text-xl mb-2">Encomenda solicitada!</h3>
            <p className="text-slate-500 text-sm">Retornamos em breve com a confirmação e o valor.</p>
          </div>
        )}

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
          <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-rose-400" /> Seg–Dom 6h–20h</div>
          <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-rose-400" /> Rua Doce, 200 — Centro</div>
          <div className="flex items-center gap-1.5"><Truck className="w-3.5 h-3.5 text-rose-400" /> Entrega disponível</div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>© {new Date().getFullYear()} Confeitaria Doce Encanto</p>
        <Link href="/" className="text-rose-400 hover:text-rose-300 transition-colors">
          Página por OCTO Páginas
        </Link>
      </div>
    </footer>
  );
}

function WA() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Quero encomendar algo na Doce Encanto."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Encomendar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-bold pl-4 pr-5 py-3.5 rounded-full shadow-xl shadow-rose-300/40 hover:scale-105 transition-all text-sm"
    >
      <MessageSquare className="w-4 h-4" />
      <span className="hidden sm:inline">Encomendar</span>
    </a>
  );
}

export default function LayoutEncomendasPage() {
  useScrollAnimation();
  return (
    <>
      <style>{`.aos{opacity:0;transform:translateY(22px);transition:opacity .65s ease,transform .65s ease}.aos.is-visible{opacity:1;transform:none}`}</style>
      <Hero />
      <ComoFunciona />
      <ProdutosGrid />
      <FormularioEncomenda />
      <Footer />
      <WA />
    </>
  );
}
