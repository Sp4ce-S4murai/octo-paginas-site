import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Star,
  Heart,
  Shield,
  Smile,
  Baby,
  Sparkles,
  Quote,
  Users,
  Award,
  ThumbsUp,
  ChevronLeft,
} from "lucide-react";
import ScrollAnimations from "@/components/ScrollAnimations";
import WhatsAppLink from "@/components/WhatsAppLink";

/* ─── Dados ───
   Estes são depoimentos de EXEMPLO para ilustrar o layout. Ao fechar com uma
   clínica real, substituir por depoimentos verídicos e autorizados pelo
   paciente (ou remover a seção), evitando qualquer promessa de resultado. */
const depoimentos = [
  {
    nome: "Paciente da clínica",
    texto: "Fui muito bem recebido, a equipe explicou cada etapa do tratamento com calma e paciência.",
    estrelas: 5,
    tratamento: "Clareamento dental (exemplo)",
  },
  {
    nome: "Paciente da clínica",
    texto: "Levei meus filhos pela primeira vez e eles se sentiram à vontade. Ambiente agradável e equipe atenciosa com crianças.",
    estrelas: 5,
    tratamento: "Odontopediatria (exemplo)",
  },
  {
    nome: "Paciente da clínica",
    texto: "Tinha receio de voltar ao dentista, mas o atendimento foi cuidadoso do início ao fim.",
    estrelas: 5,
    tratamento: "Tratamento de canal (exemplo)",
  },
  {
    nome: "Paciente da clínica",
    texto: "Equipe atenciosa em todas as etapas do meu tratamento de implante.",
    estrelas: 5,
    tratamento: "Implante dentário (exemplo)",
  },
];

const servicos = [
  {
    icon: Smile,
    titulo: "Clareamento",
    descricao: "Clareamento com avaliação prévia e acompanhamento do dentista.",
  },
  {
    icon: Shield,
    titulo: "Limpeza e Prevenção",
    descricao: "Cuidados regulares para manter sua saúde bucal em dia.",
  },
  {
    icon: Heart,
    titulo: "Estética Dental",
    descricao: "Lentes de contato, facetas e restaurações que realçam seu sorriso.",
  },
  {
    icon: Baby,
    titulo: "Odontopediatria",
    descricao: "Atendimento pensado para crianças, com tempo para adaptação.",
  },
  {
    icon: Award,
    titulo: "Ortodontia",
    descricao: "Aparelhos fixos e invisíveis para alinhar seus dentes.",
  },
  {
    icon: Sparkles,
    titulo: "Implantes",
    descricao: "Reposição de dentes perdidos com implantes, após avaliação.",
  },
];

/* ─── Componentes ─── */

function WhatsAppFloat() {
  return (
    <WhatsAppLink
      href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta."
      origem="demo_acolhimento_float"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white font-bold pl-5 pr-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-105 animate-bounce-gentle"
      aria-label="Agendar pelo WhatsApp"
    >
      <MessageSquare className="w-5 h-5" />
      <span className="hidden sm:inline text-sm">Agendar consulta</span>
    </WhatsAppLink>
  );
}

function HeroAcolhimento() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/dental-team.webp"
          alt="Equipe da Clínica Sorriso & Saúde"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
      </div>

      {/* Back link */}
      <Link
        href="/odontologia"
        className="absolute top-6 left-6 z-20 flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors bg-white/10 border border-white/25 backdrop-blur-md rounded-full px-4 py-2"
      >
        <ChevronLeft className="w-4 h-4" />
        Voltar
      </Link>

      {/* Badge */}
      <div className="absolute top-6 right-6 z-20">
        <span className="inline-flex items-center gap-1.5 bg-orange-700 text-white text-xs font-bold px-3 py-1.5 rounded-full">
          <Sparkles className="w-3 h-3" />
          Exemplo de Layout
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-warm-400 fill-warm-400" />
            ))}
            <span className="text-white/80 text-sm ml-1">[Nota] no Google</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Seu sorriso merece um{" "}
            <span className="text-cta-400">cuidado especial</span>
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
            Na Clínica Sorriso & Saúde, cada paciente é tratado com carinho,
            atenção e profissionalismo. Venha conhecer nosso espaço acolhedor e
            descubra como é bom cuidar do seu sorriso.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
            <WhatsAppLink
              href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma consulta na Clínica Sorriso."
              origem="demo_acolhimento_hero"
              className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-base sm:text-lg"
            >
              <MessageSquare className="w-5 h-5" />
              Agendar minha consulta
            </WhatsAppLink>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/25 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all text-base sm:text-lg"
            >
              Conhecer a clínica
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Av. Exemplo, 123 — Centro
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Seg a Sex • 8h às 18h
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SobreClinica() {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-on-scroll relative rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/clinic-interior.webp"
              alt="Interior acolhedor da clínica"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-4 left-4 glass rounded-xl px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-800">
                <Heart className="w-4 h-4 text-rose-500" />
                Ambiente pensado para seu conforto
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="animate-on-scroll">
            <span className="inline-block text-sm font-semibold text-ocean-500 uppercase tracking-wider mb-3">
              Por que escolher a gente
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Cuidamos do seu sorriso como cuidaríamos{" "}
              <span className="text-gradient-ocean">da nossa família</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-slate-600 leading-relaxed text-sm sm:text-base">
              Há [Nº] anos em [Cidade], a Clínica Sorriso & Saúde atende com hora
              marcada e explica cada etapa antes de começar. O espaço foi pensado
              para que você fique à vontade, da recepção ao consultório.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { icon: Users, label: "[Nº]", sublabel: "Pacientes atendidos" },
                { icon: Award, label: "[Nº]+", sublabel: "Anos de experiência" },
                { icon: ThumbsUp, label: "[Nota]", sublabel: "Avaliação Google" },
                { icon: Heart, label: "✓", sublabel: "Ambiente acolhedor" },
              ].map((stat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-ocean-50 text-ocean-500 flex items-center justify-center shrink-0">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xl font-bold text-slate-800">
                      {stat.label}
                    </div>
                    <div className="text-xs text-slate-500">{stat.sublabel}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicosSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <span className="inline-block text-sm font-semibold text-ocean-500 uppercase tracking-wider mb-3">
            Nossos tratamentos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Cuidados completos para{" "}
            <span className="text-gradient-ocean">toda a família</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((servico, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 group hover:-translate-y-1"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-ocean-50 text-ocean-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <servico.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                {servico.titulo}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {servico.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Depoimentos() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <span className="inline-block text-sm font-semibold text-ocean-500 uppercase tracking-wider mb-3">
            O que nossos pacientes dizem
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Experiências de quem{" "}
            <span className="text-gradient-ocean">passou pela clínica</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {depoimentos.map((dep, i) => (
            <div
              key={i}
              className="animate-on-scroll bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 relative"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-ocean-100 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(dep.estrelas)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-warm-400 fill-warm-400" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base mb-5 italic">
                &ldquo;{dep.texto}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-slate-800 text-sm">
                    {dep.nome}
                  </div>
                  <div className="text-xs text-slate-500">{dep.tratamento}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-ocean-500 to-ocean-600 flex items-center justify-center text-white font-bold text-sm">
                  {dep.nome.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AmbienteGaleria() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <span className="inline-block text-sm font-semibold text-ocean-500 uppercase tracking-wider mb-3">
            Conheça nosso espaço
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Um ambiente feito para{" "}
            <span className="text-gradient-ocean">seu bem-estar</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Nossa clínica foi projetada pensando no seu conforto. Cada detalhe,
            da recepção ao consultório, transmite acolhimento e tranquilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              src: "/images/clinic-interior.webp",
              alt: "Recepção acolhedora",
              label: "Recepção",
            },
            {
              src: "/images/dental-team.webp",
              alt: "Nossa equipe",
              label: "Equipe",
            },
            {
              src: "/images/dentist-treating.webp",
              alt: "Consultório moderno",
              label: "Consultório",
            },
          ].map((img, i) => (
            <div
              key={i}
              className="animate-on-scroll relative group rounded-2xl overflow-hidden shadow-lg"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 text-white font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTAFinal() {
  return (
    <section className="py-16 sm:py-24 gradient-hero-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-ocean-500/10 rounded-full blur-3xl" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-on-scroll">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Agende sua consulta e descubra como é bom{" "}
            <span className="text-cta-400">sorrir com confiança</span>
          </h2>
          <p className="text-ocean-100 mb-8 sm:mb-10 text-sm sm:text-base max-w-2xl mx-auto">
            Nossa equipe está pronta para cuidar do seu sorriso com todo o
            carinho que você merece.
          </p>
          <WhatsAppLink
            href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação na Clínica Sorriso."
            origem="demo_acolhimento_footer"
            className="inline-flex items-center gap-3 bg-green-700 hover:bg-green-800 text-white font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all hover:scale-[1.03] text-base sm:text-lg"
          >
            <MessageSquare className="w-5 h-5" />
            Agendar avaliação
          </WhatsAppLink>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-ocean-200">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              (11) 99999-9999
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Av. Exemplo, 123 — Centro
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterClinica() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <div>
            <p>© {new Date().getFullYear()} Clínica Sorriso & Saúde</p>
            <p className="text-xs text-slate-400 mt-1">
              Responsável técnico: Dr(a). [Nome] — CRO-[UF] [00000]
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            Página criada por{" "}
            <Link href="/" className="text-ocean-200 hover:text-white font-medium transition-colors">
              OCTO Páginas
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function LayoutAcolhimentoPage() {
  return (
    <>
      <ScrollAnimations />
      <HeroAcolhimento />
      <SobreClinica />
      <ServicosSection />
      <Depoimentos />
      <AmbienteGaleria />
      <CTAFinal />
      <FooterClinica />
      <WhatsAppFloat />
    </>
  );
}
