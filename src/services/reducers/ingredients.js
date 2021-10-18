import {SET_INGREDIENTS_ERROR, SET_INGREDIENTS_SUCCESS} from "../actions/ingredients";

const initialStateIngredients = {
    isRequesting: false,
    hasRequestError: false,
    list: []
};

export const ingredients = (state = initialStateIngredients, action) => {
    switch (action.type) {
        case SET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                isRequesting: false,
                hasRequestError: false,
                list: [
                    ...action.ingredients
                ]
            };
        }
        case SET_INGREDIENTS_ERROR: {
            return {
                ...state,
                isRequesting: false,
                hasRequestError: true,
                list: initialStateIngredients.list
            };
        }
        default:
            return state
    }
}
