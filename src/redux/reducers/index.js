import { combineReducers } from "redux";
import { countriesReducer, selectedCountriesReducer, inputReducer } from "./countriesReducer";
const reducers = combineReducers({
    allCountries: countriesReducer,
    country: selectedCountriesReducer,
    inputVal: inputReducer
});
export default reducers;