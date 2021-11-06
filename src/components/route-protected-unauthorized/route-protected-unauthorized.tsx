import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {IRouteProps, IStore } from "../../types";

export const RouteProtectedUnauthorized: FC<IRouteProps> = ({ children, ...rest }) => {
    const name = useSelector((store: IStore) => store.profile.user.name);
    return (
        <Route {...rest} render={() => (!name ? children : <Redirect to='/' />)} />
    );
}
