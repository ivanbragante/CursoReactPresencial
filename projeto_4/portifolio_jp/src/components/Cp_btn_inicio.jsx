import React from "react";
import img_inicio from '../images/btnNavInicio.png';

const Cp_btn_inicio = () => {
    return (
        <div className="btn-nav">
            <img src={img_inicio} alt="Voltar ao inicio da página" />
        </div>
    );
}

export default Cp_btn_inicio;