let cart = [];

function addProduct(name, price, quantity) {
  let product = { name, price, quantity };
  cart.push(product);
}

function removeProduct(name) {
  cart = cart.filter(product => product.name !== name);
}

function calculateTotal() {
  let total = cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  console.log(`Total Price: $${total.toFixed(2)}`);
}

// Test the functions
addProduct('Apple', 1.2, 3);
addProduct('Banana', 0.8, 5);
addProduct('Orange', 1.5, 2);
calculateTotal();
removeProduct('Banana');
calculateTotal();
