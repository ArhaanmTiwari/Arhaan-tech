console.log("Webhook JS Loaded");

async function placeOrder() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  const order = "ORD" + Date.now();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const items = cart.map((item) => item.name).join(", ");
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const params = new URLSearchParams({
    order,
    name,
    phone,
    address,
    items,
    total,
  });

  const url =
    "https://script.google.com/macros/s/AKfycbyK1HuSkxEsUDj2mEqE_X98e_s9mmHivcILEm3g5UTrUOAtcNFK7EZEoiBb3hPcQ_MGuQ/exec?" +
    params.toString();

  // 🔥 IMPORTANT: fetch only, no redirect
  await fetch(url);

  localStorage.removeItem("cart");

  window.location.href = "success.html?order=" + order;
}
