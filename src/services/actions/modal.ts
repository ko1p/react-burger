import { TOrder } from '../../types'

export const SET_MODAL_DATA: 'SET_MODAL_DATA' = 'SET_MODAL_DATA'
export const SET_INGREDIENTS_MODAL_OPEN: 'SET_INGREDIENTS_MODAL_OPEN' = 'SET_INGREDIENTS_MODAL_OPEN'
export const SET_ORDER_MODAL_OPEN: 'SET_ORDER_MODAL_OPEN' = 'SET_ORDER_MODAL_OPEN'
export const SET_MODAL_CLOSE: 'SET_MODAL_CLOSE' = 'SET_MODAL_CLOSE'
export const RESET_MODAL_DATA: 'RESET_MODAL_DATA' = 'RESET_MODAL_DATA'

export const openIngredientsModal = () => (
    {
        type: SET_INGREDIENTS_MODAL_OPEN
    }
)

export const openOrderModal = () => (
    {
        type: SET_ORDER_MODAL_OPEN
    }
)

export const closeModal = () => (
    {
        type: SET_MODAL_CLOSE
    }
)

export const setModalData = (data: TOrder) => {
    return {
        type: SET_MODAL_DATA,
        data
    }
}

export const resetModalData = () => (
    {
        type: RESET_MODAL_DATA,
    }
)
