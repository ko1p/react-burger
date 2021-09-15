import React from "react";
import styles from "./burger-ingredients.module.css"
import {Counter, CurrencyIcon, Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {cardPropTypes} from "../types/types";

export const BurgerIngredients = ({data}) => {
    const [current, setCurrent] = React.useState('Булки')

    const buns = data.filter(item => item.type === 'bun')
    const mains = data.filter(item => item.type === 'main')
    const sauses = data.filter(item => item.type === 'sauce')

    const info = type => {
        if (type === "Булки") return buns
        if (type === "Начинки") return mains
        if (type === "Соусы") return sauses
    }

    return (
        <div className={styles.ingredients}>
            <p className="text text_type_main-large text_color_primary mt-10">
                Соберите бургер
            </p>
            <div style={{display: 'flex'}} className='mt-5'>
                <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.container}>
                <p className="text text_type_main-medium text_color_primary mt-10">
                    Булки
                </p>
                <ul className={`${styles.items} pt-6 pb-10 pr-4 pl-4`}>
                    {current && info(current).map((card, index) =>
                        <li className={`${styles.item}`} key={index}>
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
                    )}
                </ul>
            </div>
        </div>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(cardPropTypes.isRequired).isRequired
};
