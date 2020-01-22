import React from 'react';
import { connect } from 'react-redux';

// import getDataSearch from '../functions/getData';
import { search, loading } from '../actions/foodCardActions';
import traerItems from '../actions/traerItemsFoodCard';

import './styles/SearchBar.css';

const SearchBar = (props) => {
  const handleKeyDown = (event) => {
    const { key } = event;
    if (key === 'Enter') {
      // eslint-disable-next-line react/prop-types
      if (props.isLoading === false) {
        props.loading(true);
      }
      props.traerItems(props.terminos);
    }
  };

  const handleChange = ({ target: { value } }) => {
    // eslint-disable-next-line react/prop-types
    props.search(value);
  };


  return (
    <>
      <div className="SearchBar__container">
        <h2 clasName="SearchBar__title">Búsqueda por términos</h2>
        <input
          type="text"
          className="SearchBar__input"
          id="inputTerms"
          name="searchTerms"
          placeholder="Búsqueda"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  terminos: state.searchTerms,
  foodItems: state.foodItems,
});

const mapDispatchToProps = {
  search,
  traerItems,
  loading,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
