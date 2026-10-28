import type { ReactElement } from "react";

/**
 * Dados estruturados da própria OCTO (Organization + WebSite).
 * Só informação verificável: nome, site, logo, área de atuação e o
 * WhatsApp que já está público no site.
 */
export default function OctoSchema(): ReactElement {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://octopaginas.com.br/#organizacao",
        name: "OCTO Páginas",
        url: "https://octopaginas.com.br",
        logo: "https://octopaginas.com.br/octo-logo.webp",
        email: "contato@octopaginas.com.br",
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Rio Grande do Sul, Brasil",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: "+55 54 94058603",
          availableLanguage: ["pt-BR"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://octopaginas.com.br/#site",
        url: "https://octopaginas.com.br",
        name: "OCTO Páginas",
        inLanguage: "pt-BR",
        publisher: { "@id": "https://octopaginas.com.br/#organizacao" },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
