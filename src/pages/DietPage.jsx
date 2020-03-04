/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { connect } from 'react-redux';

import './Styles/DietPage.css';

import FoodCardDiet from '../components/FoodCardDiet';
import Spinner from '../components/Spinner';
import DietTableContainer from '../components/DietTableContainer';

import { unsetItem, resetReport } from '../actions/foodCardActions';
import { filterItems } from '../actions/dietTableActions';
import reporteFinal from '../actions/traerInfoReporteFinal';
import dietTableCalcule from '../actions/dietTableCalcule';

const DietPage = (props) => {
  const [value, setValue] = useState({});
  const { selectedItems, finalReport } = props;
  const nutrientsArray = [];
  if (!(selectedItems.length > 0)) {
    return (<p> ¡¡Error, no se ha seleccionado ningún alimento!! </p>);
  }

  if (!(finalReport.length > 0)) {
    const ids = selectedItems.map((item) => item.id);
    props.reporteFinal(ids);
    return (<Spinner />);
  }

  if (finalReport.length !== selectedItems.length) {
    props.resetReport();
  }

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: {
        id: e.target.name,
        amount: e.target.value,
      },
    });
  };

  return (
    <div className="DietContainer">
      <div className="FoodCard__container">
        {/* Mapeo de finalReport para obtener nutrientes y amounts */}
        {finalReport.map((item) => {
          const nutrients = item.foodNutrients;
          const condition = item.foodClass === 'Branded';

          const portions = condition ? [{
            id: 1,
            amount: item.householdServingFullText,
            modifier: `(${item.servingSize} ${item.servingSizeUnit})`,
            gramWeight: item.servingSize,
          }] : item.foodPortions;

          const multiplier = Object.values(value).filter((it) => it.id === item.fdcId.toString());

          if (multiplier.length === 0) {
            multiplier.push({ amount: 100 });
          }

          const nutArrayForPush = dietTableCalcule(nutrients, parseFloat(multiplier[0].amount, 10));
          nutrientsArray.push(nutArrayForPush);
          return (
            <FoodCardDiet
              name={item.description}
              id={item.fdcId}
              value={multiplier[0].amount}
              onChange={handleChange}
              type={item.foodClass}
              portionsArray={portions}
            />
          );
        })}
      </div>

      <div className="filterContainer">
        <button
          className="button"
          type="button"
          onClick={() => props.filterItems()}
        >
          Filtar
        </button>
      </div>
      <DietTableContainer nutrientsArray={nutrientsArray} />

    </div>
  );
};

const mapStateToProps = (state) => ({
  selectedItems: state.selectedItems,
  finalReport: state.finalReport,
  filtering: state.filtering,
});

const mapDispatchToProps = {
  unsetItem,
  reporteFinal,
  resetReport,
  dietTableCalcule,
  filterItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(DietPage);
