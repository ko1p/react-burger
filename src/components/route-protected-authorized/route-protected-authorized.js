import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getCookie } from "../../utils/cookie";

export const RouteProtectedAuthorized = ({ children, ...rest }) => {
    const name = useSelector((store) => store.profile.user.name);
    const cookie = getCookie('accessToken')

    console.log(!!cookie, getCookie('accessToken'), 'cookie', !!name, 'name')

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
