const reducer = (state, action) => {
  switch (action.type) {
    case 'TRAER_ITEMS':
      return {
        ...state,
      };
    case 'BUSQUEDA':
      return {
        ...state,
        searchTerms: action.payload,
      };
    case 'TRAER_TODOS':
      return {
        ...state,
        foodItems: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
