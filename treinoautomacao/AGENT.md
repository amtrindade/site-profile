# AGENT.md

Guia de contexto e execucao para agentes de IA que implementarem novas funcionalidades neste projeto.

## 1. Missao do Projeto

Este repositorio e um campo de treinamento para automacao de testes funcionais em paginas web estaticas.

Seu objetivo como agente e evoluir funcionalidades sem quebrar o valor didatico dos exercicios e sem degradar a estabilidade dos seletores usados em automacao.

## 2. Contexto Funcional

Cada pagina representa um cenario de treino de automacao.

- index.html: entrada principal e navegacao.
- alertsconfirmation.html: alert/confirm com e sem delay.
- desafiosoma.html: operacoes de calculadora.
- localizandovalorestable.html: interacao com tabela.
- utilizandoxpath.html: treino de localizacao por XPath.
- elementsweb.html: elementos diversos e popups.
- geradorcpf.html: fluxo de validacao/geracao de CPF.

## 3. Stack Detalhada

### Arquitetura

- Aplicacao web 100% estatica.
- Sem backend.
- Sem build pipeline.
- Sem bundler/transpiler.
- Execucao direta no navegador.

### Front-end

- HTML5 para estrutura das paginas.
- CSS3 em camadas:
  - css/base.css
  - css/layout.css
  - css/components.css
  - css/pages/*.css
- JavaScript Vanilla por pagina:
  - js/pages/*.js
  - IIFE para encapsulamento
  - addEventListener para eventos

### Dependencias

- Bootstrap CSS local: css/bootstrap.css (legado visual).
- Sem frameworks JS externos.

### Tooling

- Repositorio Git.
- Documentacao de planejamento e regressao em docs/.

## 4. Regras Nao Negociaveis

- Nao introduzir etapa de build.
- Nao mover o projeto para framework SPA.
- Nao adicionar dependencia JS pesada sem necessidade real.
- Nao quebrar IDs/seletores usados em automacao.
- Nao voltar a usar JS inline e CSS inline.

Excecao didatica obrigatoria:

- Em elementsweb.html, manter reutilizacao de IDs por compatibilidade com exercicio do curso.

## 5. Contrato de Implementacao para IA

Ao criar nova funcionalidade, seguir obrigatoriamente:

1. Estrutura
- Atualizar HTML da pagina alvo mantendo semantica.
- Colocar estilo em css/pages/<pagina>.css.
- Colocar comportamento em js/pages/<pagina>.js.

2. JavaScript
- Usar addEventListener.
- Evitar variaveis globais.
- Tratar entradas invalidas com feedback claro.
- Preservar compatibilidade de seletores existentes.

3. CSS
- Reutilizar tokens e componentes globais existentes.
- Preferir classes para estilo.
- Manter layout responsivo (mobile e desktop).
- Garantir foco visivel em elementos interativos.

4. Qualidade
- Validar fluxo principal da pagina alterada.
- Executar checklist de regressao.
- Nao introduzir regressao funcional em outras paginas.

5. Documentacao
- Atualizar docs/tasks.json quando houver nova tarefa.
- Atualizar docs/tasks-board.md com status.
- Registrar validacoes em docs/checklist-regressao.md.

## 6. Processo Recomendado de Trabalho

1. Ler contexto em docs/guia-estilo.md e docs/manutencao-refactor.md.
2. Mapear IDs/seletores impactados antes de editar.
3. Implementar mudancas minimas necessarias.
4. Validar desktop e mobile.
5. Atualizar documentacao operacional.

## 7. Padrao de Entrega Esperado

Toda entrega de IA deve informar:

- O que foi alterado (arquivos e comportamento).
- Qual risco de regressao existe.
- Quais checks foram executados.
- Se houve impacto em seletores de automacao.

## 8. Escopo de Evolucao Aceito

Permitido:

- Novas paginas de treino.
- Novos componentes reutilizaveis CSS.
- Novos cenarios didaticos de automacao funcional.
- Melhorias de acessibilidade e responsividade.

Nao permitido sem alinhamento explicito:

- Mudanca de arquitetura para app com build.
- Introducao de backend.
- Alteracao de comportamento didatico existente sem justificativa.

## 9. Fontes de Verdade do Projeto

- docs/guia-estilo.md
- docs/manutencao-refactor.md
- docs/checklist-regressao.md
- docs/tasks.json
- docs/tasks-board.md
- docs/plan.md
