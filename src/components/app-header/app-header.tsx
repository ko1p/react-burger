import React, { FC } from "react";
import styles from './app-header.module.css'
import { BurgerIcon, ListIcon, Logo, ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useRouteMatch } from 'react-router-dom'

export const AppHeader: FC = () => {
    const isMainPage = !!useRouteMatch({ path: '/', exact: true});
    const isFeedPage = !!useRouteMatch('/feed');
    const isProfilePage = !!useRouteMatch('/profile')

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <ul className={styles.buttons}>
                        <Link className={styles.link} to='/'>
                            <li className={`${styles.button} p-5 mr-2`}>
                                <BurgerIcon type={`${isMainPage ? 'primary' : 'secondary'}`} />
                                <p className={`text text_type_main-default ${!isMainPage && 'text_color_inactive'} ml-4`} >
                                    Конструктор
                                </p>
                            </li>
                        </Link>
                        <Link className={styles.link} to='/feed'>
                            <li className={`${styles.button} p-5 mr-2`}>
                                <ListIcon type={`${isFeedPage ? 'primary' : 'secondary'}`} />
                                <p className={`text text_type_main-default ${!isFeedPage && 'text_color_inactive'} ml-4`}>
                                    Лента заказов
                                </p>
                            </li>
                        </Link>
                    </ul>
                </nav>
                <Logo/>
                <div className={`${styles.button} p-5 mr-2`} >
                    <Link className={styles.link} to='/profile'>
                        <ProfileIcon type={`${isProfilePage ? 'primary' : 'secondary'}`} />
                        <p className={`text text_type_main-default ${!isProfilePage && 'text_color_inactive'} ml-4`}>
                            Личный кабинет
                        </p>
                    </Link>
                </div>
            </div>
        </header>
    )
}
