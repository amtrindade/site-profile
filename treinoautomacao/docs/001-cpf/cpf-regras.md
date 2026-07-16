# Regras de Implementacao de CPF (Pesquisa Tecnica)

## 1. Estrutura
- CPF possui 11 digitos numericos.
- Os 9 primeiros sao base.
- Os 2 ultimos sao digitos verificadores (DV1 e DV2).

Formato comum com mascara:
- `XXX.XXX.XXX-YY`

Formato sem mascara:
- `XXXXXXXXXXX`

## 2. Regras de Validacao
Antes de calcular os DVs:
1. Remover todos os caracteres nao numericos.
2. Verificar se restaram exatamente 11 digitos.
3. Rejeitar CPFs com todos os digitos iguais:
   - `00000000000`, `11111111111`, ..., `99999999999`.

## 3. Calculo do Primeiro Digito Verificador (DV1)
Considere os 9 primeiros digitos: `d1 d2 d3 d4 d5 d6 d7 d8 d9`.

1. Multiplicar cada digito pelos pesos de 10 ate 2:
- `d1*10 + d2*9 + d3*8 + d4*7 + d5*6 + d6*5 + d7*4 + d8*3 + d9*2`

2. Calcular o resto da divisao por 11:
- `resto = soma % 11`

3. Definir DV1:
- Se `resto < 2`, entao `DV1 = 0`
- Senao, `DV1 = 11 - resto`

## 4. Calculo do Segundo Digito Verificador (DV2)
Agora use os 9 digitos + DV1.

1. Multiplicar pelos pesos de 11 ate 2:
- `d1*11 + d2*10 + d3*9 + d4*8 + d5*7 + d6*6 + d7*5 + d8*4 + d9*3 + DV1*2`

2. Calcular o resto da divisao por 11:
- `resto = soma % 11`

3. Definir DV2:
- Se `resto < 2`, entao `DV2 = 0`
- Senao, `DV2 = 11 - resto`

## 5. Regra Final de Validade
Um CPF e valido quando:
- Passa nas validacoes iniciais (11 digitos + nao repetido), e
- DV1 calculado confere com o 10o digito, e
- DV2 calculado confere com o 11o digito.

## 6. Geracao de CPF Valido
Procedimento para gerar:
1. Gerar randomicamente 9 digitos base.
2. Calcular DV1.
3. Calcular DV2.
4. Concatenar `base + DV1 + DV2`.
5. Se resultado tiver todos os digitos iguais, regenerar.

## 7. Casos de Referencia para Teste
Exemplos geralmente aceitos como validos em validadores de mercado:
- `52998224725`
- `12345678909`

Exemplos invalidos:
- `11111111111` (repetido)
- `12345678900` (DV incorreto)

## 8. Observacoes de Implementacao no Frontend
- Sempre validar usando apenas digitos (sem pontos e traco).
- Mascara e apenas camada de apresentacao.
- Ao alternar checkbox de mascara, nunca recalcular DVs, apenas reformatar o mesmo valor.
