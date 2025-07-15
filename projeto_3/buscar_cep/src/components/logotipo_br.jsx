// Componentes do react.js, o seu formato deve ser sempre em .jsx
// Sempre importe a biblioteca ou arquivo antes de qualquer processo no código
import React from "react";
import Logotipo_BR_IMG from '../img/logotipobr.jpeg';

const Logotipo_BR_CPN = () => {
    return(
        <div>
            <img src={Logotipo_BR_IMG} alt="Governo Federal!" title="Governo Federal!" className="logotipo-header"/>
        </div>
    )
}

// Exporta o componente para o uso de qualquer outra camada da aplicação (app.js)!
export default Logotipo_BR_CPN;