import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_COUNTRIES,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_COUNTRY,
        payload: product,
    };
};
export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_COUNTRY,
    };
};