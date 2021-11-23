import { SET_INGREDIENTS_ERROR, SET_INGREDIENTS_SUCCESS } from "../actions/ingredients";
import { IIngredient, TIngredientsActions } from "../../types";

type TIngredientsState = {
    isRequesting: boolean;
    hasRequestError: boolean;
    list: IIngredient[];
}

const initialStateIngredients: TIngredientsState = {
    isRequesting: false,
    hasRequestError: false,
    list: []
};

export const ingredients = (state = initialStateIngredients, action: TIngredientsActions): TIngredientsState => {
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
