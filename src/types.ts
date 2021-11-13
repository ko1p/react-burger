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

export interface IOrderList {
    id: string,
    date: string,
    name: string,
    ingredients: IIngredientWithUuid[],
    price: number,
}

export interface IUserInfo {
    email: string,
    name: string,
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
    order: {
        isRequesting: boolean,
        hasError: boolean,
    }
    profile: {
        user: IUserInfo,
        isRegisterFetching: boolean,
        isRegisterSuccess: boolean,
        registerError: string,
        isRecoverPassFetching: boolean,
        isRecoverPassSuccess: boolean,
        recoverPassError: string,
        isResetPassFetching: boolean,
        isResetPassSuccess: boolean,
        resetPassError: string,
        isUserLoginFetching: boolean,
        isUserLoginSuccess: boolean,
        userLoginError: string,
    }
}

export interface ILocation {
    from: {
        pathname: string;
    },
    ingredientModal: any
}

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

export interface IRouteProps {
    path: string,
    exact?: boolean,
    rest?: {
        path: string;
        exact: boolean,
        location: {
            pathname: string;
            search: string;
            hash: string;
            key: string;
        },
        computedMatch: {
            path: string;
            url: string;
            isExact: true,
            params: any
        }
    }
}

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
