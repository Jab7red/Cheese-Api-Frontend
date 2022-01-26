import { Route, Switch } from 'react-router-dom';
import Index from '../pages/Index';
import Show from '../pages/Show'

const Main = (props) => {
    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Index />
                </Route>
                <Route path='/cheese/:id' render={(rc) => (<Show {...rc}/>)} />
            </Switch>
        </main>
    )
};

export default Main;