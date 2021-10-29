export interface IStore {
    ingredients: any,
    modal: any,
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