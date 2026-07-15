# treinoautomacao

Campo de treinamento para praticas de automacao de testes funcionais em interfaces web.

## Visao Conceitual

Este projeto e um laboratorio didatico com paginas independentes que simulam cenarios classicos de teste funcional de UI, como:

- alertas e confirmacoes
- calculo com entradas numericas
- localizacao e interacao com tabelas
- localizacao de elementos via XPath
- interacao com diferentes tipos de elementos de formulario
- validacao e geracao de CPF

O objetivo central e permitir treino repetivel de seletores, comandos de automacao, validacoes de comportamento e regressao visual/funcional sem dependencia de backend.

## Objetivo de Aprendizado

- Praticar automacao funcional ponta a ponta em paginas estaticas.
- Exercitar localizacao de elementos por ID, name, classe, texto, CSS e XPath.
- Validar fluxos com estados assincronos simples (ex.: delay em alertas e geracao de CPF).
- Reforcar boas praticas de manutencao front-end para estabilidade dos testes.

## Stack Detalhada

### Runtime e Arquitetura

- Front-end 100% estatico (sem backend).
- Sem build pipeline.
- Sem bundler, transpiler ou preprocessador.
- Execucao direta no navegador.

### Tecnologias Base

- HTML5 (idioma pt-BR, estrutura semantica quando aplicavel).
- CSS3 com organizacao em camadas:
  - css/base.css
  - css/layout.css
  - css/components.css
  - css/pages/*.css
- JavaScript Vanilla (sem frameworks), com scripts por pagina em js/pages/*.js.

### Bibliotecas e Compatibilidade

- Bootstrap CSS legado local em css/bootstrap.css (apoio visual e componentes base).
- Estilo de codificacao JS orientado a ampla compatibilidade:
  - IIFE por pagina
  - addEventListener
  - APIs nativas do navegador

### Organizacao de Pastas

- Paginas HTML na raiz (cada treino como ponto de entrada).
- Estilos compartilhados em css/.
- Estilos especificos em css/pages/.
- Scripts especificos em js/pages/.
- Documentacao operacional em docs/.

## Regras de Arquitetura

- Manter separacao de responsabilidades: HTML (estrutura), CSS (estilo), JS (comportamento).
- Evitar CSS inline e handlers inline (onclick, onsubmit etc.).
- Carregar JS externo com script defer.
- Preservar IDs e seletores usados nos exercicios e na automacao.

Excecao didatica obrigatoria:

- Em elementsweb.html, a reutilizacao de IDs deve ser preservada para manter o comportamento original do exercicio do curso.

## Paginas Principais

- index.html: home e navegacao do laboratorio.
- alertsconfirmation.html: fluxos de alert e confirm (com e sem delay).
- desafiosoma.html: calculadora com operacoes basicas.
- localizandovalorestable.html: treino de tabela e acao de reserva.
- utilizandoxpath.html: treino de localizacao por XPath e validacao de formulario.
- elementsweb.html: treino amplo de elementos web e popups.
- geradorcpf.html: validacao, mascara e geracao de CPF.

## Como Usar Localmente

1. Abra a pasta do projeto no VS Code.
2. Abra index.html no navegador (ou use um servidor estatico simples).
3. Navegue pelos cenarios e execute seus scripts de automacao.

## Qualidade e Regressao

Antes de concluir qualquer mudanca:

- Executar checklist em docs/checklist-regressao.md.
- Validar desktop e mobile.
- Confirmar que fluxos funcionais das paginas alteradas permanecem estaveis.
- Atualizar docs/tasks.json e docs/tasks-board.md quando houver nova iteracao.

## Documentacao de Referencia

- docs/guia-estilo.md
- docs/manutencao-refactor.md
- docs/checklist-regressao.md
- docs/plan.md
- docs/tasks.json
