import { mount } from 'products/ProductsIndex';
import { mount as cartMount } from 'shoppingcart/Cart';


console.log('from container');

mount(document.querySelector('#product-list'));
cartMount(document.querySelector('#cart'));