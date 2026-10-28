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
  Wrench,
  Car,
  Zap,
  Settings,
  Gauge,
  AlertTriangle,
  Search,
  Send,
  CheckCircle,
  User,
  FileText,
  ArrowRight,
  CheckSquare,
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
const servicos = [
  { icon: Settings, nome: "Revisão Preventiva", items: ["Motor e transmissão", "Fluidos e correias", "Iluminação e freios", "Laudo completo incluído"] },
  { icon: Gauge, nome: "Alinhamento e Balanceamento", items: ["Equipamento computadorizado", "Relatório de antes/depois", "Verificação de pneus", "Teste de rodagem incluso"] },
  { icon: Zap, nome: "Elétrica e Scanner", items: ["Diagnóstico OBD avançado", "Sistema de injeção", "Bateria e alternador", "Relatório digital enviado"] },
  { icon: AlertTriangle, nome: "Urgência e Socorro", items: ["Atendimento prioritário", "Contato via WhatsApp", "Remoção até a oficina", "Diagnóstico sem custo"] },
  { icon: Car, nome: "Freios e Suspensão", items: ["Freios ABS e convencional", "Amortecedores e buchas", "Barras de direção", "Garantia de [X] meses"] },
  { icon: Wrench, nome: "Troca de Óleo e Filtros", items: ["Óleos de primeira linha", "Filtro de óleo e ar", "Nota fiscal das peças", "Prazo recomendado por fabricante"] },
];

const passos = [
  { n: "1", t: "Você descreve o problema", d: "Por WhatsApp, telefone ou pessoalmente." },
  { n: "2", t: "Diagnóstico rápido", d: "Scanner e inspeção física. Grátis na primeira visita." },
  { n: "3", t: "Orçamento no WhatsApp", d: "Com fotos e descrição do que encontramos. Você aprova." },
];

/* ─── Componentes ─── */

function HeroApp() {
  const [enviado, setEnviado] = useState(false);
  const [servico, setServico] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
    setTimeout(() => setEnviado(false), 3500);
  };

  return (
    <section className="relative min-h-[100svh] bg-white flex flex-col lg:flex-row">
      {/* Nav */}
      <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 py-6">
        <Link
          href="/oficinas"
          className="flex items-center gap-2 text-slate-500 hover:text-slate-800 text-sm transition-colors bg-white/90 backdrop-blur rounded-full px-4 py-2 shadow-sm border border-slate-100"
        >
          <ChevronLeft className="w-4 h-4" /> Voltar
        </Link>
        <span className="inline-flex items-center gap-1.5 bg-orange-700 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
          <Sparkles className="w-3 h-3" /> Exemplo de Layout
        </span>
      </div>

      {/* Esquerda — imagem + texto */}
      <div className="lg:w-[55%] relative flex flex-col justify-end pt-24 pb-10 lg:pb-16 px-8 sm:px-14 lg:px-16">
        <div className="relative rounded-3xl overflow-hidden mb-8 h-48 sm:h-56 lg:h-72">
          <Image
            src="/oficinas/layout-orcamento/hero.webp"
            alt="MecaRápida — centro de serviços profissional"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>

        <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">
          Centro Automotivo
        </p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
          Orçamento em{" "}
          <span className="text-amber-500">minutos.</span><br />
          Serviço com garantia.
        </h1>
        <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-md">
          Na MecaRápida, você recebe o orçamento completo no WhatsApp — com fotos e descrição — antes de decidir. Sem pressão, sem surpresa.
        </p>

        {/* 3 passos compactos */}
        <div className="flex flex-col gap-3">
          {passos.map((p) => (
            <div key={p.n} className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-full bg-amber-400 text-slate-900 font-black text-xs flex items-center justify-center shrink-0">
                {p.n}
              </div>
              <span className="text-slate-600 text-sm">
                <strong className="text-slate-800">{p.t}</strong> — {p.d}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-5 text-xs text-slate-400">
          <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-amber-400" /> Av. Mecânica, 789</div>
          <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-400" /> Seg–Sex 7h–18h · Sáb 7h–12h</div>
          <div className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-amber-400" /> (11) 99999-9999</div>
        </div>
      </div>

      {/* Direita — formulário de orçamento INLINE no hero */}
      <div className="lg:w-[45%] bg-slate-900 flex items-center justify-center py-16 px-8 sm:px-12">
        <div className="w-full max-w-sm">
          <div className="flex items-center gap-2 mb-6">
            <Search className="w-5 h-5 text-amber-400" />
            <h2 className="text-white font-black text-lg">Solicitar orçamento</h2>
          </div>
          <p className="text-slate-400 text-xs mb-8 leading-relaxed">
            Preencha e respondemos com o orçamento em até 2 horas úteis.
          </p>

          {!enviado ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  required
                  placeholder="Nome"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-0"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="tel"
                  required
                  placeholder="WhatsApp"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>
              <div className="relative">
                <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input
                  type="text"
                  placeholder="Veículo (modelo, ano)"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-amber-400"
                />
              </div>
              <div className="relative">
                <Wrench className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <select
                  value={servico}
                  onChange={(e) => setServico(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-slate-300 text-sm focus:outline-none focus:border-amber-400 appearance-none"
                >
                  <option value="">Tipo de serviço...</option>
                  <option>Revisão Preventiva</option>
                  <option>Alinhamento e Balanceamento</option>
                  <option>Elétrica e Scanner</option>
                  <option>Freios e Suspensão</option>
                  <option>Troca de Óleo</option>
                  <option>Urgência</option>
                  <option>Outro</option>
                </select>
              </div>
              <div className="relative">
                <FileText className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                <textarea
                  rows={3}
                  placeholder="Descreva o problema (opcional)"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-amber-400 resize-none"
                />
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" id="lgpd-orc" required className="mt-0.5 w-4 h-4 accent-amber-400" />
                <label htmlFor="lgpd-orc" className="text-xs text-slate-500 leading-relaxed">
                  Autorizo o uso dos meus dados para este orçamento, conforme a{" "}
                  <Link href="/privacidade" className="text-amber-400 underline">Política de Privacidade</Link>.
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-400 hover:bg-amber-300 text-slate-900 font-black py-4 rounded-xl text-sm transition-all hover:scale-[1.01] flex items-center justify-center gap-2 shadow-lg shadow-amber-400/20 mt-1"
              >
                <Send className="w-4 h-4" /> Solicitar orçamento grátis
              </button>
              <p className="text-center text-xs text-slate-600">
                Dados usados apenas para retorno deste orçamento.
              </p>
            </form>
          ) : (
            <div className="text-center py-10">
              <CheckCircle className="w-14 h-14 text-amber-400 mx-auto mb-4" />
              <p className="text-white font-black text-lg mb-2">Solicitação enviada!</p>
              <p className="text-slate-400 text-sm">Nossa equipe retorna em breve com o orçamento.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* GRADE DE SERVIÇOS — cards com checklist */
function GradeServicos() {
  return (
    <section className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="text-center mb-14">
          <p className="text-amber-500 text-xs font-bold uppercase tracking-widest mb-3">Serviços</p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
            O que fazemos com cuidado
          </h2>
          <p className="mt-3 text-slate-500 text-sm max-w-xl mx-auto">
            Para cada serviço, receba um checklist do que foi verificado e um relatório do que foi feito.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicos.map((s, i) => (
            <div
              key={i}
              className="aos bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-amber-200 transition-all group"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-900 transition-colors">
                  <s.icon className="w-5 h-5" />
                </div>
                <a
                  href={`https://wa.me/5511999999999?text=Quero um orçamento para ${s.nome}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-amber-500 hover:text-amber-700 flex items-center gap-1"
                >
                  Orçar <ArrowRight className="w-3 h-3" />
                </a>
              </div>
              <h3 className="font-black text-slate-800 text-base mb-4">{s.nome}</h3>
              <ul className="space-y-2">
                {s.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-xs text-slate-500">
                    <CheckSquare className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* CTA WHATSAPP */
function CTAWhatsApp() {
  return (
    <section className="py-16 sm:py-24 bg-amber-400">
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">
            Prefere resolver pelo WhatsApp?
          </h2>
          <p className="text-slate-700/70 text-sm">
            Manda uma foto do problema ou descreve o que está acontecendo. Respondemos na hora.
          </p>
        </div>
        <a
          href="https://wa.me/5511999999999?text=Olá! Quero um orçamento na MecaRápida."
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-amber-400 font-black px-8 py-4 rounded-2xl text-sm transition-all hover:scale-[1.03] shadow-xl"
        >
          <MessageSquare className="w-5 h-5" />
          Chamar no WhatsApp
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>© {new Date().getFullYear()} MecaRápida Centro Automotivo</p>
        <Link href="/" className="text-amber-400 hover:text-amber-300 transition-colors">
          Página por OCTO Páginas
        </Link>
      </div>
    </footer>
  );
}

export default function LayoutOrcamentoPage() {
  useScrollAnimation();
  return (
    <>
      <style>{`.aos{opacity:0;transform:translateY(22px);transition:opacity .6s ease,transform .6s ease}.aos.is-visible{opacity:1;transform:none}`}</style>
      <HeroApp />
      <GradeServicos />
      <CTAWhatsApp />
      <Footer />
    </>
  );
}
