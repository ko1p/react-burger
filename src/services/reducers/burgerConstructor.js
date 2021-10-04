import {
    ADD_CONSTRUCTOR_INGREDIENT,
    REMOVE_CONSTRUCTOR_INGREDIENT,
    SET_CONSTRUCTOR_BUN,
    UPDATE_INGREDIENTS
} from "../actions";

const initialStateConstructor = {
    bun: {},
    ingredients: [],
};

export const burgerConstructor = (state = initialStateConstructor, action) => {
    switch (action.type) {
        case ADD_CONSTRUCTOR_INGREDIENT: {
            return {
                ...state,
                ingredients: [
                    ...state.ingredients,
                    action.ingredient
                ]
            }
        }
        case REMOVE_CONSTRUCTOR_INGREDIENT: {
            return {
                ...state,
                ingredients: [
                    ...state.ingredients.filter(ingredient => ingredient.uuid !== action.ingredient.uuid)
                ]
            }
        }
        case SET_CONSTRUCTOR_BUN: {
            return {
                ...state,
                bun: action.bun
            }
        }
        case UPDATE_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients
            };

        default:
            return state;
    }
}
