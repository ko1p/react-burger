import styles from "./forgot-password.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from 'react-router-dom'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchRecoverPass} from "../../services/actions/profile";

export const ForgotPassword = () => {
    const dispatch = useDispatch()
    const isPasswordRecoverySuccessfull = useSelector(store => store.profile.isRecoverPassSuccess)
    const history = useHistory()
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (isPasswordRecoverySuccessfull) {
            history.replace('/reset-password');
        }
    }, [history, isPasswordRecoverySuccessfull])

    const formSubmitHandler = e => {
        e.preventDefault()
        dispatch(fetchRecoverPass(email))
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Восстановление пароля</h2>
                <form name='register' className={styles.register} onSubmit={formSubmitHandler}>
                    <Input
                        type={'email'}
                        placeholder={'Укажите e-mail'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name={'name'}
                        errorText={'Ошибка'}
                        size={'default'}
                    />

                    <Button type="primary" size="medium">
                        Восстановить
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
