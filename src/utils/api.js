import { URL } from './constants'

export const resetPassword = email => {
    return fetch(`${URL}/password-reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('При сбросе пароля произошла ошибка')
            }
        })
        .catch(e => console.log(e))
};

export const checkResetedPassword = (password, token) => {
    return fetch(`${URL}/password-reset/reset`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: password, token: token }),
    })
        .then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error('При восстановлении пароля произошла ошибка')
            }
        })
        .catch(e => console.log(e))
};
