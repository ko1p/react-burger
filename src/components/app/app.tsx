import {AppHeader} from "../app-header/app-header";
import {BurgerMaker} from "../burger-maker/burger-maker";
import {useEffect, useState} from "react";
import {URL} from '../../utils/constants';
import {Loader} from "../loader/loader";

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
            <AppHeader/>
            { data ? <BurgerMaker data={data}/> : <Loader /> }
        </>
    );
}

export default App;
