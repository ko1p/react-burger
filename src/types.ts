import {store} from "./services/store"
import {Action, ActionCreator} from "redux"
import {ThunkAction} from "redux-thunk"
import {
    ADD_CONSTRUCTOR_INGREDIENT, REMOVE_CONSTRUCTOR_INGREDIENT, SET_CONSTRUCTOR_BUN,
    UPDATE_INGREDIENTS
} from "./services/actions/burgerConstructor"
import {SET_INGREDIENTS_ERROR, SET_INGREDIENTS_SUCCESS} from "./services/actions/ingredients"
import {
    RESET_MODAL_DATA,
    SET_INGREDIENTS_MODAL_OPEN,
    SET_MODAL_CLOSE, SET_MODAL_DATA,
    SET_ORDER_MODAL_OPEN
} from "./services/actions/modal"
import {SET_ORDER_FETCH_ERROR} from "./services/actions/order"
import {
    RESET_USER_DATA,
    SET_RECOVER_PASS_ERROR,
    SET_RECOVER_PASS_IS_FETCHING,
    SET_RECOVER_PASS_IS_SUCCESS,
    SET_REGISTER_ERROR,
    SET_REGISTER_IS_FETCHING,
    SET_REGISTER_IS_SUCCESS,
    SET_RESET_PASS_ERROR,
    SET_RESET_PASS_IS_FETCHING,
    SET_RESET_PASS_IS_SUCCESS, SET_USER_DATA, SET_USER_LOGIN_ERROR,
    SET_USER_LOGIN_IS_FETCHING, SET_USER_LOGIN_IS_SUCCESS,
} from "./services/actions/profile"
import {
    WS_CONNECTION_ALL_START,
    WS_CONNECTION_USER_START,
    WS_CONNECTION_CLOSED,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_SUCCESS,
    WS_GET_MESSAGE
} from "./services/actions/ws"

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
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
    uuid?: string,
}

export interface IUserInfo {
    email: string,
    name: string,
}

export interface IOrderInfo {
    createdAt: string
    ingredients: string[]
    name: string
    number: number
    status: string
    updatedAt: string
    _id: string
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
        ingredients: IIngredient[],
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
    },
    ws: {
        connectionIsStart: Event | boolean,
        connectionSuccess: Event | boolean,
        connectionIsClosed: CloseEvent | boolean,
        connectionError: Event | string,
        ordersInfo: {
            total?: number,
            totalToday?: number,
            orders?: IOrderInfo[]
        }
    }
}

export interface ILocation {
    from: {
        pathname: string;
    },
    ingredientModal: any,
    orderModal: any,
}

export interface IModalProps {
    closeModal: () => void,
}

export interface IConstructorItemProps {
    id: string,
    index: number,
    moveCard: (dragIndex: number, hoverIndex: number) => void,
    card: IIngredient
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
    readonly ingredient: IIngredient
}

export interface IUpdateIngredients {
    readonly type: typeof UPDATE_INGREDIENTS;
    readonly ingredients: IIngredient[];
}

export interface IRemoveConstructorIngredient {
    readonly type: typeof REMOVE_CONSTRUCTOR_INGREDIENT;
    readonly ingredients: IIngredient;
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
    | ISetOrderFetchError;

export interface ISetRegisterIsFetching {
    readonly type: typeof SET_REGISTER_IS_FETCHING;
    readonly isRegisterFetching: boolean;
}

export interface ISetRegisterIsSuccess {
    readonly type: typeof SET_REGISTER_IS_SUCCESS;
    readonly isRegisterSuccess: boolean;
}

export interface ISetRegisterError {
    readonly type: typeof SET_REGISTER_ERROR;
    readonly registerError: string;
}

export interface ISetRecoverPassIsFetching {
    readonly type: typeof SET_RECOVER_PASS_IS_FETCHING;
    readonly isRecoverPassFetching: boolean;
}

export interface ISetRecoverPassIsSuccess {
    readonly type: typeof SET_RECOVER_PASS_IS_SUCCESS;
    readonly isRecoverPassSuccess: boolean;
}

export interface ISetRecoverPassError {
    readonly type: typeof SET_RECOVER_PASS_ERROR;
    readonly recoverPassError: string;
}

export interface ISetResetPassIsFetching {
    readonly type: typeof SET_RESET_PASS_IS_FETCHING;
    readonly isResetPassFetching: boolean;
}

export interface ISetResetPassIsSuccess {
    readonly type: typeof SET_RESET_PASS_IS_SUCCESS;
    readonly isResetPassSuccess: boolean;
}

export interface ISetResetPassError {
    readonly type: typeof SET_RESET_PASS_ERROR;
    readonly resetPassError: string;
}

export interface ISetLoginUserIsFetching {
    readonly type: typeof SET_USER_LOGIN_IS_FETCHING;
    readonly isUserLoginFetching: boolean;
}

export interface ISetLoginUserIsSuccess {
    readonly type: typeof SET_USER_LOGIN_IS_SUCCESS;
    readonly isUserLoginSuccess: boolean;
}

export interface ISetLoginUserError {
    readonly type: typeof SET_USER_LOGIN_ERROR;
    readonly userLoginError: string;
}

export interface IResetUserName {
    readonly type: typeof RESET_USER_DATA;
}

export interface ISetUserData {
    readonly type: typeof SET_USER_DATA;
    readonly user: {
        email: string,
        name: string,
    };
}

export type TProfileActions =
    | ISetRegisterIsFetching
    | ISetRegisterIsSuccess
    | ISetRegisterError
    | ISetRecoverPassIsFetching
    | ISetRecoverPassIsSuccess
    | ISetRecoverPassError
    | ISetResetPassIsFetching
    | ISetResetPassIsSuccess
    | ISetResetPassError
    | ISetLoginUserIsFetching
    | ISetLoginUserIsSuccess
    | ISetLoginUserError
    | IResetUserName
    | ISetUserData
    ;

export interface ISocketConnectionAllStart {
    readonly type: typeof WS_CONNECTION_ALL_START;
}

export interface ISocketConnectionUserStart {
    readonly type: typeof WS_CONNECTION_USER_START;
}

export interface ISocketConnectionSuccess {
    readonly type: typeof WS_CONNECTION_SUCCESS;
    readonly payload: Event
}

export interface ISocketConnectionError {
    readonly type: typeof WS_CONNECTION_ERROR;
    readonly payload: Event
}

export interface ISocketConnectionClosed {
    readonly type: typeof WS_CONNECTION_CLOSED;
    readonly payload: CloseEvent
}

export interface ISocketConnectionClosed {
    readonly type: typeof WS_CONNECTION_CLOSED;
    readonly payload: CloseEvent
}

export interface ISocketGetMessage {
    readonly type: typeof WS_GET_MESSAGE;
    readonly payload: any
}

export type TWSActions =
    | ISocketConnectionAllStart
    | ISocketConnectionUserStart
    | ISocketConnectionSuccess
    | ISocketConnectionError
    | ISocketConnectionClosed
    | ISocketGetMessage
    ;


export type TApplicationActions =
    | TBurgerConstructorActions
    | TIngredientsActions
    | TModalActions
    | TOrderActions
    | TProfileActions
    ;
