/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

import './styles/FoodTable.css';
import DietTable from '../functions/DietTable';
import quitIcon from '../assets/SVG/cancel-circle.svg';

let nutrientsToHide = [];

const DietTableContainer = ({ nutrientsArray, filtering }) => {
  const finalReport = DietTable(nutrientsArray);

  const handleChange = (e, id) => {
    const checkbox = e.target;
    if (checkbox.checked) {
      nutrientsToHide = nutrientsToHide.filter((item) => item !== id);
    } else {
      nutrientsToHide.push(id);
    }
  };
  if (filtering) {
    return (
      <>
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
                  return (
                    <tr className="nutrient__showed" id={nutrient.id}>
                      <th scope="row">{nutrient.name}</th>
                      <td>
                        {Number.isInteger(nutrient.value)
                          ? nutrient.value
                          : nutrient.value.toFixed(2)}
                      </td>
                      <td>{nutrient.unit}</td>
                      { filtering
                        ? (
                          <td className="checkbox__show">
                            <label htmlFor="filter">
                              <input
                                type="checkbox"
                                name=""
                                id="filter"
                                defaultChecked
                                onChange={(e) => handleChange(e, nutrient.id)}
                              />
                            </label>
                          </td>
                        )
                        : (
                          <td className="checkbox__hide">
                            <label htmlFor="filter">
                              <input
                                type="checkbox"
                                name=""
                                id="filter"
                                defaultChecked
                                onChange={(e) => handleChange(e, nutrient.id)}
                              />
                            </label>
                          </td>
                        )}
                    </tr>
                  );
                }
                return (
                  <>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
  }
  return (
    <>
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
                return (
                  <tr
                    className={nutrientsToHide.includes(nutrient.id)
                      ? 'nutrient__hidden'
                      : 'nutrient__show'}
                    id={nutrient.id}
                  >
                    <th scope="row">{nutrient.name}</th>
                    <td>
                      {Number.isInteger(nutrient.value)
                        ? nutrient.value
                        : nutrient.value.toFixed(2)}
                    </td>
                    <td>{nutrient.unit}</td>
                    { filtering
                      ? (
                        <td className="checkbox__show">
                          <label htmlFor="filter">
                            <input
                              type="checkbox"
                              name=""
                              id="filter"
                              defaultChecked
                              onChange={(e) => handleChange(e, nutrient.id)}
                            />
                          </label>
                        </td>
                      )
                      : (
                        <td className="checkbox__hide">
                          <label htmlFor="filter">
                            <input
                              type="checkbox"
                              name=""
                              id="filter"
                              defaultChecked
                              onChange={(e) => handleChange(e, nutrient.id)}
                            />
                          </label>
                        </td>
                      )}
                  </tr>
                );
              }
              return (
                <>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  filtering: state.filtering,
});

export default connect(mapStateToProps, null)(DietTableContainer);
