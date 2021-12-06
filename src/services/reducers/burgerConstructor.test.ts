import * as types from "../actions/burgerConstructor"
import { burgerConstructor } from "./burgerConstructor"
import { v4 as uuidv4 } from 'uuid'
import {ADD_CONSTRUCTOR_INGREDIENT, REMOVE_CONSTRUCTOR_INGREDIENT} from "../actions/burgerConstructor";

describe('constructor reducer', () => {
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
        uuid: '80316158-2406-425e-9f86-c4a52c4a16eb'
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
        uuid: '80316158-2406-425e-9f86-c4a52c4a16eb'
    }

    const initialStateConstructor = {
        ingredients: [],
        bun: {}
    };
    const initialStateConstructorDel = {
        ingredients: [ingOne, ingTwo],
        bun: {}
    };

    it('should handle ADD_CONSTRUCTOR_INGREDIENT', () => {
        expect(
            burgerConstructor(initialStateConstructor, {
                type: types.ADD_CONSTRUCTOR_INGREDIENT,
                ingredient: ingOne
            })
        ).toEqual(
            {
                ingredients: [ingOne],
                bun: {}
            }
        )
    })
    it("should handle DELETE_INGREDIENT", () => {
        expect(
            burgerConstructor(
                initialStateConstructorDel,
                {
                    type: types.REMOVE_CONSTRUCTOR_INGREDIENT,
                    ingredients: ingTwo
                }
            )
        ).toEqual(
            {
                bun: {},
                ingredients: []
            },
        )
    });
})