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
  Check,
  CalendarCheck,
  Scissors,
  Palette,
  Eye,
  Hand,
  Flower2,
  Brush,
  Send,
  CheckCircle,
  User,
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

/* NOTA DE COMPLIANCE: Se a estética realizar procedimentos de saúde (toxina,
   preenchimento, lasers médicos), pode ser necessário responsável técnico
   habilitado. Verificar legislação aplicável antes de publicar. */

const servicos = [
  { icon: Scissors, nome: "Corte + Escova", duracao: "60 min", cor: "bg-violet-50 text-violet-600" },
  { icon: Palette, nome: "Coloração completa", duracao: "120 min", cor: "bg-fuchsia-50 text-fuchsia-600" },
  { icon: Eye, nome: "Design de sobrancelha", duracao: "45 min", cor: "bg-purple-50 text-purple-600" },
  { icon: Flower2, nome: "Limpeza de pele", duracao: "75 min", cor: "bg-violet-50 text-violet-600" },
  { icon: Hand, nome: "Manicure + pedicure", duracao: "90 min", cor: "bg-fuchsia-50 text-fuchsia-600" },
  { icon: Brush, nome: "Maquiagem social", duracao: "60 min", cor: "bg-purple-50 text-purple-600" },
];

const diferenciais = [
  "Atendimento com hora marcada — sem espera",
  "Produtos profissionais de primeira linha",
  "Ambiente climatizado e confortável",
  "Toalhas e materiais descartáveis por cliente",
  "Pagamento facilitado: cartão, Pix e dinheiro",
  "Estacionamento conveniado na porta",
];

/* ─── Componentes ─── */

function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col lg:flex-row">
      {/* Lado esquerdo — imagem real */}
      <div className="relative lg:w-[55%] min-h-[50vh] lg:min-h-full">
        <Image
          src="/esteticas/layout-agenda/hero.webp"
          alt="Espaço Serena Salão — ambiente minimalista"
          fill
          className="object-cover"
          priority
        />
        {/* overlay lateral direito */}
        <div className="absolute inset-0 lg:hidden bg-white/10" />
        <div className="hidden lg:block absolute inset-0"
          style={{ background: "linear-gradient(to right, transparent 60%, #fafafa 100%)" }} />

        {/* Badges top */}
        <div className="absolute top-6 left-6 z-20 flex items-center gap-3">
          <Link
            href="/esteticas"
            className="flex items-center gap-2 bg-white/90 backdrop-blur text-slate-700 hover:text-slate-900 text-xs font-medium transition-colors rounded-full px-4 py-2 shadow-sm"
          >
            <ChevronLeft className="w-3.5 h-3.5" /> Voltar
          </Link>
        </div>
        <div className="absolute top-6 right-6 z-20">
          <span className="inline-flex items-center gap-1.5 bg-orange-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
            <Sparkles className="w-3 h-3" /> Exemplo de Layout
          </span>
        </div>
      </div>

      {/* Lado direito — conteúdo */}
      <div className="lg:w-[45%] bg-white flex flex-col justify-center px-8 sm:px-14 py-16 lg:py-24">
        <div className="max-w-md">
          <span className="inline-block text-xs font-bold text-violet-500 uppercase tracking-widest mb-5">
            Salão · Spa · Beleza
          </span>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight mb-5">
            Agende em{" "}
            <span className="text-violet-600">1 minuto,</span>{" "}
            saia renovada
          </h1>

          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            No Espaço Serena, a sua beleza não espera. Agenda online, ambiente
            exclusivo e atendimento que respeita o seu tempo.
          </p>

          {/* Status disponibilidade */}
          <div className="flex items-center gap-2 mb-8 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-green-600 font-semibold">Disponível hoje</span>
            <span className="text-slate-400">— próximo horário às 14h30</span>
          </div>

          <a
            href="https://wa.me/5511999999999?text=Olá! Quero agendar um horário no Espaço Serena."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-2xl text-sm transition-all hover:scale-[1.02] shadow-lg shadow-violet-200 mb-4"
          >
            <MessageSquare className="w-4 h-4" />
            Agendar pelo WhatsApp
          </a>

          <a
            href="tel:+5511999999999"
            className="w-full flex items-center justify-center gap-2 border border-slate-200 text-slate-600 hover:text-violet-600 hover:border-violet-300 font-medium py-3.5 rounded-2xl text-sm transition-all"
          >
            <Phone className="w-4 h-4" />
            (11) 99999-9999
          </a>

          <div className="mt-8 flex gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Rua Exemplo, 45
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Ter–Sáb 9h–19h
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* TABELA DE SERVIÇOS */
function TabelaServicos() {
  return (
    <section id="servicos" className="py-20 sm:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-violet-500 uppercase tracking-widest block mb-3">
            Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            O que oferecemos
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-sm divide-y divide-slate-100">
          {servicos.map((s, i) => (
            <div
              key={i}
              className="aos flex items-center justify-between px-6 py-5 hover:bg-violet-50/30 transition-colors group"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl ${s.cor} flex items-center justify-center shrink-0`}>
                  <s.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold text-slate-800 text-sm sm:text-base">{s.nome}</div>
                  <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3" /> {s.duracao}
                  </div>
                </div>
              </div>
              <a
                href={`https://wa.me/5511999999999?text=Olá! Quero agendar ${s.nome} no Espaço Serena.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-violet-500 group-hover:text-violet-700 transition-colors bg-violet-50 group-hover:bg-violet-100 px-3 py-1.5 rounded-full"
              >
                <CalendarCheck className="w-3.5 h-3.5" />
                Agendar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* DIFERENCIAIS */
function Diferenciais() {
  return (
    <section className="py-16 sm:py-24 bg-violet-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Imagem */}
          <div className="aos relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
            <Image
              src="/esteticas/layout-agenda/hero.webp"
              alt="Espaço Serena — interior"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur rounded-xl px-4 py-3 text-xs font-semibold text-slate-700 flex items-center gap-2">
              <Check className="w-4 h-4 text-violet-500" />
              Higiene e conforto em primeiro lugar
            </div>
          </div>

          {/* Lista */}
          <div className="aos" style={{ transitionDelay: "0.1s" }}>
            <span className="text-xs font-bold text-violet-500 uppercase tracking-widest block mb-4">
              Por que a Serena
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-8">
              Detalhes que fazem<br />toda a diferença
            </h2>
            <ul className="space-y-4">
              {diferenciais.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* AGENDAMENTO RÁPIDO — formulário inline */
function AgendamentoRapido() {
  const [enviado, setEnviado] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-lg mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-violet-500 uppercase tracking-widest block mb-3">
            Agenda online
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Solicite seu horário
          </h2>
          <p className="mt-3 text-slate-500 text-sm">
            Confirmamos em até 1 hora útil pelo WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm space-y-4"
        >
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              required
              placeholder="Seu nome"
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="tel"
              required
              placeholder="WhatsApp"
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>
          <div className="relative">
            <Scissors className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <select className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-400 appearance-none">
              <option value="">Selecione o serviço...</option>
              {servicos.map((s) => <option key={s.nome} value={s.nome}>{s.nome}</option>)}
            </select>
          </div>

          <div className="flex items-start gap-2 pt-1">
            <input type="checkbox" id="lgpd-agenda" required className="mt-1 w-4 h-4 accent-violet-600" />
            <label htmlFor="lgpd-agenda" className="text-xs text-slate-400 leading-relaxed">
              Autorizo uso dos dados para este agendamento, conforme a{" "}
              <Link href="/privacidade" className="text-violet-500 underline">Política de Privacidade</Link>.
            </label>
          </div>

          <button
            type="submit"
            disabled={enviado}
            className={`w-full py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
              enviado
                ? "bg-green-500 text-white"
                : "bg-violet-600 hover:bg-violet-700 text-white hover:scale-[1.01] shadow-md shadow-violet-200"
            }`}
          >
            {enviado ? (
              <><CheckCircle className="w-4 h-4" /> Solicitação enviada!</>
            ) : (
              <><Send className="w-4 h-4" /> Solicitar horário</>
            )}
          </button>

          <p className="text-center text-xs text-slate-400">
            Dados usados apenas para retorno deste agendamento.
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>© {new Date().getFullYear()} Espaço Serena Salão & Spa</p>
        <Link href="/" className="text-violet-400 hover:text-violet-300 transition-colors">
          Página por OCTO Páginas
        </Link>
      </div>
    </footer>
  );
}

function WA() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Quero agendar no Espaço Serena."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold pl-4 pr-5 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105 text-sm"
    >
      <MessageSquare className="w-4 h-4" />
      <span className="hidden sm:inline">Agendar</span>
    </a>
  );
}

export default function LayoutAgendaPage() {
  useScrollAnimation();
  return (
    <>
      <style>{`.aos{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease}.aos.is-visible{opacity:1;transform:none}`}</style>
      <Hero />
      <TabelaServicos />
      <Diferenciais />
      <AgendamentoRapido />
      <Footer />
      <WA />
    </>
  );
}
