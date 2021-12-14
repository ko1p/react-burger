import { setModalData } from "./modal"
import { AppDispatch } from "../../types"
import { getCookie } from "../../utils/cookie"

export const SET_ORDER_FETCH_ERROR: 'SET_ORDER_FETCH_ERROR' = 'SET_ORDER_FETCH_ERROR'

export const setOrderFetchError = (hasError: boolean) => (
    {
        type: SET_ORDER_FETCH_ERROR,
        hasError
    }
)

export const fetchOrderData = (url: string, orderIds: string[]) => {
    return (dispatch: AppDispatch) => {
        fetch(`${url}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                "authorization": getCookie('accessToken') || 'null'
            },
            body: JSON.stringify({"ingredients": orderIds})
        })
            .then(res => {
                if (res.status !== 200) {
                    throw new Error(`${res.status}`)
                }
                return res.json()
            })
            .then(info => {
                dispatch(setOrderFetchError(false))
                dispatch(setModalData(info))
            })
            .catch((err) => {
                dispatch(setOrderFetchError(true))
                console.log(`При отправке заказа на сервер произошла ошибка ${err}`)
            });
    }
}
