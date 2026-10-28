import type { ComponentType } from "react";
import type { LayoutProps, ModelId } from "@/lib/gerador/types";
import Letreiro from "./layouts/Letreiro";
import Cartao from "./layouts/Cartao";
import Bloco from "./layouts/Bloco";
import Palco from "./layouts/Palco";
import Comanda from "./layouts/Comanda";

export interface Modelo {
  id: ModelId;
  nome: string;
  resumo: string;
  cor: string; // cor padrão do modelo
  Layout: ComponentType<LayoutProps>;
}

export const MODELOS: Modelo[] = [
  { id: "letreiro", nome: "Letreiro", resumo: "Toldo listrado e placa, como a fachada de uma loja de bairro.", cor: "#b4232a", Layout: Letreiro },
  { id: "cartao", nome: "Cartão", resumo: "Uma coluna de botões grandes, no estilo de link do Instagram.", cor: "#2f6df6", Layout: Cartao },
  { id: "bloco", nome: "Bloco", resumo: "Cor chapada, letras enormes e bordas grossas. Chama atenção.", cor: "#ffd23f", Layout: Bloco },
  { id: "palco", nome: "Palco", resumo: "Tela dividida: o nome grande de um lado, a lista do outro.", cor: "#0f6b5c", Layout: Palco },
  { id: "comanda", nome: "Comanda", resumo: "Em forma de cupom, com lista de serviços pontilhada.", cor: "#5b3fd0", Layout: Comanda },
];

export const modeloPorId = (id: ModelId) => MODELOS.find((m) => m.id === id) ?? MODELOS[0];

export const CORES = [
  "#b4232a", "#2f6df6", "#ffd23f", "#0f6b5c", "#5b3fd0", "#e0701a", "#111111", "#d6336c",
] as const;
