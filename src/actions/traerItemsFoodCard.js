/* eslint-disable no-console */
const traerItems = (terminos) => async (dispatch) => {
  const BASE_API = 'https://api.nal.usda.gov/fdc/v1/search?';
  const API_KEY = 'api_key=xegkBOn6pSqBMY3HdPnjahRLFpJDwr48P8094pnM';
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const RAW = JSON.stringify({
    generalSearchInput: terminos,
    includeDataTypeList: ['SR Legacy', 'Branded'],
  });
  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: RAW,
  };
  const URL = `${BASE_API}${API_KEY}`;
  fetch(URL, requestOptions)
    .then((response) => response.json())
    .then(async (data) => {
      const foodData = await data.foods;
      dispatch({
        type: 'TRAER_TODOS',
        payload: foodData,
      });
      return (data.foods);
    })
    .catch((error) => console.error(error.message));
};

export default traerItems;
