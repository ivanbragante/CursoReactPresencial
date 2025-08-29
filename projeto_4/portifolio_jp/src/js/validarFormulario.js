import * as Yup from 'yup';

export const Validar = Yup.object().shape({
    nome: Yup.string().required('*Preencher o campo obrigatório NOME!'),
    email: Yup.string().required('*Preencher o campo obrigatório E-MAIL!'),
    ass: Yup.string().required('*Preencher o campo obrigatório ASSUNTO!'),
    msg: Yup.string().required('*Preencher o campo obrigatório MENSAGEM!'),
})