import {mount} from 'marketing/MarketingApp';
import React,{useRef,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
export default ()=>{
    const marketRef=useRef(null);
    const history=useHistory();
    useEffect(()=>{
        const {onParentNavigate}=mount(marketRef.current,{
            initialPath:history.location.pathname,
            onNavigate:({pathname})=>{
                if(history.location.pathname!==pathname){
                    history.push(pathname);
                }
                
            }
        })
        history.listen(onParentNavigate)
    })
    return(
        <div ref={marketRef}/>
    )
}