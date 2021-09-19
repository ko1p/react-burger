import React from "react";
import styles from './app-header.module.css'
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export const AppHeader = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.buttons}>
                        <a className={styles.link} href="##">
                            <li className={`${styles.button} p-5 mr-2`}>
                                <BurgerIcon type="primary"/>
                                <p className="text text_type_main-default ml-4">
                                    Конструктор
                                </p>
                            </li>
                        </a>
                        <a className={styles.link} href="##">
                            <li className={`${styles.button} p-5 mr-2`}>
                                <ListIcon type="secondary"/>
                                <p className="text text_type_main-default text_color_inactive ml-4">
                                    Лента заказов
                                </p>
                            </li>
                        </a>
                    </ul>
                </nav>
                <Logo/>
                <div className={`${styles.button} p-5 mr-2`}>
                    <a className={styles.link} href="##">
                        <ProfileIcon type="secondary"/>
                        <p className="text text_type_main-default text_color_inactive ml-4">
                            Личный кабинет
                        </p>
                    </a>
                </div>
            </div>
        </header>
    )
}
