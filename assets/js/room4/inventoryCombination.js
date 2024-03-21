document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".hidden-checkbox");
  const item1 = document.getElementById("item1");
  const item2 = document.getElementById("item2");
  const item3 = document.getElementById("item3");
  const broom = document.getElementById("broom");
  const broomFixed = document.getElementById("broomFixed");

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (item3.checked) {
        if (item1.checked || item2.checked) {
          alert("Mauvaise combinaison");
        } else if (item1.checked && item2.checked) {
          alert("Trop d'objets à combiner");
        }
      } else {
        if (item1.checked && item2.checked) {
          document.body.style.cursor = "default";
          broom.style.display = "none";
          broomFixed.style.display = "block";
        } else {
          document.body.style.cursor = "default";
          broom.style.display = "block";
          broomFixed.style.display = "none";
        }
      }
    });
  });
});
