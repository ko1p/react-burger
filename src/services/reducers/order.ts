import { SET_ORDER_FETCH_ERROR } from "../actions/order"
import { TOrderActions } from "../../types";

type TOrderState = {
    isRequesting: boolean;
    hasError: boolean;
}

const initialStateOrder = {
    isRequesting: false,
    hasError: false
};

export const order = (state = initialStateOrder, action: TOrderActions): TOrderState => {
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
