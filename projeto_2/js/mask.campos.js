//Mascaras de formulario com JS nativo

function mascaraTelefone(campo) {
  let valor = campo.value.replace(/\D/g, "");

  if (valor.length > 11) valor = valor.slice(0, 11);

  if (valor.length > 10) {
    campo.value = valor.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (valor.length > 6) {
    campo.value = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  } else if (valor.length > 2) {
    campo.value = valor.replace(/(\d{2})(\d{0,5})/, "($1) $2");
  } else {
    campo.value = valor.replace(/(\d*)/, "($1");
  }
}

function validarEmail(campo) {
    const email = campo.value.trim();
    const erro = document.getElementById('erroEmail');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Se o campo está vazio, não mostra nada
    if (email === '') {
        erro.style.display = 'none';
        return;
    }

    // Se o email está incorreto, mostra o aviso
    if (!regex.test(email)) {
        erro.style.display = 'inline';
    } else {
        // Se o email estiver válido, esconde o aviso
        erro.style.display = 'none';
    }
}