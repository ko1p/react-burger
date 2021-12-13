import React, {useEffect} from 'react'
import { useDispatch } from "react-redux"
import styles from './feed.module.css'
import { OrderList } from '../../components/order-list/order-list'
import { OrderStat } from '../../components/order-stat/order-stat'
import { WS_CONNECTION_ALL_START } from "../../services/actions/ws"

export const Feed: React.FC = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch({type: WS_CONNECTION_ALL_START})
    }, [dispatch])

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
// TODO: перевести OrderList на WS, modal
