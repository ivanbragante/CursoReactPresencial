import React from "react";
import github_banner from "../images/icones/icons-github-250.svg";
import linkedin_banner from "../images/icones/icons-linkedin-250.svg";
import img_banner from "../images/imgBanner.jpg";


const CpBanner = () => {
    return (
        <section className="banner-page">
            <div className="wrap column-1">
                <div className="title-banner">
                    <h1 className="text-banner">
                        <span className="nome">Ivan Bragante</span>
                        <span className="funcao">Desenvolvedor Web FullStack</span>
                        <span className="descricao">Este é meu portifolio, conheça um pouco mais sobre o meu trabalho!</span>
                    </h1>

                    <div className="btn-portifolio">
                        <a href="#" target="_blank" className="link-github">
                            <img src={github_banner} alt="GitHub!" title="GitHub!" className="github"/>
                        </a>
                        <a href="#" target="_blank" className="link-linkedin">
                            <img src={linkedin_banner} alt="Linkedin!" title="Linkedin!" className="linkedin"/>
                        </a>
                    </div>
                </div>

                <div className="box-img-banner">
                    <img src={img_banner} alt="Apresentação Projetos" title="Apresentação Projetos" className="img-banner"/>
                </div>
            </div>
        </section>
    );
}

export default CpBanner;