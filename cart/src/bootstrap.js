import './index.css';

const displayCartText = () => {
    let itemCount = Math.floor(Math.random() * 6) + 1;
    return `Your cart contains ${itemCount} items`;
}

const buildElement = () => {  
    let element = '<div class="cart-container">';  
    element += '<p class="cart-feedback">';
    element += displayCartText();
    element += '</p></div>';

    return element;
}

const mount = (el) => {
    if (el) {
        el.innerHTML = buildElement();
    }
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#cart-3802a-5fha0-kkt6l-bz7n4');
    if (el) {
        mount(el);
    }
}

export { mount };