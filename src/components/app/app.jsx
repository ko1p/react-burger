import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import {AppHeader} from "../app-header/app-header";
import {BurgerMaker} from "../../pages/burger-maker/burger-maker";
import {useEffect} from "react";
import {URL} from '../../utils/constants';
import {Loader} from "../loader/loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchIngredients} from "../../services/actions";
import {PageNotFound} from "../page-not-found/page-not-found";
import {Register} from "../../pages/register/register";

function App() {
    const dispatch = useDispatch()
    const data = useSelector(store => store.ingredients.list)

    useEffect(() => {
        dispatch(fetchIngredients(URL))
    }, [dispatch])

    return (
        <>
            <AppHeader/>
            <Router>
                <Switch>
                    <Route path='/' exact>
                        { data ? <BurgerMaker data={data}/> : <Loader /> }
                    </Route>
                    <Route path='/login' exact>
                        <p>Здесь будет страница для входа</p>
                    </Route>
                    <Route path='/register' exact>
                        <Register />
                    </Route>
                    <Route path='/forgot-password' exact>
                        <p>Здесь будет страница для восстановления пароля</p>
                    </Route>
                    <Route path='/reset-password' exact>
                        <p>Здесь будет страница для сброса пароля</p>
                    </Route>
                    <Route path='/profile' exact>
                        <p>Здесь будет страница профиля</p>
                    </Route>
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
