import { URL } from "../../utils/constants";
import { IIngredient, AppDispatch } from '../../types'

export const SET_INGREDIENTS_SUCCESS: 'SET_INGREDIENTS_SUCCESS' = 'SET_INGREDIENTS_SUCCESS';
export const SET_INGREDIENTS_ERROR: 'SET_INGREDIENTS_ERROR' = 'SET_INGREDIENTS_ERROR';

const successFetchIngredients = (ingredients: IIngredient[]) => (
    {
        type: SET_INGREDIENTS_SUCCESS,
        ingredients
    }
)

const failedFetchIngredients = () => (
    {
        type: SET_INGREDIENTS_ERROR
    }
)

export const fetchIngredients = () => {
    return (dispatch: AppDispatch) => {
        fetch(`${URL}/ingredients`)
            .then(res => {
                if (res.status !== 200 ) {
                    throw new Error(`${res.status}`)
                }
                return res.json()
            })
            .then(ingredients => {
                dispatch(successFetchIngredients(ingredients.data))
            })
            .catch((err) => {
                dispatch(failedFetchIngredients())
                console.log(`При запросе с сервера списка ингредиентов произошла ошибка. ${err}`)
            });
    }
}
