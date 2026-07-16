# Plano de Refactor - Menu Hamburger Retratil

## 1. Contexto

O projeto atualmente usa menu superior horizontal (`nav nav-justified`) compartilhado por fragmento HTML e carregado por `js/core/menu-loader.js`.

Esse modelo atende desktop, mas nao segue o padrao de navegacao retratil comum em aplicacoes modernas e gera limitacoes de usabilidade em viewport menor.

Situacao atual relevante:
- fonte unica de menu em `partials/main-menu.html`.
- estado ativo por `data-route` + `aria-current="page"`.
- estilo legado principal em `css/justified-nav.css` e `css/layout.css`.

## 2. Objetivo do ciclo

Implementar especificacao para migrar o padrao atual para menu hamburger retratil, no estilo visual/funcional de apps como Gmail/GitHub, mantendo as mesmas opcoes de navegacao e as rotas existentes.

## 3. Escopo

Inclui:
- redesign da navegacao para cabecalho com botao hamburger.
- painel lateral retratil (drawer) com lista de links atual.
- overlay/backdrop para fechamento por clique externo.
- fechamento por tecla `Esc` e por selecao de item.
- preservacao de estado ativo (`aria-current`) por pagina.
- criterios de acessibilidade e responsividade no novo padrao.

Nao inclui:
- alteracao de conteudo das paginas de treino.
- introducao de framework ou pipeline de build.
- mudanca nas rotas/nomes de arquivos HTML.

## 4. Requisitos funcionais do menu

RF-01: deve existir botao hamburger no cabecalho principal para abrir/fechar o drawer.

RF-02: o drawer deve conter exatamente as opcoes atuais:
- Home
- Alerts and Confirmations
- Calculadora
- Localizar Table
- Localizando por Xpath
- Web Elementos
- Gerador CPF

RF-03: ao abrir o drawer, deve haver destaque visual do item ativo da pagina corrente.

RF-04: o menu deve fechar em qualquer um dos eventos:
- clique no botao hamburger quando aberto.
- clique em area externa (overlay).
- tecla `Esc`.
- clique em um item de navegacao.

RF-05: em desktop e mobile, a navegacao deve permanecer funcional sem regressao de links.

## 5. Diretrizes de UX e acessibilidade

### 5.1 Semantica e ARIA
- botao hamburger com `aria-label`, `aria-controls` e `aria-expanded` sincronizado ao estado.
- drawer com semantica de navegacao (`nav`) e identificador unico para controle.
- item ativo mantendo `aria-current="page"`.

### 5.2 Teclado e foco
- botao hamburger acionavel por teclado.
- fechamento por `Esc` obrigatorio.
- foco inicial previsivel ao abrir e retorno de foco ao botao ao fechar.

### 5.3 Responsividade
- largura de drawer adequada para mobile e desktop reduzido.
- alvo de toque adequado para links e botao hamburger.
- sem corte de texto de links em larguras pequenas.

### 5.4 Movimento e percepcao
- transicoes suaves de abertura/fechamento.
- respeitar `prefers-reduced-motion` quando aplicavel.

## 6. Impacto tecnico esperado

### 6.1 HTML
- atualizacao da estrutura em `partials/main-menu.html` para cabecalho + botao + drawer.

### 6.2 CSS
- adicionar/ajustar regras de layout do novo menu em `css/layout.css` e/ou `css/components.css`.
- reduzir dependencia de regras legadas em `css/justified-nav.css`.

### 6.3 JavaScript
- evoluir `js/core/menu-loader.js` para:
  - controlar estado aberto/fechado.
  - sincronizar atributos ARIA.
  - tratar eventos de fechamento.
  - manter logica de item ativo existente.

### 6.4 Regressao
- validar todas as paginas principais com `data-menu-slot`.
- confirmar que nenhum link foi removido ou alterado indevidamente.

## 7. Abordagem recomendada (Canonical Cycle)

### C0 - Discover
- mapear impacto visual/comportamental do menu atual.

### C1 - Decide
- fechar contrato de markup, estados CSS e eventos JS.

### C2 - Foundation
- preparar base de HTML/CSS/JS para hamburger + drawer.

### C3 - Migrate
- migrar menu compartilhado para o novo padrao.

### C4 - Validate
- validar acessibilidade, responsividade e navegacao.

### C5 - Harden
- tratar ajustes finos, fallback e resiliencia.

### C6 - Close
- concluir documentacao e fechamento do ciclo.

## 8. Criterios de aceite

CA-01: existe um menu hamburger retratil definido como padrao de navegacao.

CA-02: o drawer exibe as mesmas 7 opcoes de menu atuais, sem perda de links.

CA-03: item ativo permanece correto por pagina com `aria-current="page"`.

CA-04: o menu fecha por botao, overlay, `Esc` e clique em item.

CA-05: botao hamburger possui atributos ARIA coerentes com o estado.

CA-06: navegacao funciona em desktop e mobile sem regressao funcional.

CA-07: nao ha corte de texto nos links do menu em viewport reduzido.

CA-08: projeto permanece 100% estatico (sem build, sem framework).

## 9. Riscos e mitigacoes

R1 - Regressao visual no cabecalho.
Mitigacao: manter tokens visuais existentes e validar por breakpoint.

R2 - Estado aberto/fechado inconsistente no JS.
Mitigacao: centralizar controle de estado no loader e testes manuais por evento.

R3 - Quebra de acessibilidade por ARIA/foco.
Mitigacao: checklist de teclado + leitor de tela + validacao de atributos.

R4 - Conflito entre CSS novo e legado.
Mitigacao: isolamento de classes do drawer e remocao gradual de regras legadas.

R5 - Divergencia de opcoes de menu durante migracao.
Mitigacao: validar lista canonica de links no fragmento compartilhado.

## 10. Ordem recomendada de execucao

1. C0 Discover
2. C1 Decide
3. C2 Foundation
4. C3 Migrate
5. C4 Validate
6. C5 Harden
7. C6 Close

## 11. Entregaveis do ciclo

- `docs/003-menu-hamburger-retratil/plan.md`
- `docs/003-menu-hamburger-retratil/tasks.json`
- especificacao de requisitos de UX/acessibilidade para o novo menu.
- backlog priorizado para implementacao do refactor.
