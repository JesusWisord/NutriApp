const traerInfo = (id) => async (dispatch) => {
  const BASE_API = 'https://api.nal.usda.gov/fdc/v1/';
  const API_KEY = 'api_key=xegkBOn6pSqBMY3HdPnjahRLFpJDwr48P8094pnM';
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  const URL = `${BASE_API}${id}?${API_KEY}`;
  fetch(URL, requestOptions)
    .then((response) => response.json())
    .then(async (data) => {
      dispatch({
        type: 'TRAER_ID',
        payload: data,
      });
      return (data.foods);
    })
    .catch((error) => console.error(error.message));
};

export default traerInfo;
