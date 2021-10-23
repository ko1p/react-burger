import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const RouteProtectedReset = ({ children, ...rest }) => {
    const name = useSelector((store) => store.profile.user);
    const isPasswordResetingSuccessful = useSelector(store => store.profile.isResetPassSuccess)

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
