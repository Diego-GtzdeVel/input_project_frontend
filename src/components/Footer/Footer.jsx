function Footer() {
    return (
        <div className="footer">
            <img className="footer__logo" src="../../images/INPUT WHITE.png" alt="Footer Logo" />
            <p className="footer__text">- GRACIAS POR VISITARNOS</p>
            <ul className="footer__social">
                <li className="footer__social-text">SOCIALS:</li>
                <li><a className="footer__social-link" href="#">INSTAGRAM</a></li>
                <li><a className="footer__social-link" href="#">BEHANCE</a></li>
                <li><a className="footer__social-link" href="#">DRIBBLE</a></li>
                <li><a className="footer__social-link" href="#">LINKEDIN</a></li>
                <li><a className="footer__social-link" href="#">X</a></li>
            </ul>
            <p className="footer__copyright">© 2025 - INPUT</p>
        </div>
    );
};

export default Footer;