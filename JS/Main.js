import { getTotal } from "./cart.js"

// Show Shopping cart
document.getElementById('shoppingCart').addEventListener('click', e=> {
    const shopContainer = document.getElementById('cartContainer')
    shopContainer.classList.add('active')
})
// Hide Shopping Cart
document.getElementById('exitCart').addEventListener('click', e=> {
    const shopContainer = document.getElementById('cartContainer')
    shopContainer.classList.add('inactive')
    setTimeout(() => {
        shopContainer.classList.remove('active')
        shopContainer.classList.remove('inactive')
    }, 1500);
})

getTotal()