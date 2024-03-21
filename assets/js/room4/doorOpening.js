document.addEventListener("DOMContentLoaded", function () {
  const item3Checkbox = document.getElementById("item3");
  const doorRoom4 = document.querySelector(".doorRoom4");
  const broom = document.getElementById("broom");

  item3Checkbox.addEventListener("change", function () {
    if (this.checked) {
      doorRoom4.style.display = "none";
      broom.style.display = "block";
    } else {
      doorRoom4.style.display = "block";
      broom.style.display = "none";
    }
  });
});
