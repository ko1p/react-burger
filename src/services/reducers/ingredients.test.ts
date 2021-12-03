import * as types from "../actions/ingredients";
import { ingredients } from "./ingredients";
import { v4 as uuidv4 } from 'uuid';
import {SET_INGREDIENTS_SUCCESS} from "../actions/ingredients";

describe('ingredients reducer', () => {
    const ingOne = {
        _id: "60d3b41abdacab0026a733cd",
        name: "Соус фирменный Space Sauce",
        type: "sauce",
        proteins: 50,
        fat: 22,
        carbohydrates: 11,
        calories: 14,
        price: 80,
        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
        __v: 0,
        uuid: uuidv4()
    }
    const ingTwo = {
        _id: "60d3b41abdacab0026a733cd",
        name: "Соус фирменный Space Sauce",
        type: "sauce",
        proteins: 50,
        fat: 22,
        carbohydrates: 11,
        calories: 14,
        price: 80,
        image: "https://code.s3.yandex.net/react/code/sauce-04.png",
        image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
        __v: 0,
        uuid: uuidv4()
    }

    it('should handle GET_INGREDIENTS_SUCCESS', () => {
        expect(
            ingredients({
                isRequesting: false,
                hasRequestError: false,
                list: [],
            }, {
                type: types.SET_INGREDIENTS_SUCCESS,
                ingredients: [ingOne, ingTwo]
            })
        ).toEqual(
            {
                isRequesting: false,
                hasRequestError: false,
                list: [ingOne, ingTwo],
            }
        )
    })
    it('should handle GET_INGREDIENTS_ERROR', () => {
        expect(
            ingredients({
                isRequesting: false,
                hasRequestError: false,
                list: []
            }, {
                type: types.SET_INGREDIENTS_ERROR
            })
        ).toEqual(
            {
                isRequesting: false,
                hasRequestError: true,
                list: []
            }
        );
    })
});