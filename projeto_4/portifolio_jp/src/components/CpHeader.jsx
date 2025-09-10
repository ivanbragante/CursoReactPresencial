import React, { useState } from "react";
import img_logotipo from '../images/logotipoJP.png';

const CpHeader = () => {

    //Gerencia o estado do menu mobile
    const [classOn, setClassOn] = useState(false);

    return (
        <header className="topo">
            <section className="container">
                <div className="logotipo">
                    <img src={img_logotipo} alt="Portifolio Jp" title="Portifolio Jp" className="img-logotipo"/>
                </div>

                {/* classOn junto com o onclick vai manipular ação de ativar e desativar o Menu Mobile de acordo com o clique do usuario */}
                <div className={ classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
                    <div className="menu-toggle">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </div>

                    <nav>
                        <ul>
                            <li className="nav-item">
                                <a href="">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about">Quem sou</a>
                            </li>
                            <li className="nav-item">
                                <a href="#portifolio">Portifolio</a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </nav>
                </div>

            </section>
        </header>
    );
}

export default CpHeader;