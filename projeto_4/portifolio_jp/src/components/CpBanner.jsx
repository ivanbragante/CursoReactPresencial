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
                        <p className="nome">Ivan Bragante!</p>
                        <p className="funcao">Desenvolvedor Web FullStack</p>
                        <p className="descricao">Este é meu portifolio, conheça um pouco mais sobre o meu trabalho!</p>
                    </h1>

                    <div className="btn-portifolio">
                        <a href="https://github.com/ivanbragante" target="_blank" className="link-github">
                            <img src={github_banner} alt="GitHub!" title="GitHub!" className="github"/>
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/ivan-bragante-204a51190/" target="_blank" className="link-linkedin">
                            <img src={linkedin_banner} alt="Linkedin!" title="Linkedin!" className="linkedin"/>
                            LinkedIn
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