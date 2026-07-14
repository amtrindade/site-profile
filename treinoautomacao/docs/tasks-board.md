# Board Visual de Tasks - treinoautomacao

Fonte: docs/tasks.json
Modo: static-only (sem build)

## Resumo
- Total de tasks: 11
- not-started: 0
- in-progress: 0
- blocked: 0
- done: 11

## Kanban por Status
### not-started
- Nenhuma task

### in-progress
- Nenhuma task

### blocked
- Nenhuma task

### done
- [x] T0 - Baseline e mapeamento
- [x] T1 - Criar fundacao CSS estatica
- [x] T2 - Atualizar shell visual da home
- [x] T3 - Separar JS e CSS de desafiosoma
- [x] T4 - Separar JS e CSS de alertsconfirmation
- [x] T5 - Refatorar localizandovalorestable
- [x] T6 - Refatorar utilizandoxpath
- [x] T7 - Refatorar elementsweb com excecao didatica
- [x] T8 - Consolidar geradorcpf
- [x] T9 - Revisao de regressao manual
- [x] T10 - Fechamento e padronizacao

## Tabela de Acompanhamento
| ID | Titulo | Status | Dependencias | Criterio principal |
|---|---|---|---|---|
| T0 | Baseline e mapeamento | done | - | Checklist inicial preenchido |
| T1 | Criar fundacao CSS estatica | done | T0 | Arquivos CSS carregam via link tradicional |
| T2 | Atualizar shell visual da home | done | T1 | Home responsiva em desktop e mobile |
| T3 | Separar JS e CSS de desafiosoma | done | T1 | Sem style inline |
| T4 | Separar JS e CSS de alertsconfirmation | done | T1 | Eventos ligados por addEventListener |
| T5 | Refatorar localizandovalorestable | done | T1 | Tabela com markup consistente |
| T6 | Refatorar utilizandoxpath | done | T1 | Documento sem body duplicado |
| T7 | Refatorar elementsweb com excecao didatica | done | T1 | IDs reaproveitados preservados |
| T8 | Consolidar geradorcpf | done | T1 | CSS e JS externos |
| T9 | Revisao de regressao manual | done | T2, T3, T4, T5, T6, T7, T8 | Checklist preenchido com status por pagina |
| T10 | Fechamento e padronizacao | done | T9 | Padrao estatico respeitado |

## Ordem de Execucao Recomendada
T0 -> T1 -> T2 -> T3 -> T4 -> T5 -> T6 -> T7 -> T8 -> T9 -> T10

## Observacoes Importantes
- Projeto deve permanecer 100% estatico (sem bundler, transpiler ou pipeline de build).
- Em elementsweb.html, a reutilizacao de IDs deve ser preservada por requisito didatico do curso.
- Recomendacao: atualizar este board sempre que alterar o status no docs/tasks.json.
