import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Header.css';

import savedItems from '../assets/SVG/folder-open.svg';

const Header = () => {
  return (
    <header className="header">
      <Link to="/NutriApp">
        <p className="header__title">NutriApp</p>
      </Link>
      <div className="header__right">
        <Link to="/NutriApp/Diet">
          <img src={savedItems} alt="" className="savedItems" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
