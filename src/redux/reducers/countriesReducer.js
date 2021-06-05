import { ActionTypes } from "../constants/action-types";
const intialState = {
    products: [],
};

export const countriesReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_COUNTRIES:
            return { ...state, products: payload };
        default:
            return state;
    }
};

export const selectedCountriesReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case ActionTypes.SELECTED_COUNTRY:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_COUNTRY:
            return {};
        default:
            return state;
    }
};