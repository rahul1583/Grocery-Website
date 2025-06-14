// Function to add a product to the cart
function addToCart(productName, price) {
    // Retrieve the cart items from localStorage or initialize an empty array
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    // Create a new object for the product
    let product = {
        productName: productName,
        price: price
    };

    // Add the product to the cart
    cartItems.push(product);

    // Save the updated cart items back to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Display a confirmation message to the user (you can replace this with your own UI)
    alert('Product added to cart!');
}
