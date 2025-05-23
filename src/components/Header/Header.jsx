import Navigation from "../Navigation/Navigation";

function Header () {
    
    return (
        <div className='header'>
                <img className="header__logo" src="../../images/INPUT BLK.png" alt="INPUT LOGO" />
                <div className="header__nav"><Navigation/></div>
        </div>
    );
};

export default Header;