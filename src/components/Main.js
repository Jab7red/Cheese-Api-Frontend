import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show'

const Main = (props) => {
    const [ cheese, setCheese ] = useState(null);

    const URL = "http://localhost:4000/cheese/";

    const getCheese = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setCheese(data);
    };

    const createCheese = async (singleCheese) => {
        //make post request to create cheeses
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/JSON",
            },
            body: JSON.stringify(singleCheese),
        });
        //update list of cheese
        getCheese();
    };

    useEffect(() => getCheese(), []);

    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Index cheese = {cheese} createCheese ={createCheese}/>
                </Route>
                <Route path='/cheese/:id' render={(rc) => (<Show {...rc}/>)} />
            </Switch>
        </main>
    )
};

export default Main;