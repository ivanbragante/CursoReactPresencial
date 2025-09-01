import React from "react";


const CpAbout = () => {
    return (
        <section className="about" id="about">
            <div className="wrap">
                <h1 className="title-about">Quem sou!</h1>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi libero adipisci architecto eum ratione aut recusandae molestiae mollitia eos. Similique facere quibusdam fugit excepturi natus veniam repellendus culpa nobis quo!
                    </p>
                        
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eos dolorum nobis, corporis voluptatibus accusantium sed laudantium consequatur dolor placeat, sint laborum eveniet velit! Aspernatur totam nulla sed quam voluptatum!
                    </p>

                    <p>     
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta eos dolorum nobis, corporis voluptatibus accusantium sed laudantium consequatur dolor placeat, sint laborum eveniet velit! Aspernatur totam nulla sed quam voluptatum!
                    </p>
                </div>

                <div className="conhecimentos">
                    <div className="wrap"> 
                        <h2>Conhecimentos e soft skills!</h2>
                        <div className="box-habil">
                            <span className="habil">HTML 5</span>
                            <span className="habil">CSS 3</span>
                            <span className="habil">JavaScript</span>
                            <span className="habil">React</span>
                            <span className="habil">NodeJS</span>
                            <span className="habil">Python</span>
                            <span className="habil">SQL</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default CpAbout;