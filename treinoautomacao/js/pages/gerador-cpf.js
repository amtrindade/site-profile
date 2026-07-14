(function () {
  var cpfInput = document.getElementById("cpfInput");
  var maskToggle = document.getElementById("maskToggle");
  var generateButton = document.getElementById("generateButton");
  var statusContainer = document.getElementById("statusContainer");
  var pendingGenerationId = null;

  function somenteDigitos(cpf) {
    return (cpf || "").replace(/\D/g, "");
  }

  function todosDigitosIguais(cpf) {
    return /^(\d)\1{10}$/.test(cpf);
  }

  function calcularDigito(cpfBase, pesoInicial) {
    var soma = 0;
    var indice;

    for (indice = 0; indice < cpfBase.length; indice += 1) {
      soma += Number.parseInt(cpfBase.charAt(indice), 10) * (pesoInicial - indice);
    }

    soma = soma % 11;

    if (soma < 2) {
      return 0;
    }

    return 11 - soma;
  }

  function validarCpf(cpf) {
    var cpfLimpo = somenteDigitos(cpf);
    var cpfBase;
    var dv1;
    var dv2;

    if (cpfLimpo.length !== 11 || todosDigitosIguais(cpfLimpo)) {
      return false;
    }

    cpfBase = cpfLimpo.substring(0, 9);
    dv1 = calcularDigito(cpfBase, 10);
    dv2 = calcularDigito(cpfBase + dv1, 11);

    return cpfLimpo === cpfBase + String(dv1) + String(dv2);
  }

  function gerarCpfBase() {
    var cpfBase = "";
    var indice;

    for (indice = 0; indice < 9; indice += 1) {
      cpfBase += Math.floor(Math.random() * 10);
    }

    return cpfBase;
  }

  function gerarCpfValido() {
    var cpfBase = gerarCpfBase();
    var cpfCompleto = "";

    while (/^(\d)\1{8}$/.test(cpfBase)) {
      cpfBase = gerarCpfBase();
    }

    cpfCompleto = cpfBase + String(calcularDigito(cpfBase, 10));
    cpfCompleto += String(calcularDigito(cpfCompleto, 11));

    return cpfCompleto;
  }

  function aplicarMascaraCpf(cpf) {
    var cpfLimpo = somenteDigitos(cpf).substring(0, 11);

    if (cpfLimpo.length <= 3) {
      return cpfLimpo;
    }

    if (cpfLimpo.length <= 6) {
      return cpfLimpo.replace(/^(\d{3})(\d+)/, "$1.$2");
    }

    if (cpfLimpo.length <= 9) {
      return cpfLimpo.replace(/^(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
    }

    return cpfLimpo.replace(/^(\d{3})(\d{3})(\d{3})(\d{0,2}).*/, "$1.$2.$3-$4");
  }

  function formatarCpfParaExibicao(cpf) {
    var cpfLimpo = somenteDigitos(cpf).substring(0, 11);

    if (maskToggle.checked) {
      return aplicarMascaraCpf(cpfLimpo);
    }

    return cpfLimpo;
  }

  function definirMensagem(tipo, texto) {
    if (!texto) {
      statusContainer.innerHTML = "";
      return;
    }

    statusContainer.innerHTML = '<div class="alert alert-' + tipo + '" id="statusMessage" role="alert">' + texto + "</div>";
  }

  function limparEstadoVisual() {
    cpfInput.classList.remove("cpf-valido", "cpf-invalido");
  }

  function atualizarEstadoVisual(valorCpf) {
    var cpfLimpo = somenteDigitos(valorCpf);

    limparEstadoVisual();

    if (!cpfLimpo) {
      definirMensagem("info", "Digite um CPF válido ou clique em Gerar CPF.");
      return;
    }

    if (cpfLimpo.length === 11 && validarCpf(cpfLimpo)) {
      cpfInput.classList.add("cpf-valido");
      definirMensagem("success", "CPF válido.");
      return;
    }

    cpfInput.classList.add("cpf-invalido");
    definirMensagem("danger", "CPF inválido.");
  }

  function cancelarGeracaoPendente() {
    if (pendingGenerationId !== null) {
      globalThis.clearTimeout(pendingGenerationId);
      pendingGenerationId = null;
      generateButton.disabled = false;
    }
  }

  function onInputCpf() {
    var cpfLimpo;

    if (pendingGenerationId !== null) {
      cancelarGeracaoPendente();
      definirMensagem("warning", "Geracao cancelada. Continue digitando ou gere novamente.");
    }

    cpfLimpo = somenteDigitos(cpfInput.value).substring(0, 11);

    if (maskToggle.checked) {
      cpfInput.value = aplicarMascaraCpf(cpfLimpo);
    } else {
      cpfInput.value = cpfLimpo;
    }

    atualizarEstadoVisual(cpfLimpo);
  }

  function onToggleMascara() {
    var cpfLimpo = somenteDigitos(cpfInput.value).substring(0, 11);

    if (pendingGenerationId !== null) {
      return;
    }

    cpfInput.value = formatarCpfParaExibicao(cpfLimpo);
    atualizarEstadoVisual(cpfLimpo);
  }

  function onGerarCpf() {
    var cpfGerado = gerarCpfValido();

    cancelarGeracaoPendente();
    generateButton.disabled = true;
    cpfInput.value = "Processando...";
    limparEstadoVisual();
    definirMensagem("info", "Gerando um CPF válido...");

    pendingGenerationId = globalThis.setTimeout(function () {
      pendingGenerationId = null;
      generateButton.disabled = false;
      cpfInput.value = formatarCpfParaExibicao(cpfGerado);
      atualizarEstadoVisual(cpfGerado);
    }, 3000);
  }

  cpfInput.addEventListener("input", onInputCpf);
  maskToggle.addEventListener("change", onToggleMascara);
  generateButton.addEventListener("click", onGerarCpf);

  definirMensagem("info", "Digite um CPF válido ou clique em Gerar CPF.");
})();
