import React from 'react';
import { Switch,Route,Router } from 'react-router-dom';
import {createGenerateClassName, StylesProvider} from '@material-ui/core/styles';
import SignIn from './components/Signin';
import Signup from './components/Signup'
const generateClassName=createGenerateClassName({
    productionPrefix:'auth'
})

export default ({history,onSignIn})=>{
    //console.log(history);
    return(
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route path='/auth/signup'>
                            <Signup onSignIn={onSignIn}/>
                        </Route>
                        <Route path='/auth/signIn'>
                            <SignIn onSignIn={onSignIn}/>
                        </Route>
                        
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}