import React, { FC } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getCookie } from "../../utils/cookie"
import { IRouteProps, IStore } from "../../types";

export const RouteProtectedAuthorized: FC<IRouteProps> = ({ children, ...rest }) => {
    const name = useSelector((store: IStore) => store.profile.user.name);
    const cookie = getCookie('accessToken')

    return (
        <Route
            {...rest}
            render={({ location }) =>
                !name && !cookie ? (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                ) : (
                    children
                )
            }
        />
    );
}
