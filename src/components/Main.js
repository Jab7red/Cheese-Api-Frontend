import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show'

const Main = (props) => {
    const [ cheeses, setCheeses ] = useState(null);

    const URL = "http://localhost:4000/cheese/";

    const getCheeses = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setCheeses(data);
    };

    const createCheeses = async (cheese) => {
        //make post request to create cheeses
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
            },
            body: JSON.stringify(cheese),
        });
        //update list of cheese
        getCheeses
    };

    useEffect(() => getCheeses(), []);

    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Index cheeses = {cheeses} createCheese ={createCheeses}/>
                </Route>
                <Route path='/cheese/:id' render={(rc) => (<Show {...rc}/>)} />
            </Switch>
        </main>
    )
};

export default Main;