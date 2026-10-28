"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Heart,
  LayoutGrid,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

const layouts = [
  {
    slug: "layout-acolhimento",
    title: "Acolhimento",
    subtitle: "Humanizado & Familiar",
    description:
      "Design acolhedor que transmite confiança e cuidado. Ideal para clínicas que querem mostrar a equipe, depoimentos de pacientes e o ambiente agradável.",
    icon: Heart,
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50",
    textColor: "text-rose-500",
    features: [
      "Foto da equipe em destaque",
      "Depoimentos de pacientes",
      "Galeria do ambiente",
      "Botão WhatsApp flutuante",
    ],
    image: "/images/dental-team.webp",
  },
  {
    slug: "layout-servicos",
    title: "Serviços",
    subtitle: "Estruturado & Direto",
    description:
      "Design objetivo focado em informações práticas. Ideal para clínicas que querem destacar especialidades, convênios e facilitar o agendamento.",
    icon: LayoutGrid,
    color: "from-ocean-500 to-ocean-700",
    bgColor: "bg-ocean-50",
    textColor: "text-ocean-500",
    features: [
      "Grid de especialidades",
      "Lista de convênios",
      "Horários e mapa",
      "Formulário de agendamento",
    ],
    image: "/images/dentist-treating.webp",
  },
];

export default function OdontologiaPage() {
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
          <div className="inline-flex items-center gap-2 bg-ocean-50 rounded-full px-4 py-1.5 text-sm font-medium text-ocean-600 mb-6">
            <Sparkles className="w-4 h-4 text-cta-500" />
            Nicho: Clínicas Odontológicas
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Escolha o <span className="text-gradient-ocean">estilo perfeito</span>{" "}
            para sua clínica
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Temos dois modelos prontos pensados especialmente para dentistas.
            Cada um com um foco diferente. Veja qual combina mais com a sua clínica.
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
                href={`/odontologia/${layout.slug}`}
                className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image Preview */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={layout.image}
                    alt={`Layout ${layout.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${layout.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1.5 ${layout.bgColor} ${layout.textColor} text-xs font-bold px-3 py-1.5 rounded-full`}>
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
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${layout.color}`} />
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

      {/* CTA Banner */}
      <section className="bg-white border-t border-slate-100 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">
            Gostou do que viu?
          </h2>
          <p className="text-slate-600 mb-6 text-sm sm:text-base">
            Fale com a gente e tenha uma página como essa para a sua clínica.
          </p>
          <a
            href="https://wa.me/555494058603?text=Olá! Vi os exemplos de odontologia e quero uma página para minha clínica."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("odontologia_vitrine")}
            className="inline-flex items-center gap-2 gradient-cta text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            Quero minha página de clínica
          </a>
        </div>
      </section>
    </div>
  );
}
