import { igHandle, subtitulo } from "@/lib/gerador/contact";
import type { LayoutProps } from "@/lib/gerador/types";
import { A, levels } from "./shared";
import s from "./Bloco.module.css";

/** Bloco: neo-brutalista. Cor chapada, bordas grossas, sombra dura, tipografia gigante. */
export default function Bloco({ d, links, standalone }: LayoutProps) {
  const { H1, H2 } = levels(standalone);
  const sub = subtitulo(d);
  const ig = igHandle(d.instagram);
  return (
    <div className={s.site}>
      <div className={s.page}>
        <header className={s.hero}>
          {d.cidade && <span className={s.sticker}>{d.cidade}</span>}
          <H1 className={s.nome}>{d.nome}</H1>
          {sub && <p className={s.sub}>{sub}</p>}
        </header>

        <A link={links.whatsapp} className={s.big}>
          Chamar no WhatsApp
        </A>

        <div className={s.grid}>
          {d.sobre && (
            <section className={`${s.tile} ${s.wide}`}>
              <p className={s.sobre}>{d.sobre}</p>
            </section>
          )}

          {d.servicos.length > 0 && (
            <section className={`${s.tile} ${s.dark} ${s.wide}`}>
              <H2 className={s.tTitle}>Serviços</H2>
              <ul className={s.list}>
                {d.servicos.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </section>
          )}

          {d.horario.length > 0 && (
            <section className={s.tile}>
              <H2 className={s.tTitle}>Horários</H2>
              <ul className={s.small}>
                {d.horario.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </section>
          )}

          {d.endereco && (
            <section className={`${s.tile} ${s.dark}`}>
              <H2 className={s.tTitle}>Endereço</H2>
              <p className={s.addr}>{d.endereco}</p>
              <A link={links.mapa} className={s.mini}>Como chegar</A>
            </section>
          )}

          {(links.telefone || links.instagram) && (
            <section className={`${s.tile} ${s.wide} ${s.contacts}`}>
              <A link={links.telefone} className={s.mini}>Ligar</A>
              <A link={links.instagram} className={s.mini}>Instagram{ig ? ` @${ig}` : ""}</A>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
