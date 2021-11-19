import { combineReducers } from 'redux'
import { ingredients } from './ingredients'
import { modal } from './modal'
import { order } from './order'
import { burgerConstructor } from './burgerConstructor'
import { profile } from './profile'
import { ws } from './ws'

export const rootReducer = combineReducers({
    ingredients,
    modal,
    burgerConstructor,
    order,
    profile,
    ws
});
