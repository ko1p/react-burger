import {AppHeader} from "../app-header/app-header";
import {BurgerMaker} from "../burger-maker/burger-maker";
import {useEffect, useState} from "react";
import {URL} from '../../utils/constants'
import {OrderDetails} from "../order-details/order-detaild";
import {IngredientDetails} from "../ingredient-details/ingredient-details";

function App() {
    const [data, setData] = useState()
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(res => setData(res.data))
            .catch(e => console.log(e))
    }, [])

    return (
        <>
            <IngredientDetails />
            {/*<AppHeader/>*/}
            {/*<BurgerMaker data={data} />*/}
        </>
    );
}

export default App;
