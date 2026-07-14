(function () {
  var emailInput = document.getElementById("txt01");
  var reserveButton = document.getElementById("btn-1234");
  var statusBox = document.getElementById("minha_div");
  var checkboxes = document.querySelectorAll('input[name="chk"]');

  function totalSelecionados() {
    var total = 0;
    var index;

    for (index = 0; index < checkboxes.length; index += 1) {
      if (checkboxes[index].checked) {
        total += 1;
      }
    }

    return total;
  }

  function pagina(url) {
    var selecionados = totalSelecionados();
    var email = (emailInput.value || "").trim();
    var mensagem = "Reserva a confirmar!";

    if (!email) {
      mensagem = "Informe um e-mail para concluir a reserva.";
    } else if (selecionados === 0) {
      mensagem = "Selecione pelo menos uma pessoa para reservar.";
    } else {
      mensagem = "Reserva enviada para " + email + " com " + selecionados + " selecao(oes).";
      if (url) {
        mensagem += " Destino: " + url;
      }
    }

    statusBox.textContent = mensagem;
  }

  reserveButton.addEventListener("click", function (event) {
    event.preventDefault();
    pagina("ReservaConfirmada.html");
  });

  // Mantem compatibilidade com o fluxo legado href=javascript:pagina(...)
  globalThis.pagina = pagina;
})();
