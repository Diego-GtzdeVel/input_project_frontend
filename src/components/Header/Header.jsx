import { NavLink } from 'react-router-dom';

import Navigation from "../Navigation/Navigation";

function Header ({onOpenPopup}) {
    
    return (
        <div className='header'>
            <NavLink to="/">
                <img className="header__logo" src="../../images/INPUT BLK.png" alt="INPUT LOGO" />
            </NavLink>               
            <div className="header__nav">
                <Navigation onOpenPopup={onOpenPopup}/>
            </div>
        </div>
    );
};

export default Header;