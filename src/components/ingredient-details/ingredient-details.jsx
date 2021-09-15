import React from 'react';
import styles from './ingredient-details.module.css';
import meatImg from '../../images/meat.png'
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

export const IngredientDetails = () => {
    return (
        <div className={styles.container}>
            <h3 className={`${styles.title} text text_type_main-large mt-10`}>
                Детали ингредиента
            </h3>
            <button className={styles.close}>
                <CloseIcon type="primary"/>
            </button>
            <div className={styles.content}>
                <img className={styles.image} alt='картинка ингредиента' src={meatImg}/>
                <h3 className='text text_type_main-medium mt-2 mb-4'>биокотлета из марса</h3>
                <ul className={`${styles.items} text_type_main-default`}>
                    <li className={styles.item}>
                        <p className={`text text_color_inactive ${styles.info}`}>Калории,ккал</p>
                        <p className={`text text_color_inactive ${styles.num}`}>123</p>
                    </li>
                    <li className={styles.item}>
                        <p className={`text text_color_inactive ${styles.info}`}>Белки, г</p>
                        <p className={`text text_color_inactive ${styles.num}`}>33</p>
                    </li>
                    <li className={styles.item}>
                        <p className={`text text_color_inactive ${styles.info}`}>Жиры, г</p>
                        <p className={`text text_color_inactive ${styles.num}`}>5</p>
                    </li>
                    <li className={styles.item}>
                        <p className={`text text_color_inactive ${styles.info}`}>Углеводы, г</p>
                        <p className={`text text_color_inactive ${styles.num}`}>1</p>
                    </li>
                </ul>
            </div>

        </div>
    )
}
