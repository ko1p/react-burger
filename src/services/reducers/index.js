import {combineReducers} from 'redux';
import {
    SET_INGREDIENTS_SUCCESS,
    SET_INGREDIENTS_ERROR,
    SET_MODAL_DATA,
    SET_INGREDIENTS_MODAL_OPEN,
    SET_ORDER_MODAL_OPEN,
    SET_MODAL_CLOSE,
    RESET_MODAL_DATA,
    ADD_CONSTRUCTOR_INGREDIENT,
    REMOVE_CONSTRUCTOR_INGREDIENT,
    SET_CONSTRUCTOR_BUN,
    SET_ORDER_INFO,
    SET_ORDER_FETCH_ERROR
    // ADD_CART_MODAL,
    // DELETE_CART_MODAL,
    // GET_ORDER_REQUEST,
    // GET_ORDER_SUCCESS,
    // GET_ORDER_ERROR,
    // DELETE_ORDER_MODAL
} from '../actions';

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

const initialStateModal = {
    isOpen: false,
    type: {
        ingredients: false,
        order: false
    },
    data: {}
};

export const modal = (state = initialStateModal, action) => {
    switch (action.type) {
        case SET_INGREDIENTS_MODAL_OPEN: {
            return {
                ...state,
                isOpen: true,
                type: {
                    ...state.type,
                    ingredients: true,
                    order: false
                }
            };
        }
        case SET_ORDER_MODAL_OPEN: {
            return {
                ...state,
                isOpen: true,
                type: {
                    ...state.type,
                    ingredients: false,
                    order: true
                }
            };
        }
        case SET_MODAL_CLOSE: {
            return {
                ...state,
                isOpen: false,
                type: {
                    ...state.type,
                    ingredients: false,
                    order: false
                }
            };
        }
        case RESET_MODAL_DATA: {
            return {
                ...state,
                data: initialStateModal.data
            };
        }
        case SET_MODAL_DATA: {
            console.log(action.data)
            return {
                ...state,
                data: action.data
            };
        }
        default:
            return state
    }
}

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
        default:
            return state
    }
}

const initialStateOrder = {
    isRequesting: false,
    hasError: false
};

export const order = (state = initialStateOrder, action) => {
    switch (action.type) {
        case SET_ORDER_FETCH_ERROR: {
            return {
                ...state,
                hasError: action.hasError
            }
        }
        default:
            return state
    }
}


export const rootReducer = combineReducers({
    ingredients,
    modal,
    burgerConstructor,
    order
});
