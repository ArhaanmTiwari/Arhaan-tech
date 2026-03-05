console.log("Webhook JS Loaded");

async function placeOrder() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const items = cart.map((item) => item.name).join(", ");
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const params = new URLSearchParams({
    name,
    phone,
    address,
    items,
    total,
  });

  const url =
    "https://script.google.com/macros/s/AKfycbyCftnZFr4ZANU9_JHPHHfSap6k4BLHjUGrONLeXFOuJq0Su6HvEe04dWAP2MonQp0shA/exec?" +
    params.toString();

  // 🔥 IMPORTANT: fetch only, no redirect
  await fetch(url);

  alert("Order placed successfully!");

  localStorage.removeItem("cart");
  window.location.href = "index.html";
}
