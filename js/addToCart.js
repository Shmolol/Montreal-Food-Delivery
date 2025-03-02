/**<!-------------------------------------------------------
    
    Final Project
    Written by: Karl Alvarado 6211078
    For "Internet Programming" Section 1 - Winter 2024

---------------------------------------------------------> */

function addToCart(id, name, price, image) {
    // Retrieve existing cart items from local storage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if the item is already in the cart
    let existingItem = cartItems.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ id, name, price, image, quantity: 1 });
    }
    // Save the updated cart items to local storage
    localStorage.setItem('cart', JSON.stringify(cartItems));

    // Update cart count span
    updateCartCount();
}

function getCartItems() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Function to update the cart count span
function updateCartCount() {
    var cartCountSpan = document.getElementById('cart-count')
    var cartItemCount = getCartItemCount();
    cartCountSpan.innerHTML = cartItemCount;
}

// function to get the total number of items in the cart
function getCartItemCount() {
    // Check if there are items stored in local storage
    if (localStorage.getItem('cart')) {
        // Parse the JSON string from local storage
        var cartItems = JSON.parse(localStorage.getItem('cart'));

        //total count of items
        var totalCount = 0;
        // Loop  and increment count
        for (var i = 0; i < cartItems.length; i++) {
            totalCount += cartItems[i].quantity;
        }

        return totalCount;
    } else {
        return 0;
    }
}

function goToCart() {
    window.location.href = 'cart.html';
}

document.addEventListener('DOMContentLoaded', function () {
    updateCartCount();
});