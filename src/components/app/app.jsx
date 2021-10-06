import {AppHeader} from "../app-header/app-header";
import {BurgerMaker} from "../burger-maker/burger-maker";
import {useEffect} from "react";
import {URL} from '../../utils/constants';
import {Loader} from "../loader/loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchIngredients} from "../../services/actions";

function App() {
    const dispatch = useDispatch()
    const data = useSelector(store => store.ingredients.list)

    useEffect(() => {
        dispatch(fetchIngredients(URL))
    }, [dispatch])

    return (
        <>
            <AppHeader/>
            { data ? <BurgerMaker data={data}/> : <Loader /> }
        </>
    );
}

export default App;
