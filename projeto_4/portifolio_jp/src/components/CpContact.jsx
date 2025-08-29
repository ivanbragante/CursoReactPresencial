import React from "react";

//Chamada da hook form library
import { useForm } from "react-hook-form";

//Chamada da yup library
import { yupResolver } from "@hookform/resolvers/yup";

//Chamada para validação de campos via JS
import { Validar } from '../js/validarFormulario';

//Chamada dos assets do contato
import icon_contact_email from '../images/icones/iconsEmail.png'
import icon_contact_telefone from '../images/icones/iconsTelefone.png'
import icon_contact_whatsapp from '../images/icones/iconsWhatsapp.png'
import icon_contact_local from '../images/icones/iconsLocalizacao.png'

const CpContact = () => {

    // Estrutura os elementos do formulário HTML - Váriaveis para os campos Inputs.
    const Input = ({ label, id, name, type, register, error }) => {
        return(
            <span className="form-group">
                <label>{label}</label>
                {error && <span>{error.message}</span>}
                <input className="camp-form" id={id} name={name} type={type} placeholder="Digite os dados aqui..." {...register(name)}/>
                
            </span>
        )
    }

    // Estrutura os elementos do formulário HTML - Váriaveis para os campos Textarea.
    const Textarea = ({ label, id, name, register, error }) => {
        return(
            <span className="form-group">
                <label>{label}</label>
                {error && <span>{error.message}</span>}
                <textarea className="camp-form" id={id} name={name} placeholder="Digite os dados aqui..." {...register(name)}></textarea>
                
            </span>
        )
    }

    // Registro e verificação do formulário, além de monitorar se o campo possui os dados ou não, caso sim, remove a mensagem, se não carrega o errors!
    // Realiza também o reset caso o botão seja clicado, lembrando que todos os recursos são construídos e executados graças as bibliotecas HookForm e Yup!
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(Validar)
    })

    //Monta o pacote das informações e testa o console.log!
    const onSubmit = data => {
        console.log(data)
    }



    return (
        <section className="contact" id="contact">
            <div className="wrap">
                <h1 className="title-contact">Contato!</h1>
                <div className="box-contact">
                    <div className="info-contact">
                        
                    </div>

                    <div className="form-contact">
                        
                    </div>
                </div>
            </div>

            <div className="maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.897211952283!2d-51.17634809999999!3d-23.3194879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb4313ff0ee975%3A0x1c33d6cf3ae5b478!2sWMBarros%20Treinamento%20em%20TI%20Cursos%20de%20Programa%C3%A7%C3%A3o%2C%20Front-end%2C%20Cria%C3%A7%C3%B5es%20de%20Sites%3A%20TUDO%20NA%20PR%C3%81TICA%20-%20PRESENCIAL%20E%20REMOTO!5e0!3m2!1spt-BR!2sbr!4v1756490489381!5m2!1spt-BR!2sbr" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    );
}

export default CpContact;