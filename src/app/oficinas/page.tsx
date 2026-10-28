"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  ClipboardList,
  ChevronRight,
} from "lucide-react";

const layouts = [
  {
    slug: "layout-confianca",
    title: "Confiança",
    subtitle: "Transparente & Humano",
    description:
      "Design que transmite credibilidade, mostrando equipe, garantia e processo de trabalho. Ideal para oficinas que querem construir confiança e fidelizar clientes com transparência.",
    icon: ShieldCheck,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    textColor: "text-amber-600",
    features: [
      "Equipe e estrutura em destaque",
      "Garantia de serviço",
      "Depoimentos de clientes",
      "Botão WhatsApp flutuante",
    ],
    preview: "/oficinas/layout-confianca/preview.webp",
  },
  {
    slug: "layout-orcamento",
    title: "Orçamento",
    subtitle: "Direto & Eficiente",
    description:
      "Design objetivo com foco em serviços e solicitação rápida de orçamento. Ideal para oficinas que querem agilizar o primeiro contato e mostrar o portfólio de serviços de forma clara.",
    icon: ClipboardList,
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
    features: [
      "Grid de serviços organizado",
      "Orçamento pelo WhatsApp",
      "Horários e localização",
      "Formulário de contato",
    ],
    preview: "/oficinas/layout-orcamento/preview.webp",
  },
];

export default function OficinasPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Bar */}
      <header className="bg-white shadow-sm border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-ocean-500 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para OCTO Páginas
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white ring-1 ring-slate-200 flex items-center justify-center shadow-sm p-1">
                <Image src="/octo-logo.webp" alt="OCTO" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <span className="text-sm font-bold text-slate-800">
                OCTO <span className="text-ocean-500">Páginas</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-12 sm:pt-20 pb-8 sm:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-amber-50 rounded-full px-4 py-1.5 text-sm font-medium text-amber-600 mb-6">
            <Sparkles className="w-4 h-4 text-cta-500" />
            Nicho: Oficinas Mecânicas
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Escolha o{" "}
            <span className="text-gradient-ocean">estilo perfeito</span> para
            sua oficina
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Dois modelos prontos para oficinas mecânicas. Um mais focado em
            confiança, outro em agilidade. Veja qual combina com o seu negócio.
          </p>
        </div>
      </section>

      {/* Layout Cards */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {layouts.map((layout, i) => (
              <Link
                key={i}
                href={`/oficinas/${layout.slug}`}
                className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Preview */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={layout.preview}
                    alt={`Preview do layout ${layout.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${layout.color} opacity-30 group-hover:opacity-40 transition-opacity`} />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 ${layout.bgColor} ${layout.textColor} text-xs font-bold px-3 py-1.5 rounded-full shadow-sm`}>
                      <layout.icon className="w-3.5 h-3.5" />
                      {layout.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-2 group-hover:text-ocean-600 transition-colors">
                    Layout {layout.title}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5">
                    {layout.description}
                  </p>

                  {/* Features */}
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {layout.features.map((feat, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${layout.color}`}
                        />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-ocean-500 font-semibold text-sm group-hover:text-ocean-600 transition-colors">
                    Ver exemplo completo
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner — usa WhatsApp real da OCTO */}
      <section className="bg-white border-t border-slate-100 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">
            Gostou do que viu?
          </h2>
          <p className="text-slate-600 mb-6 text-sm sm:text-base">
            Fale com a gente e tenha uma página como essa para a sua oficina.
          </p>
          <a
            href="https://wa.me/555494058603?text=Vi os exemplos de oficinas mecânicas e quero uma página para meu negócio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-cta text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            Quero minha página de oficina
          </a>
        </div>
      </section>
    </div>
  );
}
