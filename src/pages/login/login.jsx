import React, { useRef } from 'react'
import styles from './login.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";


export const Login = () => {
    const passwordRef = useRef(null)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const passwordHider = (e) => {
        let input = passwordRef.current
        if (input.type === 'password') {
            input.setAttribute('type', 'text')
        } else {
            input.setAttribute('type', 'password')
        }
    }

    const formSubmitHandler = e => {
        e.preventDefault()
        console.log(email, password)
        //dispatch(loginUser(email, password));
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Вход</h2>
                <form name='register' className={styles.register} onSubmit={formSubmitHandler}>
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name={'name'}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                    <Input
                        type={'password'}
                        placeholder={'Пароль'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        icon={'HideIcon'}
                        name={'password'}
                        onIconClick={passwordHider}
                        errorText={'Ошибка'}
                        size={'default'}
                        ref={passwordRef}
                    />


                    <Button type="primary" size="medium">
                        Войти
                    </Button>
                </form>

                    <p className={'text text_type_main-default text_color_inactive mt-20'}>
                        Вы - новый пользователь?&nbsp;
                        <Link to='/register' className={styles.link}>Зарегистрироваться</Link>
                    </p>
                    <p className={'text text_type_main-default text_color_inactive mt-4'}>
                        Забыли пароль?&nbsp;
                        <Link to='/forgot-password' className={styles.link}>Восстановить пароль</Link>
                    </p>
            </div>
        </div>
    )
}
