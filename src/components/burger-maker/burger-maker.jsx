import React, { useState } from "react";
import styles from "./burger-maker.module.css";
import PropTypes from "prop-types";
import {cardPropTypes} from "../types/types";
import {BurgerIngredients} from "../burger-ingredients/burger-ingredients";
import {BurgerConstructor} from "../burger-constructor/burger-constructor";
import {Modal} from "../modal/modal";
import {IngredientDetails} from "../ingredient-details/ingredient-details";
import {OrderDetails} from "../order-details/order-detaild";
import {useDispatch, useSelector} from "react-redux";
import {closeModal, resetModalData} from "../../services/actions";

export const BurgerMaker = () => {
    const dispatch = useDispatch()
    const { isModalOpen, isModalTypeOrder, isModalTypeIngredients } = useSelector(store => ({
        isModalOpen: store.modal.isOpen,
        isModalTypeOrder: store.modal.type.order,
        isModalTypeIngredients: store.modal.type.ingredients
    }))

    const closeModalHandler = () => {
        dispatch(closeModal())
        dispatch(resetModalData())
    }

    const escButtonHandler = (e) => {
        if(e.key === 'Escape') {
            closeModalHandler()
        }
    }

    return (
        <main className={styles.container}>
            {
                isModalOpen && isModalTypeIngredients &&
                    <Modal closeModal={closeModalHandler} escButtonHandler={escButtonHandler}>
                        <IngredientDetails />
                    </Modal>
            }
            {
                isModalOpen && isModalTypeOrder &&
                <Modal closeModal={closeModalHandler} escButtonHandler={escButtonHandler}>
                    <OrderDetails />
                </Modal>
            }
            <BurgerIngredients />
            <BurgerConstructor />
        </main>
    )
}

BurgerMaker.propTypes = {
    data: PropTypes.arrayOf(cardPropTypes.isRequired).isRequired
};
