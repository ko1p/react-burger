import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {AppHeader} from "../app-header/app-header";
import {BurgerMaker} from "../../pages/burger-maker/burger-maker";
import {useEffect} from "react";
import {Loader} from "../loader/loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchIngredients, fetchUserInfo} from "../../services/actions";
import {PageNotFound} from "../page-not-found/page-not-found";
import {Register} from "../../pages/register/register";
import {Login} from "../../pages/login/login";
import {ForgotPassword} from "../../pages/forgot-password/forgot-password";
import {ResetPassword} from "../../pages/reset-password/reset-password";
import {Profile} from "../../pages/profile/profile";
import {RouteProtectedUnauthorized} from "../route-protected-unauthorized/route-protected-unauthorized";
import {RouteProtectedReset} from "../route-protected-reset/route-protected-reset";
import {RouteProtectedAuthorized} from "../route-protected-authorized/route-protected-authorized";

function App() {
    const dispatch = useDispatch()
    const data = useSelector(store => store.ingredients.list)

    useEffect(() => {
        dispatch(fetchUserInfo())
        dispatch(fetchIngredients())
    }, [dispatch])

    return (
        <>
            <Router>
                <AppHeader/>
                <Switch>
                    <Route path='/' exact>
                        { data ? <BurgerMaker data={data}/> : <Loader /> }
                    </Route>
                    <RouteProtectedUnauthorized path='/login' exact>
                        <Login />
                    </RouteProtectedUnauthorized>
                    <RouteProtectedUnauthorized path='/register' exact>
                        <Register />
                    </RouteProtectedUnauthorized>
                    <RouteProtectedUnauthorized path='/forgot-password' exact>
                        <ForgotPassword />
                    </RouteProtectedUnauthorized>
                    <RouteProtectedReset path='/reset-password' exact>
                        <ResetPassword />
                    </RouteProtectedReset>
                    <RouteProtectedAuthorized path='/profile' exact>
                        <Profile />
                    </RouteProtectedAuthorized>
                    <Route path='/ingredients/:id' exact>
                        <p>Здесь будет страница ингридиента</p>
                    </Route>
                    <Route path='*'>
                        <PageNotFound />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
