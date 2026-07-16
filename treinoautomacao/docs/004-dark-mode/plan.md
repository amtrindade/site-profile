# Plano de Implementacao - Dark Mode (Canonical Cycle)

## 1. Contexto

O projeto possui base visual consolidada em tokens no `css/base.css`, mas ainda existem regras com cores literais em partes do layout e arquivos legados. O menu principal e carregado via fragmento compartilhado (`partials/main-menu.html`) e injetado por `js/core/menu-loader.js`.

Para evoluir a experiencia visual sem quebrar o comportamento atual, o ciclo de dark mode sera implementado com alternancia manual por icone no menu e persistencia local.

## 2. Objetivo do ciclo

Implementar dark mode com alternancia claro/escuro manual (icone lua/sol), mantendo compatibilidade com o projeto estatico, sem alterar regras de negocio das paginas e sem regressao de navegacao.

## 3. Escopo

Inclui:
- botao de alternancia de tema no menu compartilhado.
- tema claro e escuro com tokens CSS semanticos.
- persistencia do tema com localStorage.
- estrategia anti-flicker na carga inicial.
- validacao de contraste e acessibilidade basica do controle.
- revisao de estilos com cores hardcoded nas camadas criticas.

Nao inclui:
- modo "seguir sistema" neste ciclo.
- framework, bundler ou pipeline de build.
- alteracao de rotas e nomes de arquivos HTML.
- refactor estrutural amplo fora do tema.

## 4. Requisitos funcionais

RF-01: deve existir um controle de tema por icone (lua/sol) no menu compartilhado.

RF-02: ao acionar o controle, o site deve alternar entre tema claro e escuro.

RF-03: a preferencia de tema deve ser persistida e reaplicada apos recarga da pagina.

RF-04: a navegacao atual (rotas e estado ativo com `aria-current`) deve permanecer sem regressao.

RF-05: o tema selecionado deve ser aplicado em todas as paginas principais do projeto.

RF-06: o carregamento inicial deve minimizar flash visivel de tema incorreto (anti-flicker).

## 5. Diretrizes de UX, acessibilidade e referencia tecnica

### 5.1 UX e semantica
- controle com semantica de botao e rotulo acessivel (`aria-label`).
- estado visual coerente com o tema ativo.
- feedback visual de foco teclado preservado.

### 5.2 Acessibilidade
- botao acionavel por teclado.
- contraste minimo adequado para texto e controles nos dois temas.
- foco visivel sem perda no tema escuro.

### 5.3 Referencias externas aplicadas
- MDN: `prefers-color-scheme` e `color-scheme` para boas praticas de compatibilidade.
- web.dev: arquitetura com variaveis CSS, estrategia anti-flicker e transicoes seguras.
- GitHub/Primer: uso de tokens semanticos por modo de cor.
- GoogleChromeLabs/dark-mode-toggle: padroes de persistencia, eventos e mitigacao de flashing.

Observacao: neste ciclo, a decisao aprovada foi alternancia manual claro/escuro, sem modo automatico por sistema operacional.

## 6. Impacto tecnico esperado

### 6.1 HTML
- atualizar `partials/main-menu.html` para incluir botao de tema.
- validar insercao do controle em todas as paginas que usam `data-menu-slot`.

### 6.2 CSS
- ampliar tokens em `css/base.css` para suportar modo escuro.
- ajustar camadas em `css/layout.css` e `css/components.css` para herdar tokens.
- corrigir pontos hardcoded em `css/pages/gerador-cpf.css` e legado em `css/justified-nav.css`.

### 6.3 JavaScript
- criar modulo de tema em `js/core/theme-manager.js`.
- integrar toggle no fluxo de `js/core/menu-loader.js` apos injecao do menu.
- manter logica atual de rota ativa intacta.

### 6.4 Regressao
- validar todas as paginas principais.
- confirmar que classes/ids usados por automacao nao sofreram ruptura.

## 7. Abordagem recomendada (Canonical Cycle)

### C0 - Discover
- mapear pontos de cor literal e dependencias visuais do menu/layout.

### C1 - Decide
- fechar contrato de UX do toggle e comportamento do tema.

### C2 - Foundation
- preparar tokens de tema + estrategia anti-flicker + modulo base de tema.

### C3 - Migrate
- migrar menu compartilhado e CSS critico para o novo sistema de tema.

### C4 - Validate
- validar funcional, visual, contraste e acessibilidade basica.

### C5 - Harden
- tratar conflitos residuais com CSS legado e ajustes finos.

### C6 - Close
- concluir documentacao e encerramento do ciclo.

## 8. Criterios de aceite

CA-01: alternancia claro/escuro por icone funcional em todas as paginas com menu compartilhado.

CA-02: preferencia de tema persistida entre recargas.

CA-03: estado ativo de navegacao permanece correto por pagina.

CA-04: nao ha regressao funcional de links e fluxos existentes.

CA-05: contraste visual adequado para conteudo principal e elementos interativos nos dois temas.

CA-06: projeto permanece 100% estatico (sem build e sem framework).

CA-07: reducao perceptivel de flicker no carregamento inicial do tema.

## 9. Riscos e mitigacoes

R1 - Flicker inicial de tema.
Mitigacao: aplicar tema o mais cedo possivel na inicializacao da pagina.

R2 - Conflito entre tokens novos e CSS legado hardcoded.
Mitigacao: priorizar migracao por camadas e validar por pagina.

R3 - Regressao no menu por alteracao de markup compartilhado.
Mitigacao: preservar `data-route`, links canonicos e logica de rota ativa.

R4 - Contraste insuficiente em componentes especificos.
Mitigacao: checklist de contraste com validacao manual orientada.

R5 - Persistencia indisponivel em cenarios restritos de storage.
Mitigacao: fallback para tema padrao com degradacao graciosa.

## 10. Ordem recomendada de execucao

1. C0 Discover
2. C1 Decide
3. C2 Foundation
4. C3 Migrate
5. C4 Validate
6. C5 Harden
7. C6 Close

## 11. Entregaveis do ciclo

- `docs/004-dark-mode-canonical-cycle/plan.md`
- `docs/004-dark-mode-canonical-cycle/tasks.json`
- especificacao de dark mode com requisitos funcionais e tecnicos.
- backlog priorizado para implementacao e validacao.
