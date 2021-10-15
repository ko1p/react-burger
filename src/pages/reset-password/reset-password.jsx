import styles from "../login/login.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, } from "react-router-dom";
import React, {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {fetchResetPass} from "../../services/actions";

export const ResetPassword = () => {
    const dispatch = useDispatch()
    // const history = useHistory()
    const passwordRef = useRef(null)
    const [newPassword, setNewPassword] = useState('');
    const [code, setCode] = useState('');
    const [isPassHide, setIsPassHide] = useState(true);
    // const isPasswordResetingSuccessful = useSelector(store => store.profile.isResetPassSuccess)
    //
    // useEffect(() => {
    //     if (isPasswordResetingSuccessful) {
    //         history.replace({ pathname: '/login' });
    //     }
    // }, [history, isPasswordResetingSuccessful])

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
        dispatch(fetchResetPass(newPassword, code))
    }
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Восстановление пароля</h2>
                <form name='register' className={styles.register} onSubmit={formSubmitHandler}>
                    <Input
                        type={'password'}
                        placeholder={'Пароль'}
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        icon={isPassHide ? 'ShowIcon' : 'HideIcon'}
                        name={'password'}
                        onIconClick={passwordHider}
                        errorText={'Ошибка'}
                        size={'default'}
                        ref={passwordRef}
                    />
                    <Input
                        type={'text'}
                        placeholder={'Введите код из письма'}
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        name={'text'}
                        errorText={'Ошибка'}
                        size={'default'}
                    />

                    <Button type="primary" size="medium">
                        Сохранить
                    </Button>
                </form>

                <p className={'text text_type_main-default text_color_inactive mt-20'}>
                    Вспомнили пароль?&nbsp;
                    <Link to='/login' className={styles.link}>Войти</Link>
                </p>
            </div>
        </div>
    )
}
