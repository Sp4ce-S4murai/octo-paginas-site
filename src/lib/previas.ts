/**
 * Prévias personalizadas para leads da prospecção.
 *
 * Cada entrada vira uma página em /previa/<slug>, fora do índice do Google.
 * Serve pra mandar no WhatsApp pro lead ver o nome da própria clínica no ar
 * em vez de um layout genérico.
 *
 * REGRA: só entra aqui dado que a gente realmente tem (nome, endereço e
 * telefone vêm do Google Maps, via SCRAPPER/leads.db). O que ainda não foi
 * confirmado com a clínica fica em `aConfirmar` e aparece marcado na página —
 * não inventar horário, especialidade, equipe nem número de anos de mercado.
 */

export type Servico = { titulo: string; descricao: string };

export type Previa = {
  slug: string;
  /** Nome real da clínica, como está no Google Maps. */
  nome: string;
  /** Como chamar a pessoa na conversa. */
  tratamento?: string;
  cidade: string;
  uf: string;
  /** Endereço real, do Maps. */
  endereco: string;
  /** Telefone real, formatado pra exibição. */
  telefone: string;
  /** Só dígitos, com DDI, pro link wa.me. */
  whatsapp: string;
  mapsUrl?: string;
  headline: string;
  subheadline: string;
  servicos: Servico[];
  /** Itens que a clínica precisa confirmar antes de publicar. */
  aConfirmar: string[];
  /** Data do último contato, só pra referência interna. */
  origem: string;
};

/** Serviços genéricos de clínica odontológica — trocar pelos reais na confirmação. */
const SERVICOS_BASE: Servico[] = [
  { titulo: "Clínica geral", descricao: "Consultas de rotina, limpeza e restaurações." },
  { titulo: "Ortodontia", descricao: "Aparelhos fixos e alinhadores para correção do sorriso." },
  { titulo: "Implantes", descricao: "Reposição de dentes perdidos com implantes." },
  { titulo: "Endodontia", descricao: "Tratamento de canal." },
  { titulo: "Odontopediatria", descricao: "Atendimento infantil." },
  { titulo: "Estética dental", descricao: "Clareamento e facetas." },
];

export const PREVIAS: Previa[] = [
  {
    slug: "clinica-exemplo",
    nome: "Clínica Exemplo Odontologia",
    tratamento: "Dra. Ana",
    cidade: "Porto Alegre",
    uf: "RS",
    endereco: "Rua Exemplo, 123 — Centro, Porto Alegre - RS",
    telefone: "(51) 99999-0000",
    whatsapp: "5551999990000",
    headline: "Odontologia em Porto Alegre",
    subheadline:
      "Agendamento direto pelo WhatsApp. Serviços, endereço e horários em um lugar só.",
    servicos: SERVICOS_BASE,
    aConfirmar: ["Lista real de especialidades", "Horário de funcionamento", "Fotos da clínica"],
    origem: "Dado fictício de demonstração",
  },
  // BEGIN:previas-geradas (gerar-previas.py — nao editar a mao)
  // END:previas-geradas
];

export function getPrevia(slug: string): Previa | undefined {
  return PREVIAS.find((p) => p.slug === slug);
}
