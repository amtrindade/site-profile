# Plano de Refactor de Layout - treinoautomacao

## 1. Objetivo
Modernizar o layout e a arquitetura front-end do projeto treinoautomacao, melhorando:
- organizacao de codigo (separacao HTML, CSS e JavaScript)
- consistencia visual entre paginas
- responsividade e experiencia em mobile
- acessibilidade basica
- facilidade de manutencao e evolucao

Este plano foi elaborado a partir do estado atual do projeto e de boas praticas publicadas em MDN e web.dev.

## 2. Diagnostico Atual (estado real do projeto)
Principais pontos encontrados:
- estrutura HTML antiga em algumas paginas (exemplo: DOCTYPE XHTML transitional)
- JavaScript inline dentro de varias paginas
- manipulacao de eventos via atributos inline (onclick) em varios pontos
- estilos inline no HTML (style em elementos)
- reutilizacao de IDs para multiplos blocos em uma mesma pagina (risco de conflito), com excecao didatica intencional em elementsweb.html
- mistura de estrutura de layout com conteudo e comportamento
- inconsistencias de semantica HTML (tags e hierarquia)
- navegacao repetida manualmente em todas as paginas

Impacto:
- manutencao cara
- chance maior de regressao
- dificuldade para escalar visualmente
- base menos amigavel para testes automatizados de UI

## 3. Principios de Refactor (boas praticas)
Referencias sintetizadas:
- MDN (HTML): usar HTML5 valido, semantico, bem estruturado e sem inline desnecessario.
- MDN (JavaScript): evitar handlers inline, preferir addEventListener e scripts externos.
- MDN (Acessibilidade/ARIA): preferir elementos nativos semanticos antes de ARIA; no ARIA e melhor que ARIA incorreto.
- web.dev (CSS e Performance): layout moderno com Flexbox/Grid, cascata controlada, foco em responsividade e Core Web Vitals.

Diretrizes para este projeto:
- separar responsabilidades: estrutura (HTML), apresentacao (CSS), comportamento (JS)
- reduzir acoplamento entre paginas
- manter ids estaveis e previsiveis para automacao de testes
- manter a reutilizacao de IDs em elementsweb.html por ser requisito de exercicio do curso (excecao controlada)
- priorizar semantica e acessibilidade basica
- adotar padrao visual unico e moderno para todas as telas

## 4. Estrutura de Pastas Proposta
Sugestao de organizacao para o refactor:

- css/
  - base.css
  - layout.css
  - components.css
  - pages/
    - home.css
    - alerts.css
    - calculadora.css
    - tabela.css
    - xpath.css
    - elementos.css
    - gerador-cpf.css
- js/
  - core/
    - dom.js
    - events.js
    - formatters.js
  - pages/
    - alerts.js
    - calculadora.js
    - tabela.js
    - xpath.js
    - elementos.js
    - gerador-cpf.js
- partials/
  - header.html (opcional para reaproveitar navegacao em build futuro)

Observacao:
Se voce quiser manter o projeto 100% estatico sem etapa de build, ainda vale separar os arquivos por pagina e importar via script defer e link de stylesheet.

## 5. Arquitetura Front-end Recomendada
### 5.1 HTML
- Migrar todas as paginas para DOCTYPE html5.
- Garantir uso de main, header, nav, section, footer quando fizer sentido.
- Remover style inline e handlers inline.
- Revisar hierarquia de headings (h1, h2, h3) por pagina.
- Padronizar metatags e idioma (lang pt-BR).

### 5.2 CSS
- Criar tokens visuais com custom properties no base.css:
  - cores, espacamentos, tipografia, radius, sombras.
- Organizar CSS em camadas: base, layout e componentes.
- Padronizar classes utilitarias para espacamento e grid.
- Evitar seletores de alta especificidade e dependencia de IDs para estilo (mantendo a excecao didatica de elementsweb.html).
- Garantir breakpoints mobile-first.

### 5.3 JavaScript
- Criar um arquivo JS por pagina para desacoplar comportamentos.
- Substituir onclick, onsubmit e similares por addEventListener.
- Evitar funcoes globais quando nao for necessario.
- Encapsular regras em funcoes pequenas e testaveis.
- Usar validacao defensiva de input e mensagens de feedback claras.

## 6. Direcao Visual Moderna (layout)
Proposta de linguagem visual:
- tema claro com contraste alto e paleta neutra com uma cor de destaque
- tipografia mais contemporanea e legivel
- navegacao com melhor estado ativo e hover
- cards para agrupar exercicios/paginas
- espacamento vertical mais generoso
- botoes e campos com estados visuais consistentes (focus, hover, disabled)
- microanimacoes discretas (transicao de hover/focus, entrada suave de blocos)

Resultado esperado:
- interface com aparencia mais atual sem perder foco didatico do treino de automacao

## 7. Plano de Execucao por Fases
### Fase 0 - Baseline e seguranca
- criar branch de refactor
- mapear ids e seletores atualmente usados em scripts/testes
- registrar screenshots atuais (antes/depois)

Entregavel:
- inventario de seletores criticos

### Fase 1 - Fundacao de estilo e layout
- criar base.css, layout.css e components.css
- definir tokens de design (cor, espaco, radius, tipografia)
- padronizar container, header, nav, footer
- aplicar novo shell visual em index.html

Entregavel:
- home com novo layout e base reutilizavel pronta

### Fase 2 - Separacao de responsabilidades
- remover CSS inline das paginas
- mover scripts inline para js/pages
- incluir scripts com defer
- padronizar estrutura semantica basica em todas as paginas

Entregavel:
- todas as paginas com HTML limpo + CSS/JS externos

### Fase 3 - Refactor funcional por pagina
- alertsconfirmation: separar logica de alert/confirm
- desafiosoma: separar calculo e validacao de input
- localizandovalorestable: melhorar semantica de tabela e acao de reserva
- utilizandoxpath: corrigir estrutura de body duplicado e organizar campos
- elementsweb: reduzir inline, corrigir heading/semantica e layout, preservando reutilizacao de IDs para manter o exercicio proposto
- geradorcpf: mover style e script para arquivos dedicados

Entregavel:
- paginas modernizadas sem mudar comportamento funcional esperado

### Fase 4 - Acessibilidade e performance
- garantir labels em campos de formulario
- revisar navegacao por teclado e estado de foco visivel
- usar atributos ARIA apenas quando necessario
- reduzir bloqueios de render (scripts defer, CSS enxuto)
- validar LCP, CLS e INP com Lighthouse/PageSpeed

Entregavel:
- checklist de acessibilidade/performance com status

### Fase 5 - Qualidade e fechamento
- revisar consistencia visual geral
- revisar regressao funcional manual
- revisar markup com validador HTML
- documentar padrao para proximas paginas

Entregavel:
- release de refactor com documentacao de manutencao

## 8. Boas praticas objetivas (para aplicar durante o refactor)
- Nao usar JavaScript inline em HTML.
- Nao usar style inline em HTML.
- Nao estilizar componentes por ID quando classe resolver (exceto quando o exercicio de elementsweb.html exigir manter IDs reaproveitados).
- Usar classes com nome semantico e padrao consistente.
- Evitar duplicacao de codigo entre paginas.
- Evitar valores magicos repetidos de espacamento e cor.
- Garantir foco visivel para elementos interativos.
- Usar texto de botao e rotulos claros para treino e testes.
- Tratar erros de entrada com feedback direto ao usuario.
- Preservar seletores relevantes para automacao (ou versionar mudanca de seletores).

## 9. Criterios de Aceite do Refactor
- 100% das paginas principais usam CSS e JS externos.
- Nenhuma pagina principal com onclick inline ou style inline.
- Header/nav/footer com visual e espacamento consistentes.
- Layout responsivo funcional em mobile e desktop.
- Sem regressao funcional dos exercicios atuais.
- Reutilizacao de IDs em elementsweb.html preservada por compatibilidade com o exercicio do curso.
- Melhor leitura de codigo e manutencao comprovada por estrutura de pastas.

## 10. Backlog Sugerido (ordem recomendada)
1. index.html (base visual e shell)
2. desafiosoma.html (caso simples para padrao JS por pagina)
3. alertsconfirmation.html (eventos e feedback)
4. localizandovalorestable.html (tabela e formulario)
5. utilizandoxpath.html (correcao estrutural)
6. elementsweb.html (pagina maior e mais sensivel)
7. geradorcpf.html (consolidacao final de padrao)

## 11. Riscos e mitigacoes
Risco: quebra de scripts de automacao por mudanca de seletor.
Mitigacao: manter IDs atuais quando possivel, adicionar data-testid quando necessario.

Risco: regressao visual em telas menores.
Mitigacao: validacao mobile-first por pagina em cada fase.

Risco: alterar comportamento funcional sem querer.
Mitigacao: checklist de regressao por pagina antes do merge.

## 12. Sugestao de proximos artefatos
Para executar este plan de forma controlada, sugiro criar em seguida:
- tasks.json com tarefas por fase e dependencias
- checklist-regressao.md por pagina
- guia-estilo.md com convencoes CSS e JS do projeto

## 13. Referencias de boas praticas usadas
- MDN Web Docs - HTML basics e estrutura semantica
- MDN Web Docs - JavaScript no HTML (scripts externos e addEventListener)
- MDN Web Docs - ARIA (usar HTML nativo antes de ARIA)
- web.dev - Learn CSS (layout, cascade, especificidade, focus)
- web.dev - Performance e Core Web Vitals (LCP, CLS, INP)
