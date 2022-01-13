import React,{lazy,Suspense} from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

import Progress from './components/Progress'
const Marketing=lazy(()=>import('./components/MarketingApp'))
const Auth=lazy(()=>import('./components/Auth'))
import Header from './components/Header';

import { createGenerateClassName, StylesProvider } from '@material-ui/core';

const generateClassName=createGenerateClassName({
    productionPrefix:'co'
})
export default ()=>{
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <BrowserRouter>
                    
                        <Header/>        
                        <Switch>
                        <Suspense fallback={<Progress/>}>
                            <Route path='/auth' component={Auth}/>
                            <Route path='/' component={Marketing}/>
                            </Suspense>   
                        </Switch>
                           
                </BrowserRouter>
            </StylesProvider>
        </div>

        
        )
};