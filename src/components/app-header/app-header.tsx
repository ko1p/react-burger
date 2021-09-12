import React from "react";
import styles from './app-header.module.css'
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export const AppHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.buttons}>
                        <li className={`${styles.button} p-5 mr-2`}>
                            <BurgerIcon type="primary"/>
                            <p className="text text_type_main-default ml-4">
                                Конструктор
                            </p>
                        </li>
                        <li className={`${styles.button} p-5 mr-2`}>
                            <ListIcon type="primary"/>
                            <p className="text text_type_main-default ml-4">
                                Лента заказов
                            </p>
                        </li>
                    </ul>
                </nav>
                <Logo/>
                <div className={`${styles.button} p-5 mr-2`}>
                    <ProfileIcon type="primary"/>
                    <p className="text text_type_main-default ml-4">
                        Личный кабинет
                    </p>
                </div>
            </div>
        </header>
    )
}
