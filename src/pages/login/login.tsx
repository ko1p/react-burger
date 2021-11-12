import React, { FC, SyntheticEvent, useRef } from 'react'
import styles from './login.module.css'
import { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components"
import { useDispatch, useSelector } from "react-redux"
import { fetchLoginUser } from "../../services/actions/profile"
import { IStore } from "../../types"

export const Login: FC = () => {
    const dispatch = useDispatch()
    const passwordRef = useRef<HTMLInputElement>(null)
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isPassHide, setIsPassHide] = useState<boolean>(true);
    const name = useSelector((store: IStore) => store.profile.user.name)

    const passwordHider = () => {
        let input = passwordRef.current
        if (input) {
            if (input.type === 'password') {
                setIsPassHide(false)
                input.setAttribute('type', 'text')
            } else {
                setIsPassHide(true)
                input.setAttribute('type', 'password')
            }
        }
    }

    const formSubmitHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(fetchLoginUser(email, password))
    }

    if (name) {
        return (
            <Redirect
                to={{
                    pathname: '/'
                }}
            />
        );
    } else {

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
                            icon={isPassHide ? 'ShowIcon' : 'HideIcon'}
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
}
