import React from 'react';
import styles from './burger-constructor.module.css';
import { ConstructorElement, CurrencyIcon, Button, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import { cardPropTypes } from '../types/types';
import imgBun from '@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png'


export const BurgerConstructor = ({ data }) => {

    const cardsData = data.filter(ing => ing.type !== 'bun');

    return (
        <div className={`${styles.box} mt-25`}>
            <div className="ml-10 pl-9">
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={imgBun}
                />
            </div>

            <ul className={ `${styles.container} ${styles.scroll} mt-4 mb-4`}>
                {cardsData.map((card, index)=> {
                    return <li
                        key={index}
                        className={`${styles.card}`}
                    >
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text={card.name}
                            price={card.price}
                            thumbnail={card.image}
                        />
                    </li>
                })
                }
            </ul>

            <div className="ml-10 pl-9">
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={imgBun}
                />
            </div>

            <div className={`${styles.info} mt-10`}>
                <p className="text text_type_digits-medium mr-2">610</p>
                <CurrencyIcon type="primary"/>
                <Button type="primary" size="medium">
                    Оформить заказ
                </Button>
            </div>

        </div>
    )
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(cardPropTypes.isRequired).isRequired
};
