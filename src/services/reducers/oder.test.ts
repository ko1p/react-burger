import * as types from "../actions/order"
import { order, initialStateOrder } from "./order"

describe('modal reducer', () => {
    it('should handle SET_ORDER_FETCH_ERROR', () => {
        expect(
            order(initialStateOrder, {
                type: types.SET_ORDER_FETCH_ERROR,
                hasError: true
            })
        ).toEqual(
            {
                isRequesting: false,
                hasError: true
            }
        )
    })
});
