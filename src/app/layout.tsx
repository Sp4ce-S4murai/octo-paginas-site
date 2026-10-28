import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// GA4: já criado (propriedade "OctoPaginas" na conta GA "OCTO"), fixo
// como fallback pra nunca ficar sem tracking mesmo se a env var sumir.
const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-31YSCK7HCL";

// Meta Pixel: ainda NÃO existe (não há Business Manager configurado
// pra essa conta). Fica pronto pra ligar assim que o Pedro criar o
// Pixel e colocar o ID nessa env var na Vercel — até lá, não injeta
// nada no site.
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Fraunces: só pro headline do site institucional (page.tsx/SiteHeader) —
// serifada, dá peso de negócio estabelecido em vez de "startup". Páginas
// de nicho e prévias continuam só com Inter, sem mudança.
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://octopaginas.com.br"),
  title: "OCTO Páginas — Sua vitrine 24 horas na internet",
  description:
    "Coloque seu negócio local na internet hoje. Páginas profissionais para clínicas, oficinas, padarias e mais. Seja encontrado no Google e receba mais orçamentos.",
  keywords: [
    "landing page",
    "negócio local",
    "página profissional",
    "ser encontrado no Google",
    "vitrine online",
  ],
  openGraph: {
    title: "OCTO Páginas — Sua vitrine 24 horas na internet",
    description:
      "Páginas profissionais para negócios locais. Seja encontrado e receba mais clientes.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${fraunces.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}

        {/*
          Rastreamento em duas partes (11/09/2026):
          1. Fila local (inline, sem rede): cria dataLayer/gtag e fbq já no
             início, então pageview e cliques em CTA ficam enfileirados
             mesmo antes das bibliotecas chegarem.
          2. Bibliotecas (gtag.js ~168 KiB, fbevents.js ~195 KiB) com
             lazyOnload: só baixam depois do load da página. O PSI mostrou
             que eram 4 das 5 tarefas longas e todo o "JS não usado".
          Custo: quem sai antes do load não chega a ser contado.
        */}
        <Script id="tracking-queue" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function(){dataLayer.push(arguments);};
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            ${
              META_PIXEL_ID
                ? `if(!window.fbq){var n=window.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!window._fbq)window._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];}
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');`
                : ""
            }
          `}
        </Script>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="lazyOnload"
        />
        {META_PIXEL_ID && (
          <Script src="https://connect.facebook.net/en_US/fbevents.js" strategy="lazyOnload" />
        )}
      </body>
    </html>
  );
}
