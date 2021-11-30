import React, { FC } from "react";
import styles from "../burger-ingredients/burger-ingredients.module.css";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { IIngredientCardProps, IStore } from "../../types";

export const IngredientCard: FC<IIngredientCardProps> = ({ card }) => {
    const ingredients = useSelector((store: IStore) => store.burgerConstructor.ingredients)
    const [{opacity}, dragRef] = useDrag({
        type: "ingredient",
        item: card,
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.5 : 1
        })
    });

    const counter = () => {
        let count = 0;
        ingredients.forEach(item => {
            if (item._id === card._id) {
                count++
            }
        })
        return count;
    }

    return <li className={`${styles.item}`}  ref={dragRef} data-id={card._id}
               style={{opacity: `${opacity}`}}>
        {counter() > 0 && <Counter count={counter()} size="default"/>}
        <img className="pl-4 pr-4" src={card.image}
             alt={card.name}/>
        <div className={`${styles.price} mt-1 mb-1`}>
            <p className="text text_type_digits-default text_color_primary mr-2">
                {card.price}
            </p>
            <CurrencyIcon type="primary"/>
        </div>
        <p className="text text_type_main-default pb-6">
            {card.name}
        </p>
    </li>
}
