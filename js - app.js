document.addEventListener('DOMContentLoaded', () => {
    const groceries = [
        { id: 1, name: 'Apples', price: 3.99 },
        { id: 2, name: 'Bananas', price: 1.29 },
        { id: 3, name: 'Carrots', price: 2.49 },
        { id: 4, name: 'Milk', price: 1.79 },
        { id: 5, name: 'Bread', price: 2.89 }
    ];

    const groceryList = document.getElementById('grocery-list');
    groceries.forEach(item => {
        const div = document.createElement('div');
        div.className = 'grocery-item';
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price.toFixed(2)}</p>
            <button onclick="addToCart(${item.id})">Add to Cart</button>
        `;
        groceryList.appendChild(div);
    });
});

function addToCart(id) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemExists = cart.find(item => item.id === id);

    if (!itemExists) {
        cart.push({ id });
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}
