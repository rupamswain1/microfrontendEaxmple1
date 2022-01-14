import {mount} from 'auth/AuthApp';
import React,{ useEffect,useRef } from 'react';
import {useHistory} from 'react-router-dom';

export default ({onSignIn})=>{
    const authRef=useRef(null);
    const history=useHistory();
   
    useEffect(()=>{
        const {onParentNavigate}=mount(authRef.current,{
            initialPath: history.location.pathname,
            onNavigate:({pathname})=>{
                if(history.location.pathname!==pathname){
                    history.push(pathname)
                }
            },
            onSignIn
            
        },
        
        )
        history.listen(onParentNavigate)
    })

    return(
        <div ref={authRef}/>
    )
}