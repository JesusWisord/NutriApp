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
    case 'CARGANDO':
      return {
        ...state,
        isLoading: action.payload,
      };
    case 'TRAER_TODOS':
      return {
        ...state,
        isLoading: false,
        foodItems: action.payload,
      };
    case 'TRAER_ID':
      return {
        ...state,
        isLoading: false,
        foodInfo: action.payload,
      };
    case 'BACK':
      return {
        ...state,
        isLoading: false,
        foodInfo: {},
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
