/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import { buscarInfo, loading } from '../actions/foodCardActions';
import traerItems from '../actions/traerItemsFoodCard';

import './styles/SearchButton.css';

const SearchButton = (props) => {
  const handleClick = () => {
    if (props.isLoading === false) {
      props.loading(true);
    }
    props.traerItems(props.terminos);
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
  isLoading: state.isLoading,
});

const mapDispatchToProps = {
  buscarInfo,
  traerItems,
  loading,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
