function Work() {
    return (
        <div className="work">
            <h1 className="work__heading">NUESTRO TRABAJO</h1>
            <div className="work__content">
                <div className="work__project">
                <img className="wor__project-image" src="../../images/Booster Logo.png" alt="Project-001" />
                <h2 className="work__project-title">BOOSTER MOTORSPORT</h2>
                <p className="work__project-description">Proyecto de imagen de marca hecho para "Booster Motorsport", una marca de ropa inspirada en el automovilismo y el amor por los coches, un diseño inspirado en la industria automotríz y los grandes equipos del automovilismo.</p>
            </div>
            <div className="work__grid">
                <div className="work__grid-project">
                    <img className="work__grid-project-image" src="../../images/work1.png" alt="" />
                    <p className="work__grid-project-text">LOGO 3D</p>
                </div>
                <div className="work__grid-project">
                    <img className="work__grid-project-image" src="../../images/work2.png" alt="" />
                    <p className="work__grid-project-text">DISEÑO DE BADGE</p>
                </div>
                <div className="work__grid-project">
                    <img className="work__grid-project-image" src="../../images/work3.png" alt="" />
                    <p className="work__grid-project-text">DISEÑO DE EMPAQUE</p>
                </div>
                <div className="work__grid-project">
                    <img className="work__grid-project-image" src="../../images/work4.png" alt="" />
                    <p className="work__grid-project-text">GRAFICOS VISUALES</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Work;