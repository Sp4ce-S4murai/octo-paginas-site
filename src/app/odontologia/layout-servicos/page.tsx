import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Shield,
  Sparkles,
  ChevronLeft,
  Stethoscope,
  Zap,
  SmilePlus,
  CircleDot,
  AlertTriangle,
  Building2,
  CalendarCheck,
  ArrowRight,
} from "lucide-react";
import ScrollAnimations from "@/components/ScrollAnimations";
import WhatsAppLink from "@/components/WhatsAppLink";
import FormularioWhatsApp from "@/components/demo/FormularioWhatsApp";

/* ─── Dados ─── */
const especialidades = [
  {
    icon: SmilePlus,
    titulo: "Clareamento Dental",
    descricao:
      "Clareamento com avaliação prévia e acompanhamento do dentista.",
    destaque: "Com avaliação prévia",
    color: "bg-amber-50 text-amber-500 border-amber-100",
  },
  {
    icon: CircleDot,
    titulo: "Ortodontia",
    descricao:
      "Aparelhos fixos, autoligados e alinhadores invisíveis. Plano de tratamento personalizado para cada paciente.",
    destaque: "Alinhadores invisíveis",
    color: "bg-ocean-50 text-ocean-500 border-ocean-100",
  },
  {
    icon: Stethoscope,
    titulo: "Implantes Dentários",
    descricao:
      "Reposição de dentes perdidos com implantes, com planejamento feito a partir de exames de imagem.",
    destaque: "Planejamento digital",
    color: "bg-growth-50 text-growth-500 border-growth-100",
  },
  {
    icon: AlertTriangle,
    titulo: "Urgência 24h",
    descricao:
      "Dor de dente, dente quebrado ou emergência? Atendemos urgências com prioridade. Ligue agora mesmo.",
    destaque: "Prioridade na agenda",
    color: "bg-red-50 text-red-500 border-red-100",
  },
];

const convenios = [
  "Amil Dental",
  "Bradesco Saúde",
  "SulAmérica",
  "Unimed Odonto",
  "Porto Seguro",
  "MetLife",
  "OdontoPrev",
  "Hapvida",
  "NotreDame",
  "Golden Cross",
  "Interodonto",
  "DentalUni",
];

const horarios = [
  { dia: "Segunda a Sexta", horario: "8h às 20h" },
  { dia: "Sábado", horario: "8h às 14h" },
  { dia: "Domingo e Feriados", horario: "Fechado" },
  { dia: "Urgências", horario: "24 horas" },
];

/* ─── Componentes ─── */

function HeroServicos() {
  return (
    <section className="relative pt-20 sm:pt-28 pb-16 sm:pb-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/dentist-treating.webp"
          alt="Dentista realizando tratamento"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/75 to-slate-900/50" />
      </div>

      {/* Nav */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12 sm:mb-16">
          <Link
            href="/odontologia"
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors bg-white/10 border border-white/25 backdrop-blur-md rounded-full px-4 py-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Voltar
          </Link>
          <span className="inline-flex items-center gap-1.5 bg-orange-700 text-white text-xs font-bold px-3 py-1.5 rounded-full">
            <Sparkles className="w-3 h-3" />
            Exemplo de Layout
          </span>
        </div>

        {/* Content */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Da urgência ao tratamento planejado,{" "}
            <span className="text-cta-400">na mesma clínica</span>
          </h1>

          <p className="mt-5 sm:mt-6 text-base sm:text-lg text-white/85 leading-relaxed max-w-2xl">
            Clínica OdontoVida: clareamento, ortodontia, implantes e
            urgências. Horário estendido durante a semana e convênios
            aceitos.
          </p>

          {/* Quick Actions */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#agendamento"
              className="inline-flex items-center justify-center gap-2 gradient-cta text-white font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] text-base sm:text-lg"
            >
              <CalendarCheck className="w-5 h-5" />
              Agendar consulta
            </a>
            <a
              href="tel:+5511999999999"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/25 backdrop-blur-md text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all text-base sm:text-lg"
            >
              <Phone className="w-5 h-5" />
              (11) 99999-9999
            </a>
          </div>

          {/* Quick Info Bar */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Clock, text: "Seg-Sex 8h-20h" },
              { icon: MapPin, text: "Av. Exemplo, 456" },
              { icon: Shield, text: "12+ Convênios" },
              { icon: Zap, text: "Urgência 24h" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                <item.icon className="w-4 h-4 shrink-0" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GridEspecialidades() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-on-scroll">
          <span className="inline-block text-sm font-semibold text-ocean-500 uppercase tracking-wider mb-3">
            Especialidades
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Tratamentos para{" "}
            <span className="text-gradient-ocean">cada necessidade</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Oferecemos uma gama completa de serviços odontológicos. Encontre o
            tratamento ideal para você.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {especialidades.map((esp, i) => (
            <div
              key={i}
              className={`animate-on-scroll bg-white rounded-2xl p-6 sm:p-8 shadow-lg border-2 ${esp.color.split(" ")[2]} hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl ${esp.color.split(" ").slice(0, 2).join(" ")} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <esp.icon className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-800">
                      {esp.titulo}
                    </h3>
                    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${esp.color.split(" ").slice(0, 2).join(" ")} border ${esp.color.split(" ")[2]}`}>
                      {esp.destaque}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {esp.descricao}
                  </p>
                  <WhatsAppLink
                    href={`https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o tratamento de ${esp.titulo}.`}
                    origem="demo_servicos_card"
                    extra={{ servico: esp.titulo }}
                    className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-ocean-500 hover:text-ocean-600 transition-colors"
                  >
                    Saiba mais <ArrowRight className="w-3.5 h-3.5" />
                  </WhatsAppLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConveniosSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
          <span className="inline-block text-sm font-semibold text-ocean-500 uppercase tracking-wider mb-3">
            Convênios aceitos
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Aceitamos os{" "}
            <span className="text-gradient-ocean">principais convênios</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Consulte abaixo se o seu convênio está na lista. Se não encontrar, entre em contato — estamos sempre ampliando nossas parcerias.
          </p>
        </div>

        <div className="animate-on-scroll grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {convenios.map((conv, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 flex items-center justify-center text-center hover:shadow-md hover:border-ocean-200 transition-all duration-200"
            >
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-ocean-500 shrink-0" />
                <span className="text-sm font-medium text-slate-700">{conv}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-6 text-sm text-slate-500">
          Não encontrou o seu?{" "}
          <WhatsAppLink
            href="https://wa.me/5511999999999?text=Olá! Quero saber se vocês aceitam meu convênio."
            origem="demo_servicos_convenio"
            className="text-ocean-500 hover:text-ocean-600 font-medium underline"
          >
            Consulte-nos pelo WhatsApp
          </WhatsAppLink>
        </p>
      </div>
    </section>
  );
}

function HorarioMapa() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 animate-on-scroll">
          <span className="inline-block text-sm font-semibold text-ocean-500 uppercase tracking-wider mb-3">
            Localização e horários
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Fácil de <span className="text-gradient-ocean">encontrar</span>,
            fácil de <span className="text-gradient-ocean">chegar</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Horários */}
          <div className="animate-on-scroll bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100">
            <h3 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-ocean-500" />
              Horário de Funcionamento
            </h3>

            <div className="space-y-4">
              {horarios.map((h, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between py-3 px-4 rounded-xl ${
                    i === 3
                      ? "bg-red-50 border border-red-100"
                      : "bg-white border border-slate-100"
                  }`}
                >
                  <span className="font-medium text-slate-700 text-sm">{h.dia}</span>
                  <span
                    className={`font-semibold text-sm ${
                      i === 2
                        ? "text-slate-400"
                        : i === 3
                        ? "text-red-500"
                        : "text-ocean-600"
                    }`}
                  >
                    {h.horario}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-ocean-50 rounded-xl border border-ocean-100">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-ocean-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800 text-sm">
                    Av. Exemplo, 456 — Sala 201
                  </p>
                  <p className="text-slate-600 text-xs mt-1">
                    Centro, Cidade — UF • CEP 00000-000
                  </p>
                  <p className="text-slate-500 text-xs mt-1">
                    Próximo ao Metrô • Estacionamento no local
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mapa — placeholder ilustrativo. No projeto real, entra o embed
              do endereço verdadeiro da clínica. */}
          <div className="animate-on-scroll rounded-2xl overflow-hidden shadow-lg border border-slate-200 h-[400px] lg:h-auto bg-slate-100 flex flex-col items-center justify-center gap-2 text-slate-400">
            <MapPin className="w-10 h-10" />
            <span className="text-sm font-medium">Mapa de exemplo</span>
            <span className="text-xs">(o endereço real da clínica entra aqui)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormularioAgendamento() {
  return (
    <section id="agendamento" className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div className="animate-on-scroll">
            <span className="inline-block text-sm font-semibold text-ocean-600 uppercase tracking-wider mb-3">
              Agende sua consulta
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              Monte sua mensagem e{" "}
              <span className="text-gradient-ocean">envie pelo WhatsApp</span>
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              A recepção responde pelo WhatsApp no horário de funcionamento. Se
              preferir, ligue.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: Phone, label: "Telefone", value: "(11) 99999-9999" },
                { icon: MessageSquare, label: "WhatsApp", value: "(11) 99999-9999" },
                { icon: MapPin, label: "Endereço", value: "Av. Exemplo, 456 — Centro" },
                { icon: Clock, label: "Funcionamento", value: "Seg-Sex 8h-20h • Sáb 8h-14h" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-ocean-50 text-ocean-500 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{item.label}</div>
                    <div className="text-sm font-medium text-slate-700">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form: abre o WhatsApp com a mensagem pronta, nada vai pro servidor */}
          <div className="animate-on-scroll">
            <FormularioWhatsApp
              whatsapp="5511999999999"
              nomeClinica="Clínica OdontoVida"
              tratamentos={["Clareamento", "Ortodontia", "Implante", "Urgência", "Limpeza e prevenção"]}
              origem="demo_servicos_formulario"
            />
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
            <p>© {new Date().getFullYear()} Clínica OdontoVida</p>
            <p className="text-xs text-slate-400 mt-1">
              Responsável técnico: Dr(a). [Nome] — CRO-[UF] [00000]
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-400">
            Página criada por{" "}
            <Link
              href="/"
              className="text-ocean-200 hover:text-white font-medium transition-colors"
            >
              OCTO Páginas
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function LayoutServicosPage() {
  return (
    <>
      <ScrollAnimations />
      <HeroServicos />
      <GridEspecialidades />
      <ConveniosSection />
      <HorarioMapa />
      <FormularioAgendamento />
      <FooterClinica />
    </>
  );
}
