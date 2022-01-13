import React from 'react';
import ReactDOM from 'react-dom';
import {createMemoryHistory, createBrowserHistory} from 'history';
import App from './App';
//Mount function to start the app
const mount=(element,{onNavigate,defaultHistory,initialPath})=>{
   //console.log(onNavigate);
    const history=defaultHistory||createMemoryHistory({
        initialEntries:[initialPath]
    });
    
    if(onNavigate)
    {
        history.listen(onNavigate)
    }
    ReactDOM.render(
       <App history={history}/>,
        element
    );
    return{
        onParentNavigate({pathname:nextPathName}){
            const pathname=history.location;
            if(pathname!==nextPathName){
                history.push(nextPathName)
            }
            
        }
    }
};

//If we are in development or in isolation, call mount immediately
if(process.env.NODE_ENV==='development'){
    const devRoot=document.querySelector('#marketing-dev-root');
    if(devRoot){ //this check is also necessary, else on container it will not work
    mount(devRoot,{defaultHistory:createBrowserHistory()});
    }
}

//We are running through container and we should export the mont function
export {mount}