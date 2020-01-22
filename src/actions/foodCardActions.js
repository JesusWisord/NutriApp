/* eslint-disable import/prefer-default-export */
export const buscarInfo = (payload) => ({
  type: 'TRAER_ITEMS',
  payload,
});

export const search = (payload) => ({
  type: 'BUSQUEDA',
  payload,
});

export const loading = (payload) => ({
  type: 'CARGANDO',
  payload,
});

export const goBack = (payload) => ({
  type: 'BACK',
  payload,
});
