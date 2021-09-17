import React, { useState } from "react";
import styles from "./burger-maker.module.css"
import {BurgerIngredients} from "../burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "../burger-constructor/burger-constructor";
import {Modal} from "../modal/modal";
import {IngredientDetails} from "../ingredient-details/ingredient-details";
import {OrderDetails} from "../order-details/order-detaild";

export const BurgerMaker = ({ data }) => {
    const [showIngredientsDetails, setShowIngredientsDetails] = useState(false)
    const [showOrderDetails, setShowOrderDetails] = useState(false)
    const [ingredients, setIngredients] = useState({})

    const closeModalHandler = () => {
        setShowIngredientsDetails(false)
        setShowOrderDetails(false)
        console.log('close')
    }

    const escButtonHandler = (e) => {
        if(e.key === 'Escape') {
            closeModalHandler()
        }
    }

    const ingredientDetailsHandler = () => {
        setShowIngredientsDetails(true)
    }

    const orderDetailsHandler = () => {
        setShowOrderDetails(true)
    }

    return (
        <main className={styles.container}>
            {
                showIngredientsDetails &&
                    <Modal closeModal={closeModalHandler} escButtonHandler={escButtonHandler}>
                        <IngredientDetails ingredients={ingredients} />
                    </Modal>
            }
            {
                showOrderDetails &&
                <Modal closeModal={closeModalHandler} >
                    <OrderDetails />
                </Modal>
            }
            <BurgerIngredients data={data} openModal={ingredientDetailsHandler} setIngredients={setIngredients} />
            <BurgerConstructor data={data} openModal={orderDetailsHandler} />
        </main>
    )
}
