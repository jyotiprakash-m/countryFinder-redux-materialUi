import { combineReducers } from "redux";
import { countriesReducer, selectedCountriesReducer } from "./countriesReducer";
const reducers = combineReducers({
    allCountries: countriesReducer,
    country: selectedCountriesReducer,
});
export default reducers;