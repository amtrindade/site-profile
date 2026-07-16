# Plano de Refactor de Menu - Canonical Cycle

## 1. Contexto

O projeto possui menu duplicado em multiplas paginas HTML. Esse modelo gerou divergencia de navegacao ao longo do tempo (ex.: item "Gerador CPF" presente em algumas paginas e ausente em outras).

Problema principal:
- custo alto de manutencao por repeticao de codigo.
- risco de inconsistencias visuais e funcionais.
- maior chance de regressao quando o menu muda.

## 2. Objetivo do ciclo

Padronizar o menu com uma unica fonte de verdade, usando o menu do `index.html` como baseline oficial, e distribuir esse menu para todas as paginas sem copiar markup manualmente em cada arquivo.

## 3. Pesquisa de tendencias atuais (2025-2026)

### 3.1 Tendencia A - Componentizacao nativa (Web Components)

Resumo:
- uso de Custom Elements para encapsular UI reutilizavel sem framework.
- boa aderencia para projetos estaticos com JavaScript vanilla.

Evidencias:
- MDN: Using custom elements (ciclo de vida, `connectedCallback`, `attributeChangedCallback`).
- web.dev: custom-elements-v1 (componente reutilizavel, padrao da plataforma).

### 3.2 Tendencia B - Fragments + fetch para conteudo compartilhado

Resumo:
- carregar fragmentos HTML compartilhados com `fetch()`.
- reduz duplicacao em sites sem backend e sem pipeline de build.

Evidencias:
- MDN: Using the Fetch API (fluxo padrao de request/response).
- MDN: element `template` para fragmentos inertes e clonagem eficiente.

### 3.3 Tendencia C - Progressive Enhancement

Resumo:
- manter HTML funcional e aplicar melhoria com JS quando disponivel.
- evitar lock-in em framework para um site estatico pequeno.

Evidencias:
- web.dev: custom elements com upgrade progressivo.
- MDN: recomendacao de inicializar comportamento em `connectedCallback`.

### 3.4 Tendencia D - Acessibilidade na navegacao

Resumo:
- estado ativo consistente com `aria-current="page"`.
- semantica de nav unica e previsivel para teclado/leitores.

Evidencias:
- padrao ja usado no `index.html` (item ativo com `aria-current`).

## 4. Avaliacao de abordagens

### Opcao 1 - Continuar menu hardcoded por pagina
- Pro: zero mudanca tecnica.
- Contra: nao resolve o problema central.
- Decisao: rejeitada.

### Opcao 2 - Introduzir SSG/framework (Astro/Next/Vite)
- Pro: includes nativos de template/layout.
- Contra: quebra restricao de arquitetura (projeto deve permanecer estatico sem build pipeline).
- Decisao: rejeitada para este ciclo.

### Opcao 3 - Fragmento HTML compartilhado + loader JS
- Pro: simples, compativel com projeto atual, sem build, elimina duplicacao.
- Contra: requer fallback para cenarios sem JS.
- Decisao: aprovada.

### Opcao 4 - Custom Element com template interno no JS
- Pro: padrao moderno e API limpa (`<site-menu>`).
- Contra: markup deixa de existir em arquivo HTML dedicado; manutencao de conteudo fica no JS.
- Decisao: parcial. Usar conceito de Custom Element, mas com fragmento externo para manter conteudo em HTML.

## 5. Arquitetura recomendada (alvo)

## 5.1 Single Source of Truth

Criar um arquivo unico de menu:
- `partials/main-menu.html`

Esse arquivo passa a ser a fonte oficial da navegacao.

## 5.2 Ponto de injecao por pagina

Cada pagina tera apenas um placeholder, por exemplo:
- `<div data-menu-slot data-active-page="desafiosoma"></div>`

Sem replicar lista de links no HTML da pagina.

## 5.3 Loader unico de navegacao

Criar script compartilhado:
- `js/core/menu-loader.js`

Responsabilidades do loader:
- carregar `partials/main-menu.html` via `fetch`.
- injetar no `data-menu-slot`.
- marcar item ativo com base em `data-active-page` ou URL atual.
- aplicar `aria-current="page"` no link ativo.
- tratar erro de carregamento com fallback legivel.

## 5.4 Contrato de atributos

Padrao sugerido para links no fragmento:
- `data-route="index"`, `data-route="alertsconfirmation"`, etc.

Padrao por pagina:
- `data-active-page="index" | "alertsconfirmation" | "desafiosoma" | "localizandovalorestable" | "utilizandoxpath" | "elementsweb" | "geradorcpf"`

## 5.5 Compatibilidade com estilo existente

- manter classes atuais do menu (`nav nav-justified`) para nao quebrar visual.
- manter estrutura de `masthead`.
- nao usar Shadow DOM neste ciclo para preservar CSS global existente.

## 5.6 Regra obrigatoria de responsividade do menu

- em viewport reduzido, nenhum texto de link pode ficar cortado ou oculto.
- quando o texto quebrar linha, ele deve continuar totalmente legivel.
- remover qualquer combinacao de `height` fixa + `overflow: hidden` que oculte conteudo do link.
- em telas menores, priorizar estrategia de layout que preserve texto completo (ex.: `white-space: normal`, ajuste de `line-height`, `min-height` e redistribuicao de itens).
- validar especificamente os links longos como "Alerts and Confirmations" e "Localizando por Xpath".

## 6. Canonical Cycle (fases)

### C0 - Discover
Objetivo:
- mapear estado atual da duplicacao e divergencias de menu.

Saidas:
- inventario de paginas que possuem menu local.
- tabela de divergencias por item de navegacao.

### C1 - Decide
Objetivo:
- confirmar decisao arquitetural do menu compartilhado.

Saidas:
- decisao tecnica registrada (fragmento + loader).
- contrato de `data-active-page` fechado.

### C2 - Foundation
Objetivo:
- criar infraestrutura base de menu compartilhado.

Saidas:
- `partials/main-menu.html` criado.
- `js/core/menu-loader.js` criado.
- estrategia de erro/fallback definida.

### C3 - Migrate
Objetivo:
- migrar todas as paginas para placeholder.

Saidas:
- remover markup duplicado de menu em cada HTML.
- adicionar placeholder padrao e atributo de pagina ativa.
- incluir script compartilhado com `defer`.
- ajustar CSS responsivo do menu para evitar corte de texto em largura reduzida.

### C4 - Validate
Objetivo:
- validar funcionalidade, acessibilidade e regressao visual.

Saidas:
- checklist desktop/mobile atualizado.
- verificacao de `aria-current` e navegacao por teclado.
- confirmacao de ausencia de divergencia entre paginas.

### C5 - Harden
Objetivo:
- robustez e manutencao futura.

Saidas:
- documentacao de manutencao do menu atualizada.
- criterios para adicionar novos itens sem regressao.

### C6 - Close
Objetivo:
- fechamento operacional do ciclo.

Saidas:
- board de tarefas atualizado.
- resumo do ciclo e riscos residuais.

## 7. Criterios de aceite

CA-01: existe 1 unica fonte de verdade de menu (`partials/main-menu.html`).

CA-02: todas as paginas principais usam o mesmo menu injetado.

CA-03: menu do `index.html` e o baseline oficial refletido em todas as paginas.

CA-04: estado ativo esta correto por pagina e com `aria-current="page"`.

CA-05: nenhum HTML principal possui bloco de menu duplicado hardcoded.

CA-06: sem regressao de navegacao em desktop e mobile.

CA-07: projeto permanece 100% estatico (sem bundler/transpiler/pipeline).

CA-08: em viewport reduzido, nenhum link do menu fica com texto cortado/oculto; texto deve permanecer totalmente legivel mesmo com quebra de linha.

## 8. Riscos e mitigacoes

R1 - Pagina abrir via `file://` pode bloquear `fetch` de fragmento em alguns navegadores.
Mitigacao:
- padronizar execucao em servidor estatico local para desenvolvimento.
- documentar fallback e mensagem orientativa.

R2 - Mudanca de estrutura quebrar classes CSS existentes.
Mitigacao:
- preservar classes atuais de nav e masthead no fragmento.

R3 - Estado ativo incorreto por erro de atributo por pagina.
Mitigacao:
- validacao automatica no loader (warning no console quando `data-active-page` ausente/invalido).

R4 - Regressao em automacao por alteracao de seletores.
Mitigacao:
- manter hrefs e textos dos links estaveis.
- se necessario, adicionar `data-testid` no fragmento.

R5 - Corte visual de texto em links longos no menu quando a largura da pagina reduz.
Mitigacao:
- revisar regras responsivas de altura/overflow no menu.
- validar breakpoint a breakpoint com foco em links longos.

## 9. Ordem recomendada de execucao

1. C0 Discover
2. C1 Decide
3. C2 Foundation
4. C3 Migrate
5. C4 Validate
6. C5 Harden
7. C6 Close

## 10. Entregaveis do ciclo

- `partials/main-menu.html`
- `js/core/menu-loader.js`
- ajuste de CSS responsivo do menu sem corte de texto
- htmls migrados para placeholder de menu
- atualizacao de `docs/checklist-regressao.md`
- atualizacao de `docs/manutencao-refactor.md`
- fechamento em board/tarefas

## 11. Referencias usadas na pesquisa

- MDN - Using custom elements:
  https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
- MDN - Using the Fetch API:
  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- MDN - HTML template element:
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
- web.dev - custom-elements-v1:
  https://web.dev/articles/custom-elements-v1
