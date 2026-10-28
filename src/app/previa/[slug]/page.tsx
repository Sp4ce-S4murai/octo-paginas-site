import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Info,
  Stethoscope,
} from "lucide-react";
import { PREVIAS, getPrevia } from "@/lib/previas";
import WhatsAppLink from "@/components/WhatsAppLink";
import ScrollAnimations from "@/components/ScrollAnimations";

export function generateStaticParams() {
  return PREVIAS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPrevia(slug);
  if (!p) return {};
  const title = `Prévia — ${p.nome} | OCTO Páginas`;
  const description = `Página de demonstração feita pela OCTO Páginas para ${p.nome}. Não é o site oficial da clínica.`;
  return {
    title,
    description,
    // openGraph do layout raiz não é herdado campo a campo: sem isto o
    // WhatsApp mostra o título genérico da home e a imagem errada.
    openGraph: {
      title,
      description,
      type: "website",
      locale: "pt_BR",
      images: [
        {
          url: "https://www.octopaginas.com.br/images/og-previa-quadrado.jpg",
          width: 1000,
          height: 1000,
          alt: "Prévia de página — OCTO Páginas",
        },
      ],
    },
  };
}

export default async function PreviaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = getPrevia(slug);
  if (!p) notFound();

  const waAgendar = `https://wa.me/${p.whatsapp}?text=${encodeURIComponent(
    "Olá! Gostaria de agendar uma consulta."
  )}`;
  const waOcto = `https://wa.me/555494058603?text=${encodeURIComponent(
    `Olá! Vi a prévia da ${p.nome}.`
  )}`;

  return (
    <>
      <ScrollAnimations />

      {/* Faixa de prévia — fixa no topo, não sai daqui.
          É o que impede a página de ser confundida com o site oficial. */}
      <div className="sticky top-0 z-50 bg-slate-900 text-white text-xs sm:text-sm">
        <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-orange-700 text-white font-bold px-2.5 py-1 rounded-full text-[11px] shrink-0">
            <Info className="w-3 h-3" />
            PRÉVIA
          </span>
          <span className="text-white/80">
            Página de demonstração feita pela{" "}
            <Link href="/" className="underline underline-offset-2 hover:text-white">
              OCTO Páginas
            </Link>{" "}
            para {p.nome}. Não é o site oficial da clínica.
          </span>
        </div>
      </div>

      <main className="flex-1 bg-white">
        {/* HERO */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/clinic-interior.webp"
              alt=""
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/65 to-slate-900/30" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28 w-full">
            <span className="inline-flex items-center gap-1.5 text-ocean-200 text-sm font-medium mb-4">
              <Stethoscope className="w-4 h-4" />
              {p.cidade} — {p.uf}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-2xl">
              {p.headline}
            </h1>

            <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed max-w-xl">
              {p.subheadline}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <WhatsAppLink
                href={waAgendar}
                origem="previa_hero"
                extra={{ clinica: p.slug }}
                className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-8 py-4 rounded-2xl shadow-lg transition-all hover:scale-[1.02] text-base"
              >
                <MessageSquare className="w-5 h-5" />
                Agendar pelo WhatsApp
              </WhatsAppLink>
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white/20 transition-all text-base border border-white/20"
              >
                Endereço e horários
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {p.cidade}, {p.uf}
              </span>
              <span className="inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                {p.telefone}
              </span>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="animate-on-scroll">
              <span className="inline-block text-sm font-semibold text-ocean-500 uppercase tracking-wider mb-3">
                Serviços
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                O que a clínica atende
              </h2>
              <p className="mt-3 text-sm text-slate-500 max-w-2xl">
                Lista de exemplo. Na versão final entram exatamente as
                especialidades que a {p.nome} atende.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {p.servicos.map((s) => (
                <div
                  key={s.titulo}
                  className="animate-on-scroll rounded-2xl border border-slate-200 bg-white p-5 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-slate-900">{s.titulo}</h3>
                  <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">
                    {s.descricao}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO / NAP */}
        <section id="contato" className="py-16 sm:py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="animate-on-scroll">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  Onde encontrar
                </h2>
                <dl className="mt-6 space-y-4 text-sm">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-ocean-500 shrink-0 mt-0.5" />
                    <div>
                      <dt className="font-semibold text-slate-900">Endereço</dt>
                      <dd className="text-slate-600 mt-0.5">{p.endereco}</dd>
                      {p.mapsUrl && (
                        <a
                          href={p.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-1 text-ocean-600 hover:text-ocean-700 font-medium"
                        >
                          Ver no Google Maps
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-ocean-500 shrink-0 mt-0.5" />
                    <div>
                      <dt className="font-semibold text-slate-900">Telefone</dt>
                      <dd className="text-slate-600 mt-0.5">{p.telefone}</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-ocean-500 shrink-0 mt-0.5" />
                    <div>
                      <dt className="font-semibold text-slate-900">Horários</dt>
                      <dd className="text-slate-500 mt-0.5 italic">
                        A confirmar com a clínica
                      </dd>
                    </div>
                  </div>
                </dl>

                <WhatsAppLink
                  href={waAgendar}
                  origem="previa_contato"
                  extra={{ clinica: p.slug }}
                  className="mt-8 inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-7 py-3.5 rounded-xl shadow-md transition-all text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Falar no WhatsApp
                </WhatsAppLink>
              </div>

              {/* O que falta — este bloco é conversa OCTO↔clínica, não é
                  conteúdo da página final. */}
              <div className="animate-on-scroll rounded-2xl border-2 border-dashed border-ocean-200 bg-white p-6">
                <h3 className="font-bold text-slate-900 flex items-center gap-2">
                  <Info className="w-4 h-4 text-ocean-500" />
                  O que falta pra publicar
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Montei esta prévia com os dados públicos do Google Maps. Pra
                  ficar no ar de verdade, preciso de:
                </p>
                <ul className="mt-4 space-y-2">
                  {p.aConfirmar.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-slate-700">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cta-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <WhatsAppLink
                  href={waOcto}
                  origem="previa_falar_octo"
                  extra={{ clinica: p.slug }}
                  className="mt-6 inline-flex items-center justify-center gap-2 gradient-cta text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all text-sm w-full"
                >
                  <MessageSquare className="w-4 h-4" />
                  Falar com a OCTO
                </WhatsAppLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-sm">
          <p className="text-slate-300 font-medium">{p.nome}</p>
          <p className="text-xs text-slate-400 mt-1">
            Responsável técnico: Dr(a). [Nome] — CRO-{p.uf} [00000]
          </p>
          <p className="text-xs text-slate-400 mt-4">
            Prévia sem caráter publicitário, feita por{" "}
            <Link href="/" className="text-ocean-200 hover:text-white">
              OCTO Páginas
            </Link>
            . Conteúdo não aprovado pela clínica. Página fora do índice de
            buscadores.
          </p>
        </div>
      </footer>
    </>
  );
}
