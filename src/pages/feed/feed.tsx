import React from 'react';
import styles from './feed.module.css';
import { OrderList } from '../../components/order-list/order-list';
import { OrderStat } from '../../components/order-stat/order-stat';

export const Feed: React.FC = () => {

    return (
        <div className={`${styles.container} mt-10`}>
            <div className={styles.box}>
                <p className="text text_type_main-large mb-5">
                    Лента заказов
                </p>
                <OrderList />
            </div>
            <OrderStat />
        </div>
    );
}
