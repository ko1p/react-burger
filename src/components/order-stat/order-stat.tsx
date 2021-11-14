import React from 'react';
import styles from './order-stat.module.css';
import { dataOrdersNumbers } from '../../utils/constants'

export const OrderStat: React.FC = () => {

  const data = dataOrdersNumbers;

  return (
    <div className={styles.container}>
      <div className={`${styles.box} mt-15 mb-15`}>
        <div className={`${styles.work} mr-9`}>
          <p className='text text_type_main-medium'>Готовы:</p>
          <ul className={styles.list}>
            {data.ready.map((item, index) => {
              return <li key={index} className={`${styles.text} text text_type_digits-default`}>{item}</li>
            })}
          </ul>
        </div>
        <div className={styles.work}>
          <p className='text text_type_main-medium'>В работе:</p>
          <ul className={styles.list}>
            {data.inWork.map((item, index) => {
              return <li key={index} className="text text_type_digits-default">{item}</li>
            })}
          </ul>
        </div>
      </div>
      <div className={`${styles.info} mb-15`}>
        <p className='text text_type_main-medium'>Выполнено за все время:</p>
        <p className={`${styles.number} text text_type_digits-large`}>{data.totalOrders}</p>
      </div>
      <div className={styles.info}>
        <p className='text text_type_main-medium'>Выполнено за сегодня:</p>
        <p className={`${styles.number} text text_type_digits-large`}>{data.todayOrders}</p>
      </div>
    </div>
  )
}
