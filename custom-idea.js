document.getElementById("ideaForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch(
    "https://script.google.com/macros/s/AKfycby01TDtQS6XKQZtL1UVd8t5hv1JQjJ2L67GhL0SZnIMHjnEtGHgSzxPa1gXoYPFsqaakw/exec?",
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
