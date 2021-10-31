export interface IStore {
    ingredients: any,
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
    burgerConstructor: any,
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
