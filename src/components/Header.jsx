import React from 'react';

import './styles/Header.css';

import savedItems from '../assets/SVG/folder-open.svg';

const Header = () => {
  return (
    <header className="header">
      <p className="header__title">NutriApp</p>
      <div className="header__right">
        <img src={savedItems} alt="" />
      </div>
    </header>
  );
};

export default Header;
