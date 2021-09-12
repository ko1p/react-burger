import React from "react";
import styles from './burger-constructor.module.css'
import {ConstructorElement, CurrencyIcon, Button, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import imgBun from '@ya.praktikum/react-developer-burger-ui-components/dist/images/img.png'

export const BurgerConstructor = () => {
    return (
        <div className={`${styles.container} mt-25`}>
            <ul className={`${styles.items} pb-10`}>
                <li className={`${styles.item} mb-4`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={imgBun}
                    />
                </li>
                <li className={`${styles.item} mb-4`}>
                    <DragIcon type="primary"/>
                    <ConstructorElement
                        isLocked={false}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={imgBun}
                    />
                </li>
                <li className={`${styles.item} mb-4`}>
                    <DragIcon type="primary"/>
                    <ConstructorElement
                        isLocked={false}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={imgBun}
                    />
                </li>
                <li className={`${styles.item} mb-4`}>
                    <DragIcon type="primary"/>
                    <ConstructorElement
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={imgBun}
                    />
                </li>
                <li className={`${styles.item} mb-4`}>
                    <DragIcon type="primary"/>
                    <ConstructorElement
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={imgBun}
                    />
                </li>
                <li className={`${styles.item} mb-4`}>
                    <DragIcon type="primary"/>
                    <ConstructorElement
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={imgBun}
                    />
                </li>
                <li className={`${styles.item} mb-4`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail={imgBun}
                    />
                </li>
            </ul>
            <div className={`${styles.total}`}>
                <p className="text text_type_digits-medium mr-2">610</p>
                <CurrencyIcon type="primary"/>
                <Button type="primary" size="medium" >
                    Оформить заказ
                </Button>
            </div>
        </div>
    )
}
