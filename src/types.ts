import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator } from 'redux';
import { store } from './services/store';
import {
    ADD_CONSTRUCTOR_INGREDIENT, REMOVE_CONSTRUCTOR_INGREDIENT, SET_CONSTRUCTOR_BUN,
    UPDATE_INGREDIENTS
} from "./services/actions/burgerConstructor";
import {fetchIngredients, SET_INGREDIENTS_ERROR, SET_INGREDIENTS_SUCCESS} from "./services/actions/ingredients";
import {
    openIngredientsModal, RESET_MODAL_DATA, resetModalData,
    SET_INGREDIENTS_MODAL_OPEN,
    SET_MODAL_CLOSE, SET_MODAL_DATA,
    SET_ORDER_MODAL_OPEN, setModalData
} from "./services/actions/modal";
import {SET_ORDER_FETCH_ERROR, setOrderFetchError} from "./services/actions/order";


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ActionCreator<ThunkAction<ReturnType, Action, RootState, TApplicationActions>>;

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

export interface IAddConstructorIngredient {
    readonly type: typeof ADD_CONSTRUCTOR_INGREDIENT;
    readonly uuid: string;
}

export interface IUpdateIngredients {
    readonly type: typeof UPDATE_INGREDIENTS;
    readonly ingredients: IIngredient[];
}

export interface IRemoveConstructorIngredient {
    readonly type: typeof REMOVE_CONSTRUCTOR_INGREDIENT;
    readonly ingredient: IIngredient;
}

export interface ISetConstructorBun {
    readonly type: typeof SET_CONSTRUCTOR_BUN;
    readonly bun: IIngredient;
}

export type TBurgerConstructorActions =
    | IAddConstructorIngredient
    | IUpdateIngredients
    | IRemoveConstructorIngredient
    | ISetConstructorBun;

export interface ISuccessFetchIngredients {
    readonly type: typeof SET_INGREDIENTS_SUCCESS;
    readonly ingredients: IIngredient[];
}

export interface IFailedFetchIngredients {
    readonly type: typeof SET_INGREDIENTS_ERROR;
}

export interface IFetchIngredients {
    readonly type: typeof SET_INGREDIENTS_ERROR;
}

export type TIngredientsActions =
    | ISuccessFetchIngredients
    | IFailedFetchIngredients
    | IFetchIngredients;

export interface IOpenIngredientsModal {
    readonly type: typeof SET_INGREDIENTS_MODAL_OPEN;
}

export interface IOpenOrderModal {
    readonly type: typeof SET_ORDER_MODAL_OPEN;
}

export interface ICloseModal {
    readonly type: typeof SET_MODAL_CLOSE;
}

export interface ISetModalData {
    readonly type: typeof SET_MODAL_DATA;
    readonly data: TOrder;
}

export interface IResetModalData {
    readonly type: typeof RESET_MODAL_DATA;
}

export type TModalActions =
    | IOpenIngredientsModal
    | IOpenOrderModal
    | ICloseModal
    | ISetModalData
    | IResetModalData
;

export interface ISetOrderFetchError {
    readonly type: typeof SET_ORDER_FETCH_ERROR;
    readonly hasError: boolean;
}

export type TOrderActions =
    | ISetOrderFetchError
    ;


export type TApplicationActions =
    | TBurgerConstructorActions
    | TIngredientsActions
    | TModalActions
    | TOrderActions
    ;
