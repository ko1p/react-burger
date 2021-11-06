import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { IRouteProps, IStore } from "../../types";

export const RouteProtectedReset: FC<IRouteProps> = ({ children, ...rest }) => {
    const name = useSelector((store: IStore) => store.profile.user);
    const isPasswordResetingSuccessful = useSelector((store: IStore) => store.profile.isResetPassSuccess)

    return (
        <Route
            { ...rest }
            render={() =>
                !name && (isPasswordResetingSuccessful === 'true') ? (
                    children
                ) : (
                    <Redirect to='/'/>
                )
            }
        />
    );
}
