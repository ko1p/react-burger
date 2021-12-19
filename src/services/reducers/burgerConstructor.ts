import {
    ADD_CONSTRUCTOR_INGREDIENT,
    REMOVE_CONSTRUCTOR_INGREDIENT,
    SET_CONSTRUCTOR_BUN,
    UPDATE_INGREDIENTS,
    RESET_INGREDIENTS
} from "../actions/burgerConstructor";
import {IIngredient, TBurgerConstructorActions} from "../../types";

export type TBurgerConstructorState = {
    bun: IIngredient | {};
    ingredients: IIngredient[];
}

export const initialStateConstructor: TBurgerConstructorState = {
    bun: {},
    ingredients: [],
};

export const burgerConstructor = (state = initialStateConstructor, action: TBurgerConstructorActions): TBurgerConstructorState => {
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
                    ...state.ingredients.filter(ingredient => ingredient.uuid !== action.ingredients.uuid)
                ]
            }
        }
        case SET_CONSTRUCTOR_BUN: {
            return {
                ...state,
                bun: action.bun
            }
        }
        case UPDATE_INGREDIENTS: {
            return {
                ...state,
                ingredients: action.ingredients
            }
        }
        case RESET_INGREDIENTS: {
            return {
                bun: {},
                ingredients: [],
            }
        }
        default:
            return state;
    }
}
