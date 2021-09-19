import React from "react";
import styles from "./burger-ingredients.module.css"
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {cardPropTypes} from "../types/types";
import {IngredientCard} from "../ingredient-card/ingredient-card";

export const BurgerIngredients = ({data, openModal, setModalData}) => {
    const [current, setCurrent] = React.useState('bun')

    const ingredientTypes = [
        {type: 'bun', title: 'Булки'},
        {type: 'sauce', title: 'Соусы'},
        {type: 'main', title: 'Начинки'}
    ]

    const ingredientFilter = type => {
        return data.filter(item => item.type === type)
    }

    const dataToModal = info => {
        openModal()
        setModalData(info)
    }

    const setTab = (tab) => {
        setCurrent(tab);
        const element = document.getElementById(tab);
        if (element) element.scrollIntoView({behavior: "smooth"});
    };

    return (
        <div className={styles.ingredients}>
            <p className="text text_type_main-large text_color_primary mt-10">
                Соберите бургер
            </p>
            <div style={{display: 'flex'}} className='mt-5'>
                <Tab value="bun" active={current === 'bun'} onClick={setTab}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setTab}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'} onClick={setTab}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.container}>

                {ingredientTypes.map((item, index) => {
                    return (
                        <div key={index}>
                            <p className="text text_type_main-medium text_color_primary" id={item.type}>
                                {item.title}
                            </p>
                            <ul className={`${styles.items} pt-6 pb-10 pr-4 pl-4`}>
                                {ingredientFilter((item.type)).map(card =>
                                    <IngredientCard
                                        key={card.id}
                                        card={card}
                                        dataToModal={dataToModal}
                                    />)}
                            </ul>
                        </div>)
                })}
            </div>
        </div>
    )
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(cardPropTypes.isRequired).isRequired,
    openModal: PropTypes.func.isRequired,
    setModalData: PropTypes.func.isRequired,
};
