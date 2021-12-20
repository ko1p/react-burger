import React from 'react'
import styles from './order-list.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from "react-redux";
import { IStore } from "../../types";

export const OrderList: React.FC = () => {

    const ingredients = useSelector((store: IStore) => store.ingredients.list)
    const ingredientImage = (id: string) => {
        const ingredient = ingredients.find(item => item._id === id)
        return ingredient?.image
    }
    const ingredientDate = (date: string) => {
        return new Date(date)
            .toLocaleString("ru", {
                weekday: "long",
                day: "numeric",
                month: "long",
                hour: "numeric",
                minute: "numeric",
                timeZoneName: "short"
            })
    }
    const totalPrice = (ingredientsIds: string[]) => {
        let total = 0
        ingredientsIds.forEach(item => {
            ingredients.forEach(ing => {
                if (item === ing._id) {
                    total += ing.price
                }
            })
        })
        return total
    }
    const orders = useSelector((store: IStore) => store.ws.ordersInfo.orders)
    const location = useLocation()

    console.log(orders)
    return (
        <div className={`${styles.container} ${styles.scroll}`}>
            <ul className={`${styles.cards} mr-2`}>
                {orders?.map((item, index) => {
                    return <Link
                        className={styles.card} key={`${index}-link`}
                        to={{
                            pathname: `/feed/${item._id}`,
                            state: {orderModal: location}
                        }}>
                        <li
                            key={index}
                        >
                            <div className={styles.info}>
                                <p className='text text_type_digits-default'>#{item.number}</p>
                                <p className='text text_type_main-default text_color_inactive'>{ingredientDate(item.createdAt)}</p>
                            </div>
                            <p className='text text_type_main-medium mt-6'>{item.name}</p>
                            <div className={`${styles.order} mt-6`}>
                                <ul className={styles.images}>
                                    {item.ingredients.map((ingredient, index) => {
                                        if (index < 6) {
                                            return (
                                                <li key={index} style={{zIndex: item.ingredients.length - index}}
                                                    className={`${styles.radius} ${item.ingredients.length > 6 && index === 5 && styles.blackout}`}>
                                                    <img className={`${styles.image}`} src={ingredientImage(ingredient)}
                                                         alt='Ингредиент'/>
                                                    {item.ingredients.length > 6 && index === 5 &&
                                                    <p className={`${styles.number} text text_type_digits-default`}>{`+${item.ingredients.length - 6}`}</p>
                                                    }
                                                </li>
                                            )
                                        } else {
                                            return null;
                                        }
                                    })}
                                </ul>
                                <div className={styles.price}>
                                    <p className="text text_type_digits-medium mr-2">{totalPrice(item.ingredients)}</p>
                                    <CurrencyIcon type="primary"/>
                                </div>
                            </div>
                        </li>
                    </Link>
                })}
            </ul>
        </div>
    )
}
