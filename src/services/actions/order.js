import {setModalData} from "./modal";

export const SET_ORDER_INFO = 'SET_ORDER_INFO';
export const SET_ORDER_FETCH_ERROR = 'SET_ORDER_FETCH_ERROR';

export const setOrderFetchError = hasError => (
    {
        type: SET_ORDER_FETCH_ERROR,
        hasError
    }
)

export const setOrderInfo = info => (
    {
        type: SET_ORDER_INFO,
        info
    }
)

export const fetchOrderData = (url, orderIds) => {
    return dispatch => {
        fetch(`${url}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({"ingredients": orderIds})
        })
            .then(res => {
                if (res.status !== 200) {
                    throw new Error(res.status)
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
