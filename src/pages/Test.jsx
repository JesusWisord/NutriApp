import React, { useState } from 'react';
import { connect } from 'react-redux';

import FoodCardDiet from '../components/FoodCardDiet';
import Spinner from '../components/Spinner';
import DietTableContainer from '../components/DietTableContainer';
import DietTable from '../functions/DietTable';

import { unsetItem, resetReport } from '../actions/foodCardActions';
import reporteFinal from '../actions/traerInfoReporteFinal';
import dietTableCalcule from '../actions/dietTableCalcule';

const TestPage = (props) => {
  const [value, setValue] = useState({});

<<<<<<< HEAD
  const handleClick = (nutrient) => {
    nutrient.checked = !nutrient.checked;
  };

  const { finalReport } = props;
  const nutrientsArray = [];
  let fR = [];
  const selectedItems = [{ id: 167782, amunt: 100 }, { id: 171687, amunt: 100 }];
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
          fR = DietTable(nutrientsArray);
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

      {/* <div className="filterContainer">
        {fR.map((nutrient) => {
          return (
            <label className="filter__nutrient" htmlFor={`nut-${nutrient.id}`}>
              <input type="checkbox" defaultChecked onClick={() => handleClick(nutrient)} name={`${nutrient.id}`} id={`nut-${nutrient.id}`} />
              {nutrient.name}
            </label>
          );
        })}
      </div> */}
      <DietTableContainer nutrientsArray={nutrientsArray} finalReport={fR} />

    </div>
=======
const Test = () => {
  const handleClick = (filterAction) => {
    filterAction = !filterAction;
    console.log(filterAction);
    return filterAction;
  };

  let filterAction = false;
  return (
    <>
      <div className="filterContainer__button">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            filterAction = handleClick(filterAction);
          }}
        >
        Filter
        </button>
      </div>
      <div className="dietTableContainer">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Nutrient</th>
              <th scope="col">Value</th>
              <th scope="col">Units</th>
            </tr>
          </thead>
          <tbody>
            {finalReport.map((nutrient) => {
              if (nutrient.value || nutrient.value === 0) {
                if (nutrient.checked) {
                  return (
                    <tr className="nutrient__show">
                      <th scope="row">{nutrient.name}</th>
                      <td>
                        {Number.isInteger(nutrient.value)
                          ? nutrient.value
                          : nutrient.value.toFixed(2)}
                      </td>
                      <td>{nutrient.unit}</td>
                      {console.log('fA', filterAction)}
                      {filterAction
                        ? <p>Filter</p>
                        : <p>No-Filter</p>}
                    </tr>
                  );
                }
                return (
                  <tr className="nutrient__hidden">
                    <th scope="row">{nutrient.name}</th>
                    <td>
                      {Number.isInteger(nutrient.value)
                        ? nutrient.value
                        : nutrient.value.toFixed(2)}
                    </td>
                    <td>{nutrient.unit}</td>
                  </tr>
                );
              }
              return (
              // <tr className="table-info">
              //   <th scope="row">{nutrient.name}</th>
              //   <td> </td>
              //   <td> </td>
              // </tr>
                <>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
>>>>>>> 544b7e5
  );
};

const mapStateToProps = (state) => ({
  finalReport: state.finalReport,
});

const mapDispatchToProps = {
  unsetItem,
  reporteFinal,
  resetReport,
  dietTableCalcule,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestPage);
