document.addEventListener('DOMContentLoaded', () => {
    const groceries = [
        { id: 1, name: 'Apples', price: 3.99 },
        { id: 2, name: 'Bananas', price: 1.29 },
        { id: 3, name: 'Carrots', price: 2.49 },
        { id: 4, name: 'Milk', price: 1.79 },
        { id: 5, name: 'Bread', price: 2.89 }
    ];

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartDiv = document.getElementById('cart-items');

    if (cartItems.length === 0) {
        cartDiv.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    const cartProducts = groceries.filter(g => cartItems.find(i => i.id === g.id));
    cartProducts.forEach(product => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button class="remove" onclick="removeFromCart(${product.id})">Remove</button>
        `;
        cartDiv.appendChild(div);
    });
});

function removeFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();
}

document.getElementById('proceed-to-checkout').addEventListener('click', () => {
    window.location.href = 'checkout.html';
});
