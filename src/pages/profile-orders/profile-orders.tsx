import React, { FC } from 'react'
import styles from './profile-orders.module.css'
import { ProfileNav } from "../../components/profile-nav/profile-nav"
import { OrderList } from "../../components/order-list/order-list"

export const ProfileOrders: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <ProfileNav />
                <div className={`${styles.orders} ${styles.scroll}`}>
                    <OrderList />
                </div>
            </div>
        </div>

    );
}
