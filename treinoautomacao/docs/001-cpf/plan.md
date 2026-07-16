# Plano de Implementacao - Pagina Gerador e Validador de CPF

## 1. Contexto
Projeto: `treinoautomacao`.

O projeto possui paginas HTML estaticas com Bootstrap (`css/bootstrap.css`) e navegacao central no topo (`nav nav-justified`).
A nova feature deve seguir esse padrao visual e estrutural, sem backend.

## 2. Objetivo da Feature
Criar uma nova pagina HTML para:
- Gerar CPF randomicamente e valido.
- Exibir o CPF em um campo de texto.
- Permitir alternar exibicao com mascara (`000.000.000-00`) ou sem mascara (`00000000000`) via checkbox.
- Validar CPF digitado ou gerado e sinalizar visualmente com borda verde (valido) ou vermelha (invalido).

## 3. Escopo
Inclui:
- Nova pagina HTML (sugestao: `geradorcpf.html`).
- JavaScript na propria pagina para geracao, validacao e formatacao.
- Feedback visual no TextField por classes CSS.
- Mensagens de sucesso/erro ao usuario (Bootstrap alert ou texto de status).
- Campos do formulario centralizados horizontalmente na pagina.
- Layout responsivo para uso em mobile.
- Seguir boas praticas de programacao e usabilidade.
- Inclusao de link da nova pagina no menu de `index.html`.

Nao inclui:
- Persistencia de dados.
- Integracao com API.
- Backend.
- Testes automatizados (apenas checklist manual).

## 4. Regras Funcionais
1. Campo CPF:
- Recebe valor digitado manualmente pelo usuario.
- Recebe valor gerado ao clicar no botao.

2. Botao "Gerar CPF":
- Gera CPF numericamente valido.
- Respeita estado do checkbox para aplicar/remover mascara.
- Atualiza feedback visual (verde quando valido).
- Ao clicar no botão, o site deverá demorar 3 segundos para apresentar o valor no campo de texto. Enquanto esses 3 segundos estão sendo aguardados, a seguinte mensagem, após clicar, deve aparecer no campo de texto: "Processando...""


3. Checkbox "Exibir mascara":
- Marcado: exibir como `999.999.999-99`.
- Desmarcado: exibir apenas numeros.
- Ao alternar, reaplica formatacao no valor atual.

4. Validacao visual:
- CPF valido: borda verde no campo.
- CPF invalido: borda vermelha no campo.
- Campo vazio: estado neutro (sem verde/vermelho).

## 5. Abordagem Tecnica
Arquivos previstos:
- `geradorcpf.html` (novo): estrutura da tela + script JS.
- `index.html` (alteracao): adicionar item de navegacao para a nova pagina.

Funcoes JavaScript previstas:
- `somenteDigitos(cpf)`
- `todosDigitosIguais(cpf)`
- `calcularDigito(cpfBase, pesoInicial)`
- `validarCpf(cpf)`
- `gerarCpfBase()`
- `gerarCpfValido()`
- `aplicarMascaraCpf(cpf11)`
- `removerMascaraCpf(valor)`
- `atualizarEstadoVisual(cpf)`
- `onGerarCpf()`
- `onToggleMascara()`
- `onInputCpf()`

Estrategia de UI:
- Manter layout de container + masthead + nav do projeto.
- Usar classes Bootstrap (`form-control`, `btn`, `alert`).
- Centralizar o bloco do formulario na pagina com grid/utilitarios Bootstrap.
- Garantir comportamento responsivo com largura fluida e ajuste em telas pequenas (mobile).
- Aplicar boas praticas de usabilidade: rotulos claros, mensagens objetivas, contraste adequado e feedback imediato.
- Criar classes CSS simples para estado do input:
  - `.cpf-valido` (borda verde)
  - `.cpf-invalido` (borda vermelha)

Boas praticas de programacao:
- Separar responsabilidades em funcoes pequenas e reutilizaveis.
- Evitar duplicacao de logica (geracao, validacao e formatacao desacopladas).
- Usar nomes de funcoes/variaveis descritivos.
- Tratar estados de erro e entrada invalida com seguranca.

## 6. Criterios de Aceitacao
CA-01: Existe nova pagina HTML acessivel pelo menu da Home.

CA-02: Ao clicar em "Gerar CPF", o campo recebe um CPF valido.

CA-03: Com checkbox marcado, CPF gerado aparece com mascara.

CA-04: Com checkbox desmarcado, CPF gerado aparece sem mascara.

CA-05: Ao digitar CPF valido manualmente, borda do campo fica verde.

CA-06: Ao digitar CPF invalido manualmente, borda do campo fica vermelha.

CA-07: Ao alternar checkbox, o valor atual no campo e reformatado sem perder validade.

CA-08: Se campo estiver vazio, sem borda verde/vermelha e sem erro bloqueante.

CA-09: Campos e botoes devem aparecer centralizados na pagina em desktop.

CA-10: A pagina deve se adaptar a mobile sem quebra de layout ou sobreposicao de elementos.

CA-11: Implementacao JavaScript deve seguir boas praticas (funcoes coesas, nomes claros e sem duplicacao desnecessaria).

CA-12: A interface deve seguir boas praticas de usabilidade (rotulos compreensiveis, feedback claro e leitura facilitada).

## 7. Ordem de Execucao Recomendada
1. Criar `geradorcpf.html` reaproveitando header/nav padrao.
2. Construir formulario (textfield, botao, checkbox, area de feedback).
3. Implementar funcoes utilitarias de CPF (limpeza, mascara, calculo de digitos).
4. Implementar fluxo de geracao.
5. Implementar fluxo de validacao em tempo real (evento `input`).
6. Implementar alternancia de mascara.
7. Aplicar feedback visual e mensagens.
8. Atualizar `index.html` com link da nova pagina.
9. Executar checklist manual de validacao.

## 8. Riscos e Mitigacoes
R-01: Implementacao incorreta do algoritmo de digito verificador.
- Mitigacao: validar com casos conhecidos em `cpf-regras.md`.

R-02: Aceitar CPFs com sequencias invalidas (ex.: `11111111111`).
- Mitigacao: regra explicita para rejeitar todos os digitos iguais.

R-03: Divergencia entre valor mascarado e validacao interna.
- Mitigacao: sempre validar a versao sem mascara (somente digitos).

R-04: Regressao visual no menu padrao.
- Mitigacao: alterar apenas 1 item no `index.html`, sem mexer na estrutura base.

R-05: Ambiguidade de estado visual quando campo vazio.
- Mitigacao: implementar estado neutro com remocao das classes de erro/sucesso.

## 9. Checklist Manual de Testes
- Gerar CPF com checkbox marcado: valor deve vir mascarado e valido.
- Gerar CPF com checkbox desmarcado: valor deve vir sem mascara e valido.
- Digitar CPF invalido: borda vermelha.
- Digitar CPF valido: borda verde.
- Alternar checkbox apos gerar valor: apenas formato muda, validade permanece.
- Limpar campo: estado visual volta ao neutro.
- Em desktop, formulario permanece centralizado.
- Em mobile, layout continua legivel e funcional sem quebrar alinhamento.
- Revisar codigo para funcoes pequenas, nomes claros e ausencia de duplicacao relevante.
- Validar se mensagens e labels estao claras para uso sem ambiguidade.
