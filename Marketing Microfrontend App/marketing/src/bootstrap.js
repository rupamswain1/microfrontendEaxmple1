import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Mount function to start the app
const mount=(element)=>{
    ReactDOM.render(
       <App/>,
        element
    )
}
//If we are in development or in isolation, call mount immediately
if(process.env.NODE_ENV==='development'){
    const devRoot=document.querySelector('#marketing-dev-root');
    mount(devRoot);
}

//We are running through container and we should export the mont function
export {mount}