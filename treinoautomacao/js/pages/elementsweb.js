(function () {
  var alertButton = document.querySelector('input[name="alertbtn"]');
  var confirmButton = document.querySelector('input[name="confirmbtn"]');
  var promptButton = document.querySelector('input[name="promptbtn"]');

  function alertFunction() {
    globalThis.alert("Eu sou um alerta!");
  }

  function confirmFunction() {
    globalThis.confirm("Pressione um botão!");
  }

  function promptFunction() {
    var person = globalThis.prompt("Por favor, insira seu nome:", "Chuck Norris");
    if (person !== null) {
      return "Olá " + person + "! Está tudo bem com você?";
    }
    return "";
  }

  if (alertButton) {
    alertButton.addEventListener("click", alertFunction);
  }
  if (confirmButton) {
    confirmButton.addEventListener("click", confirmFunction);
  }
  if (promptButton) {
    promptButton.addEventListener("click", promptFunction);
  }
})();
