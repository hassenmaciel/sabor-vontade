# Sabor & Vontade — App unificado (Fase 1)

Base do site oficial (React + Vite + React Router), construída em cima da
direção visual aprovada do protótipo **Sabor-e-Vontade-Premium-V4**.

## Como rodar

```bash
npm install
npm run dev
```

## O que já funciona

- Home com Hero, "Escolha sua vontade" e Destaques Dinâmicos (com produtos
  placeholder), Benefícios, Sobre e CTA final — fiéis ao V4 aprovado, agora
  como componentes React reais.
- Roteamento interno: `/`, `/bolos`, `/acai`, `/carrinho`.
- Carrinho unificado (`src/context/CartProvider.jsx`) — aceita itens de
  qualquer categoria e persiste em `localStorage`.
- Geração de link de pedido para WhatsApp (`src/services/whatsappService.js`).
- **Categorias controladas por dado** (`src/data/categorias.js`): Bolos e
  +Ki Açaí já ativos; Doces já modelado e pronto, só com `ativa: false`.
  Para lançar Doces no futuro: trocar essa flag para `true` — nenhum
  componente visual precisa ser tocado.

## O que ainda é placeholder (de propósito)

- `src/data/destaques.js` — produtos de exemplo. Fase 3 substitui `bolo` por
  um catálogo real; Fase 2 substitui `acai` pelos destaques reais vindos do
  configurador.
- `src/pages/Bolos/Bolos.jsx` e `src/pages/Acai/Acai.jsx` — páginas-stub.
- `src/data/loja.js` — número de WhatsApp reaproveitado do projeto do açaí;
  confirmar se bolo usa o mesmo número antes de publicar.

## Próximas fases (ver Inventário Mestre + proposta no chat)

1. ~~Fase 1 — esqueleto do app único~~ concluída neste pacote
2. Fase 2 — mover `acai-do-nono/src` para dentro deste app como domínio
   `/acai` (rotas `configurador` e `carrinho`), rebranding "Açaí do Nono" →
   "+Ki Açaí", conectar ao carrinho unificado.
3. Fase 3 — construir o catálogo real de bolos (`data/bolos.js`), vitrine e
   fluxo de pedido próprio.
4. Fase 4 — fotos reais, número de WhatsApp definitivo, deploy único.
