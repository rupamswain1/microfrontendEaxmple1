import React,{lazy,Suspense, useState} from 'react';
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
    const [isSignedIn,setIsSignedIn]=useState(false)
    
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <BrowserRouter>
                    
                        <Header onSignOut={()=>setIsSignedIn(false)} onSignIn={isSignedIn}/>        
                        <Switch>
                        <Suspense fallback={<Progress/>}>
                            <Route path='/auth'>
                                <Auth onSignIn={()=>setIsSignedIn(true)}/>
                            </Route>
                            <Route path='/' component={Marketing}/>
                        </Suspense>   
                        </Switch>
                           
                </BrowserRouter>
            </StylesProvider>
        </div>

        
        )
};