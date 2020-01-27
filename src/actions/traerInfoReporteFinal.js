const reporteFinal = (ids) => async (dispatch) => {
  const BASE_API = 'https://api.nal.usda.gov/fdc/v1/';
  const API_KEY = 'api_key=xegkBOn6pSqBMY3HdPnjahRLFpJDwr48P8094pnM';
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  const URLArray = ids.map((id) => (fetch(`${BASE_API}${id}?${API_KEY}`, requestOptions).then((response) => response.json())));
  Promise.all(URLArray)
    .then(async (data) => {
      dispatch({
        type: 'FINAL_REPORT',
        payload: data,
      });
    })
    .catch((error) => console.error(error.message));
};

export default reporteFinal;
