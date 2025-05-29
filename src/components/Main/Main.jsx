import Popup from "../Popup/Popup";

function Main({onClosePopup, popup}) {
    return(
        <main className="main">
            <div className="main__content">
                <div className="main__text">
                    <h1 className="main__title">WE ARE A BRANDING STUDIO FOR PEOPLE LOOKING TO SCREAM THEIR IDEAS</h1>
                    <h2 className="main__subtitle">We help brands bring their vision to life by creating visuals that leave a lasting impression in the viewer</h2>
                </div>
            <img className="main__image" src="../../images/image1.png" alt="imagen" />
            </div>
            {popup && (
                <Popup onClose={onClosePopup} title={popup.title}>
                    {popup.children}
                </Popup>
            )}
        </main>
    );
}

export default Main;