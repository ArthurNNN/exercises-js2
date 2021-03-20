/*
E-commerce

You have to create an e-commerce shopping cart

First of all we need 2 arrays, 
the list of available products and the list of products introduced in the shopping cart.

1. Fill the products list with at least 4 products, what attributes de we have? 
at least should have:
var product = {
  id:
  name:
  price:
  stock:
}
id is a unique number that identifies each product

3. Create a function addToShoppingCart to add a product to the shopping cart list giving the product id,
the function will add the product to the selectedProduct list, and add the price to the totalPrice

4. Create the function removeFrom ShoppingCart to remove a product that a client does not like anymore

5. Create the function shop, the function will empty the list and set 0 in the totalPrice of the shopping cart
In addition will substract 1 in the product stock of bought products

6. If there is not enough stock, the product cannot be added to the shopping cart
*/

var products = [];

var product1 = {
  id: 101,
  name: "Toaster X56 Plus",
  price: 12.98,
  stock: 10
};
var product2 = {
  id: 202,
  name: "Watch Rocker",
  price: 9.99,
  stock: 10
};
var product3 = {
  id: 203,
  name: "Samsung Galaxy S21",
  price: 1099,
  stock: 10
};
var product4 = {
  id: 204,
  name: "Apple Watch 6",
  price: 449,
  stock: 10
};
var product5 = {
  id: 205,
  name: "Nokia 3310",
  price: 5,
  stock: 10
};


products.push(product1);
products.push(product2);
products.push(product3);
products.push(product4);
products.push(product5);

var shoppingCart = {
  totalPrice: 0,
  selectedProducts: []
};

function addToShoppingCart(id) {
  for (let index in products) {
    if (products[index].id === id) {
      shoppingCart.selectedProducts.push(products[index]);
      shoppingCart.totalPrice += products[index].price;
      return;
    }
  }
}

function removeFromShoppingCart(id) {
  for (let indexS in shoppingCart.selectedProducts) {
    for (let indexP in products) {
      if (shoppingCart.selectedProducts[indexS].id === products[indexP].id) {
        shoppingCart.selectedProducts.splice(indexS, 1);
        shoppingCart.totalPrice -= products[indexP].price;
        return;
      }
    }
  }
}

function shop() {
  for (let indexS in shoppingCart.selectedProducts) {
    for (let indexP in products) {
      if (shoppingCart.selectedProducts[indexS].id === products[indexP].id) {
        products[indexP].stock--;
      }
    }
  }
  shoppingCart.selectedProducts = [];
  shoppingCart.totalPrice = 0;
}

//results
addToShoppingCart(101);
console.log("Step 1");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));
console.log('Shopping cart:');
console.table(shoppingCart.selectedProducts);
addToShoppingCart(202);
console.log("Step 2");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));
console.log('Shopping cart:')
console.table(shoppingCart.selectedProducts);
addToShoppingCart(204);
console.log("Step 3");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));
console.log('Shopping cart:')
console.table(shoppingCart.selectedProducts);
removeFromShoppingCart(202);
console.log("Step 4");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));
console.log('Shopping cart:')
console.table(shoppingCart.selectedProducts);
shop();
console.log("Step 5");
console.log("Total Price = " + shoppingCart.totalPrice);
console.log("Number of Elements = " + shoppingCart.selectedProducts.length);
console.log("Name of Elements = " + shoppingCart.selectedProducts.map(p => p.name));
console.log('Products in the stock after purchase:')
console.table(products);