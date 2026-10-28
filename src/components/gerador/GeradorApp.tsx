"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Check, Copy, ExternalLink, Monitor, Smartphone } from "lucide-react";
import {
  HOSPEDAGEM_UNICO_MESES,
  OCTO_WHATSAPP,
  PRECO_MENSAL_A_PARTIR,
  PRECO_UNICO,
  STORAGE_KEY,
  brl,
} from "@/lib/gerador/config";
import { Draft, HASH_PREFIX, decodeDraft, draftFromHash, encodeDraft } from "@/lib/gerador/codec";
import { EXEMPLO, VAZIO } from "@/lib/gerador/data";
import { trackContact, track } from "@/lib/gerador/track";
import { FormState, LIMITES, ModelId, PlanoId } from "@/lib/gerador/types";
import SiteView from "./SiteView";
import { CORES, MODELOS, modeloPorId } from "./models";
import s from "./gerador.module.css";

const noop = () => () => {};

function loadInitial(): Draft {
  try {
    const h = draftFromHash(window.location.hash);
    if (h) return h;
  } catch {}
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const d = raw ? decodeDraft(raw) : null;
    if (d) return d;
  } catch {}
  return { form: EXEMPLO, modelo: "letreiro", cor: null, plano: "mensal" };
}

/** O estado vem do link/armazenamento do navegador, então só monta no cliente. */
export default function GeradorApp() {
  const mounted = useSyncExternalStore(noop, () => true, () => false);
  if (!mounted) return <div className={s.loading}>Carregando o gerador…</div>;
  return <Editor />;
}

function Editor() {
  const [draft, setDraft] = useState<Draft>(loadInitial);
  const [consent, setConsent] = useState(false);
  const [view, setView] = useState<"phone" | "desktop">("phone");
  const [copied, setCopied] = useState(false);
  const { form, modelo, cor, plano } = draft;

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, encodeDraft(draft));
    } catch {}
  }, [draft]);

  const setField = (k: keyof FormState, v: string) =>
    setDraft((d) => ({ ...d, form: { ...d.form, [k]: v } }));

  const nomeOk = form.nome.trim().length > 0;
  const m = modeloPorId(modelo);
  const corAtual = cor ?? m.cor;

  const encoded = encodeDraft(draft);
  const previewPath = `/gerador/previa${HASH_PREFIX}${encoded}`;
  const previewUrl = `${window.location.origin}${previewPath}`;

  const planoTxt =
    plano === "unico"
      ? `Pagamento único (${brl(PRECO_UNICO)}, sem suporte e sem alterações)`
      : `Mensalidade (a partir de ${brl(PRECO_MENSAL_A_PARTIR)}/mês)`;

  function waLink(): string {
    const base = [
      "Olá! Montei a prévia da minha página no gerador da OCTO Páginas.",
      `Negócio: ${form.nome.trim()}`,
      `Modelo: ${m.nome}`,
      `Plano: ${planoTxt}`,
    ];
    const tail = "Origem: gerador de prévia";
    let url = `https://wa.me/${OCTO_WHATSAPP}?text=${encodeURIComponent([...base, `Prévia: ${previewUrl}`, tail].join("\n"))}`;
    // Links muito longos quebram no WhatsApp: nesse caso segue sem o link da prévia.
    if (url.length > 1900) {
      url = `https://wa.me/${OCTO_WHATSAPP}?text=${encodeURIComponent([...base, tail].join("\n"))}`;
    }
    return url;
  }

  async function copiar() {
    try {
      await navigator.clipboard.writeText(previewUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
      track("generator_copy_link");
    } catch {}
  }

  const campo = (k: keyof FormState, label: string, opts: { max: number; hint?: string; type?: string; inputMode?: "tel" | "text" }) => (
    <div className={s.field}>
      <label htmlFor={`f-${k}`}>{label}</label>
      <input
        id={`f-${k}`}
        value={form[k]}
        maxLength={opts.max}
        inputMode={opts.inputMode}
        autoComplete="off"
        onChange={(e) => setField(k, e.target.value)}
      />
      {opts.hint && <small>{opts.hint}</small>}
    </div>
  );
  const area = (k: keyof FormState, label: string, opts: { max: number; rows: number; hint?: string }) => (
    <div className={s.field}>
      <label htmlFor={`f-${k}`}>{label}</label>
      <textarea
        id={`f-${k}`}
        rows={opts.rows}
        value={form[k]}
        maxLength={opts.max}
        onChange={(e) => setField(k, e.target.value)}
      />
      {opts.hint && <small>{opts.hint}</small>}
    </div>
  );

  return (
    <div className={s.layout}>
      {/* 1. Dados */}
      <section className={`${s.card} ${s.dados}`} aria-labelledby="t-dados">
        <div className={s.cardHead}>
          <h2 id="t-dados">1. Conte sobre o seu negócio</h2>
          <div className={s.mini}>
            <button type="button" onClick={() => setDraft((d) => ({ ...d, form: VAZIO }))}>
              Começar do zero
            </button>
            <button type="button" onClick={() => setDraft((d) => ({ ...d, form: EXEMPLO }))}>
              Voltar ao exemplo
            </button>
          </div>
        </div>
        {campo("nome", "Nome do negócio", { max: LIMITES.nome })}
        <div className={s.two}>
          {campo("ramo", "O que você faz", { max: LIMITES.ramo, hint: "Ex.: Barbearia, Marcenaria" })}
          {campo("cidade", "Cidade", { max: LIMITES.cidade })}
        </div>
        {campo("frase", "Frase de destaque (opcional)", { max: LIMITES.frase, hint: "Se ficar vazio, usamos “ramo em cidade”." })}
        {area("sobre", "Sobre você", { max: LIMITES.sobre, rows: 3, hint: "Uma ou duas frases, sem promessas de resultado." })}
        {area("servicos", "Serviços ou produtos", { max: 700, rows: 5, hint: "Um por linha, até 10." })}
        {area("horario", "Horário de atendimento", { max: 400, rows: 3, hint: "Uma linha por faixa, até 6." })}
        {campo("endereco", "Endereço (opcional)", { max: LIMITES.endereco })}
        <div className={s.two}>
          {campo("whatsapp", "WhatsApp do negócio", { max: LIMITES.telefone, inputMode: "tel", hint: "Com DDD. É o botão principal da página." })}
          {campo("telefone", "Telefone para ligar (opcional)", { max: LIMITES.telefone, inputMode: "tel" })}
        </div>
        {campo("instagram", "Instagram (opcional)", { max: LIMITES.instagram, hint: "@usuario" })}
        <p className={s.note}>
          Tudo o que você digita fica só neste aparelho. Nada é enviado até você clicar em “Enviar pelo WhatsApp”.
        </p>
      </section>

      {/* 2. Modelo e cor + prévia */}
      <section className={`${s.card} ${s.prev}`} aria-labelledby="t-modelo">
        <h2 id="t-modelo">2. Escolha o modelo</h2>
        <div className={s.models} role="radiogroup" aria-labelledby="t-modelo">
          {MODELOS.map((x) => (
            <label key={x.id} className={`${s.model} ${x.id === modelo ? s.modelOn : ""}`}>
              <input
                type="radio"
                name="modelo"
                value={x.id}
                checked={x.id === modelo}
                onChange={() => {
                  setDraft((d) => ({ ...d, modelo: x.id as ModelId }));
                  track("generator_model", { model: x.id });
                }}
              />
              <Thumb>
                <SiteView form={form} modelo={x.id} cor={cor} />
              </Thumb>
              <span className={s.modelName}>{x.nome}</span>
              <span className={s.modelDesc}>{x.resumo}</span>
            </label>
          ))}
        </div>

        <h3 className={s.sub}>Cor principal</h3>
        <div className={s.swatches} role="radiogroup" aria-label="Cor principal">
          <label className={`${s.swatchAuto} ${cor === null ? s.swatchOn : ""}`}>
            <input type="radio" name="cor" checked={cor === null} onChange={() => setDraft((d) => ({ ...d, cor: null }))} />
            Padrão do modelo
          </label>
          {CORES.map((c) => (
            <label key={c} className={`${s.swatch} ${cor === c ? s.swatchOn : ""}`} style={{ background: c }}>
              <input type="radio" name="cor" aria-label={`Cor ${c}`} checked={cor === c} onChange={() => setDraft((d) => ({ ...d, cor: c }))} />
            </label>
          ))}
          <label className={s.custom}>
            <span>Outra</span>
            <input
              type="color"
              value={corAtual}
              onChange={(e) => setDraft((d) => ({ ...d, cor: e.target.value }))}
              aria-label="Escolher outra cor"
            />
          </label>
        </div>

        <div className={s.previewBar}>
          <h3 className={s.sub}>Sua página</h3>
          <div className={s.toggle} role="group" aria-label="Tamanho da tela">
            <button type="button" aria-pressed={view === "phone"} onClick={() => setView("phone")}>
              <Smartphone size={16} aria-hidden="true" /> Celular
            </button>
            <button type="button" aria-pressed={view === "desktop"} onClick={() => setView("desktop")}>
              <Monitor size={16} aria-hidden="true" /> Computador
            </button>
          </div>
        </div>
        <Frame width={view === "phone" ? 390 : 1100}>
          <SiteView form={form} modelo={modelo} cor={cor} />
        </Frame>
        <div className={s.previewActions}>
          <Link href={previewPath} target="_blank" className={s.ghost}>
            <ExternalLink size={16} aria-hidden="true" /> Abrir em tela cheia
          </Link>
          <button type="button" className={s.ghost} onClick={copiar}>
            {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
            {copied ? "Link copiado" : "Copiar link da prévia"}
          </button>
        </div>
        <p className={s.note}>Nesta prévia os botões não funcionam. Na página publicada, eles abrem o seu WhatsApp, o mapa e o Instagram.</p>
      </section>

      {/* 3. Plano */}
      <section className={`${s.card} ${s.plano}`} aria-labelledby="t-plano">
        <h2 id="t-plano">3. Como você quer pagar</h2>
        <div className={s.plans} role="radiogroup" aria-labelledby="t-plano">
          <PlanCard
            id="mensal"
            atual={plano}
            onPick={(p) => setDraft((d) => ({ ...d, plano: p }))}
            titulo="Mensalidade"
            preco={`a partir de ${brl(PRECO_MENSAL_A_PARTIR)}`}
            sufixo="/mês"
            itens={[
              "Hospedagem inclusa",
              "Suporte e ajustes pelo WhatsApp",
              "Aviso prévio de 30 dias para cancelar",
              "Ao cancelar, a página sai do ar",
            ]}
          />
          <PlanCard
            id="unico"
            atual={plano}
            onPick={(p) => setDraft((d) => ({ ...d, plano: p }))}
            titulo="Pagamento único"
            preco={brl(PRECO_UNICO)}
            sufixo="uma vez"
            itens={[
              "Página publicada exatamente como você montou aqui",
              "Sem suporte",
              "Sem alterações depois de publicada",
              `Hospedagem por ${HOSPEDAGEM_UNICO_MESES} meses`,
              "Domínio próprio, se quiser, é por sua conta",
            ]}
            aviso="Revise bem: depois de publicada, a página não muda."
          />
        </div>

        <label className={s.consent}>
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>
            Concordo em enviar estas informações para a OCTO Páginas pelo WhatsApp, para receber a proposta. Li a{" "}
            <Link href="/privacidade" target="_blank">política de privacidade</Link>.
          </span>
        </label>

        {nomeOk && consent ? (
          <a
            className={s.cta}
            href={waLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContact({ model: modelo, plan: plano })}
          >
            Enviar pelo WhatsApp
          </a>
        ) : (
          <button type="button" className={s.cta} disabled>
            Enviar pelo WhatsApp
          </button>
        )}
        {!nomeOk && <p className={s.hint}>Preencha o nome do negócio para continuar.</p>}
        {nomeOk && !consent && <p className={s.hint}>Marque a caixa de concordância para continuar.</p>}
      </section>
    </div>
  );
}

function PlanCard(props: {
  id: PlanoId;
  atual: PlanoId;
  onPick: (p: PlanoId) => void;
  titulo: string;
  preco: string;
  sufixo: string;
  itens: string[];
  aviso?: string;
}) {
  const on = props.atual === props.id;
  return (
    <label className={`${s.plan} ${on ? s.planOn : ""}`}>
      <input type="radio" name="plano" checked={on} onChange={() => props.onPick(props.id)} />
      <span className={s.planTitle}>{props.titulo}</span>
      <span className={s.planPrice}>
        {props.preco} <small>{props.sufixo}</small>
      </span>
      <ul>
        {props.itens.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
      {props.aviso && <span className={s.warn}>{props.aviso}</span>}
    </label>
  );
}

/** Moldura de prévia: renderiza o site na largura "lógica" e reduz (zoom) se não couber. */
function Frame({ width, children }: { width: number; children: React.ReactNode }) {
  const box = useRef<HTMLDivElement>(null);
  const [avail, setAvail] = useState(0);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setAvail(e.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const zoom = avail ? Math.min(1, avail / width) : 1;
  const isPhone = width < 600;
  return (
    <div ref={box} className={s.frameBox}>
      <div className={`${s.frame} ${isPhone ? s.phone : ""}`} style={{ width: width * zoom }}>
        <div className={s.screen}>
          <div style={{ width, zoom }}>{children}</div>
        </div>
      </div>
    </div>
  );
}

/** Miniatura viva do modelo: renderiza em 390px e reduz até caber na largura disponível. */
function Thumb({ children }: { children: React.ReactNode }) {
  const box = useRef<HTMLSpanElement>(null);
  const [scale, setScale] = useState(0.3);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / 390));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return (
    <span ref={box} className={s.thumb} aria-hidden="true">
      <span className={s.thumbIn} style={{ transform: `scale(${scale})` }} {...{ inert: true }}>
        {children}
      </span>
    </span>
  );
}
