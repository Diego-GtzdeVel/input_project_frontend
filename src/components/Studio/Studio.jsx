import Popup from "../Popup/Popup";

function Studio({onClosePopup, popup}) {

    return (
        <div className="studio">
            <h1 className="studio__title">ABOUT US</h1>
            <p className="studio__about">INPUT is a design studio focused on creating solutions for different companies in diverse market niches. We create timeless, consumer-centric designs, taking the customer into account at every step. We ensure that our designs speak to our clients' ideas and leave a lasting impression on the consumer.</p>
            <div className="studio__services">
                <h2 className="studio__services-header">SERVICES</h2>
                <p className="studio__services-text">Brand Design</p>
                <p className="studio__services-text">Web Design</p>
                <p className="studio__services-text">UI/UX</p>
                <p className="studio__services-text">Typeface</p>
                <p className="studio__services-text">Graphic Design</p>
            </div>
            <div className="studio__contact">
                <h3 className="studio__contact-header">CONTACT</h3>
                <p className="studio__contact-email">EMAIL: HELLO.INPUT@GMAIL.COM</p>
            </div>
        </div>
    );

}

export default Studio;
