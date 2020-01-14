import React from 'react';
import { connect } from 'react-redux';

import { buscarInfo } from '../actions/foodCardActions';
import './styles/SearchButton.css';

const SearchButton = (props) => {
  const handleClick = () => {
    console.log(props);
  };

  return (
    <div className="button__container">
      <button type="submit" onClick={handleClick}>
        Buscar
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  terminos: state.searchTerms,
});

const mapDispatchToProps = {
  buscarInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
