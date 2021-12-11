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
});
