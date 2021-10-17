import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
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
import {ProfileOrders} from "../../pages/profile-orders/profile-orders";
import {IngredientDetails} from "../ingredient-details/ingredient-details";
import {Modal} from "../modal/modal";
import {Ingredient} from "../../pages/ingredient/ingredient";

function App() {
    const dispatch = useDispatch()
    let location = useLocation();
    let history = useHistory();
    const data = useSelector(store => store.ingredients.list)

    const action = history.action ==='PUSH' || history.action ==='REPLACE';
    const isModalIngredientOpen = action && location.state && location.state.ingredientModal;

    const closeModal = () => {
        console.log('Модалка закрылась')
        history.goBack();
    }

    useEffect(() => {
        dispatch(fetchUserInfo())
        dispatch(fetchIngredients())
    }, [dispatch])

    return (
        <>
                <AppHeader/>
                <Switch location={isModalIngredientOpen || location}>
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
                    <RouteProtectedAuthorized path='/profile/orders' exact>
                        <ProfileOrders />
                    </RouteProtectedAuthorized>
                    <RouteProtectedAuthorized path='/profile/orders/:order' exact>
                        {/*<Order />*/}
                    </RouteProtectedAuthorized>
                    <Route path='/ingredients/:id' exact>
                        <Ingredient />
                    </Route>
                    <Route path='/feed' exact>
                        <p>Здесь будет страница с фидами</p>
                    </Route>
                    <Route path='/feed/:id' exact>
                        <p>Здесь будет страница фида</p>
                    </Route>
                    <Route path='*'>
                        <PageNotFound />
                    </Route>
                </Switch>
                {
                    isModalIngredientOpen && (
                        <Route path='/ingredients/:id' exact>
                            <Modal closeModal={closeModal}>
                                <IngredientDetails />
                            </Modal>
                        </Route>
                    )
                }
        </>
    );
}

export default App;
