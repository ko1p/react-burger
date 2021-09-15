import React from 'react';
import styles from './order-details.module.css';
import doneImg from '../../images/done.svg'
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const OrderDetails = () => {
    return (
        <div className={styles.container}>
            <button className={styles.close}>
                <CloseIcon type="primary" />
            </button>
            <h2 className={`text text_type_digits-large mt-30 mb-8`}>034536</h2>
            <p className='text text_type_main-medium'>идентификатор заказа</p>
            <img className={styles.image} src={doneImg} alt='картинка статус заказа'/>
            <p className='text text_type_main-default mb-2'>status</p>
            <p className={`${styles.text} text text_type_main-default mb-30`}>ждите</p>
        </div>
    )
}
