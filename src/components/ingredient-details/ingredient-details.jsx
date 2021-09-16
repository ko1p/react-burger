import React from 'react';
import styles from './ingredient-details.module.css';

export const IngredientDetails = ({ ingredients }) => {
    console.log(ingredients)
    return (
        <div className={`${styles.container} pt-10 pr-10 pb-15 pl-10`}>
            <p className="text text_type_main-medium">
                Детали ингредиента
            </p>
            <img src="https://code.s3.yandex.net/react/code/meat-01.png" alt='ingredient'/>
            <p className="text text_type_main-default mt-4">
                {ingredients.name}
            </p>
            <div className={`${styles.info} mt-8`}>
                <div>
                    <p className="text text_type_main-default text_color_inactive">
                        Калории, ккал
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {ingredients.calories}
                    </p>
                </div>
                <div>
                    <p className="text text_type_main-default text_color_inactive">
                        Белки, г
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {ingredients.proteins}
                    </p>
                </div>
                <div>
                    <p className="text text_type_main-default text_color_inactive">
                        Жиры, г
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {ingredients.fat}
                    </p>
                </div>
                <div>
                    <p className="text text_type_main-default text_color_inactive">
                        Углеводы, г
                    </p>
                    <p className="text text_type_main-default text_color_inactive">
                        {ingredients.carbohydrates}
                    </p>
                </div>
            </div>
        </div>
    )
}
