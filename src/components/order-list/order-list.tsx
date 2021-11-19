import React from 'react'
import styles from './order-list.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { dataOrders } from '../../utils/constants'
import { Link } from 'react-router-dom'

export const OrderList: React.FC = () => {

    const data = dataOrders;

    return (
        <div className={`${styles.container} ${styles.scroll}`}>
            <ul className={`${styles.cards} mr-2`}>
                {data.map((item, index) => {
                    return <Link to={`/feed/${item.id}`} className={styles.card} key={`${index}-link`}>
                        <li
                            key={index}
                        >
                            <div className={styles.info}>
                                <p className='text text_type_digits-default'>#{item.id}</p>
                                <p className='text text_type_main-default text_color_inactive'>Сегодня, 16:20 i-GMT+3</p>
                            </div>
                            <p className='text text_type_main-medium mt-6'>{item.name}</p>
                            <div className={`${styles.order} mt-6`}>
                                <ul className={styles.images}>
                                    {item.ingredients.map((ingredient, index) => {
                                        if (index < 6) {
                                            return (
                                                <li key={index} style={{zIndex: item.ingredients.length - index}} className={`${styles.radius} ${item.ingredients.length > 6 && index === 5 && styles.blackout}`}>
                                                    <img className={`${styles.image}`} src={ingredient.image} alt='Ингредиент' />
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
                                    <p className="text text_type_digits-medium mr-2">{item.price}</p>
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
