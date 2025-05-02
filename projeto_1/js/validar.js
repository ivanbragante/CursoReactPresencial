// Validação de campos do formulário de login
function validarCamposFormLogin(){
    if(document.formLogin.email.value.trim() == ""){
        alert("Preencha o campo obrigatório EMAIL!");
        document.formLogin.email.focus();
        return false;
    }

    if(document.formLogin.senha.value.trim() == ""){
        alert("Preencha o campo obrigatório SENHA!");
        document.formLogin.senha.focus();
        return false;
    }
}

// Form de cadastro
function validarCamposFormCadastro(){
    if(document.formCadastro.emailCadastro.value.trim() == ""){
        alert("Preencha o campo obrigatório EMAIL!");
        document.formCadastro.email.focus();
        return false;
    }

    if(document.formCadastro.telefone.value.trim() == ""){
        alert("Preencha o campo obrigatório TELEFONE!");
        document.formCadastro.telefone.focus();
        return false;
    }

    if(document.formCadastro.data.value.trim() == ""){
        alert("Selecione uma DATA!");
        document.formCadastro.data.focus();
        return false;
    }

    if(document.formCadastro.curso.value.trim() == ""){
        alert("Selecione um CURSO!");
        document.formCadastro.curso.focus();
        return false;
    }

    if(document.formCadastro.curso.value.trim() == ""){
        alert("Selecione um CURSO!");
        document.formCadastro.curso.focus();
        return false;
    }

    if(document.formCadastro.senhaCadastro.value.trim() == ""){
        alert("Preencha o campo obrigatório SENHA!");
        document.formCadastro.senhaCadastro.focus();
        return false;
    }

    if(document.formCadastro.senhaCadastro.value.lenght < 6 || document.formCadastro.senhaCadastro.value.lenght > 8){
        alert("A senha deve conter entre 6 e 8 caracteres!");
        document.formCadastro.senhaCadastro.focus();
        return false;
    }

    if(document.formCadastro.repSenha.value.trim() == ""){
        alert("Repita a SENHA!");
        document.formCadastro.repSenha.focus();
        return false;
    }else if(document.formCadastro.repSenha.value != document.formCadastro.senhaCadastro.value) {
        alert("As senhas estao diferentes!");
        document.formCadastro.repSenha.focus();
        return false;
    }
}
