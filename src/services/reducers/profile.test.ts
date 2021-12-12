import * as types from "../actions/profile"
import { profile, initialStateProfile } from "./profile"

describe('modal reducer', () => {
    it('should handle SET_REGISTER_IS_FETCHING', () => {
        expect(
            profile(initialStateProfile, {
                type: types.SET_REGISTER_IS_FETCHING,
                isRegisterFetching: true
            })
        ).toEqual(
            {
                user: {
                    name: '',
                    email: '',
                },
                isRegisterFetching: true,
                isRegisterSuccess: false,
                registerError: '',
                isRecoverPassFetching: false,
                isRecoverPassSuccess: false,
                recoverPassError: '',
                isResetPassFetching: false,
                isResetPassSuccess: false,
                resetPassError: '',
                isUserLoginFetching: false,
                isUserLoginSuccess: false,
                userLoginError: ''
            }
        )
    })
    it('should handle SET_REGISTER_IS_SUCCESS', () => {
        expect(
            profile(initialStateProfile, {
                type: types.SET_REGISTER_IS_SUCCESS,
                isRegisterSuccess: true
            })
        ).toEqual(
            {
                user: {
                    name: '',
                    email: '',
                },
                isRegisterFetching: false,
                isRegisterSuccess: true,
                registerError: '',
                isRecoverPassFetching: false,
                isRecoverPassSuccess: false,
                recoverPassError: '',
                isResetPassFetching: false,
                isResetPassSuccess: false,
                resetPassError: '',
                isUserLoginFetching: false,
                isUserLoginSuccess: false,
                userLoginError: ''
            }
        )
    })
    it('should handle SET_REGISTER_ERROR', () => {
        expect(
            profile(initialStateProfile, {
                type: types.SET_REGISTER_ERROR,
                registerError: 'some Error'
            })
        ).toEqual(
            {
                user: {
                    name: '',
                    email: '',
                },
                isRegisterFetching: false,
                isRegisterSuccess: false,
                registerError: 'some Error',
                isRecoverPassFetching: false,
                isRecoverPassSuccess: false,
                recoverPassError: '',
                isResetPassFetching: false,
                isResetPassSuccess: false,
                resetPassError: '',
                isUserLoginFetching: false,
                isUserLoginSuccess: false,
                userLoginError: ''
            }
        )
    })
    it('should handle SET_USER_DATA', () => {
        expect(
            profile(initialStateProfile, {
                type: types.SET_USER_DATA,
                user: {
                    name: 'userName',
                    email: 'email@email.ru'
                }
            })
        ).toEqual(
            {
                user: {
                    name: 'userName',
                    email: 'email@email.ru'
                },
                isRegisterFetching: false,
                isRegisterSuccess: false,
                registerError: '',
                isRecoverPassFetching: false,
                isRecoverPassSuccess: false,
                recoverPassError: '',
                isResetPassFetching: false,
                isResetPassSuccess: false,
                resetPassError: '',
                isUserLoginFetching: false,
                isUserLoginSuccess: false,
                userLoginError: ''
            }
        )
    })
    it('should handle RESET_USER_DATA', () => {
        expect(
            profile(initialStateProfile, {
                type: types.RESET_USER_DATA,
            })
        ).toEqual(
            {
                user: {
                    name: '',
                    email: ''
                },
                isRegisterFetching: false,
                isRegisterSuccess: false,
                registerError: '',
                isRecoverPassFetching: false,
                isRecoverPassSuccess: false,
                recoverPassError: '',
                isResetPassFetching: false,
                isResetPassSuccess: false,
                resetPassError: '',
                isUserLoginFetching: false,
                isUserLoginSuccess: false,
                userLoginError: ''
            }
        )
    })
    it('should handle SET_RECOVER_PASS_IS_FETCHING', () => {
        expect(
            profile(initialStateProfile, {
                type: types.SET_RECOVER_PASS_IS_FETCHING,
                isRecoverPassFetching: true
            })
        ).toEqual(
            {
                user: {
                    name: '',
                    email: ''
                },
                isRegisterFetching: false,
                isRegisterSuccess: false,
                registerError: '',
                isRecoverPassFetching: true,
                isRecoverPassSuccess: false,
                recoverPassError: '',
                isResetPassFetching: false,
                isResetPassSuccess: false,
                resetPassError: '',
                isUserLoginFetching: false,
                isUserLoginSuccess: false,
                userLoginError: ''
            }
        )
    })
    it('should handle SET_RECOVER_PASS_IS_SUCCESS', () => {
        expect(
            profile(initialStateProfile, {
                type: types.SET_RECOVER_PASS_IS_SUCCESS,
                isRecoverPassSuccess: true
            })
        ).toEqual(
            {
                user: {
                    name: '',
                    email: ''
                },
                isRegisterFetching: false,
                isRegisterSuccess: false,
                registerError: '',
                isRecoverPassFetching: false,
                isRecoverPassSuccess: true,
                recoverPassError: '',
                isResetPassFetching: false,
                isResetPassSuccess: false,
                resetPassError: '',
                isUserLoginFetching: false,
                isUserLoginSuccess: false,
                userLoginError: ''
            }
        )
    })
    it('should handle SET_RECOVER_PASS_ERROR', () => {
        expect(
            profile(initialStateProfile, {
                type: types.SET_RECOVER_PASS_ERROR,
                recoverPassError: 'some error'
            })
        ).toEqual(
            {
                user: {
                    name: '',
                    email: ''
                },
                isRegisterFetching: false,
                isRegisterSuccess: false,
                registerError: '',
                isRecoverPassFetching: false,
                isRecoverPassSuccess: false,
                recoverPassError: 'some error',
                isResetPassFetching: false,
                isResetPassSuccess: false,
                resetPassError: '',
                isUserLoginFetching: false,
                isUserLoginSuccess: false,
                userLoginError: ''
            }
        )
    })
    it('should handle SET_RESET_PASS_IS_FETCHING', () => {
        expect(
            profile(initialStateProfile, {
                type: types.SET_RESET_PASS_IS_FETCHING,
                isResetPassFetching: true
            })
        ).toEqual(
            {
                user: {
                    name: '',
                    email: ''
                },
                isRegisterFetching: false,
                isRegisterSuccess: false,
                registerError: '',
                isRecoverPassFetching: false,
                isRecoverPassSuccess: false,
                recoverPassError: '',
                isResetPassFetching: true,
                isResetPassSuccess: false,
                resetPassError: '',
                isUserLoginFetching: false,
                isUserLoginSuccess: false,
                userLoginError: ''
            }
        )
    })
    it('should handle SET_RESET_PASS_IS_SUCCESS', () => {
        expect(
            profile(initialStateProfile, {
                type: types.SET_RESET_PASS_IS_SUCCESS,
                isResetPassSuccess: true
            })
        ).toEqual(
            {
                user: {
                    name: '',
                    email: ''
                },
                isRegisterFetching: false,
                isRegisterSuccess: false,
                registerError: '',
                isRecoverPassFetching: false,
                isRecoverPassSuccess: false,
                recoverPassError: '',
                isResetPassFetching: false,
                isResetPassSuccess: true,
                resetPassError: '',
                isUserLoginFetching: false,
                isUserLoginSuccess: false,
                userLoginError: ''
            }
        )
    })
    it('should handle SET_RESET_PASS_ERROR', () => {
        expect(
            profile(initialStateProfile, {
                type: types.SET_RESET_PASS_ERROR,
                resetPassError: 'some error'
            })
        ).toEqual(
            {
                user: {
                    name: '',
                    email: ''
                },
                isRegisterFetching: false,
                isRegisterSuccess: false,
                registerError: '',
                isRecoverPassFetching: false,
                isRecoverPassSuccess: false,
                recoverPassError: '',
                isResetPassFetching: false,
                isResetPassSuccess: false,
                resetPassError: 'some error',
                isUserLoginFetching: false,
                isUserLoginSuccess: false,
                userLoginError: ''
            }
        )
    })
    it('should handle SET_USER_LOGIN_IS_FETCHING', () => {
        expect(
            profile(initialStateProfile, {
                type: types.SET_USER_LOGIN_IS_FETCHING,
                isUserLoginFetching: true
            })
        ).toEqual(
            {
                user: {
                    name: '',
                    email: ''
                },
                isRegisterFetching: false,
                isRegisterSuccess: false,
                registerError: '',
                isRecoverPassFetching: false,
                isRecoverPassSuccess: false,
                recoverPassError: '',
                isResetPassFetching: false,
                isResetPassSuccess: false,
                resetPassError: '',
                isUserLoginFetching: true,
                isUserLoginSuccess: false,
                userLoginError: ''
            }
        )
    })
    it('should handle SET_USER_LOGIN_IS_SUCCESS', () => {
        expect(
            profile(initialStateProfile, {
                type: types.SET_USER_LOGIN_IS_SUCCESS,
                isUserLoginSuccess: true
            })
        ).toEqual(
            {
                user: {
                    name: '',
                    email: ''
                },
                isRegisterFetching: false,
                isRegisterSuccess: false,
                registerError: '',
                isRecoverPassFetching: false,
                isRecoverPassSuccess: false,
                recoverPassError: '',
                isResetPassFetching: false,
                isResetPassSuccess: false,
                resetPassError: '',
                isUserLoginFetching: false,
                isUserLoginSuccess: true,
                userLoginError: ''
            }
        )
    })
    it('should handle SET_USER_LOGIN_ERROR', () => {
        expect(
            profile(initialStateProfile, {
                type: types.SET_USER_LOGIN_ERROR,
                userLoginError: 'some error'
            })
        ).toEqual(
            {
                user: {
                    name: '',
                    email: ''
                },
                isRegisterFetching: false,
                isRegisterSuccess: false,
                registerError: '',
                isRecoverPassFetching: false,
                isRecoverPassSuccess: false,
                recoverPassError: '',
                isResetPassFetching: false,
                isResetPassSuccess: false,
                resetPassError: '',
                isUserLoginFetching: false,
                isUserLoginSuccess: false,
                userLoginError: 'some error'
            }
        )
    })
});
