import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Mount function to start the app
const mount=(element)=>{
    ReactDOM.render(
       <App/>,
        element
    )
};

//If we are in development or in isolation, call mount immediately
// if(process.env.NODE_ENV==='development'){
//     console.log(process.env.NODE_ENV);
//     const devRoot=document.querySelector('#marketing-dev-root');
//     if(devRoot){ //this check is also necessary, else on container it will not work
//     mount(devRoot);
//     }
// }

//We are running through container and we should export the mont function
export {mount}