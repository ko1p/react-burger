export const SET_INGREDIENTS_SUCCESS = 'SET_INGREDIENTS_SUCCESS';
export const SET_INGREDIENTS_ERROR = 'SET_INGREDIENTS_ERROR';
export const SET_MODAL_DATA = 'SET_MODAL_DATA';
export const SET_INGREDIENTS_MODAL_OPEN = 'SET_INGREDIENTS_MODAL_OPEN';
export const SET_ORDER_MODAL_OPEN = 'SET_ORDER_MODAL_OPEN';
export const SET_MODAL_CLOSE = 'SET_MODAL_CLOSE';
export const RESET_MODAL_DATA = 'RESET_MODAL_DATA';
export const ADD_CONSTRUCTOR_INGREDIENT = 'ADD_CONSTRUCTOR_INGREDIENT';
export const REMOVE_CONSTRUCTOR_INGREDIENT = 'REMOVE_CONSTRUCTOR_INGREDIENT';
export const SET_CONSTRUCTOR_BUN = 'SET_CONSTRUCTOR_BUN';
export const DELETE_CART_MODAL = 'DELETE_CART_MODAL';
export const GET_ORDER_REQUEST = 'GET_ORDER_REQUEST';
export const GET_ORDER_SUCCESS = 'GET_ORDER_SUCCESS';
export const GET_ORDER_ERROR = 'GET_ORDER_ERROR';
export const DELETE_ORDER_MODAL = 'DELETE_ORDER_MODAL';

const successFetchIngredients = ingredients => (
    {
        type: SET_INGREDIENTS_SUCCESS,
        ingredients
    }
)

const failedFetchIngredients = () => (
    {
        type: SET_INGREDIENTS_ERROR
    }
)

export const fetchIngredients = url => {
    return dispatch => {
        fetch(url)
            .then(res => {
                if (res.status !== 200) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(ingredients => {
                dispatch(successFetchIngredients(ingredients.data))
            })
            .catch((err) => {
                dispatch(failedFetchIngredients())
                console.log(`При запросе с сервера списка ингредиентов произошла ошибка. ${err}`)
            });
    }
}

export const openIngredientsModal = () => (
    {
        type: SET_INGREDIENTS_MODAL_OPEN
    }
)

export const openOrderModal = () => (
    {
        type: SET_ORDER_MODAL_OPEN
    }
)

export const closeModal = () => (
    {
        type: SET_MODAL_CLOSE
    }
)

export const setModalData = data => (
    {
        type: SET_MODAL_DATA,
        data
    }
)

export const resetModalData = () => (
    {
        type: RESET_MODAL_DATA,
    }
)

export const addConstructorIngredient = ingredient => (
    {
        type: ADD_CONSTRUCTOR_INGREDIENT,
        ingredient
    }
)

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

// export const fetchOrderData = url => {
//     return dispatch => {
//         fetch(url)
//             .then(res => {
//                 if (res.status !== 200) {
//                     throw new Error(res.status)
//                 }
//                 return res.json()
//             })
//             .then(ingredients => {
//                 dispatch(successFetchIngredients(ingredients.data))
//             })
//             .catch((err) => {
//                 dispatch(failedFetchIngredients())
//                 console.log(`При запросе с сервера списка ингредиентов произошла ошибка. ${err}`)
//             });
//     }
// }
