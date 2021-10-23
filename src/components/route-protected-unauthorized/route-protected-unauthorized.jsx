import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const RouteProtectedUnauthorized = ({ children, ...rest }) => {
    const name = useSelector((store) => store.profile.user.name);
    return (
        <Route {...rest} render={() => (!name ? children : <Redirect to='/' />)} />
    );
}
