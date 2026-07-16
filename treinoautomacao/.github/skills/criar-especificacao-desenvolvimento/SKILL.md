---
name: criar-especificacao-desenvolvimento
description: 'Criar nova especificacao de desenvolvimento no padrao do projeto. Use quando solicitar: criar especificacao, nova especificacao, planejar funcionalidade, gerar plan.md e tasks.json, criar artefatos em docs/NNN-<tema>-canonical-cycle.'
argument-hint: 'Tema da especificacao e escopo (ex.: dark mode, refactor menu, nova feature)'
user-invocable: true
---

# Criar Especificacao de Desenvolvimento

Cria especificacoes padronizadas para o projeto com os mesmos artefatos ja utilizados nos ciclos anteriores.

## Quando usar
- Pedido para criar nova especificacao.
- Pedido para planejar nova funcionalidade.
- Pedido para gerar artefatos de ciclo em docs.
- Pedido para seguir o mesmo padrao de alteracoes anteriores.

## Saida esperada
- Pasta: `docs/NNN-<tema>-canonical-cycle/`
- Arquivos obrigatorios:
  - `README.md`
  - `plan.md`
  - `tasks.json`

### Convencao de numeracao (obrigatoria)
- O nome da pasta deve iniciar com indice numerico de 3 digitos: `001`, `002`, `003`...
- O indice deve seguir a ordem cronologica de criacao das pastas em `docs`.
- Para nova especificacao, calcular `proximo_indice = maior_indice_existente + 1`.
- Exemplo: se a maior pasta for `004-dark-mode-canonical-cycle`, a proxima deve ser `005-<tema>-canonical-cycle`.

## Procedimento
1. Descobrir padrao existente
- Ler ciclos anteriores em `docs/[0-9][0-9][0-9]-*/`.
- Reusar estrutura de secoes, convencoes de IDs e metadados.

2. Consolidar contexto tecnico
- Mapear arquivos impactados no workspace.
- Registrar riscos tecnicos e regressao esperada.
- Levantar referencias externas (MDN/web.dev/GitHub) somente quando o usuario solicitar explicitamente.

3. Fechar especificacao antes de gerar artefatos
- Submeter escopo para aprovacao do usuario (obrigatorio).
- Confirmar decisoes de produto/UX que impactem requisitos (ex.: manual vs automatico, com ou sem fallback especifico).

4. Gerar artefatos no padrao do projeto
- Criar pasta com indice sequencial no formato `docs/NNN-<tema>-canonical-cycle/`.
- Criar `README.md` com objetivo, artefatos e referencias internas.
- Criar `plan.md` com, no minimo:
  - contexto
  - objetivo
  - escopo (inclui/nao inclui)
  - requisitos funcionais (RF-XX)
  - diretrizes
  - impacto tecnico
  - abordagem canonical cycle (C0-C6)
  - criterios de aceite (CA-XX)
  - riscos e mitigacoes
  - ordem de execucao
  - entregaveis
- Criar `tasks.json` com:
  - metadados (`feature`, `project`, `summary`, `constraints`, `deliverables`)
  - tarefas por fase (`C0-T1`, `C1-T1`...)
  - dependencias (`dependsOn`)
  - criterios de aceite por tarefa
  - `executionOrder`
  - `keyRisks`

5. Verificacao de qualidade
- Garantir consistencia entre `plan.md` e `tasks.json`.
- Garantir rastreabilidade: RF -> tarefas -> CA.
- Garantir que o escopo aprovado pelo usuario foi respeitado.
- Garantir linguagem clara e acionavel em pt-BR.

6. Entrega final
- Informar caminhos dos arquivos criados.
- Resumir decisoes aprovadas e itens fora de escopo.
- Sugerir proximo passo natural (iniciar execucao C0/C1).

## Regras de decisao
- Se nao houver padrao previo no repo: criar estrutura baseline acima e sinalizar que e primeira versao.
- Se nao houver nenhuma pasta numerada em `docs`, iniciar por `001-<tema>-canonical-cycle`.
- Se houver mais de um padrao conflitante: priorizar o mais recente entre pastas `docs/NNN-*`.
- Aprovacao do escopo e sempre obrigatoria antes de criar artefatos finais em docs.
- Se pedido for somente rascunho: gerar apenas especificacao e aguardar comando para criar arquivos.

## Checklist rapido de conclusao
- [ ] Usuario aprovou escopo.
- [ ] Pasta de ciclo criada no padrao canonical.
- [ ] `README.md`, `plan.md`, `tasks.json` criados.
- [ ] IDs RF/CA e IDs de task coerentes.
- [ ] Dependencias e ordem de execucao validas.
- [ ] Entrega final com resumo e proximo passo.
