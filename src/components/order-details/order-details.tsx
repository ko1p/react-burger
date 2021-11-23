import React, { FC, useEffect, useState } from 'react'
import styles from './order-details.module.css'
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { dataOrders } from "../../utils/constants"
import { IIngredient } from "../../types"

export const OrderDetails: FC = () => {

  const data = dataOrders[0];
  const ingredientIds = [...data.ingredients.map(item => item._id)]

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setTotalPrice(
        () => {
          const totalPrice = [
            ...data.ingredients.map(item => item.price)
          ].reduce((acc, price) => price ? acc + price : acc, 0);
          return totalPrice;
        }
    )
  }, [data])

  const counter = (item: string) => {
    const counts: any = {};
    for (const num of ingredientIds) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return counts[item] || 0;
  }

  let uniqueIngredients = data.ingredients.reduce((acc: any, item: IIngredient) => {
    if (!acc._id) {
      acc[item._id] = item;
    }
    return acc;
  }, {});
  uniqueIngredients = Object.values(uniqueIngredients);

  return (
      <div className={`${styles.container}`}>
        <p className={`text text_type_digits-default mt-20 ${styles.id}`}>{data.id}</p>
        <p className='text text_type_main-medium mt-10'>{data.name}</p>
        <p className={`${styles.status} text text_type_main-default mt-3`}>Выполнен</p>
        <p className='text text_type_main-medium mt-15'>Состав:</p>
        <div className={`${styles.box} ${styles.scroll}`}>
          <ul className={`${styles.list} mt-6`}>
            {uniqueIngredients.map((item: IIngredient) => {
              return <li
                  key={item._id}
                  className={`${styles.card} mb-4`}
              >
                <div className={`${styles.radius} mr-4`}>
                  <img className={`${styles.image}`} src={item.image} alt='Ингредиент' />
                </div>
                <p className={`text text_type_main-default mr-4 ${styles.text}`}>{item.name}</p>
                <div className={`${styles.price} mr-6`}>
                  <p className='text text_type_digits-default mr-2'>
                    {counter(item._id)} x {item.price}
                  </p>
                  <CurrencyIcon type="primary"/>
                </div>
              </li>
            })}
          </ul>
        </div>
        <div className={`${styles.info} mt-10`}>
          <p className='text text_type_main-default text_color_inactive'>{data.date}</p>
          <div className={styles.price}>
            <p className='text text_type_digits-default mr-2'>{totalPrice}</p>
            <CurrencyIcon type="primary"/>
          </div>
        </div>
      </div>
  )
}
