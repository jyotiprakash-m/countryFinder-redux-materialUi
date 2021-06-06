import { ActionTypes } from "../constants/action-types";

export const setCountries = (countries) => {
    return {
        type: ActionTypes.SET_COUNTRIES,
        payload: countries,
    };
};
export const setInputValue = (inputValue) => {
    return {
        type: ActionTypes.SET_INPUT,
        payload: inputValue,
    };
};

export const selectedCountry = (country) => {
    return {
        type: ActionTypes.SELECTED_COUNTRY,
        payload: country,
    };
};
export const removeSelectedCountry = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_COUNTRY,
    };
};