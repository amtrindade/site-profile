(function () {
  var number1 = document.getElementById("number1");
  var number2 = document.getElementById("number2");
  var total = document.getElementById("total");
  var somar = document.getElementById("somar");
  var subtrair = document.getElementById("subtrair");
  var multiplicar = document.getElementById("multiplicar");
  var dividir = document.getElementById("dividir");
  var limpar = document.getElementById("limpar");

  function lerNumero(input) {
    var valor = Number.parseFloat(input.value);
    if (Number.isNaN(valor)) {
      return 0;
    }
    return valor;
  }

  function limparCampos() {
    total.value = "";
    number1.value = "";
    number2.value = "";
  }

  function somarValores() {
    total.value = lerNumero(number1) + lerNumero(number2);
  }

  function subtrairValores() {
    total.value = lerNumero(number1) - lerNumero(number2);
  }

  function multiplicarValores() {
    total.value = lerNumero(number1) * lerNumero(number2);
  }

  function dividirValores() {
    total.value = lerNumero(number1) / lerNumero(number2);
  }

  somar.addEventListener("click", function () {
    globalThis.setTimeout(somarValores, 2000);
  });
  subtrair.addEventListener("click", subtrairValores);
  multiplicar.addEventListener("click", multiplicarValores);
  dividir.addEventListener("click", dividirValores);
  limpar.addEventListener("click", limparCampos);
})();
