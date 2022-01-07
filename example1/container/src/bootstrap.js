import {mount} from 'products/ProductsIndex';
import {mount as cartMount} from 'cart/CartShow';
console.log('Hello from contaioner')
mount(document.querySelector('#container-dev-products'));
cartMount(document.querySelector('#container-cart-dev'))