import React, {useEffect, useRef} from 'react'
import styles from './login.module.css'
import { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import {fetchLoginUser} from "../../services/actions";
import {useDispatch, useSelector} from "react-redux";


export const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const passwordRef = useRef(null)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPassHide, setIsPassHide] = useState(true);
    const name = useSelector(store => store.profile.user.name)

    useEffect(() => {
        if (name) {
            history.replace({ pathname: '/' });
        }
    }, [history, name])

    const passwordHider = (e) => {
        let input = passwordRef.current
        if (input.type === 'password') {
            setIsPassHide(false)
            input.setAttribute('type', 'text')
        } else {
            setIsPassHide(true)
            input.setAttribute('type', 'password')
        }
    }

    const formSubmitHandler = e => {
        e.preventDefault()
        console.log(email, password)
        dispatch(fetchLoginUser(email, password))
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
