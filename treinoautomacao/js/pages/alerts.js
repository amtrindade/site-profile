(function () {
  var alerta1 = document.getElementById("alerta1");
  var confirmacao1 = document.getElementById("confirmacao1");
  var alertaDelay = document.getElementById("alerta-delay");
  var confirmacaoDelay = document.getElementById("confirmacao-delay");

  function exibir(tipo) {
    if (tipo === "alerta") {
      globalThis.alert("Olá!!! Eu sou um alerta!!!");
      return;
    }

    if (tipo === "confirmacao") {
      globalThis.confirm("Olá!!! Eu sou a confirmação! Você vai fazer o que? (clicar em OK ou Cancelar?)");
    }
  }

  alerta1.addEventListener("click", function () {
    exibir("alerta");
  });

  confirmacao1.addEventListener("click", function () {
    exibir("confirmacao");
  });

  alertaDelay.addEventListener("click", function () {
    globalThis.setTimeout(function () {
      globalThis.alert("Olá!!! Eu sou um alerta com delay!!!");
    }, 2000);
  });

  confirmacaoDelay.addEventListener("click", function () {
    globalThis.setTimeout(function () {
      globalThis.confirm("Olá!!! Eu sou a confirmação com delay! Você vai fazer o que? Clicar em OK ou Cancelar?");
    }, 2000);
  });
})();
