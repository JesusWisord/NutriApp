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
    case 'SET_ITEM':
      return {
        ...state,
        selectedItems: state.selectedItems.concat(
          {
            id: action.payload.id,
            amount: action.payload.amount,
          },
        ),
      };
    case 'UNSET_ITEM':
      return {
        ...state,
        selectedItems: state.selectedItems.filter((item) => (
          item.id !== action.payload)),
      };
    case 'FINAL_REPORT':
      return {
        ...state,
        finalReport: state.finalReport.concat(action.payload),
      };
    case 'RESET_REPORT':
      return {
        ...state,
        finalReport: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
