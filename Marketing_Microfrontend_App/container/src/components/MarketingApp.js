import {mount} from 'marketing/MarketingApp';
import React,{useRef,useEffect} from 'react';

export default ()=>{
    const marketRef=useRef(null);
    useEffect(()=>{
        mount(marketRef.current)
    })
    return(
        <div ref={marketRef}/>
    )
}