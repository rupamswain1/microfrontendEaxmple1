import faker from 'faker';


const mount=(element)=>{
    const cartItems=`<div>You have ${faker.random.number()} items in your cart</div>`
    element.innerHTML=cartItems;
}

if(process.env.NODE_ENV==='development'){
    const element=document.querySelector('#cart-dev');
    if(element){
        mount(element);
    }
}
//
export {mount}