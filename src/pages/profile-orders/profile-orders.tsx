import React, {FC, useEffect} from 'react'
import styles from './profile-orders.module.css'
import { ProfileNav } from "../../components/profile-nav/profile-nav"
import { OrderList } from "../../components/order-list/order-list"
import { useDispatch, useSelector } from "react-redux"
import {WS_CONNECTION_CLOSE, WS_CONNECTION_USER_START} from "../../services/actions/ws"
import { IStore } from "../../types"

export const ProfileOrders: FC = () => {
    const dispatch = useDispatch()
    const orders = useSelector((store: IStore) => store.ws.ordersInfo.orders)

    useEffect(() => {
        dispatch({type: WS_CONNECTION_USER_START})
        return () => {
            dispatch({type: WS_CONNECTION_CLOSE})
        }
    }, [dispatch])


    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <ProfileNav />
                <div className={`${styles.orders} ${styles.scroll}`}>
                    { orders?.length ? <OrderList /> : <p>У вас ещё нет заказов</p>}
                </div>
            </div>
        </div>

    );
}
