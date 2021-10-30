import React, { FC } from 'react';
import styles from './order-details.module.css';
import orderAccepted from '../../images/order-accepted.gif'
import { useSelector } from "react-redux";

export const OrderDetails: FC = () => {
    const info = useSelector(store => store.modal.data)
    return (
        <div className={`${styles.container} pt-30 pr-25 pb-30 pl-25`}>
            <p className={`${styles.shadow} text text_type_digits-large`}>{info.order.number}</p>
            <p className="text text_type_main-medium mt-8">
                идентификатор заказа
            </p>
            <img className={`${styles.image} mt-15`} src={orderAccepted} alt="успешный заказ"/>
            <p className="text text_type_main-default mt-15">
                Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-default text_color_inactive mt-2">
                Дождитесь готовности на орбитальной станции
            </p>
        </div>
    )
}
