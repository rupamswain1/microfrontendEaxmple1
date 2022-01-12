import React from 'react';
import { Switch,Route,Router } from 'react-router-dom';
import {createGenerateClassName, StylesProvider} from '@material-ui/core/styles';

const generateClassName=createGenerateClassName({
    productionPrefix:'auth'
})

export default ({history})=>{
    console.log(history);
    return(
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path='/' component={H1}/>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}