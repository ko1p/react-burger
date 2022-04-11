import { Route, Switch, useHistory, useLocation } from 'react-router-dom'
import { AppHeader } from "../app-header/app-header";
import { BurgerMaker } from "../../pages/burger-maker/burger-maker";
import { useEffect, FC } from "react";
import { Loader } from "../loader/loader";
import { useDispatch, useSelector } from "react-redux";
import { PageNotFound } from "../page-not-found/page-not-found";
import { Register } from "../../pages/register/register";
import { Login } from "../../pages/login/login";
import { ForgotPassword } from "../../pages/forgot-password/forgot-password";
import { ResetPassword } from "../../pages/reset-password/reset-password";
import { Profile } from "../../pages/profile/profile";
import { Feed } from "../../pages/feed/feed";
import { RouteProtectedUnauthorized } from "../route-protected-unauthorized/route-protected-unauthorized";
import { RouteProtectedReset } from "../route-protected-reset/route-protected-reset";
import { RouteProtectedAuthorized } from "../route-protected-authorized/route-protected-authorized";
import { ProfileOrders } from "../../pages/profile-orders/profile-orders";
import { IngredientDetails } from "../ingredient-details/ingredient-details";
import { OrderDetails } from "../order-details/order-details";
import { Ingredient } from "../../pages/ingredient/ingredient";
import { fetchUserInfo } from "../../services/actions/profile";
import { fetchIngredients } from "../../services/actions/ingredients";
import { ILocation, IStore } from "../../types";
import { ModalOverlay } from "../modal-overlay/modal-overlay";

export const App: FC = () => {
    const dispatch = useDispatch()
    let location = useLocation<ILocation>();
    let history = useHistory();
    const data = useSelector((store: IStore) => store.ingredients.list)

    const action = history.action ==='PUSH' || history.action ==='REPLACE';
    const isModalIngredientOpen = action && location.state && location.state.ingredientModal;
    const isModalOrderOpen = action && location.state && location.state.orderModal;

    const closeModal = () => {
        history.goBack();
    }

    useEffect(() => {
        dispatch(fetchUserInfo())
        dispatch(fetchIngredients())
    }, [dispatch])

    return (
        <>
                <AppHeader/>
                <Switch location={isModalIngredientOpen || isModalOrderOpen || location}>
                    <Route path='/' exact>
                        { data ? <BurgerMaker/> : <Loader /> }
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
                        <OrderDetails />
                    </RouteProtectedAuthorized>
                    <Route path='/ingredients/:id' exact>
                        <Ingredient />
                    </Route>
                    <RouteProtectedAuthorized path='/feed' exact>
                        <Feed />
                    </RouteProtectedAuthorized>
                    <RouteProtectedAuthorized path='/feed/:id' exact>
                        <OrderDetails />
                    </RouteProtectedAuthorized>
                    <Route path='*'>
                        <PageNotFound />
                    </Route>
                </Switch>
                {
                    isModalIngredientOpen && (
                        <Route path='/ingredients/:id' exact>
                            <ModalOverlay closeModal={closeModal}>
                                <IngredientDetails />
                            </ModalOverlay>
                        </Route>
                    )
                }
            {
                isModalOrderOpen && (
                    <Route path='/feed/:id' exact>
                        <ModalOverlay closeModal={closeModal}>
                            <OrderDetails />
                        </ModalOverlay>
                    </Route>
                )
            }
        </>
    );
}

export default App;
