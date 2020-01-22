import React from 'react';
import { Link } from 'react-router-dom';

import './Styles/landing.css';

const LandingPage = () => (
  <div className="landing">
    <h1>Aplicación Web para valoración dietética</h1>
    <Link to="/Search">
      <button type="button" className="button">Buscador USDA</button>
    </Link>
  </div>
);

export default LandingPage;
