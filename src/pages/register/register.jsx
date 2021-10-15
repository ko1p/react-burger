import { useRef, useState } from 'react'
import { Link  } from 'react-router-dom'
import styles from './register.module.css'
import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import { fetchRegister } from "../../services/actions";

export const Register = () => {
    // const history = useHistory()
    // const name = useSelector(store => store.profile.user.name)

    // useEffect(() => {
    //     if (name) {
    //         history.replace({ pathname: '/' });
    //     }
    // }, [name, history]);


    const dispatch = useDispatch()
    const passwordRef = useRef(null)
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPassHide, setIsPassHide] = useState(true);

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
        console.log(userName, email, password)
        dispatch(fetchRegister(userName, email, password))
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Регистрация</h2>
                <form name='register' className={styles.register} onSubmit={formSubmitHandler}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        name={'name'}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name={'email'}
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
                        Зарегистрироваться
                    </Button>
                </form>

                    <p className={'text text_type_main-default text_color_inactive mt-20'}>
                        Уже зарегистрированны?&nbsp;
                        <Link to='/login' className={styles.link}>Войти</Link>
                    </p>

            </div>
        </div>
    )
}
