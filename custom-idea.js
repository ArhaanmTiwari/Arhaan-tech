document.getElementById("ideaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch(
    "https://script.google.com/macros/s/AKfycbzJcWMTi6mbcwmkXK8MiBb6m5focULKrMgzY3Db_oiL4YLNVzS8_jBhNw84Ib3B6Ileiw/exec",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((res) => res.text())
    .then((data) => {
      alert("Your idea was sent!");
    });
});
