import React from "react";
import styles from "./BurgerIngredients.module.css"
import {Counter, CurrencyIcon, Tab} from "@ya.praktikum/react-developer-burger-ui-components";

export const BurgerIngredients = () => {
    const [current, setCurrent] = React.useState('Булки')
    return (
        <div className={styles.ingredients}>
            <p className="text text_type_main-large text_color_primary mt-10">
                Соберите бургер
            </p>
            <div style={{ display: 'flex' }} className='mt-5'>
                <Tab value="Булки" active={current === 'Булки'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="Соусы" active={current === 'Соусы'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="Начинки" active={current === 'Начинки'} onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
            <div className={styles.container}>
                <p className="text text_type_main-medium text_color_primary mt-10">
                    Булки
                </p>
                <ul className={`${styles.items} pt-6 pb-10 pr-4 pl-4`}>
                    <li className={`${styles.item}`}>
                        <Counter count={1} size="default" />
                        <img className="pl-4 pr-4" src="https://code.s3.yandex.net/react/code/bun-02.png" alt="булка" />
                        <div className={`${styles.price} mt-1 mb-1`}>
                            <p className="text text_type_digits-default text_color_primary mr-2">
                                20
                            </p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className="text text_type_main-default pb-6">
                            Краторная булка N-200i
                        </p>
                    </li>
                    <li className={`${styles.item} mt-1 mb-1`}>
                        <img className="pl-4 pr-4" src="https://code.s3.yandex.net/react/code/bun-01.png" alt="булка" />
                        <div className={styles.price}>
                            <p className="text text_type_digits-default text_color_primary mr-2">
                                20
                            </p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className="text text_type_main-default pb-6">
                            Флюоресцентная булка R2-D3
                        </p>
                    </li>
                </ul>
                <p className="text text_type_main-medium text_color_primary mt-10">
                    Соусы
                </p>
                <ul className={`${styles.items} pt-6 pb-10 pr-4 pl-4`}>
                    <li className={`${styles.item} mt-1 mb-1`}>
                        <img className="pl-4 pr-4" src="https://code.s3.yandex.net/react/code/sauce-02.png" alt="булка" />
                        <div className={styles.price}>
                            <p className="text text_type_digits-default text_color_primary mr-2">
                                30
                            </p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className="text text_type_main-default pb-6">
                            Соус Spicy-X
                        </p>
                    </li>
                    <li className={`${styles.item} mt-1 mb-1`}>
                        <img className="pl-4 pr-4" src="https://code.s3.yandex.net/react/code/sauce-04.png" alt="булка" />
                        <div className={styles.price}>
                            <p className="text text_type_digits-default text_color_primary mr-2">
                                20
                            </p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className="text text_type_main-default pb-6">
                            Соус фирменный Space Sauce
                        </p>
                    </li>
                    <li className={`${styles.item} mt-1 mb-1`}>
                        <img className="pl-4 pr-4" src="https://code.s3.yandex.net/react/code/sauce-03.png" alt="булка" />
                        <div className={styles.price}>
                            <p className="text text_type_digits-default text_color_primary mr-2">
                                30
                            </p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className="text text_type_main-default pb-6">
                            Соус традиционный галактический
                        </p>
                    </li>
                    <li className={`${styles.item} mt-1 mb-1`}>
                        <img className="pl-4 pr-4" src="https://code.s3.yandex.net/react/code/sauce-01.png" alt="булка" />
                        <div className={styles.price}>
                            <p className="text text_type_digits-default text_color_primary mr-2">
                                20
                            </p>
                            <CurrencyIcon type="primary" />
                        </div>
                        <p className="text text_type_main-default pb-6">
                            Биокотлета из марсианской Магнолии
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}
