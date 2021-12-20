import * as types from "../actions/modal";
import { modal, initialStateModal } from "./modal";


describe('modal reducer', () => {
    it('should handle SET_INGREDIENTS_MODAL_OPEN', () => {
        expect(
            modal(initialStateModal, {
                type: types.SET_INGREDIENTS_MODAL_OPEN
            })
        ).toEqual(
            {
                isOpen: true,
                type: {
                    ingredients: true,
                    order: false
                },
                data: {}
            }
        )
    })
    it('should handle SET_ORDER_MODAL_OPEN', () => {
        expect(
            modal(initialStateModal, {
                type: types.SET_ORDER_MODAL_OPEN
            })
        ).toEqual(
            {
                isOpen: true,
                type: {
                    ingredients: false,
                    order: true
                },
                data: {}
            }
        )
    })
    it('should handle SET_MODAL_CLOSE', () => {
        expect(
            modal(initialStateModal, {
                type: types.SET_MODAL_CLOSE
            })
        ).toEqual(
            {
                isOpen: false,
                type: {
                    ingredients: false,
                    order: false
                },
                data: {}
            }
        )
    })
    it('should handle RESET_MODAL_DATA', () => {
        expect(
            modal(initialStateModal, {
                type: types.RESET_MODAL_DATA
            })
        ).toEqual(
            {
                isOpen: false,
                type: {
                    ingredients: false,
                    order: false
                },
                data: {}
            }
        )
    })
    it('should handle SET_MODAL_DATA', () => {
        expect(
            modal({
                isOpen: false,
                type: {
                    ingredients: false,
                    order: false
                },
                data: {}
            }, {
                type: types.SET_MODAL_DATA,
                data: {
                    success: true,
                    name: 'Флюоресцентный spicy space бургер',
                    order: {
                        number: 1234
                    }
                }
            })
        ).toEqual(
            {
                isOpen: false,
                type: {
                    ingredients: false,
                    order: false
                },
                data: {
                    success: true,
                    name: 'Флюоресцентный spicy space бургер',
                    order: {
                        number: 1234
                    }
                }
            }
        )
    })
});
