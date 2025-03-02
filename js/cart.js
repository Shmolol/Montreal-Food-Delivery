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
    var cartCountSpan = document.getElementById('cart-count');
    var cartItemCount = getCartItemCount();
    cartCountSpan.innerText = cartItemCount;
}

// function to get the total number of items in the cart
function getCartItemCount() {
    // Check if there are items stored in local storage
    if (localStorage.getItem('cart')) {
        // Parse the JSON string from local storage
        var cartItems = JSON.parse(localStorage.getItem('cart'));
        var totalCount = 0;
        for (var i = 0; i < cartItems.length; i++) {
            totalCount += cartItems[i].quantity;
        }
        return totalCount;
    } else {
        return 0;
    }
}

// Function that runs upon page loading
document.addEventListener('DOMContentLoaded', function () {
    let cartItems = getCartItems();
    let tableBody = document.getElementById('summary');

    cartItems.forEach(item => {
        let row = tableBody.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = item.name;
        cell2.innerHTML = item.quantity;
        cell3.innerHTML = item.price;
    });

    // Calculate total cost
    let totalCost = cartItems.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);

    // Add a row for total cost
    let totalRow = tableBody.insertRow(-1);
    let totalCell1 = totalRow.insertCell(0);
    let totalCell2 = totalRow.insertCell(1);
    totalCell1.colSpan = 2;
    totalCell1.innerHTML = 'Total';
    totalCell2.innerHTML = '$' + totalCost.toFixed(2);

    updateCartCount();
});
