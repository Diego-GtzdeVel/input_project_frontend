import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <div className="navbar">
      <NavLink to="#" className="navbar__link">WORK</NavLink>
      <NavLink to="#" className="navbar__link">STUDIO</NavLink>
      <NavLink to="#" className="navbar__link">ACCOUNT</NavLink>
      <NavLink to="#" className="navbar__link">LOGIN</NavLink>
    </div>
  );
}

export default Navigation;