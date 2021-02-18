import { combineReducers, createStore } from "redux";
import filtersReducer from "./reducers/filtersReducer";
import phonesReducer from "./reducers/phonesReducer";

const configureStore = () => {
  const store = createStore(
    combineReducers({
      phones: phonesReducer,
      filters: filtersReducer,
      // cards: cardReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default configureStore;
  