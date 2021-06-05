
import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productsReducer";
const reducers = combineReducers({
    allProducts: countriesReducer,
    product: selectedCountriesReducer,
});
export default reducers;