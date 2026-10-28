import { FormState, LIMITES, SiteData, ModelId } from "./types";

export const MODELO_IDS: ModelId[] = ["letreiro", "cartao", "bloco", "palco", "comanda"];

export const EXEMPLO: FormState = {
  nome: "Studio Exemplo",
  ramo: "Salão de beleza",
  cidade: "Sua cidade",
  frase: "",
  sobre:
    "Atendimento com hora marcada, em ambiente tranquilo. Troque este texto por uma ou duas frases sobre o seu negócio.",
  servicos: "Corte\nColoração\nEscova\nManicure\nHidratação",
  horario: "Seg a sex, 9h às 19h\nSábado, 9h às 14h",
  endereco: "Rua Exemplo, 123 - Centro",
  whatsapp: "(54) 99999-9999",
  telefone: "",
  instagram: "",
};

export const VAZIO: FormState = {
  nome: "",
  ramo: "",
  cidade: "",
  frase: "",
  sobre: "",
  servicos: "",
  horario: "",
  endereco: "",
  whatsapp: "",
  telefone: "",
  instagram: "",
};

const linhas = (txt: string, max: number, len: number) =>
  txt
    .split("\n")
    .map((l) => l.trim().slice(0, len))
    .filter(Boolean)
    .slice(0, max);

export function toSiteData(f: FormState): SiteData {
  return {
    nome: f.nome.trim().slice(0, LIMITES.nome),
    ramo: f.ramo.trim().slice(0, LIMITES.ramo),
    cidade: f.cidade.trim().slice(0, LIMITES.cidade),
    frase: f.frase.trim().slice(0, LIMITES.frase),
    sobre: f.sobre.trim().slice(0, LIMITES.sobre),
    servicos: linhas(f.servicos, LIMITES.servicos, LIMITES.servico),
    horario: linhas(f.horario, LIMITES.horarios, LIMITES.horario),
    endereco: f.endereco.trim().slice(0, LIMITES.endereco),
    whatsapp: f.whatsapp.trim().slice(0, LIMITES.telefone),
    telefone: f.telefone.trim().slice(0, LIMITES.telefone),
    instagram: f.instagram.trim().slice(0, LIMITES.instagram),
  };
}
