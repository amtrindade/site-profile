# Manutencao do Refactor - treinoautomacao

## Objetivo
Este documento padroniza a manutencao apos o refactor para manter o projeto estatico, previsivel e compativel com os exercicios de automacao.

## Arquitetura Congelada (estado atual)
- Sem build, bundler, transpiler ou task runner.
- Paginas HTML carregadas diretamente do sistema de arquivos.
- CSS em camadas:
  - css/base.css
  - css/layout.css
  - css/components.css
  - css/pages/*.css
- JavaScript por pagina em js/pages/*.js com script defer.
- Navegacao principal compartilhada:
  - partials/main-menu.html
  - js/core/menu-loader.js

## Mapa de Paginas e Assets
- index.html
  - CSS: base/layout/components
  - JS: js/core/menu-loader.js
- desafiosoma.html
  - CSS: css/pages/desafiosoma.css
  - JS: js/core/menu-loader.js + js/pages/desafiosoma.js
- alertsconfirmation.html
  - CSS: css/pages/alerts.css
  - JS: js/core/menu-loader.js + js/pages/alerts.js
- localizandovalorestable.html
  - CSS: css/pages/tabela.css
  - JS: js/core/menu-loader.js + js/pages/tabela.js
- utilizandoxpath.html
  - CSS: css/pages/xpath.css
  - JS: js/core/menu-loader.js + js/pages/xpath.js
- elementsweb.html
  - CSS: css/pages/elementsweb.css
  - JS: js/core/menu-loader.js + js/pages/elementsweb.js
  - Excecao obrigatoria: manter IDs reaproveitados
- geradorcpf.html
  - CSS: css/pages/gerador-cpf.css
  - JS: js/core/menu-loader.js + js/pages/gerador-cpf.js

## Contrato do Menu Compartilhado
- Fonte unica de verdade: partials/main-menu.html.
- Cada pagina deve conter apenas o slot de menu:
  - <div data-menu-slot data-active-page="nome-da-pagina"></div>
- O menu-loader aplica automaticamente:
  - injecao do menu via fetch
  - item ativo por data-active-page
  - aria-current="page" no link ativo

Rotas suportadas no data-active-page:
- index
- alertsconfirmation
- desafiosoma
- localizandovalorestable
- utilizandoxpath
- elementsweb
- geradorcpf

Regra de responsividade obrigatoria:
- nao cortar ou ocultar texto dos links em viewport reduzido.
- manter quebra de linha legivel para links longos.

## Checklist Rapido para Novas Mudancas
- Nao introduzir style inline.
- Nao introduzir onclick/onchange/oninput inline.
- Preservar IDs usados pelos exercicios/testes.
- Em elementsweb.html, nao normalizar IDs repetidos.
- Nao editar menu direto nas paginas HTML; editar apenas partials/main-menu.html.
- Garantir data-active-page correto em cada pagina.
- Validar que links longos do menu permanecem visiveis em telas menores.
- Atualizar docs/tasks.json e docs/tasks-board.md quando concluir etapa.
- Executar checklist de regressao em docs/checklist-regressao.md.

## Procedimento de Evolucao
1. Criar branch de trabalho a partir de newlayout.
2. Se houver mudanca de navegacao, editar partials/main-menu.html e validar menu-loader.
3. Aplicar mudanca por pagina (HTML + css/pages + js/pages) sem duplicar menu.
4. Executar smoke desktop e mobile.
5. Registrar evidencias no checklist de regressao.
6. Atualizar status das tasks e notas de implementacao.
7. Commit e push com mensagem orientada a tarefa.

## Riscos Conhecidos e Mitigacoes
- Quebra de automacao por seletor:
  - Mitigar preservando IDs existentes e nomes dos campos.
- Regressao visual em mobile:
  - Mitigar validando viewport mobile apos cada pagina.
- Regressao de menu por alteracao fora da fonte unica:
  - Mitigar editando somente partials/main-menu.html.
- Corte de texto no menu em links longos:
  - Mitigar validando breakpoints e evitando altura fixa com overflow oculto.
- Regressao funcional em dialogs:
  - Mitigar validando alert/confirm/prompt nas paginas de exercicio.

## Definicao de Pronto para Proximas Iteracoes
- Mudanca sem inline JS/CSS.
- Sem regressao funcional critica no smoke.
- Documentacao de status e checklist atualizada.
- Push realizado na branch de trabalho.
