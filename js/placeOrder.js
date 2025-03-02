/**<!-------------------------------------------------------
    
    Final Project
    Written by: Karl Alvarado 6211078
    For "Internet Programming" Section 1 - Winter 2024

---------------------------------------------------------> */

// Function to validate the form inputs
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var postal = document.getElementById('postal').value;
    var phone = document.getElementById('phone').value;
    var cardNumber = document.getElementById('cardNumber').value;
    var expiry = document.getElementById('expiry').value;
    var cvv = document.getElementById('cvv').value;

    // Regular expressions
    var nameRegex = /^[A-Za-z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var postalRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    var phoneRegex = /^\d{10}$/;
    var cardNumberRegex = /^\d{16}$/;
    var expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    var cvvRegex = /^\d{3}$/;

    // Validate name
    if (!name.match(nameRegex) || name.length < 3 || name.length > 50) {
        alert('Please enter a valid name (3-50 characters, letters and spaces only).');
        return false;
    }

    // Validate email
    if (!email.match(emailRegex)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Validate address
    if (address.length < 5 || address.length > 100) {
        alert('Please enter a valid address (5-100 characters).');
        return false;
    }

    // Validate city
    if (city.length < 2 || city.length > 50) {
        alert('Please enter a valid city (2-50 characters).');
        return false;
    }

    // Validate postal code
    if (!postal.match(postalRegex)) {
        alert('Please enter a valid postal code.');
        return false;
    }

    // Validate phone number
    if (!phone.match(phoneRegex)) {
        alert('Please enter a valid phone number (10 digits).');
        return false;
    }

    // Validate card number
    if (!cardNumber.match(cardNumberRegex)) {
        alert('Please enter a valid card number (16 digits).');
        return false;
    }

    // Validate expiry date
    if (!expiry.match(expiryRegex)) {
        alert('Please enter a valid expiry date (MM/YY).');
        return false;
    }

    // Validate CVV
    if (!cvv.match(cvvRegex)) {
        alert('Please enter a valid CVV (3 digits).');
        return false;
    }

    return true;
}

// Function to place the order
function placeOrder() {
    if (!validateForm()) {
        return;
    }

    alert('Thank you for your purchase! Your order has been placed.');

    // Clear the cart
    localStorage.removeItem('cart');
    
    // Redirect the user to the home page
    window.location.href = '/pages/index.html';
}
