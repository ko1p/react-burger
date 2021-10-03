import {combineReducers} from 'redux';
import { ingredients } from './ingredients'
import { modal } from './modal'
import { order } from './order'
import { burgerConstructor } from './burgerConstructor'

export const rootReducer = combineReducers({
    ingredients,
    modal,
    burgerConstructor,
    order
});
