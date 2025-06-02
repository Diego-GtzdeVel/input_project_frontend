import { NavLink } from 'react-router-dom';

function Navigation({onOpenPopup}) {

  return (
    <nav className="navbar">
      <NavLink to="/work" className="navbar__link">WORK</NavLink>
      <NavLink to="/studio" className="navbar__link">STUDIO</NavLink>
      <NavLink to="/account" className="navbar__link">ACCOUNT</NavLink>
      <button className="navbar__link" onClick={() => onOpenPopup("login")}>LOGIN</button>
    </nav>
  );
}

export default Navigation;