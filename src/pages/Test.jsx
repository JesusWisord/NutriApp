import React from 'react';
import { connect } from 'react-redux';

import { goBack } from '../actions/foodCardActions';

// import getData from '../functions/getData';
const finalReport = [
  {
    name: 'Proximates', id: 2045, unit: 'g', value: NaN, checked: true,
  },
  {
    name: 'Water', id: 1051, unit: 'g', value: 174.2, checked: true,
  },
  {
    name: 'Energy', id: 1008, unit: 'kcal', value: 92, checked: true,
  },
  {
    name: 'Energy', id: 1062, unit: 'kJ', value: 386, checked: true,
  },
  {
    name: 'Protein', id: 1003, unit: 'g', value: 1.9, checked: true,
  },
  {
    name: 'Total lipid (fat)', id: 1004, unit: 'g', value: 0.4, checked: true,
  },
  {
    name: 'Ash', id: 1007, unit: 'g', value: 1.1, checked: true,
  },
  {
    name: 'Carbohydrates', id: 2039, unit: 'g', value: NaN, checked: true,
  },
  {
    name: 'Carbohydrate, by difference', id: 1005, unit: 'g', value: 22.400000000000002, checked: true,
  },
  {
    name: 'Fiber, total dietary', id: 1079, unit: 'g', value: 5.6, checked: true,
  },
  {
    name: 'Sugars, total including NLEA', id: 2000, unit: 'g', value: 13.05, checked: true,
  },
  {
    name: 'Sucrose', id: 1010, unit: 'g', value: 0.05, checked: true,
  },
  {
    name: 'Glucose (dextrose)', id: 1011, unit: 'g', value: 4.5, checked: true,
  },
  {
    name: 'Fructose', id: 1012, unit: 'g', value: 3.8, checked: true,
  },
  {
    name: 'Lactose', id: 1013, unit: 'g', value: 0, checked: true,
  },
  {
    name: 'Maltose', id: 1014, unit: 'g', value: 0.2, checked: true,
  },
  {
    name: 'Galactose', id: 1075, unit: 'g', value: 0, checked: true,
  },
  {
    name: 'Minerals', id: 2043, unit: 'mg', value: NaN, checked: true,
  },
  {
    name: 'Calcium, Ca', id: 1087, unit: 'mg', value: 18, checked: true,
  },
  {
    name: 'Iron, Fe', id: 1089, unit: 'mg', value: 2.1100000000000003, checked: true,
  },
  {
    name: 'Magnesium, Mg', id: 1090, unit: 'mg', value: 36, checked: true,
  },
  {
    name: 'Phosphorus, P', id: 1091, unit: 'mg', value: 56, checked: true,
  },
  {
    name: 'Potassium, K', id: 1092, unit: 'mg', value: 401, checked: true,
  },
  {
    name: 'Sodium, Na', id: 1093, unit: 'mg', value: 23, checked: true,
  },
  {
    name: 'Zinc, Zn', id: 1095, unit: 'mg', value: 0.41000000000000003, checked: true,
  },
  {
    name: 'Copper, Cu', id: 1098, unit: 'mg', value: 0.143, checked: true,
  },
  {
    name: 'Manganese, Mn', id: 1101, unit: 'mg', value: 0.182, checked: true,
  },
  {
    name: 'Vitamins and Other Components', id: 2046, unit: 'g', value: NaN, checked: true,
  },
  {
    name: 'Vitamin C, total ascorbic acid', id: 1162, unit: 'mg', value: 1654.1, checked: true,
  },
  {
    name: 'Vitamin A, RAE', id: 1106, unit: 'µg', value: 30, checked: true,
  },
  {
    name: 'Retinol', id: 1105, unit: 'µg', value: 0, checked: true,
  },
  {
    name: 'Carotene, beta', id: 1107, unit: 'µg', value: 365, checked: true,
  },
  {
    name: 'Carotene, alpha', id: 1108, unit: 'µg', value: 0, checked: true,
  },
  {
    name: 'Vitamin A, IU', id: 1104, unit: 'IU', value: 609, checked: true,
  },
  {
    name: 'Lipids', id: 2044, unit: 'g', value: NaN, checked: true,
  },
  {
    name: 'Fatty acids, total saturated', id: 1258, unit: 'g', value: 0.082, checked: true,
  },
  {
    name: 'Fatty acids, total trans', id: 1257, unit: 'g', value: 0, checked: true,
  },
  {
    name: 'Proximates', id: 2045, unit: 'g', value: null, checked: true,
  },
  {
    name: 'Selenium, Se', id: 1103, unit: 'µg', value: 0.1, checked: true,
  },
  {
    name: 'Thiamin', id: 1165, unit: 'mg', value: 0.02, checked: true,
  },
  {
    name: 'Riboflavin', id: 1166, unit: 'mg', value: 0.06, checked: true,
  },
  {
    name: 'Niacin', id: 1167, unit: 'mg', value: 0.4, checked: true,
  },
  {
    name: 'Pantothenic acid', id: 1170, unit: 'mg', value: 0.205, checked: true,
  },
  {
    name: 'Vitamin B-6', id: 1175, unit: 'mg', value: 0.004, checked: true,
  },
  {
    name: 'Folate, total', id: 1177, unit: 'µg', value: 14, checked: true,
  },
  {
    name: 'Folic acid', id: 1186, unit: 'µg', value: 0, checked: true,
  },
  {
    name: 'Folate, food', id: 1187, unit: 'µg', value: 14, checked: true,
  },
  {
    name: 'Folate, DFE', id: 1190, unit: 'µg', value: 14, checked: true,
  },
  {
    name: 'Vitamin B-12', id: 1178, unit: 'µg', value: 0, checked: true,
  },
  {
    name: 'Vitamin B-12, added', id: 1246, unit: 'µg', value: 0, checked: true,
  },
  {
    name: 'Cryptoxanthin, beta', id: 1120, unit: 'µg', value: 0, checked: true,
  },
  {
    name: 'Lycopene', id: 1122, unit: 'µg', value: 0, checked: true,
  },
  {
    name: 'Lutein + zeaxanthin', id: 1123, unit: 'µg', value: 17, checked: true,
  },
  {
    name: 'Vitamin E (alpha-tocopherol)', id: 1109, unit: 'mg', value: 0.18, checked: true,
  },
  {
    name: 'Vitamin E, added', id: 1242, unit: 'mg', value: 0, checked: true,
  },
  {
    name: 'Vitamin K (phylloquinone)', id: 1185, unit: 'µg', value: 1.4, checked: true,
  },
  {
    name: '4:0', id: 1259, unit: 'g', value: 0, checked: true,
  },
  {
    name: '6:0', id: 1260, unit: 'g', value: 0, checked: true,
  },
  {
    name: '8:0', id: 1261, unit: 'g', value: 0, checked: true,
  },
  {
    name: '10:0', id: 1262, unit: 'g', value: 0, checked: true,
  },
  {
    name: '12:0', id: 1263, unit: 'g', value: 0, checked: true,
  },
  {
    name: '14:0', id: 1264, unit: 'g', value: 0.002, checked: true,
  },
  {
    name: '16:0', id: 1265, unit: 'g', value: 0.048, checked: true,
  },
  {
    name: '18:0', id: 1266, unit: 'g', value: 0.016, checked: true,
  },
  {
    name: 'Fatty acids, total monounsaturated', id: 1292, unit: 'g', value: 0.082, checked: true,
  },
  {
    name: '16:1', id: 1275, unit: 'g', value: 0.001, checked: true,
  },
  {
    name: '18:1', id: 1268, unit: 'g', value: 0.081, checked: true,
  },
  {
    name: '20:1', id: 1277, unit: 'g', value: 0, checked: true,
  },
  {
    name: '22:1', id: 1279, unit: 'g', value: 0, checked: true,
  },
  {
    name: 'Fatty acids, total polyunsaturated', id: 1293, unit: 'g', value: 0.09, checked: true,
  },
  {
    name: '18:2', id: 1269, unit: 'g', value: 0.046, checked: true,
  },
  {
    name: '18:3', id: 1270, unit: 'g', value: 0.044, checked: true,
  },
  {
    name: '18:4', id: 1276, unit: 'g', value: 0, checked: true,
  },
  {
    name: '20:4', id: 1271, unit: 'g', value: 0, checked: true,
  },
  {
    name: '20:5 n-3 (EPA)', id: 1278, unit: 'g', value: 0, checked: true,
  },
  {
    name: '22:5 n-3 (DPA)', id: 1280, unit: 'g', value: 0, checked: true,
  },
  {
    name: '22:6 n-3 (DHA)', id: 1272, unit: 'g', value: 0, checked: true,
  },
  {
    name: 'Cholesterol', id: 1253, unit: 'mg', value: 0, checked: true,
  },
  {
    name: 'Amino acids', id: 2042, unit: 'g', value: null, checked: true,
  },
  {
    name: 'Alcohol, ethyl', id: 1018, unit: 'g', value: 0, checked: true,
  },
  {
    name: 'Caffeine', id: 1057, unit: 'mg', value: 0, checked: true,
  },
  {
    name: 'Theobromine', id: 1058, unit: 'mg', value: 0, checked: true,
  },
];

const Test = () => {
  const handleClick = (nutrient) => {
    nutrient.checked = !nutrient.checked;
    Test();
  };
  return (
    <>
      <div className="filterContainer__button">
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            console.log('Click');
          }}
        >
        Filter
        </button>
      </div>
      <div className="">
        <div className="filterContainer">
          {finalReport.map((nutrient) => (
            <label className="filter__nutrient" htmlFor={`nut-${nutrient.id}`}>
              <input type="checkbox" defaultChecked onClick={() => handleClick(nutrient)} name={`${nutrient.id}`} id={`nut-${nutrient.id}`} />
              {nutrient.name}
            </label>
          ))}
        </div>
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
  );
};

const mapStateToProps = (state) => ({
  foodInfo: state.foodInfo,
});

const mapDispatchToProps = {
  goBack,
};

export default connect(mapStateToProps, mapDispatchToProps)(Test);
