import React from "react";
import layout_site from "../images/layoutSite.jpeg"
import icon_github from "../images/icones/icons-github-250.svg"


const projetos = [
    {
        imagem: layout_site,
        titulo: "Projeto Web - Front-End",
        descricao: "Projeto para site corporativo",
        link: "#",
    },

    {
        imagem: layout_site,
        titulo: "Projeto Web - Front-End",
        descricao: "Projeto para site corporativo",
        link: "#",
    },

    {
        imagem: layout_site,
        titulo: "Projeto Web - Front-End",
        descricao: "Projeto para site corporativo",
        link: "#",
    },

    {
        imagem: layout_site,
        titulo: "Projeto Web - Front-End",
        descricao: "Projeto para site corporativo",
        link: "#",
    }

]

const cards = [];

for(let i = 0; i < projetos.length; i++){
    cards.push(
        <div className="card-projects" id="project">
            <img src={layout_site} alt="Projeto Web!" title="Projeto Web!" className="img-card"/>
            <h3 className="title-card">Projeto Web - Front-End</h3>
            <span className="info-projects">Projetos para site corporativo.</span>
            <a href="#" target="_blank" className="rep-github">
                <img src={icon_github} alt="" title="" className="img-github" />Repositório GitHub
            </a>
        </div>
    )
}

const CpProjects = () => {
    return (
        <section className="projects" id="portifolio">
            <div className="wrap">
                <h1 className="title-projects"> Portifólio (Projetos)!</h1>
                <h2 className="text-projects">Esses são alguns dos principais Projetos Web desenvolvidos, utilizando recursos de Front-end.</h2>

                <div className="grid-projects">
                    {cards}
                </div>
            </div>
        </section>
    );
}

export default CpProjects;