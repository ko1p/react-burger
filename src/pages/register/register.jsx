import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import styles from './register.module.css'
import {Input, Button} from "@ya.praktikum/react-developer-burger-ui-components";

export const Register = () => {
    const [value, setValue] = useState('value')
    const inputRef = useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)
        alert('Icon Click Callback')
    }

    const formSubmitHandler = e => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <h2 className={styles.heading}>Регистрация</h2>
                <form name='register' className={styles.register} onSubmit={formSubmitHandler}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={e => setValue(e.target.value)}
                        name={'name'}
                        ref={inputRef}
                        onIconClick={onIconClick}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        onChange={e => setValue(e.target.value)}
                        name={'email'}
                        ref={inputRef}
                        onIconClick={onIconClick}
                        errorText={'Ошибка'}
                        //size={'default'}
                    />
                    <Input
                        type={'password'}
                        placeholder={'Пароль'}
                        onChange={e => setValue(e.target.value)}
                        icon={'HideIcon'}
                        name={'password'}
                        ref={inputRef}
                        onIconClick={onIconClick}
                        errorText={'Ошибка'}
                        //size={'default'}
                    />

                    <Button type="primary" size="medium">
                        Зарегистрироваться
                    </Button>

                    <p className={'text text_type_main-default text_color_inactive mt-20'}>
                        Уже зарегистрированны?&nbsp;
                        <Link to='/login' className={styles.link}>Войти</Link>
                    </p>

                </form>
            </div>
        </div>
    )
}

//TODO: Сделать инпуты шире
