import styles from "./forgot-password.module.css";
import {Button, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import { useHistory } from 'react-router-dom'
import {Link} from "react-router-dom";
import {useState} from "react";
import {resetPassword} from "../../utils/api";

export const ForgotPassword = () => {
    const history = useHistory()
    const [email, setEmail] = useState('');

    const formSubmitHandler = async e => {
        e.preventDefault()
        resetPassword(email)
            .then((res) => {
                if (res && res.success) {
                    history.replace('/reset-password');
                } else {
                    throw new Error('При сбросе пароля произошла ошибка');
                }
            })
            .catch((err) => {
                console.log(err);
            });
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
