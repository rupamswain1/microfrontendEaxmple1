import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'marketing/MarketingApp'
import MarketingApp from './components/MarketingApp';
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
                    <MarketingApp/>
                
                </BrowserRouter>
            </StylesProvider>
        </div>

        
        )
};