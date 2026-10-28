import {
  MessageSquare,
  Palette,
  Rocket,
  XCircle,
  CheckCircle,
  Stethoscope,
  Wrench,
  Cake,
  Sparkles,
  Phone,
  ArrowRight,
  Shield,
  Zap,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import ScrollAnimations from "@/components/ScrollAnimations";
import WhatsAppLink from "@/components/WhatsAppLink";
import OctoSchema from "@/components/OctoSchema";



/* ────────────────────────────────────────────────────────────────────────── */
/*  HERO SECTION                                                             */
/* ────────────────────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden gradient-hero-inst">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 rounded-full px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm mb-6 border border-brand-100">
            Páginas profissionais para negócios locais
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight">
            Coloque seu negócio local{" "}
            <span className="text-brand-700">na internet hoje</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-5 sm:mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Enquanto você lê isso, alguém está buscando no Google um serviço
            como o seu — e encontrando a concorrência.{" "}
            <strong className="text-slate-800">
              Tenha sua vitrine 24 horas e receba mais orçamentos.
            </strong>
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/gerador"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 gradient-cta text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-base sm:text-lg"
            >
              <Palette className="w-5 h-5" />
              Monte a prévia da sua página
            </Link>
            <a
              href="#exemplos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-brand-700 font-semibold px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all text-base sm:text-lg border border-brand-100"
            >
              Ver exemplos
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-growth-500" />
              <span>Sem contrato de fidelidade</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cta-500" />
              <span>Pronto em até 48 horas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  COMO FUNCIONA                                                            */
/* ────────────────────────────────────────────────────────────────────────── */
function ComoFunciona() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Nos conte sobre seu negócio",
      description:
        "Mande uma mensagem no WhatsApp com o nome do seu negócio, o que você faz e onde fica. Simples como conversar com um amigo.",
      color: "bg-brand-50 text-brand-700",
    },
    {
      icon: Palette,
      title: "Criamos sua página",
      description:
        "Nossa equipe monta sua página completa: bonita, rápida e feita para aparecer no Google. Você aprova antes de publicar.",
      color: "bg-growth-50 text-growth-500",
    },
    {
      icon: Rocket,
      title: "Sua vitrine já está no ar!",
      description:
        "Pronto! Seu negócio ganha uma presença profissional na internet. Agora quem procura pelo que você faz, encontra você.",
      color: "bg-warm-50 text-cta-500",
    },
  ];

  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <span className="inline-block text-sm font-semibold text-brand-700 uppercase tracking-wider mb-3">
            Simples e rápido
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
            Como funciona? <span className="text-brand-700">3 passos</span> e pronto.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Sem complicação, sem burocracia. Você não precisa entender nada de tecnologia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className="animate-on-scroll relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-2 w-9 h-9 rounded-full gradient-brand text-white text-sm font-bold flex items-center justify-center shadow-md">
                {i + 1}
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <step.icon className="w-7 h-7" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  POR QUE VOCÊ PRECISA                                                     */
/* ────────────────────────────────────────────────────────────────────────── */
function PorQueVocePrecisa() {
  const semPagina = [
    { icon: XCircle, text: "Clientes buscam seu serviço e acham a concorrência" },
    { icon: XCircle, text: "Depende só de indicação boca a boca" },
    { icon: XCircle, text: "Perde orçamentos de quem pesquisa no Google" },
    { icon: XCircle, text: "Não passa confiança para clientes novos" },
  ];

  const comPagina = [
    { icon: CheckCircle, text: "Seu negócio aparece quando alguém busca no Google" },
    { icon: CheckCircle, text: "Recebe orçamentos e contatos 24 horas por dia" },
    { icon: CheckCircle, text: "Mostra seus serviços, localização e horários" },
    { icon: CheckCircle, text: "Passa profissionalismo e gera confiança" },
  ];

  return (
    <section id="por-que" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <span className="inline-block text-sm font-semibold text-brand-700 uppercase tracking-wider mb-3">
            A verdade que ninguém te conta
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
            Você está <span className="text-brand-700">perdendo clientes</span> agora mesmo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            A cada minuto, pessoas pesquisam no Google por serviços que você oferece. Se você não tem uma página, eles encontram outra pessoa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Sem Página */}
          <div className="animate-on-scroll bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-red-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-red-500" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800">Sem página</h3>
            </div>
            <ul className="space-y-4">
              {semPagina.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                  <span className="text-slate-600 text-sm sm:text-base">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Com Página */}
          <div className="animate-on-scroll bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-growth-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-growth-500 to-growth-600" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-growth-50 text-growth-500 flex items-center justify-center">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-800">Com uma página OCTO</h3>
            </div>
            <ul className="space-y-4">
              {comPagina.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <item.icon className="w-5 h-5 text-growth-500 mt-0.5 shrink-0" />
                  <span className="text-slate-600 text-sm sm:text-base">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  VITRINE DE EXEMPLOS                                                      */
/* ────────────────────────────────────────────────────────────────────────── */
function VitrineExemplos() {
  const nichos = [
    {
      icon: Stethoscope,
      title: "Clínicas Odontológicas",
      description: "Páginas feitas para atrair pacientes e mostrar sua clínica com profissionalismo.",
      href: "/odontologia",
      color: "bg-brand-50 text-brand-700 group-hover:bg-brand-100",
      available: true,
    },
    {
      icon: Sparkles,
      title: "Estéticas e Salões",
      description: "Mostre seus serviços, fotos de resultados e agende pelo WhatsApp.",
      href: "/esteticas",
      color: "bg-pink-50 text-pink-500 group-hover:bg-pink-100",
      available: true,
    },
    {
      icon: Wrench,
      title: "Oficinas Mecânicas",
      description: "Serviços organizados, orçamento rápido e localização fácil para seus clientes.",
      href: "/oficinas",
      color: "bg-amber-50 text-amber-500 group-hover:bg-amber-100",
      available: true,
    },
    {
      icon: Cake,
      title: "Padarias e Confeitarias",
      description: "Cardápio online, galeria de fotos e encomendas pelo WhatsApp.",
      href: "/padarias",
      color: "bg-rose-50 text-rose-500 group-hover:bg-rose-100",
      available: true,
    },
  ];

  return (
    <section id="exemplos" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <span className="inline-block text-sm font-semibold text-brand-700 uppercase tracking-wider mb-3">
            Feitas para o seu tipo de negócio
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
            Veja <span className="text-brand-700">exemplos reais</span> de páginas
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Cada página é pensada para o seu nicho. Escolha o tipo de negócio e veja como ficaria a sua.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {nichos.map((nicho, i) => {
            const Card = (
              <div
                key={i}
                className={`animate-on-scroll group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-1 ${
                  !nicho.available ? "opacity-70" : "cursor-pointer"
                }`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className={`w-12 h-12 rounded-xl ${nicho.color} flex items-center justify-center mb-4 transition-colors`}>
                  <nicho.icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">
                  {nicho.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {nicho.description}
                </p>
                {nicho.available ? (
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:text-brand-800 transition-colors">
                    Ver exemplos <ChevronRight className="w-4 h-4" />
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-400">
                    Em breve
                  </span>
                )}
              </div>
            );

            return nicho.available ? (
              <Link key={i} href={nicho.href}>
                {Card}
              </Link>
            ) : (
              <div key={i}>{Card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  PLANOS                                                                   */
/* ────────────────────────────────────────────────────────────────────────── */
function Planos() {
  const plans = [
    {
      name: "Essencial",
      price: "97",
      period: "/mês",
      description: "Ideal para quem está começando e quer uma presença online profissional.",
      features: [
        "Página profissional completa",
        "Otimizada para celular",
        "Hospedagem inclusa",
        "Botão de WhatsApp",
        "Mapa com localização",
        "1 ajuste de conteúdo por mês",
      ],
      cta: "Escolher Essencial",
      popular: false,
      color: "border-slate-200",
    },
    {
      name: "Profissional",
      price: "167",
      period: "/mês",
      description: "O mais escolhido. Página + ferramentas pra gerar e acompanhar contatos.",
      features: [
        "Tudo do plano Essencial",
        "Galeria de fotos profissional",
        "Formulário com captura de contatos",
        "Resumo mensal de contatos gerados via WhatsApp",
        "Cadastro no Google Meu Negócio",
        "2 ajustes de conteúdo por mês",
      ],
      cta: "Escolher Profissional",
      popular: true,
      color: "border-brand-600",
    },
    {
      name: "Avançado",
      price: "267",
      period: "/mês",
      description: "Para quem quer mais páginas e prioridade no suporte.",
      features: [
        "Tudo do plano Profissional",
        "Até 3 páginas de conteúdo",
        "Blog integrado simples",
        "Link na bio personalizado",
        "Suporte prioritário",
        "Relatório mensal completo de contatos e desempenho da página",
      ],
      cta: "Escolher Avançado",
      popular: false,
      color: "border-slate-200",
    },
  ];

  return (
    <section id="planos" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <span className="inline-block text-sm font-semibold text-brand-700 uppercase tracking-wider mb-3">
            Assinatura mensal
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900">
            Planos que cabem no seu <span className="text-brand-700">bolso</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Sua página, hospedagem e manutenção em uma assinatura só. Sem
            contrato de fidelidade — cancele quando quiser.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`animate-on-scroll relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 ${plan.color} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular ? "md:-translate-y-2 md:scale-105" : ""
              }`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-brand text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                  ⭐ Mais escolhido
                </div>
              )}

              <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1">
                {plan.name}
              </h3>
              <p className="text-sm text-slate-500 mb-4">{plan.description}</p>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-slate-500">R$</span>
                  <span className="text-4xl sm:text-5xl font-extrabold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="text-sm text-slate-500">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4.5 h-4.5 text-growth-500 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <WhatsAppLink
                href={`https://wa.me/555494058603?text=Olá! Tenho interesse no plano ${plan.name}.`}
                origem="planos"
                extra={{ plano: plan.name }}
                className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all ${
                  plan.popular
                    ? "gradient-cta text-white shadow-md hover:shadow-lg hover:scale-[1.02]"
                    : "bg-brand-50 text-brand-700 hover:bg-brand-100"
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                {plan.cta}
              </WhatsAppLink>
            </div>
          ))}
        </div>

        <p className="mt-8 sm:mt-10 text-center text-sm text-slate-500 max-w-2xl mx-auto">
          Domínio próprio (ex.: suaclinica.com.br): registramos e cuidamos
          pra você, ou te orientamos a registrar no seu nome — o que preferir.
        </p>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  CTA WHATSAPP                                                             */
/* ────────────────────────────────────────────────────────────────────────── */
function CTAWhatsApp() {
  return (
    <section className="py-16 sm:py-24 gradient-dark-inst relative overflow-hidden">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-on-scroll">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4 sm:mb-6">
            Pronto para ser encontrado por{" "}
            <span className="text-cta-400">novos clientes?</span>
          </h2>
          <p className="text-base sm:text-lg text-brand-100 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            A gente cuida da tecnologia, você cuida do seu negócio. Fale com a gente
            agora pelo WhatsApp e tenha sua página pronta em até 48 horas.
          </p>

          <WhatsAppLink
            href="https://wa.me/555494058603?text=Olá! Quero colocar meu negócio na internet."
            origem="footer_cta"
            className="inline-flex items-center gap-3 gradient-cta text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.03] text-base sm:text-lg animate-bounce-gentle"
          >
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
            Falar com a OCTO agora
          </WhatsAppLink>

          <p className="mt-6 text-sm text-brand-200 flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            Resposta em até 2 horas úteis
          </p>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  FOOTER                                                                   */
/* ────────────────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center p-1">
              <Image src="/octo-logo.webp" alt="OCTO" width={32} height={32} className="w-full h-full object-contain" />
            </div>
            <span className="text-lg font-bold text-white">
              OCTO <span className="text-brand-200">Páginas</span>
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href="#como-funciona" className="hover:text-white transition-colors">
              Como Funciona
            </a>
            <a href="#por-que" className="hover:text-white transition-colors">
              Por que ter uma página
            </a>
            <a href="#exemplos" className="hover:text-white transition-colors">
              Exemplos
            </a>
            <a href="#planos" className="hover:text-white transition-colors">
              Planos
            </a>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm">
          <p>© {new Date().getFullYear()} OCTO Páginas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  PAGE                                                                     */
/* ────────────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <OctoSchema />
      <ScrollAnimations />
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ComoFunciona />
        <PorQueVocePrecisa />
        <VitrineExemplos />
        <Planos />
        <CTAWhatsApp />
      </main>
      <Footer />
    </>
  );
}
