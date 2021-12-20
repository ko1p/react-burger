import React, { FC } from "react"
import styles from "./burger-maker.module.css"
import { BurgerIngredients } from "../../components/burger-ingredients/burger-ingredients"
import { BurgerConstructor } from "../../components/burger-constructor/burger-constructor"
import { Modal } from "../../components/modal/modal"
import { IngredientDetails } from "../../components/ingredient-details/ingredient-details"
import { OrderInfo } from "../../components/order-info/order-info"
import { useDispatch, useSelector } from "react-redux"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { closeModal, resetModalData } from "../../services/actions/modal"
import { IStore } from "../../types"

export const BurgerMaker: FC = () => {
    const dispatch = useDispatch()
    const { isModalOpen, isModalTypeOrder, isModalTypeIngredients } = useSelector((store: IStore) => ({
        isModalOpen: store.modal.isOpen,
        isModalTypeOrder: store.modal.type.order,
        isModalTypeIngredients: store.modal.type.ingredients
    }))

    const closeModalHandler = () => {
        dispatch(closeModal())
        dispatch(resetModalData())
    }

    return (
        <main className={styles.container}>
            {
                isModalOpen && isModalTypeIngredients &&
                    <Modal closeModal={closeModalHandler} >
                        <IngredientDetails />
                    </Modal>
            }
            {
                isModalOpen && isModalTypeOrder &&
                <Modal closeModal={closeModalHandler} >
                    <OrderInfo />
                </Modal>
            }
            <DndProvider backend={HTML5Backend}>
                <BurgerIngredients />
                <BurgerConstructor />
            </DndProvider>
        </main>
    )
}
