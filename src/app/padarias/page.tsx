"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Sparkles,
  UtensilsCrossed,
  ShoppingBag,
  ChevronRight,
} from "lucide-react";

const layouts = [
  {
    slug: "layout-cardapio",
    title: "Cardápio",
    subtitle: "Visual & Apetitoso",
    description:
      "Design focado no produto: fotos apetitosas, destaque do cardápio e ambiente da padaria. Ideal para quem quer despertar o desejo do cliente à primeira vista e mostrar o que tem de melhor.",
    icon: UtensilsCrossed,
    color: "from-rose-500 to-pink-500",
    bgColor: "bg-rose-50",
    textColor: "text-rose-500",
    features: [
      "Cardápio com fotos",
      "Destaques do dia",
      "Ambiente e história",
      "Botão WhatsApp flutuante",
    ],
    preview: "/padarias/layout-cardapio/preview.webp",
  },
  {
    slug: "layout-encomendas",
    title: "Encomendas",
    subtitle: "Direto & Prático",
    description:
      "Design focado em categorias de produtos e facilidade de pedido. Ideal para padarias e confeitarias que trabalham muito com encomendas e querem agilizar o contato pelo WhatsApp.",
    icon: ShoppingBag,
    color: "from-orange-500 to-rose-500",
    bgColor: "bg-orange-50",
    textColor: "text-orange-500",
    features: [
      "Categorias de produtos",
      "Pedido pelo WhatsApp",
      "Horários e entrega",
      "Formulário de encomenda",
    ],
    preview: "/padarias/layout-encomendas/preview.webp",
  },
];

export default function PadariasPage() {
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
          <div className="inline-flex items-center gap-2 bg-rose-50 rounded-full px-4 py-1.5 text-sm font-medium text-rose-600 mb-6">
            <Sparkles className="w-4 h-4 text-cta-500" />
            Nicho: Padarias e Confeitarias
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Escolha o{" "}
            <span className="text-gradient-ocean">estilo perfeito</span> para
            sua padaria
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Dois modelos prontos para padarias e confeitarias. Um mais visual e
            apetitoso, outro mais direto para encomendas. Veja qual combina com
            o seu negócio.
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
                href={`/padarias/${layout.slug}`}
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
            Fale com a gente e tenha uma página como essa para a sua padaria ou
            confeitaria.
          </p>
          <a
            href="https://wa.me/555494058603?text=Vi os exemplos de padarias e confeitarias e quero uma página para meu negócio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-cta text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
          >
            Quero minha página de padaria
          </a>
        </div>
      </section>
    </div>
  );
}
