import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { NavLink } from "react-router-dom";

function Header(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className={`header-area header-sticky ${isMenuOpen ? 'active' : ''}`}>
      <div className={`backdrop ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className={`main-nav ${isMenuOpen ? 'menu-open' : ''}`}>
              <NavLink to="/" className="logo">
                <img src={logo} alt="Softy Pinko" />
              </NavLink>
              <ul className={`nav ${isMenuOpen ? 'active' : ''}`}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/devops'>DevOps</NavLink></li>
                <li><NavLink to='/cross_site_scripting_xss'>SecureWebGuard</NavLink></li>
                <li><NavLink to='/domains'>Domains</NavLink></li>
                <li><NavLink to='/hr_manager'>HRManager</NavLink></li>
                <li><NavLink to='/ai_inights '>Ai inights </NavLink></li>
              </ul>
              <a className={`menu-trigger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
