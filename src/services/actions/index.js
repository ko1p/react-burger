import { setCookie, getCookie } from '../../utils/cookie';
import { v4 as uuidv4 } from 'uuid';
import { URL } from "../../utils/constants";
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
export const SET_ORDER_INFO = 'SET_ORDER_INFO';
export const SET_ORDER_FETCH_ERROR = 'SET_ORDER_FETCH_ERROR';
export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS';
export const SET_REGISTER_IS_FETCHING = 'SET_REGISTER_IS_FETCHING'
export const SET_REGISTER_IS_SUCCESS = 'SET_REGISTER_IS_SUCCESS'
export const SET_REGISTER_ERROR = 'SET_REGISTER_ERROR'
export const SET_USER_DATA = 'SET_USER_DATA'
export const SET_RECOVER_PASS_IS_FETCHING = 'SET_RECOVER_PASS_IS_FETCHING'
export const SET_RECOVER_PASS_IS_SUCCESS = 'SET_RECOVER_PASS_IS_SUCCESS'
export const SET_RECOVER_PASS_ERROR = 'SET_RECOVER_PASS_ERROR'
export const SET_RESET_PASS_IS_FETCHING = 'SET_RESET_PASS_IS_FETCHING'
export const SET_RESET_PASS_IS_SUCCESS = 'SET_RESET_PASS_IS_SUCCESS'
export const SET_RESET_PASS_ERROR = 'SET_RESET_PASS_ERROR'
export const SET_USER_LOGIN_IS_FETCHING = 'SET_USER_LOGIN_IS_FETCHING'
export const SET_USER_LOGIN_IS_SUCCESS = 'SET_USER_LOGIN_IS_SUCCESS'
export const SET_USER_LOGIN_ERROR = 'SET_USER_LOGIN_ERROR'


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
        fetch(`${url}/ingredients`)
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

export const setOrderInfo = info => (
    {
        type: SET_ORDER_INFO,
        info
    }
)

export const setOrderFetchError = hasError => (
    {
        type: SET_ORDER_FETCH_ERROR,
        hasError
    }
)

export const fetchOrderData = (url, orderIds) => {
    return dispatch => {
        fetch(`${url}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"ingredients": orderIds})
        })
            .then(res => {
                if (res.status !== 200) {
                    throw new Error(res.status)
                }
                return res.json()
            })
            .then(info => {
                dispatch(setOrderFetchError(false))
                dispatch(setModalData(info))
            })
            .catch((err) => {
                dispatch(setOrderFetchError(true))
                console.log(`При отправке заказа на сервер произошла ошибка ${err}`)
            });
    }
}

export const setRegisterIsFetching = isRegisterFetching => (
    {
        type: SET_REGISTER_IS_FETCHING,
        isRegisterFetching
    }
)

export const setRegisterIsSuccess = isRegisterSuccess => (
    {
        type: SET_REGISTER_IS_SUCCESS,
        isRegisterSuccess
    }
)

export const setRegisterError = registerError => (
    {
        type: SET_REGISTER_ERROR,
        registerError
    }
)

export const setUserData = user => (
    {
        type: SET_USER_DATA,
        user
    }
)

export const fetchRegister = (name, email, password) => {
    return dispatch => {
        dispatch(setRegisterIsFetching(true))
        fetch(`${URL}/auth/register `, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: name, email: email, password: password }),
        })
            .then(res => {
                dispatch(setRegisterIsFetching(false))
                if (res.ok) {
                    dispatch(setRegisterIsSuccess(true))
                    return res.json()
                } else {
                    throw new Error(`Произошла ошибка`)
                }
            })
            .then(res => {
                console.log(res)
                dispatch(setUserData(res.user))
                setCookie('accessToken', res.accessToken);
                setCookie('refreshToken', res.refreshToken);
            })
            .catch(e => {
                dispatch(setRegisterIsSuccess(false))
                dispatch(setRegisterError(e))
                console.log(e)
            })
    }
}

export const setRecoverPassIsFetching = isRecoverPassFetching => (
    {
        type: SET_RECOVER_PASS_IS_FETCHING,
        isRecoverPassFetching
    }
)

export const setRecoverPassIsSuccess = isRecoverPassSuccess => (
    {
        type: SET_RECOVER_PASS_IS_SUCCESS,
        isRecoverPassSuccess
    }
)

export const setRecoverPassError = recoverPassError => (
    {
        type: SET_RECOVER_PASS_ERROR,
        recoverPassError
    }
)

export const fetchRecoverPass = email => {
    return dispatch => {
        dispatch(setRecoverPassIsFetching(true))
        fetch(`${URL}/password-reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email }),
        })
            .then(res => {
                dispatch(setRecoverPassIsFetching(false))
                if (res.ok) {
                    dispatch(setRecoverPassIsSuccess(true))
                    return res.json()
                } else {
                    throw new Error(`Произошла ошибка`)
                }
            })
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                dispatch(setRecoverPassIsSuccess(false))
                dispatch(setRecoverPassError(e))
                console.log(e)
            })
    }
}

export const setResetPassIsFetching = isResetPassFetching => (
    {
        type: SET_RESET_PASS_IS_FETCHING,
        isResetPassFetching
    }
)

export const setResetPassIsSuccess = isResetPassSuccess => (
    {
        type: SET_RESET_PASS_IS_SUCCESS,
        isResetPassSuccess
    }
)

export const setResetPassError = resetPassError => (
    {
        type: SET_RESET_PASS_ERROR,
        resetPassError
    }
)

export const fetchResetPass = (password, token) => {
    return dispatch => {
        dispatch(setResetPassIsFetching(true))
        fetch(`${URL}/password-reset`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password: password, token: token }),
        })
            .then(res => {
                dispatch(setResetPassIsFetching(false))
                if (res.ok) {
                    dispatch(setResetPassIsSuccess(true))
                    return res.json()
                } else {
                    throw new Error(`Произошла ошибка`)
                }
            })
            .then(res => {
                console.log(res)
            })
            .catch(e => {
                dispatch(setResetPassIsSuccess(false))
                dispatch(setResetPassError(e))
                console.log(e)
            })
    }
}

export const setLoginUserIsFetching = isUserLoginFetching => (
    {
        type: SET_USER_LOGIN_IS_FETCHING,
        isUserLoginFetching
    }
)

export const setLoginUserIsSuccess = isUserLoginSuccess => (
    {
        type: SET_USER_LOGIN_IS_SUCCESS,
        isUserLoginSuccess
    }
)

export const setLoginUserError = userLoginError => (
    {
        type: SET_USER_LOGIN_ERROR,
        userLoginError
    }
)

export const fetchLoginUser = (email, password) => {
    return dispatch => {
        dispatch(setLoginUserIsFetching(true))
        fetch(`${URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        })
            .then(res => {
                dispatch(setLoginUserIsFetching(false))
                if (res.ok) {
                    dispatch(setLoginUserIsSuccess(true))
                    return res.json()
                } else {
                    throw new Error(`Произошла ошибка`)
                }
            })
            .then(res => {
                console.log(res)
                dispatch(setUserData(res.user))
                setCookie('accessToken', res.accessToken);
                setCookie('refreshToken', res.refreshToken);
            })
            .catch(e => {
                dispatch(setLoginUserIsSuccess(false))
                dispatch(setLoginUserError(e))
                console.log(e)
            })
    }
}
