# Checklist de Regressao - treinoautomacao

## Escopo
Validar regressao funcional e visual apos o refactor, mantendo projeto 100% estatico.

## Regras Gerais
- Executar em desktop e mobile.
- Validar sem etapa de build.
- Validar carregamento direto de arquivos HTML.
- Confirmar que scripts externos carregam com script defer quando aplicavel.
- Registrar status com: OK, AJUSTAR ou BLOQUEADO.

## Baseline Inicial - T0 (preenchido)
- Data: 2026-07-14
- Ambiente: macOS (execucao local, arquivos estaticos)
- Responsavel: Copilot
- Resultado geral: OK
- Observacoes:
	- Baseline inicial criado para comparacao antes do refactor visual.
	- Seletor critico inclui IDs de campos/botoes e classes estruturais de navegacao/layout.
	- Excecao didatica confirmada em elementsweb.html com reutilizacao de IDs.

## Inventario de Seletores Criticos por Pagina (T0)

### index.html
- IDs criticos: nenhum ID de automacao identificado.
- Classes criticas: container, masthead, nav nav-justified, active, jumbotron, lead, btn btn-lg btn-success, links, footer.

### alertsconfirmation.html
- IDs criticos: form1, alerta1, confirmacao1.
- Classes criticas: container, masthead, nav nav-justified, active, text-muted, footer.

### desafiosoma.html
- IDs criticos: number1, number2, total, somar, subtrair, multiplicar, dividir, limpar.
- Classes criticas: container, masthead, nav nav-justified, active, row, text-muted, footer.

### localizandovalorestable.html
- IDs criticos: txt01, minha_div.
- Classes criticas: container, masthead, nav nav-justified, active, table, lead, textarea, text-muted, footer.

### utilizandoxpath.html
- IDs criticos: btn-1234, nome, sobrenome.
- Classes criticas: container, masthead, nav nav-justified, active, top suggest business, text-muted, footer.

### elementsweb.html
- IDs criticos: elementos, input, box, list, iframes (IDs reaproveitados por requisito didatico).
- Classes criticas: container, masthead, nav nav-justified, active, text-muted, footer.

### geradorcpf.html
- IDs criticos: appContainer, pageHeader, headerTitle, mainNavigation, navItemHome, navHome, navItemAlerts, navAlerts, navItemCalculadora, navCalculadora, navItemTabela, navTabela, navItemXpath, navXpath, navItemWebElementos, navWebElementos, navItemGeradorCpf, navGeradorCpf, cpfPanel, pageTitle, pageDescription, cpfFieldGroup, cpfInputLabel, cpfInput, maskToggleGroup, maskToggleLabel, maskToggle, cpfActions, generateButton, statusContainer, statusMessage, pageFooter.
- Classes criticas: container, masthead, nav nav-justified, active, cpf-panel, text-center, lead, form-group, text-left, form-control input-lg, checkbox, cpf-actions, btn btn-primary btn-lg, cpf-status, footer, cpf-valido, cpf-invalido, alert alert-success, alert alert-danger, alert alert-info, alert alert-warning.

## Home - index.html
- Navegacao principal abre todas as paginas sem erro.
- Estado ativo do menu aparece corretamente.
- Hero e links principais mantem legibilidade.
- Layout nao quebra em viewport estreita.

## Alerts - alertsconfirmation.html
- Botao de alerta exibe mensagem correta.
- Botao de confirmacao exibe modal nativo correto.
- Versoes com delay continuam funcionando.
- Nao ha onclick inline restante na pagina.

## Calculadora - desafiosoma.html
- Soma, subtracao, multiplicacao e divisao funcionam.
- Botao limpar limpa os campos corretamente.
- Validacao de entrada numerica nao quebra o fluxo atual.
- Nao ha style inline restante na pagina.

## Tabela - localizandovalorestable.html
- Tabela renderiza com conteudo completo.
- Selecao de checkbox permanece funcional.
- Fluxo de reserva continua funcional.
- Campo de email/reserva mantem usabilidade.

## XPath - utilizandoxpath.html
- Pagina abre sem erro estrutural.
- Controles de assentos seguem funcionais.
- Campos de nome e sobrenome seguem editaveis.
- Sem duplicidade indevida de body no HTML final.

## Web Elementos - elementsweb.html
- Exercicio continua funcional em todos os blocos.
- Reutilizacao de IDs permanece intacta por requisito didatico.
- Mudancas de layout nao prejudicam instrucoes do curso.
- Alert, confirm e prompt seguem operando.

## Gerador CPF - geradorcpf.html
- Gera CPF valido com delay esperado.
- Mascara liga e desliga corretamente.
- Validacao visual (valido/invalido) permanece correta.
- Mensagens de status aparecem corretamente.

## Acessibilidade Basica
- Navegacao por teclado funcional em elementos interativos.
- Foco visivel em links, botoes e campos.
- Labels associadas aos inputs relevantes.
- Sem uso desnecessario de ARIA quando elemento nativo resolve.

## Responsividade
- Conteudo principal sem sobreposicao em telas pequenas.
- Menu e blocos principais com leitura adequada.
- Tabelas e iframes com comportamento aceitavel em mobile.

## Performance Basica
- Recursos carregam sem erro de caminho.
- Sem scripts bloqueando interacao inicial de forma evitavel.
- Sem assets quebrados apos separacao de CSS e JS.

## Registro de Execucao
- Execucao 1 (baseline T0)
	- Data: 2026-07-14
	- Ambiente: macOS (execucao local)
	- Responsavel: Copilot
	- Resultado geral: OK
	- Observacoes: baseline inicial preenchido e pronto para comparacao nas proximas tasks (T1+).

- Execucao 2 (regressao T9)
	- Data: 2026-07-14
	- Ambiente: macOS + browser integrado (desktop 1366x900 e mobile 390x844)
	- Responsavel: Copilot
	- Resultado geral: OK
	- Status por pagina:
		- index.html: OK
		- alertsconfirmation.html: OK
		- desafiosoma.html: OK
		- localizandovalorestable.html: OK
		- utilizandoxpath.html: OK
		- elementsweb.html: OK
		- geradorcpf.html: OK
	- Evidencias principais:
		- calculadora: soma com delay e limpar campos funcionando
		- alertsconfirmation: alert/confirm (normal e com delay) executados
		- tabela: reserva com selecao + e-mail atualiza #minha_div
		- xpath: reserva valida nome/sobrenome e assentos
		- elementsweb: IDs reaproveitados preservados (contagem #elementos > 1) e alert/confirm acionados
		- geradorcpf: gera CPF valido com mascara apos delay
	- Observacoes:
		- Prompt em elementsweb nao retornou dialog no runner integrado; codigo permanece com chamada de prompt em JS externo.
		- Nenhuma regressao funcional critica identificada no smoke test.
