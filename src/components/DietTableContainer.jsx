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
<<<<<<< HEAD
      {/* <div className="filterContainer">
        {finalReport.map((nutrient) => (
          <label className="filter__nutrient" htmlFor={`nut-${nutrient.id}`}>
          <input type="checkbox" defaultChecked onClick={() => handleClick(nutrient)} name={`${nutrient.id}`} id={`nut-${nutrient.id}`} />
            {nutrient.name}
          </label>
        ))}
      </div> */}
=======
>>>>>>> 544b7e5
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
<<<<<<< HEAD
                    className={nutrient.checked ? 'nutrient__showed' : 'nutrient__hidden'}
=======
                    className={nutrientsToHide.includes(nutrient.id)
                      ? 'nutrient__hidden'
                      : 'nutrient__show'}
                    id={nutrient.id}
>>>>>>> 544b7e5
                  >
                    <th scope="row">{nutrient.name}</th>
                    <td>
                      {Number.isInteger(nutrient.value)
                        ? nutrient.value
                        : nutrient.value.toFixed(2)}
                    </td>
                    <td>{nutrient.unit}</td>
<<<<<<< HEAD
                    <img
                      src={quitIcon}
                      alt="quitIcon"
                      className="quitIcon"
                      onClick={(e) => handleClick(e)}
                    />
=======
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
>>>>>>> 544b7e5
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
