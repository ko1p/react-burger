import {v4 as uuidv4} from "uuid";

export const ADD_CONSTRUCTOR_INGREDIENT = 'ADD_CONSTRUCTOR_INGREDIENT';
export const REMOVE_CONSTRUCTOR_INGREDIENT = 'REMOVE_CONSTRUCTOR_INGREDIENT';
export const SET_CONSTRUCTOR_BUN = 'SET_CONSTRUCTOR_BUN';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';


export const addConstructorIngredient = ingredient => {
    return {
        type: ADD_CONSTRUCTOR_INGREDIENT,
        ingredient: {
            ...ingredient,
            uuid: uuidv4()
        }
    }
}

export const updateIngredients = ingredients => {
    return {
        type: UPDATE_INGREDIENTS,
        ingredients: ingredients
    }
}

export const removeConstructorIngredient = ingredient => (
    {
        type: REMOVE_CONSTRUCTOR_INGREDIENT,
        ingredient
    }
)

export const setConstructorBun = bun => (
    {
        type: SET_CONSTRUCTOR_BUN,
        bun
    }
)
