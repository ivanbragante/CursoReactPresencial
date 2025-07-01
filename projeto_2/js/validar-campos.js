// Validação de campos obrigatórios do formulário de contato

function validarCamposFormulario(){
    if(document.formContato.nome.value == ""){
        alert('Preencha o campo obrigatório nome')
        document.formContato.nome.focus()
        return false
    }

    if(document.formContato.email.value == ""){
        alert('Preencha o campo obrigatório email')
        document.formContato.email.focus()
        return false
    }

    if(document.formContato.telefone.value == ""){
        alert('Preencha o campo obrigatório telefone')
        document.formContato.telefone.focus()
        return false
    }

    if(document.formContato.assunto.value == ""){
        alert('Preencha o campo obrigatório assunto')
        document.formContato.assunto.focus()
        return false
    }
}