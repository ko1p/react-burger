import React, { useState } from "react";
import styles from "./burger-maker.module.css";
import PropTypes from "prop-types";
import {cardPropTypes} from "../types/types";
import {BurgerIngredients} from "../burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "../burger-constructor/burger-constructor";
import {Modal} from "../modal/modal";
import {IngredientDetails} from "../ingredient-details/ingredient-details";
import {OrderDetails} from "../order-details/order-detaild";

export const BurgerMaker = ({ data }) => {
    const [showIngredientsDetails, setShowIngredientsDetails] = useState(false)
    const [showOrderDetails, setShowOrderDetails] = useState(false)
    const [modalData, setModalData] = useState(null);

    const closeModalHandler = () => {
        setShowIngredientsDetails(false)
        setShowOrderDetails(false)
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
                        <IngredientDetails modalData={modalData} />
                    </Modal>
            }
            {
                showOrderDetails &&
                <Modal closeModal={closeModalHandler} escButtonHandler={escButtonHandler}>
                    <OrderDetails modalData={modalData} />
                </Modal>
            }
            <BurgerIngredients data={data} openModal={ingredientDetailsHandler} setModalData={setModalData} />
            <BurgerConstructor data={data} openModal={orderDetailsHandler} setModalData={setModalData} />
        </main>
    )
}

BurgerMaker.propTypes = {
    data: PropTypes.arrayOf(cardPropTypes.isRequired).isRequired
};
