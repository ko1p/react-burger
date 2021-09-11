import React from "react";
import styles from "./BurgerMaker.module.css"
import {BurgerIngredients} from "../BurgerIngredients/BurgerIngredients";
import {BurgerConstructor} from "../BurgerConstructor/BurgerConstructor";

export const BurgerMaker = () => {
    return (
        <main className={styles.container}>
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
    )
}
