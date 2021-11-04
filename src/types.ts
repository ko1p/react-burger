import {ModalOverlay} from "./components/modal-overlay/modal-overlay";

export interface IIngredient {
    _id: string,
    name: string,
    type: string,
    proteins: number,
    fat: number,
    carbohydrates: number,
    calories: number,
    price: number,
    image: string,
    image_mobile: string,
    image_large: string,
    __v: number,
}

export interface IIngredientWithUuid extends IIngredient {
    uuid: string,
}

export interface IStore {
    ingredients: {
        list: IIngredient[],
    },
    modal: {
        isOpen: boolean,
        type: any,
        data: {
            info?: {
                order?: {
                    number?: number | string
                }
            }
        }
    },
    burgerConstructor: {
        ingredients: IIngredientWithUuid[],
        bun: IIngredient,
    }
    order: any,
    profile: any,
}
//TODO: Убрать временные any

export interface ILocation {
    from: {
        pathname: string;
    },
    ingredientModal: any;
}
//TODO: Убрать временные any

export interface IModalProps {
    closeModal: () => void,
}

export interface IConstructorItemProps {
    id: string,
    index: number,
    moveCard: (dragIndex: number, hoverIndex: number) => void,
    card: IIngredientWithUuid
}

export interface IIngredientCardProps {
    key: string,
    card: IIngredient
}

export interface IModalOverlayProps {
    closeModal: () => void,
}

export interface ILocation {
    from: {
        pathname: string;
    },
    ingredientModal: any;
}
//TODO: Убрать временные any

export type Info = {
    order?: {
        number?: number | string
    }
}

export type TOrder = {
    "success": boolean,
    "name": string,
    "order": {
        "number": number
    }
}
