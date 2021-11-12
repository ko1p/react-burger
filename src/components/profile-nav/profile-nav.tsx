import styles from "./profile-nav.module.css";
import { NavLink } from "react-router-dom";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { fetchLogoutUser } from "../../services/actions/profile";

export const ProfileNav: FC = () => {
    const dispatch = useDispatch()

    const userLogout = () => {
        dispatch(fetchLogoutUser())
    }

    return (
        <nav className={`${styles.nav} mr-15 mt-20`}>
            <NavLink exact to='/profile' className={`${styles.link} text_color_inactive`} activeClassName={styles.active} >
                <p className={`${styles.text}text text_type_main-medium`}>
                    Профиль
                </p>
            </NavLink>
            <NavLink exact to='/profile/orders' className={`${styles.link} text_color_inactive`} activeClassName={styles.active} >
                <p className={`${styles.text} text text_type_main-medium`}>
                    История заказов
                </p>
            </NavLink>
            <div
                onClick={userLogout}
                className={`${styles.link}`}
            >
                <p className={`${styles.text}text text_type_main-medium text_color_inactive`}>
                    Выход
                </p>
            </div>
            <p className={`${styles.description} text text_type_main-default text_color_inactive mt-20`}>
                В этом разделе вы можете изменить свои персональные данные
            </p>
        </nav>
    )
}
