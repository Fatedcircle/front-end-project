// Simulate a product database
const products = [
    { id: 1, name: "Product 1", price: 19.99 },
    { id: 2, name: "Product 2", price: 29.99 },
];

// Initialize the cart
const cart = [];

// Get DOM elements
const cartList = document.getElementById("cart");
const totalElement = document.getElementById("total");

// Add an update button to the cart section
const updateButton = document.createElement("button");
updateButton.textContent = "Update Cart";
updateButton.addEventListener("click", () => {
    updateCart();
});
document.querySelector("aside").appendChild(updateButton);

// Add click event listeners to "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productId = button.getAttribute("data-product");
        const product = products.find(p => p.id == productId);

        if (product) {
            cart.push(product);
            updateCart();
        }
    });
});

// Function to remove an item from the cart
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id == productId);

    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

// Add click event listener to checkout button
// document.getElementById("checkout").addEventListener("click", () => {
//     alert("Thank you for your purchase!");
//     cart.length = 0; // Clear the cart
//     updateCart();
// });

// Update the cart and total
function updateCart() {
    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button class="remove" data-product="${item.id}">Remove</button>
        `;
        cartList.appendChild(listItem);
        total += item.price;
    });

    totalElement.textContent = `$${total.toFixed(2)}`;

    // Add click event listeners to "Remove" buttons in the cart
    const removeButtons = document.querySelectorAll(".remove");
    removeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productId = button.getAttribute("data-product");
            removeFromCart(productId);
        });
    });
}

