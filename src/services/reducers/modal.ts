import {
    RESET_MODAL_DATA,
    SET_INGREDIENTS_MODAL_OPEN,
    SET_MODAL_CLOSE,
    SET_MODAL_DATA,
    SET_ORDER_MODAL_OPEN
} from "../actions/modal";
import { TModalActions } from "../../types"

type TModalState = {
    isOpen: boolean;
    type: {
        ingredients: boolean;
        order: boolean;
    },
    data: any
}

export const initialStateModal: TModalState = {
    isOpen: false,
    type: {
        ingredients: false,
        order: false
    },
    data: {}
};

export const modal = (state = initialStateModal, action: TModalActions): TModalState => {
    switch (action.type) {
        case SET_INGREDIENTS_MODAL_OPEN: {
            return {
                ...state,
                isOpen: true,
                type: {
                    ingredients: true,
                    order: false
                }
            };
        }
        case SET_ORDER_MODAL_OPEN: {
            return {
                ...state,
                isOpen: true,
                type: {
                    ingredients: false,
                    order: true
                }
            };
        }
        case SET_MODAL_CLOSE: {
            return {
                ...state,
                isOpen: false,
                type: {
                    ingredients: false,
                    order: false
                }
            };
        }
        case RESET_MODAL_DATA: {
            return {
                ...state,
                data: initialStateModal.data
            };
        }
        case SET_MODAL_DATA: {
            return {
                ...state,
                data: action.data
            };
        }
        default:
            return state
    }
}
