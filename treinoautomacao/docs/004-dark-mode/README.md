# Proxima Implementacao - Dark Mode (Canonical Cycle)

Este ciclo define a implementacao de dark mode nas paginas do projeto com alternancia manual por icone (lua/sol), preservando o comportamento atual da navegacao e das rotas.

## Objetivo
- adicionar alternancia claro/escuro no menu compartilhado.
- persistir preferencia do usuario entre paginas e recarregamentos.
- reduzir flicker visual na carga inicial.
- manter o projeto 100% estatico (HTML/CSS/JS vanilla).

## Artefatos do ciclo
- plan.md: estrategia, escopo, arquitetura, riscos e criterios de aceite.
- tasks.json: backlog executavel com dependencias, ordem e validacoes.

## Referencias internas
- partials/main-menu.html
- js/core/menu-loader.js
- css/base.css
- css/layout.css
- css/components.css
- css/pages/gerador-cpf.css
- css/justified-nav.css
