# OCTO Páginas

Landing pages de alta conversão para pequenos negócios locais (clínicas odontológicas, estéticas, oficinas, padarias). Projeto da **OCTO-Labs**, no ar em [octopaginas.com.br](https://www.octopaginas.com.br).

## O que tem

- **Páginas por segmento** (`/odontologia`, `/esteticas`, `/oficinas`, `/padarias`), cada uma com dois layouts de demonstração.
- **Gerador de páginas** (`/gerador`): monta uma página a partir de dados do negócio (nome, cores, serviços, contato) e codifica a configuração no link.
- **Prévias personalizadas** (`/previa/[slug]`): página de exemplo com o nome do negócio, fora do índice do Google. Os dados deste repositório são **fictícios**.
- Contato e agendamento por **WhatsApp**, SEO (sitemap, robots, dados estruturados Schema.org) e eventos de rastreamento (Meta Pixel).
- Página de política de privacidade (LGPD).

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS · deploy na Vercel.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Sobre o desenvolvimento

Projeto desenvolvido com apoio de ferramentas de IA (Claude e outras), com decisões de produto, textos, revisão e publicação feitas por mim.
