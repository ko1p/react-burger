import React from "react";
import styles from "./burger-maker.module.css"
import {BurgerIngredients} from "../burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "../burger-constructor/burger-constructor";

export const BurgerMaker = ({data}) => {
    return (
        <main className={styles.container}>
            <BurgerIngredients data={data}/>
            <BurgerConstructor data={data}/>
        </main>
    )
}
