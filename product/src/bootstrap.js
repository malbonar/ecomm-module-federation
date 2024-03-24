import './index.css';

const products = [
    'Saw',
    'Fishing Line',
    'Cord',
    'Lighting Flint',
    'Block of Salt',
    'Gaters - pair',
    'Tarpauline',
    'Bow',
    'Axe'
]

const getProducts = () => {
    let productList = '<div class="product-list-container">';

    for(let product of products) {
        productList += `<div class="product-item">${product}</div>`;
    }
    productList += '</div>';

    return productList;
}

const mount = (el) => {
    const products = getProducts();
    el.innerHTML = products;
}

if (process.env.NODE_ENV === 'development') {
    const devEl = document.querySelector('#product-list-e32w5-rtyb1-997AEf-90Ba4');
    if (devEl) {
        mount(devEl);
    }
}

export { mount }