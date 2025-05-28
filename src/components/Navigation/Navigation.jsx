import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="navbar">
      <NavLink to="/work" className="navbar__link">WORK</NavLink>
      <NavLink to="#" className="navbar__link">STUDIO</NavLink>
      <NavLink to="#" className="navbar__link">ACCOUNT</NavLink>
      <button className="navbar__link">LOGIN</button>
    </nav>
  );
}

export default Navigation;