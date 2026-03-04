// ---------- webhook.js ----------
// Sends order data to Google Apps Script Web App

const webhookURL =
  "https://script.google.com/macros/s/AKfycbwefJXZo1L04VAKpf33ucuJ1V5yWg2omi-BLCXniQKIKEk0S0l0MJ0R-zrOzCAMxmyOeQ/exec";

function sendOrderToWebhook(orderData) {
  return fetch(webhookURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status !== "success")
        throw new Error(data.message || "Webhook failed");
      alert("✅ Order placed successfully!");
      return data;
    })
    .catch((err) => {
      console.error("Webhook error:", err);
      alert("❌ There was a problem placing your order. Check console.");
      throw err;
    });
}
