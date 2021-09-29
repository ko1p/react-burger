import React from "react";
import styles from "../burger-ingredients/burger-ingredients.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import {cardPropTypes} from '../types/types';
import {addConstructorIngredient, openIngredientsModal, setConstructorBun, setModalData} from "../../services/actions";
import {useDispatch} from "react-redux";
import {useDrag} from "react-dnd";

export const IngredientCard = ({card}) => {
    const [{opacity}, dragRef] = useDrag({
        type: "ingredient",
        item: { card },
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    });

    const dispatch = useDispatch()
    const dataToModal = info => {
        dispatch(openIngredientsModal())
        dispatch(setModalData(info))
        if (info.type === 'bun') {
            dispatch(setConstructorBun(info))
        } else {
            dispatch(addConstructorIngredient(info))
        }
    }

    return <li className={`${styles.item}`} onClick={() => dataToModal(card)} ref={dragRef}
               style={{opacity: `${opacity}`}}>
        <Counter count={1} size="default"/>
        <img className="pl-4 pr-4" src={card.image}
             alt={card.name}/>
        <div className={`${styles.price} mt-1 mb-1`}>
            <p className="text text_type_digits-default text_color_primary mr-2">
                {card.price}
            </p>
            <CurrencyIcon type="primary"/>
        </div>
        <p className="text text_type_main-default pb-6">
            {card.name}
        </p>
    </li>
}

IngredientCard.propTypes = {
    card: cardPropTypes,
    dataToModal: PropTypes.func.isRequired,
};
