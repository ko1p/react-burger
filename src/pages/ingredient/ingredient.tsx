import React, { FC } from "react";
import styles from './ingredient.module.css'
import { IngredientDetails } from "../../components/ingredient-details/ingredient-details";

export const Ingredient: FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <IngredientDetails />
            </div>
        </div>
    )
}
