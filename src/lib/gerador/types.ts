export type ModelId = "letreiro" | "cartao" | "bloco" | "palco" | "comanda";
export type PlanoId = "mensal" | "unico";

/** Estado cru do formulário (textareas ficam como texto). */
export interface FormState {
  nome: string;
  ramo: string;
  cidade: string;
  frase: string;
  sobre: string;
  servicos: string; // um por linha
  horario: string; // um por linha
  endereco: string;
  whatsapp: string;
  telefone: string;
  instagram: string;
}

/** Dados já limpos, prontos para os layouts. */
export interface SiteData {
  nome: string;
  ramo: string;
  cidade: string;
  frase: string;
  sobre: string;
  servicos: string[];
  horario: string[];
  endereco: string;
  whatsapp: string;
  telefone: string;
  instagram: string;
}

export interface LinkProps {
  href: string;
  onClick?: (e: React.MouseEvent) => void;
  target?: string;
  rel?: string;
}

export interface Links {
  whatsapp?: LinkProps;
  telefone?: LinkProps;
  instagram?: LinkProps;
  mapa?: LinkProps;
}

export interface LayoutProps {
  d: SiteData;
  links: Links;
  standalone: boolean;
}

export const LIMITES = {
  nome: 60,
  ramo: 50,
  cidade: 50,
  frase: 120,
  sobre: 400,
  servico: 60,
  servicos: 10,
  horario: 60,
  horarios: 6,
  endereco: 120,
  telefone: 20,
  instagram: 30,
} as const;
