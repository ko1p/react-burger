import React from "react";
import styles from './app-header.module.css'
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from 'react-router-dom'

export const AppHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.buttons}>
                        <Link className={styles.link} to='/'>
                            <li className={`${styles.button} p-5 mr-2`}>
                                <BurgerIcon type="primary"/>
                                <p className="text text_type_main-default ml-4">
                                    Конструктор
                                </p>
                            </li>
                        </Link>
                        <Link className={styles.link} to='/lenta-zacazov'>
                            <li className={`${styles.button} p-5 mr-2`}>
                                <ListIcon type="secondary"/>
                                <p className="text text_type_main-default text_color_inactive ml-4">
                                    Лента заказов
                                </p>
                            </li>
                        </Link>
                    </ul>
                </nav>
                <Logo/>
                <div className={`${styles.button} p-5 mr-2`}>
                    <Link className={styles.link} to='/profile'>
                        <ProfileIcon type="secondary"/>
                        <p className="text text_type_main-default text_color_inactive ml-4">
                            Личный кабинет
                        </p>
                    </Link>
                </div>
            </div>
        </header>
    )
}
