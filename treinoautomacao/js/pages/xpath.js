(function () {
  var reserveButton = document.getElementById("btn-1234");
  var nome = document.getElementById("nome");
  var sobrenome = document.getElementById("sobrenome");
  var status = document.getElementById("xpath-status");
  var seats = document.querySelectorAll('input[name="chk"]');

  function seatCount() {
    var total = 0;
    var index;

    for (index = 0; index < seats.length; index += 1) {
      if (seats[index].checked) {
        total += 1;
      }
    }

    return total;
  }

  reserveButton.addEventListener("click", function () {
    var total = seatCount();
    var nomeCompleto = ((nome.value || "").trim() + " " + (sobrenome.value || "").trim()).trim();

    if (!nomeCompleto) {
      status.textContent = "Informe nome e sobrenome para reservar.";
      return;
    }

    if (total === 0) {
      status.textContent = "Selecione ao menos um assento para reservar.";
      return;
    }

    status.textContent = "Reserva realizada para " + nomeCompleto + " com " + total + " assento(s).";
  });
})();
