let cart = [];

// ADD TO CART
function addToCart(name, price) {
  let item = cart.find(i => i.name === name);

  if (item) {
    item.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  renderCart();
}

//Remove cart by X //
function toggleCart() {
  document.getElementById("cart").classList.toggle("active");
}

// REMOVE SINGLE ITEM
function removeItem(index) {
  cart.splice(index, 1);
  renderCart();
}

// CLEAR CART
function clearCart() {
  cart = [];
  renderCart();
}

// PLACE ORDER
function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Your order is confirmed! Delivery with in 15 minutes 🚀 (Thank You)");

  cart = [];
  renderCart();
}

// RENDER CART
function renderCart() {
  const list = document.getElementById("cart-items");
  const totalEl = document.getElementById("total");
  const headerEl = document.getElementById("total-header");
  const countEl = document.getElementById("count");
  const orderBtn = document.getElementById("orderBtn");

  list.innerHTML = "";

  let total = 0;
  let count = 0;

  cart.forEach((item, index) => {
    let itemTotal = item.price * item.qty;

    total += itemTotal;
    count += item.qty;

    const li = document.createElement("li");

    li.innerHTML = `
      ${item.qty} ${item.name} = ₹${itemTotal}
      <button onclick="removeItem(${index})">❌</button>
    `;

    list.appendChild(li);
  });

  totalEl.innerText = total;
  headerEl.innerText = total;
  countEl.innerText = count;

  orderBtn.style.display = cart.length > 0 ? "block" : "none";
}

// CART TOGGLE
function toggleCart() {
  document.getElementById("cart").classList.toggle("active");
}

/* ⭐ HEADER SCROLL LOGIC (IMPORTANT) */
window.addEventListener("DOMContentLoaded", () => {

  const header = document.getElementById("mainHeader");
  const cards = document.querySelectorAll(".card");

  window.addEventListener("scroll", () => {

    if (cards.length < 10) return;

    const tenthCard = cards[9];
    const position = tenthCard.getBoundingClientRect().top;

    if (position < 0) {
      header.classList.add("after-scroll");
    } else {
      header.classList.remove("after-scroll");
    }

  });

});