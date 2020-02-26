import React from 'react';
import { Link } from 'react-router-dom';

import './Styles/landing.css';

const LandingPage = () => (
  <div className="landing">
    <h1>Aplicación Web para valoración dietética</h1>
    <div className="landing__buttons">
      <Link to="/USDASearch">
        <button type="button" className="button">Buscador USDA</button>
      </Link>
      <Link to="/DialSearch">
        <button type="button" className="button">Buscador</button>
      </Link>
    </div>
  </div>
);

export default LandingPage;
