import faker from 'faker';

let products=''
const mount=(element)=>{
    for(let i=0;i<4;i++){
        const name=faker.commerce.productName();
        products+=`<div>${name}</div>`
    }
    element.innerHTML=products;
}

if(process.env.NODE_ENV==='development'){
    const element=document.querySelector('#dev-products');
    if(element){
        mount(element)
    }
}

export {mount};