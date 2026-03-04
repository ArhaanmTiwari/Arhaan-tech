console.log("Webhook JS Loaded");

async function placeOrder() {
  console.log("Place order clicked");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  const orderData = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    items: cart.map((item) => item.name).join(", "),
    total: cart.reduce((sum, item) => sum + item.price, 0),
  };

  console.log("Sending:", orderData);

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzRTTwH-J7tjxKd2MoQOhWVgtt4zoC2mcxnJ-K_EWJJKZyWySlT67K2IpjDqPoEF3bDsw/exec",
      {
        method: "POST",
        body: JSON.stringify(orderData),
      }
    );

    const result = await response.text();
    console.log("Server response:", result);

    alert("Order placed successfully!");

    localStorage.removeItem("cart");
    window.location.href = "index.html";
  } catch (error) {
    console.error("Error:", error);
    alert("Error placing order");
  }
}
