import { URL } from "../../utils/constants"
import { getCookie, setCookie } from "../../utils/cookie"
import { AppDispatch } from "../../types"

export const SET_REGISTER_IS_FETCHING: 'SET_REGISTER_IS_FETCHING' = 'SET_REGISTER_IS_FETCHING'
export const SET_REGISTER_IS_SUCCESS: 'SET_REGISTER_IS_SUCCESS' = 'SET_REGISTER_IS_SUCCESS'
export const SET_REGISTER_ERROR: 'SET_REGISTER_ERROR' = 'SET_REGISTER_ERROR'
export const SET_USER_DATA: 'SET_USER_DATA' = 'SET_USER_DATA'
export const SET_RECOVER_PASS_IS_FETCHING: 'SET_RECOVER_PASS_IS_FETCHING' = 'SET_RECOVER_PASS_IS_FETCHING'
export const SET_RECOVER_PASS_IS_SUCCESS: 'SET_RECOVER_PASS_IS_SUCCESS' = 'SET_RECOVER_PASS_IS_SUCCESS'
export const SET_RECOVER_PASS_ERROR: 'SET_RECOVER_PASS_ERROR' = 'SET_RECOVER_PASS_ERROR'
export const SET_RESET_PASS_IS_FETCHING: 'SET_RESET_PASS_IS_FETCHING' = 'SET_RESET_PASS_IS_FETCHING'
export const SET_RESET_PASS_IS_SUCCESS: 'SET_RESET_PASS_IS_SUCCESS' = 'SET_RESET_PASS_IS_SUCCESS'
export const SET_RESET_PASS_ERROR: 'SET_RESET_PASS_ERROR' = 'SET_RESET_PASS_ERROR'
export const SET_USER_LOGIN_IS_FETCHING: 'SET_USER_LOGIN_IS_FETCHING' = 'SET_USER_LOGIN_IS_FETCHING'
export const SET_USER_LOGIN_IS_SUCCESS: 'SET_USER_LOGIN_IS_SUCCESS' = 'SET_USER_LOGIN_IS_SUCCESS'
export const SET_USER_LOGIN_ERROR: 'SET_USER_LOGIN_ERROR' = 'SET_USER_LOGIN_ERROR'
export const RESET_USER_DATA: 'RESET_USER_DATA' = 'RESET_USER_DATA'

export const fetchRefreshToken = () => {
    return (dispatch: AppDispatch) => {
        fetch(`${URL}/auth/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: getCookie('refreshToken') }),
        })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    throw new Error('Произошла ошибка')
                }
            })
            .then(res => {
                if (res && res.success) {
                    setCookie('accessToken', res.accessToken);
                    setCookie('refreshToken', res.refreshToken);
                    // @ts-ignore
                    dispatch(fetchUserInfo())
                } else {
                    throw new Error(`Произошла ошибка`)
                }
            })
            .catch(e => {
                console.log(e)
            })
    }
}

export const setRegisterIsFetching = (isRegisterFetching: boolean) => (
    {
        type: SET_REGISTER_IS_FETCHING,
        isRegisterFetching
    }
)

export const setRegisterIsSuccess = (isRegisterSuccess: boolean) => (
    {
        type: SET_REGISTER_IS_SUCCESS,
        isRegisterSuccess
    }
)

export const setRegisterError = (registerError: boolean) => (
    {
        type: SET_REGISTER_ERROR,
        registerError
    }
)

export const setUserData = (user: {email: string, name: string}) => (
    {
        type: SET_USER_DATA,
        user
    }
)

export const fetchRegister = (name: string, email: string, password: string) => {
    return (dispatch: AppDispatch) => {
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

export const setRecoverPassIsFetching = (isRecoverPassFetching: boolean) => (
    {
        type: SET_RECOVER_PASS_IS_FETCHING,
        isRecoverPassFetching
    }
)

export const setRecoverPassIsSuccess = (isRecoverPassSuccess: boolean) => (
    {
        type: SET_RECOVER_PASS_IS_SUCCESS,
        isRecoverPassSuccess
    }
)

export const setRecoverPassError = (recoverPassError: string) => (
    {
        type: SET_RECOVER_PASS_ERROR,
        recoverPassError
    }
)

export const fetchRecoverPass = (email: string) => {
    return (dispatch: AppDispatch) => {
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

export const setResetPassIsFetching = (isResetPassFetching: boolean) => (
    {
        type: SET_RESET_PASS_IS_FETCHING,
        isResetPassFetching
    }
)

export const setResetPassIsSuccess = (isResetPassSuccess: boolean) => (
    {
        type: SET_RESET_PASS_IS_SUCCESS,
        isResetPassSuccess
    }
)

export const setResetPassError = (resetPassError: boolean) => (
    {
        type: SET_RESET_PASS_ERROR,
        resetPassError
    }
)

export const fetchResetPass = (password: string, token: string) => {
    return (dispatch: AppDispatch) => {
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

export const setLoginUserIsFetching = (isUserLoginFetching: boolean) => (
    {
        type: SET_USER_LOGIN_IS_FETCHING,
        isUserLoginFetching
    }
)

export const setLoginUserIsSuccess = (isUserLoginSuccess: boolean) => (
    {
        type: SET_USER_LOGIN_IS_SUCCESS,
        isUserLoginSuccess
    }
)

export const setLoginUserError = (userLoginError: boolean) => (
    {
        type: SET_USER_LOGIN_ERROR,
        userLoginError
    }
)

export const fetchLoginUser = (email: string, password: string) => {
    return (dispatch: AppDispatch) => {
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
                setCookie('accessToken', res.accessToken);
                setCookie('refreshToken', res.refreshToken);
                dispatch(setUserData(res.user))
            })
            .catch(e => {
                dispatch(setLoginUserIsSuccess(false))
                dispatch(setLoginUserError(e))
                console.log(e)
            })
    }
}

export const fetchUserInfo = () => {
    return (dispatch: AppDispatch) => {
        fetch(`${URL}/auth/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `${getCookie('accessToken')}`
            },
        })
            .then(res => res.ok ? res.json() : res.json().then((err) => Promise.reject(err)))
            .then(res => {
                console.log('токен ещё свежий')
                dispatch(setUserData(res.user))
            })
            .catch(e => {
                console.log(e)
                if (e.message === 'jwt expired') {
                    console.log('токен просрочился, обновляю')
                    dispatch(fetchRefreshToken())
                } else {
                    return Promise.reject(e);
                }
            })
    }
}

export const resetUserName = () => (
    {
        type: RESET_USER_DATA
    }
)

export const fetchLogoutUser = () => {
    return (dispatch: AppDispatch) => {
        fetch(`${URL}/auth/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: getCookie('refreshToken') }),
        })
            .then(res => res.json())
            .then(res => {
                if (res && res.success) {
                    setCookie('accessToken', '');
                    setCookie('refreshToken', '');
                    dispatch(resetUserName())
                } else {
                    throw new Error(`Произошла ошибка`)
                }
            })
            .catch(e => {
                console.log(e)
            })
    }
}
