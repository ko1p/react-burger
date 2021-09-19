import React from "react";
import styles from "../burger-ingredients/burger-ingredients.module.css";
import {Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import { cardPropTypes } from '../types/types';

export const IngredientCard = ({ card, dataToModal }) => (
    <li className={`${styles.item}`} onClick={() => dataToModal(card)}>
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
)

IngredientCard.propTypes = {
    card: cardPropTypes,
    dataToModal: PropTypes.func.isRequired,
};
