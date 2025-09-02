import React from "react";
import img_inicio from '../images/btnNavInicio.png';

const CpBtnInicio = () => {
    return (
        <div className="btn-nav">
            <a href="#top">
                <img src={img_inicio} alt="Voltar ao inicio da página" className="btn-nav-topo"/>
            </a>
            
        </div>
    );
}

export default CpBtnInicio;