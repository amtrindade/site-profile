# Guia de Estilo - treinoautomacao

## 1. Objetivo
Definir convencoes para evoluir o projeto com qualidade, mantendo arquitetura 100% estatica por enquanto.

## 2. Regra de Arquitetura
- Projeto sem etapa de build.
- Sem bundler, transpiler ou preprocessador.
- HTML referencia CSS com link e JS com script defer.
- Cada pagina pode ter seu JS dedicado em js/pages.

## 3. Convencoes de HTML
- Usar DOCTYPE html5.
- Usar lang pt-BR.
- Manter estrutura semantica quando possivel: header, nav, main, section, footer.
- Evitar style inline.
- Evitar atributos de evento inline, como onclick e onsubmit.
- Preservar IDs e seletores necessarios para automacao e exercicios.

Excecao didatica obrigatoria:
- Em elementsweb.html, a reutilizacao de IDs deve ser mantida como parte do exercicio do curso.
- Nessa pagina, nao normalizar IDs para unicos se isso alterar o enunciado ou os testes do curso.

## 4. Convencoes de CSS
- Organizar em camadas:
  - base.css: reset leve, tipografia, tokens
  - layout.css: grid, containers, nav, espacamentos
  - components.css: botoes, formularios, cards, tabelas
  - pages/*.css: ajustes especificos por pagina
- Preferir classes semanticas para estilo.
- Evitar seletores por ID, salvo necessidade de compatibilidade didatica.
- Priorizar mobile-first.
- Garantir foco visivel para elementos interativos.

## 5. Convencoes de JavaScript
- Separar por pagina em js/pages.
- Usar addEventListener em vez de handlers inline.
- Evitar variaveis globais desnecessarias.
- Criar funcoes pequenas e com nomes descritivos.
- Tratar entradas invalidas sem quebrar o fluxo.
- Nao depender de ferramentas de build para executar scripts.

## 6. Nomenclatura
- Arquivos: kebab-case.
- Classes CSS: kebab-case com prefixo de contexto quando util.
- IDs: manter os existentes quando usados por exercicios/testes.
- Funcoes JS: nomes claros orientados a acao.

## 7. Acessibilidade e Usabilidade
- Labels explicitas para campos.
- Contraste minimo adequado de texto e controles.
- Estados visuais claros: hover, focus, disabled e erro.
- ARIA somente quando elemento nativo nao resolver.

## 8. Responsividade
- Validar ao menos em dois cenarios:
  - desktop
  - mobile
- Evitar largura fixa rigida em componentes principais.
- Tratar tabelas e iframes para nao quebrar layout em telas pequenas.

## 9. Qualidade e Regressao
- Toda mudanca deve rodar checklist em docs/checklist-regressao.md.
- Confirmar que links entre paginas seguem funcionais.
- Confirmar que exercicios continuam reproduzindo o comportamento esperado.
- Em elementsweb.html, validar explicitamente preservacao da reutilizacao de IDs.

## 10. Padrao de Inclusao de Arquivos
Exemplo de CSS global e pagina:

```html
<link rel="stylesheet" href="css/base.css">
<link rel="stylesheet" href="css/layout.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/pages/home.css">
```

Exemplo de JS por pagina:

```html
<script defer src="js/pages/home.js"></script>
```
