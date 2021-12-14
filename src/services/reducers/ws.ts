import { IOrderInfo, TWSActions } from "../../types"
export const WS_CONNECTION_START: 'WS_CONNECTION_START' = 'WS_CONNECTION_START'
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS'
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR'
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED'
export const WS_GET_MESSAGE: 'WS_GET_MESSAGE' = 'WS_GET_MESSAGE'
export const WS_SEND_MESSAGE: 'WS_SEND_MESSAGE' = 'WS_SEND_MESSAGE'
export const WS_CONNECTION_CLOSE: 'WS_CONNECTION_CLOSE' = 'WS_CONNECTION_CLOSE'

type TWSState = {
    connectionIsStart: Event | boolean,
    connectionSuccess: Event | boolean,
    connectionIsClosed: CloseEvent | boolean,
    connectionError: Event | string,
    ordersInfo: {
        total?: number,
        totalToday?: number,
        orders?: IOrderInfo[]
    }
}

export const initialStateWS: TWSState = {
    connectionIsStart: false,
    connectionSuccess: false,
    connectionIsClosed: false,
    connectionError: '',
    ordersInfo: {}
}

export const ws = (state = initialStateWS, action: TWSActions): TWSState => {
    switch (action.type) {
        // case WS_CONNECTION_START: {
        //     return {
        //         ...state,
        //         connectionIsStart: action.connectionIsStart
        //     }
        // }
        case WS_CONNECTION_SUCCESS: {
            return {
                ...state,
                connectionSuccess: action.payload
            }
        }
        case WS_CONNECTION_ERROR: {
            return {
                ...state,
                connectionError: action.payload
            }
        }
        case WS_CONNECTION_CLOSED: {
            return {
                ...state,
                connectionIsClosed: action.payload
            }
        }
        case WS_GET_MESSAGE: {
            console.log(action.payload)
            return {
                ...state,
                ordersInfo: action.payload
            }
        }
        // case WS_SEND_MESSAGE: {
        //     console.log(action.payload, 'посылаю данные о заказе')
        //     return {
        //         ...state,
        //         ordersInfo: action.payload
        //     }
        // }
        default:
            return state
    }
}
