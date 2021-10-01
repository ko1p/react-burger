import React, {useCallback} from 'react';
import styles from './burger-constructor.module.css';
import {ConstructorElement, CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components'
// import PropTypes from 'prop-types';
// import {cardPropTypes} from '../types/types';
import {URL} from "../../utils/constants";
import {orderData} from "../../utils/orderData";
import {useDispatch, useSelector} from "react-redux";
import {useDrop} from "react-dnd";
import {
    openOrderModal,
    setModalData,
    fetchOrderData,
    addConstructorIngredient, setConstructorBun, updateIngredients
} from "../../services/actions";
import update from 'immutability-helper';
import {ConstructorItem} from "../constructor-item/constructor-item";


export const BurgerConstructor = () => {
    
    const dispatch = useDispatch()
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

    const [, dropTarget] = useDrop({
        accept: "ingredient",
        drop(card) {
            //console.log(card, card.card)
            if (card.type === 'bun') {
                dispatch(setConstructorBun(card))
            } else {
                dispatch(addConstructorIngredient(card));
            }
        },
    });

    const setDataAndOpenModal = (cardData) => {
        dispatch(fetchOrderData(URL, orderIngredients()))
        dispatch(openOrderModal())
        dispatch(setModalData(cardData))
    }

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        const dragCard = ingredients[dragIndex];
        dispatch(updateIngredients(
            update(ingredients, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard],
                ],
            })
        ))

    }, [ingredients, dispatch]);

    // TODO REFACTOR
    // console.log(!!bun._id && Boolean(ingredients.length))
    // <div ref={dropTarget} style={{"width": "100%","height": "100vh"}}></div>
    
    return (
        <div ref={dropTarget} className={`${styles.box} mt-25`}>
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

            {ingredients.length >= 1 ?
                <ul className={`${styles.container} ${styles.scroll} mt-4 mb-4`}>
                    {ingredients.map((card, index) =>{
                        return <ConstructorItem
                            moveCard={moveCard}
                            key={card.uuid}
                            id={card._id}
                            index={index}
                            card={card}
                        />})}
                </ul>
             :
             <p className={`${styles.container} text text_type_main-default pt-30 pb-30`}>
               Добавьте ингредиенты
             </p>
            }
            
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

// BurgerConstructor.propTypes = {
//     data: PropTypes.arrayOf(cardPropTypes.isRequired).isRequired,
//     openModal: PropTypes.func.isRequired,
//     setModalData: PropTypes.func.isRequired,
// };
