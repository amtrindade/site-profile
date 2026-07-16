# Board Visual de Tasks - Refactor de Menu (Canonical Cycle)

Fonte: docs/002-menu-canonical-cycle/tasks.json
Projeto: treinoautomacao
Ciclo: C0-C6
Modo: static-only (sem build)

## Resumo
- Total de tasks: 10
- not-started: 0
- in-progress: 0
- blocked: 0
- done: 10

## Kanban por Status
### not-started
- Nenhuma task

### in-progress
- Nenhuma task

### blocked
- Nenhuma task

### done
- [x] C0-T1 - Inventariar menus duplicados
- [x] C1-T1 - Fechar decisao tecnica
- [x] C2-T1 - Criar fragmento oficial de menu
- [x] C2-T2 - Implementar loader compartilhado
- [x] C3-T1 - Migrar index para slot
- [x] C3-T2 - Migrar demais paginas para slot
- [x] C3-T3 - Ajustar responsividade do menu sem corte
- [x] C4-T1 - Executar regressao funcional de navegacao
- [x] C5-T1 - Documentar manutencao do menu
- [x] C6-T1 - Fechar ciclo e atualizar board

## Tabela de Acompanhamento
| ID | Fase | Titulo | Status | Dependencias | Esforco | Risco |
|---|---|---|---|---|---|---|
| C0-T1 | C0 | Inventariar menus duplicados | done | - | S | Baixo |
| C1-T1 | C1 | Fechar decisao tecnica | done | C0-T1 | S | Baixo |
| C2-T1 | C2 | Criar fragmento oficial de menu | done | C1-T1 | S | Medio |
| C2-T2 | C2 | Implementar loader compartilhado | done | C2-T1 | M | Medio |
| C3-T1 | C3 | Migrar index para slot | done | C2-T2 | S | Medio |
| C3-T2 | C3 | Migrar demais paginas para slot | done | C3-T1 | M | Alto |
| C3-T3 | C3 | Ajustar responsividade do menu sem corte | done | C3-T2 | S | Medio |
| C4-T1 | C4 | Executar regressao funcional de navegacao | done | C3-T2, C3-T3 | S | Medio |
| C5-T1 | C5 | Documentar manutencao do menu | done | C4-T1 | S | Baixo |
| C6-T1 | C6 | Fechar ciclo e atualizar board | done | C5-T1 | S | Baixo |

## Ordem de Execucao Recomendada
C0-T1 -> C1-T1 -> C2-T1 -> C2-T2 -> C3-T1 -> C3-T2 -> C3-T3 -> C4-T1 -> C5-T1 -> C6-T1

## Criterios de Validacao em Destaque
- Menu com unica fonte de verdade (fragmento compartilhado)
- Estado ativo com aria-current por pagina
- Sem duplicacao hardcoded de menu nos HTMLs principais
- Sem corte/ocultacao de texto de links em viewport reduzido

## Riscos Prioritarios
- R1: fetch de fragmento pode falhar em file://
- R2: perda de consistencia visual do masthead
- R3: estado ativo incorreto por pagina
- R4: texto de links longos cortado em telas menores

## Observacoes Operacionais
- Atualizar este board sempre que houver mudanca de status no tasks.json do ciclo.
- Manter o projeto 100% estatico (sem bundler, transpiler ou pipeline de build).

## Fechamento do Ciclo
- Status final: concluido.
- Implementacao entregue com menu compartilhado em fonte unica.
- Validacao registrada para estado ativo, links e responsividade sem corte de texto.
