const BASE_API = 'https://api.nal.usda.gov/fdc/v1/';
const BASE_SEARCH_API = 'https://api.nal.usda.gov/fdc/v1/search?';
const API_KEY = 'api_key=xegkBOn6pSqBMY3HdPnjahRLFpJDwr48P8094pnM';

export async function getDataID(ID) {
  const searchUrl = `${BASE_API}${ID}?${API_KEY}`;
  const response = await fetch(searchUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export default async function getDataSearch(Terms) {
  const dataSearch = JSON.stringify({ generalSearchInput: Terms });
  const searchUrl = `${BASE_SEARCH_API}${API_KEY}`;
  const response = await fetch(searchUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: dataSearch,
  });
  const data = await response.json();
  return data;
}
