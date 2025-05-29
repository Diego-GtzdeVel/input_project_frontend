import Popup from "../Popup/Popup";

function Work({onClosePopup, popup}) {
    return (
        <div className="work">
            <h1 className="work__heading">OUR WORK</h1>
            <div className="work__content">
                <div className="work__project">
                <img className="wor__project-image" src="../../images/Booster Logo.png" alt="Project-001" />
                <h2 className="work__project-title">BOOSTER MOTORSPORT</h2>
                <p className="work__project-description">Branding project for "Booster Motorsport," a clothing brand inspired by motorsports and the love of cars, a design inspired by the automotive industry and the great motorsports teams.</p>
            </div>
            <div className="work__grid">
                <div className="work__grid-project">
                    <img className="work__grid-project-image" src="../../images/work1.png" alt="" />
                    <p className="work__grid-project-text">3D LOGO</p>
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
            {popup && (
                <Popup onClose={onClosePopup} title={popup.title}>
                    {popup.children}
                </Popup>
            )}
        </div>
    );
};

export default Work;