document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".hidden-checkbox");
  const item1 = document.getElementById("item1");
  const item2 = document.getElementById("item2");
  const broom = document.getElementById("broom");
  const broomFixed = document.getElementById("broomFixed");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (item1.checked && item2.checked) {
        broom.style.display = "none";
        broomFixed.style.display = "block";
      } else {
        broom.style.display = "block";
        broomFixed.style.display = "none";
      }
    });
  });
});
