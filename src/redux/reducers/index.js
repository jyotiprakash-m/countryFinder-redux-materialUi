import { combineReducers } from "redux";
import { countriesReducer, selectedCountriesReducer } from "./countriesReducer";
const reducers = combineReducers({
    allProducts: countriesReducer,
    product: selectedCountriesReducer,
});
export default reducers;