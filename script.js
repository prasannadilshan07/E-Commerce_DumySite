let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;

  document.getElementById("cart-count").innerText = cart.length;
  document.getElementById("cart-total").innerText = total;
}
