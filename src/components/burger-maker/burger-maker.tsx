import React from "react";
import styles from "./burger-maker.module.css"
import {BurgerIngredients} from "../burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "../burger-constructor/burger-constructor";

export const BurgerMaker = () => {
    return (
        <main className={styles.container}>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
    )
}
