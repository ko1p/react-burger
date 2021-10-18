import {SET_ORDER_FETCH_ERROR} from "../actions/order";

const initialStateOrder = {
    isRequesting: false,
    hasError: false
};

export const order = (state = initialStateOrder, action) => {
    switch (action.type) {
        case SET_ORDER_FETCH_ERROR: {
            return {
                ...state,
                hasError: action.hasError
            }
        }
        default:
            return state
    }
}
