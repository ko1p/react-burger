import styles from './ingredient.module.css'
import { IngredientDetails } from "../../components/ingredient-details/ingredient-details";

export const Ingredient = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <IngredientDetails />
            </div>
        </div>
    )
}
