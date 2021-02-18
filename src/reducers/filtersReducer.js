const filtersReducerDefaultState = {
  brand: [],
  name: "",
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};

export default filtersReducer;
