"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Menu, X } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

/* Header do site. Client component por causa do menu mobile (useState)
   e do rastreamento de clique — o resto da home é renderizado no servidor. */
export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white ring-1 ring-slate-200 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow p-1">
              <Image src="/octo-logo.webp" alt="OCTO" width={40} height={40} priority className="w-full h-full object-contain" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-slate-800">
              OCTO <span className="text-brand-700">Páginas</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#como-funciona" className="text-sm text-slate-600 hover:text-brand-700 transition-colors font-medium">
              Como Funciona
            </a>
            <a href="#por-que" className="text-sm text-slate-600 hover:text-brand-700 transition-colors font-medium">
              Por que ter uma página
            </a>
            <a href="#exemplos" className="text-sm text-slate-600 hover:text-brand-700 transition-colors font-medium">
              Exemplos
            </a>
            <a href="#planos" className="text-sm text-slate-600 hover:text-brand-700 transition-colors font-medium">
              Planos
            </a>
          </nav>

          {/* CTA Desktop */}
          <a
            href="https://wa.me/555494058603?text=Olá! Quero colocar meu negócio na internet."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("header")}
            className="hidden md:inline-flex items-center gap-2 bg-cta-500 hover:bg-cta-600 text-white font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm"
          >
            <MessageSquare className="w-4 h-4" />
            Falar no WhatsApp
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-slate-600 hover:text-brand-700 transition-colors"
            aria-label="Menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden pb-4 border-t border-slate-200/50">
            <nav className="flex flex-col gap-1 pt-3">
              <a href="#como-funciona" onClick={() => setOpen(false)} className="py-2.5 px-3 rounded-lg text-slate-600 hover:bg-brand-50 hover:text-brand-700 transition-colors font-medium text-sm">
                Como Funciona
              </a>
              <a href="#por-que" onClick={() => setOpen(false)} className="py-2.5 px-3 rounded-lg text-slate-600 hover:bg-brand-50 hover:text-brand-700 transition-colors font-medium text-sm">
                Por que ter uma página
              </a>
              <a href="#exemplos" onClick={() => setOpen(false)} className="py-2.5 px-3 rounded-lg text-slate-600 hover:bg-brand-50 hover:text-brand-700 transition-colors font-medium text-sm">
                Exemplos
              </a>
              <a href="#planos" onClick={() => setOpen(false)} className="py-2.5 px-3 rounded-lg text-slate-600 hover:bg-brand-50 hover:text-brand-700 transition-colors font-medium text-sm">
                Planos
              </a>
              <a
                href="https://wa.me/555494058603?text=Olá! Quero colocar meu negócio na internet."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("header_mobile")}
                className="mt-2 flex items-center justify-center gap-2 bg-cta-500 text-white font-semibold py-3 rounded-xl text-sm"
              >
                <MessageSquare className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
