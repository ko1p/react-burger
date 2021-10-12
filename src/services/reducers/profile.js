import {
    SET_REGISTER_IS_FETCHING,
    SET_REGISTER_IS_SUCCESS,
    SET_REGISTER_ERROR,
    SET_REGISTER_USER_DATA,
    SET_RECOVER_PASS_IS_FETCHING,
    SET_RECOVER_PASS_IS_SUCCESS,
    SET_RECOVER_PASS_ERROR,

} from '../actions'

const initialStateProfile = {
    user: {
        name: '',
        email: '',
    },
    isRegisterFetching: false,
    isRegisterSuccess: false,
    registerError: '',
    isRecoverPassFetching: false,
    isRecoverPassSuccess: false,
    recoverPassError: ''
};

export const profile = (state = initialStateProfile, action) => {
    switch (action.type) {
        case SET_REGISTER_IS_FETCHING: {
            return {
                ...state,
                isRegisterFetching: action.isRegisterFetching
            }
        }
        case SET_REGISTER_IS_SUCCESS: {
            return {
                ...state,
                isRegisterSuccess: action.isRegisterSuccess
            }
        }
        case SET_REGISTER_ERROR: {
            return {
                ...state,
                registerError: action.registerError
            }
        }
        case SET_REGISTER_USER_DATA: {
            return {
                ...state,
                user: action.user
            }
        }
        case SET_RECOVER_PASS_IS_FETCHING: {
            return {
                ...state,
                isRecoverPassFetching: action.isRecoverPassFetching
            }
        }
        case SET_RECOVER_PASS_IS_SUCCESS: {
            return {
                ...state,
                isRecoverPassSuccess: action.isRecoverPassSuccess
            }
        }
        case SET_RECOVER_PASS_ERROR: {
            return {
                ...state,
                recoverPassError: action.recoverPassError
            }
        }
        default:
            return state
    }
}
