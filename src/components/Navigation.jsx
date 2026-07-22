import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `nav__link${isActive ? ' nav__link--active' : ''}`;

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav">
      <div className="container nav__inner">
        <NavLink to="/" className="nav__logo" onClick={closeMenu}>
          <span className="gradient-text">Monica Villanueva</span>
        </NavLink>

        <button
          className="nav__toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>

        <ul className={`nav__links${menuOpen ? ' nav__links--open' : ''}`}>
          <li><NavLink to="/" className={linkClass} onClick={closeMenu}>Home</NavLink></li>
          <li><NavLink to="/professional" className={linkClass} onClick={closeMenu}>Professional</NavLink></li>
          <li><NavLink to="/personal" className={linkClass} onClick={closeMenu}>Personal</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
