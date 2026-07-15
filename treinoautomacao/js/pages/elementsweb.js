(function () {
  const alertButton = document.querySelector('input[name="alertbtn"]');
  const confirmButton = document.querySelector('input[name="confirmbtn"]');
  const promptButton = document.querySelector("#promptBtn");

  function alertFunction() {
    globalThis.alert("Eu sou um alerta!");
  }

  function confirmFunction() {
    globalThis.confirm("Pressione um botão!");
  }

  function promptValidationFunction() {
    let result;
    try {
      result = globalThis.prompt("Digite o ano:");
    } catch (error) {
      result = "";
    }

    if (globalThis.confirm("O ano é " + result + "?")) {
      globalThis.alert("Feito!");
      return;
    }

    globalThis.alert("Nada feito!");
  }

  if (alertButton) {
    alertButton.addEventListener("click", alertFunction);
  }
  if (confirmButton) {
    confirmButton.addEventListener("click", confirmFunction);
  }
  if (promptButton) {
    promptButton.addEventListener("click", promptValidationFunction);
  }
})();
