import type { MetadataRoute } from "next";

const baseUrl = "https://octopaginas.com.br";

/**
 * Só as páginas que devem ser indexadas. As demos (/…/layout-*) ficam de
 * fora: são estabelecimentos fictícios, marcados noindex nos seus layouts.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    "",
    "/odontologia",
    "/esteticas",
    "/oficinas",
    "/padarias",
    "/gerador",
    "/privacidade",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
