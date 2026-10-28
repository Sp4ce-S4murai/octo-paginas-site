import type { CSSProperties } from "react";
import { themeVars } from "@/lib/gerador/color";
import { formatPhone, mapsHref, telHref, waHref, igHandle } from "@/lib/gerador/contact";
import { toSiteData } from "@/lib/gerador/data";
import type { FormState, Links, LinkProps, ModelId } from "@/lib/gerador/types";
import { modeloPorId } from "./models";

interface Props {
  form: FormState;
  modelo: ModelId;
  cor: string | null;
  /** Prévia: os botões não fazem nada (evita discar o número de exemplo). */
  preview?: boolean;
  standalone?: boolean;
}

const inert = (e: React.MouseEvent) => e.preventDefault();

export default function SiteView({ form, modelo, cor, preview = true, standalone = false }: Props) {
  const m = modeloPorId(modelo);
  const base = toSiteData(form);
  const d = { ...base, nome: base.nome || "Nome do seu negócio" };
  const mk = (href: string | null, external = false): LinkProps | undefined =>
    href
      ? {
          href,
          onClick: preview ? inert : undefined,
          ...(external && !preview ? { target: "_blank", rel: "noopener noreferrer" } : {}),
        }
      : undefined;

  const msg = `Olá! Vi o site de ${d.nome} e gostaria de falar com vocês.`;
  const ig = igHandle(d.instagram);
  const links: Links = {
    whatsapp: mk(waHref(d.whatsapp, msg), true),
    telefone: mk(telHref(d.telefone || d.whatsapp)),
    instagram: mk(ig ? `https://instagram.com/${ig}` : null, true),
    mapa: mk(mapsHref(d.endereco, d.cidade), true),
  };
  // telefone só aparece se o cliente informou um (não duplica o WhatsApp)
  if (!d.telefone) links.telefone = undefined;
  d.telefone = d.telefone ? formatPhone(d.telefone) : "";

  const style = themeVars(cor ?? m.cor) as unknown as CSSProperties;
  return (
    <div style={style}>
      <m.Layout d={d} links={links} standalone={standalone} />
    </div>
  );
}
