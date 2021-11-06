import React, { FC, useEffect, useRef, useState } from 'react'
import styles from './profile.module.css'
import { Input } from '@ya.praktikum/react-developer-burger-ui-components'
import { useDispatch, useSelector } from "react-redux"
import { ProfileNav } from "../../components/profile-nav/profile-nav"
import { fetchUserInfo } from "../../services/actions/profile"
import { IStore } from "../../types"

export const Profile: FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUserInfo())
    }, [dispatch])

    const { userName, userEmail } = useSelector((store: IStore) => ({
        userName: store.profile.user.name,
        userEmail: store.profile.user.email,
    }))

    const [name, setName] = useState(userName || '')
    const [email, setEmail] = useState(userEmail || '')
    const [password, setPassword] = useState('')

    const inputNameRef = useRef<HTMLInputElement>(null)
    const inputLoginRef = useRef<HTMLInputElement>(null)
    const inputPasswordRef = useRef<HTMLInputElement>(null)

    const onIconClickName = () => {
        if (inputNameRef.current) {
            inputNameRef.current.disabled = !inputNameRef.current.disabled
        }
    }

    const onIconClickLogin = () => {
        if (inputLoginRef.current) {
            inputLoginRef.current.disabled = !inputLoginRef.current.disabled
        }
    }

    const onIconClickPassword = () => {
        if (inputPasswordRef.current) {
            inputPasswordRef.current.disabled = !inputPasswordRef.current.disabled
        }
    }

    return (
        <div className={styles.container}>

            <div className={styles.box}>
                <ProfileNav />

                <form className={`${styles.form} mt-20`}>
                    <Input
                        disabled={true}
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={e => setName(e.target.value)}
                        icon={'EditIcon'}
                        value={name}
                        name={'name'}
                        error={false}
                        ref={inputNameRef}
                        onIconClick={onIconClickName}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                    <Input
                        disabled={true}
                        type={'email'}
                        placeholder={'Логин'}
                        onChange={e => setEmail(e.target.value)}
                        icon={'EditIcon'}
                        value={email}
                        name={'email'}
                        error={false}
                        ref={inputLoginRef}
                        onIconClick={onIconClickLogin}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                    <Input
                        disabled={true}
                        type={'password'}
                        placeholder={'Пароль'}
                        onChange={e => setPassword(e.target.value)}
                        icon={'EditIcon'}
                        value={password}
                        name={'password'}
                        error={false}
                        ref={inputPasswordRef}
                        onIconClick={onIconClickPassword}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </form>

            </div>

        </div>

    );
}
