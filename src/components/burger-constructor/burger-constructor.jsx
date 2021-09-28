import React from 'react';
import styles from './burger-constructor.module.css';
import {ConstructorElement, CurrencyIcon, Button, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from 'prop-types';
import {cardPropTypes} from '../types/types';
import {URL} from "../../utils/constants";
import {orderData} from "../../utils/orderData";
import {useDispatch, useSelector} from "react-redux";
import {openOrderModal, setModalData, removeConstructorIngredient, fetchOrderData} from "../../services/actions";


export const BurgerConstructor = ({openModal}) => {
    const dispatch = useDispatch()
    const data = useSelector(store => store.ingredients.list)
    const {bun, ingredients} = useSelector(store => ({
        bun: store.burgerConstructor.bun,
        ingredients: store.burgerConstructor.ingredients
    }))

    const totalOrderPrice = () => {
        const bunsPrice = bun.price * 2
        const ingredientsPrice = ingredients.reduce((sum, item) => sum + item.price, 0)
        return bunsPrice + ingredientsPrice
    }

    const orderIngredients = () => {
        const allIngredients = [
            ...Array(2).fill(bun._id),
            ...ingredients.map(item => item._id)
        ]
        return allIngredients
    }

    const cardsData = data.filter(ing => ing.type !== 'bun');

    const setDataAndOpenModal = (cardData) => {
        dispatch(fetchOrderData(URL, orderIngredients()))
        dispatch(openOrderModal())
        dispatch(setModalData(cardData))
    }
    // TODO REFACTOR
    console.log(!!bun._id && Boolean(ingredients.length))
    return ((bun._id && ingredients.lenght >= 1)) ? <h2>Добавьте ингридиенты</h2> :
        (
            <div className={`${styles.box} mt-25`}>
                <div className="ml-10 pl-9">
                    {bun._id &&
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text={`${bun.name} (верх)`}
                        price={bun.price}
                        thumbnail={bun.image_mobile}
                    />}
                </div>

                <ul className={`${styles.container} ${styles.scroll} mt-4 mb-4`}>
                    {ingredients.map((card, index) => {
                        return <li
                            key={index}
                            className={`${styles.card}`}
                        >
                            <DragIcon type="primary"/>
                            <ConstructorElement
                                text={card.name}
                                price={card.price}
                                thumbnail={card.image}
                                handleClose={() => dispatch(removeConstructorIngredient(card))}
                            />
                        </li>
                    })
                    }
                </ul>

                <div className="ml-10 pl-9">
                    {bun._id && <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text={`${bun.name} (низ)`}
                        price={bun.price}
                        thumbnail={bun.image_mobile}
                    />}
                </div>

                {(bun._id || ingredients.lenght >= 1) && <div className={`${styles.info} mt-10`}>
                    <p className="text text_type_digits-medium mr-2">{totalOrderPrice()}</p>
                    <CurrencyIcon type="primary"/>
                    <Button type="primary" size="medium" onClick={() => setDataAndOpenModal(orderData)}>
                        Оформить заказ
                    </Button>
                </div>}

            </div>
        )
}

BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(cardPropTypes.isRequired).isRequired,
    openModal: PropTypes.func.isRequired,
    setModalData: PropTypes.func.isRequired,
};
