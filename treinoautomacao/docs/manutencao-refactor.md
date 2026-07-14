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

## Mapa de Paginas e Assets
- index.html
  - CSS: base/layout/components
  - JS: sem JS dedicado (neste momento)
- desafiosoma.html
  - CSS: css/pages/desafiosoma.css
  - JS: js/pages/desafiosoma.js
- alertsconfirmation.html
  - CSS: css/pages/alerts.css
  - JS: js/pages/alerts.js
- localizandovalorestable.html
  - CSS: css/pages/tabela.css
  - JS: js/pages/tabela.js
- utilizandoxpath.html
  - CSS: css/pages/xpath.css
  - JS: js/pages/xpath.js
- elementsweb.html
  - CSS: css/pages/elementsweb.css
  - JS: js/pages/elementsweb.js
  - Excecao obrigatoria: manter IDs reaproveitados
- geradorcpf.html
  - CSS: css/pages/gerador-cpf.css
  - JS: js/pages/gerador-cpf.js

## Checklist Rapido para Novas Mudancas
- Nao introduzir style inline.
- Nao introduzir onclick/onchange/oninput inline.
- Preservar IDs usados pelos exercicios/testes.
- Em elementsweb.html, nao normalizar IDs repetidos.
- Atualizar docs/tasks.json e docs/tasks-board.md quando concluir etapa.
- Executar checklist de regressao em docs/checklist-regressao.md.

## Procedimento de Evolucao
1. Criar branch de trabalho a partir de newlayout.
2. Aplicar mudanca por pagina (HTML + css/pages + js/pages).
3. Executar smoke desktop e mobile.
4. Registrar evidencias no checklist de regressao.
5. Atualizar status das tasks e notas de implementacao.
6. Commit e push com mensagem orientada a tarefa.

## Riscos Conhecidos e Mitigacoes
- Quebra de automacao por seletor:
  - Mitigar preservando IDs existentes e nomes dos campos.
- Regressao visual em mobile:
  - Mitigar validando viewport mobile apos cada pagina.
- Regressao funcional em dialogs:
  - Mitigar validando alert/confirm/prompt nas paginas de exercicio.

## Definicao de Pronto para Proximas Iteracoes
- Mudanca sem inline JS/CSS.
- Sem regressao funcional critica no smoke.
- Documentacao de status e checklist atualizada.
- Push realizado na branch de trabalho.
