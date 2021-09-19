import React from 'react';
import styles from './ingredient-details.module.css';
import PropTypes from "prop-types";
import {cardPropTypes} from "../types/types";

export const IngredientDetails = ({ modalData }) => {
    return (
        <div className={`${styles.container} pt-10 pr-10 pb-15 pl-10`}>
            <p className="text text_type_main-medium">
                Детали ингредиента
            </p>
            <img src={modalData.image} alt='ingredient'/>
            <p className="text text_type_main-default mt-4">
                {modalData.name}
            </p>
            <div className={`${styles.info} mt-8`}>
                <div>
                    <p className="text text_type_main-default text_color_inactive">
                        Калории, ккал
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {modalData.calories}
                    </p>
                </div>
                <div>
                    <p className="text text_type_main-default text_color_inactive">
                        Белки, г
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {modalData.proteins}
                    </p>
                </div>
                <div>
                    <p className="text text_type_main-default text_color_inactive">
                        Жиры, г
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {modalData.fat}
                    </p>
                </div>
                <div>
                    <p className="text text_type_main-default text_color_inactive">
                        Углеводы, г
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {modalData.carbohydrates}
                    </p>
                </div>
            </div>
        </div>
    )
}

IngredientDetails.propTypes = {
    modalData: PropTypes.arrayOf(cardPropTypes.isRequired).isRequired,
};
