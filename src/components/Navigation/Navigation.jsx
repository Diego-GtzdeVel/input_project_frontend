import { NavLink } from 'react-router-dom';

function Navigation({ onOpenPopup, isLoggedIn, onSignOut }) {

  return (
    <nav className="navbar">
      <NavLink to="/work" className="navbar__link">WORK</NavLink>
      <NavLink to="/studio" className="navbar__link">STUDIO</NavLink>
      {isLoggedIn && (
        <NavLink to="/account" className="navbar__link">
          ACCOUNT
        </NavLink>
      )}
      {!isLoggedIn ? (
        <button className="navbar__link" onClick={() => onOpenPopup("login")}>LOGIN</button>
      ) : (
        <button className="navbar__link" onClick={onSignOut}>LOGOUT</button>
      )}
    </nav>
  );
}

export default Navigation;