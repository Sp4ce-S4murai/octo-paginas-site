import type { ReactElement } from "react";

export type LocalBusinessData = {
  /** "Dentist" para clínica odontológica; "LocalBusiness" serve de fallback. */
  tipo?: "Dentist" | "BeautySalon" | "AutoRepair" | "Bakery" | "LocalBusiness";
  nome: string;
  descricao?: string;
  /** URL canônica da página do cliente. */
  url: string;
  telefone?: string;
  /** NAP: precisa bater exatamente com Google Business Profile e redes. */
  rua?: string;
  cidade?: string;
  uf?: string;
  cep?: string;
  imagem?: string;
  /** Ex.: ["Mo-Fr 08:00-18:00", "Sa 08:00-12:00"] */
  horarios?: string[];
  precoFaixa?: string;
};

/**
 * Schema.org LocalBusiness/Dentist em JSON-LD — requisito de SEO local do
 * produto. Renderiza no servidor (aparece no HTML inicial, que é o que o
 * crawler lê).
 *
 * NÃO usar com dados fictícios em página indexável: dado estruturado falso
 * é penalizável. Nas demos as páginas estão como noindex justamente por isso.
 */
export default function LocalBusinessSchema({
  tipo = "LocalBusiness",
  nome,
  descricao,
  url,
  telefone,
  rua,
  cidade,
  uf,
  cep,
  imagem,
  horarios,
  precoFaixa,
}: LocalBusinessData): ReactElement {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": tipo,
    name: nome,
    url,
  };

  if (descricao) data.description = descricao;
  if (telefone) data.telephone = telefone;
  if (imagem) data.image = imagem;
  if (precoFaixa) data.priceRange = precoFaixa;
  if (horarios?.length) data.openingHours = horarios;

  if (rua || cidade || uf || cep) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: rua,
      addressLocality: cidade,
      addressRegion: uf,
      postalCode: cep,
      addressCountry: "BR",
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
