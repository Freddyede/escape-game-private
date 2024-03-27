import { stopeSoudRoom0 } from "./dialog.js";

document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const rooms = document.querySelectorAll(".room");
  let currentRoomIndex = 0;

  // Désactiver le scroll
  document.body.style.overflow = "hidden";

  // Afficher la première salle au chargement de la page
  rooms[currentRoomIndex].style.display = "block";

  function showNextRoom() {
    rooms[currentRoomIndex].style.display = "none";
    currentRoomIndex++;

    // Limiter la navigation entre les index 1 et 3
    if (currentRoomIndex > 3) {
      currentRoomIndex = 1;
    }

    rooms[currentRoomIndex].style.display = "block";
    window.scrollTo(0, rooms[currentRoomIndex].offsetTop);

    // Stopper le son dans la salle 0 si nécessaire
    if (currentRoomIndex == 1 || currentRoomIndex == 6) {
      stopeSoudRoom0(false);
    }

    updateButtonStates();
  }

  function showPreviousRoom() {
    rooms[currentRoomIndex].style.display = "none";
    currentRoomIndex--;

    // Limiter la navigation entre les index 1 et 3
    if (currentRoomIndex < 1) {
      currentRoomIndex = 3;
    }

    rooms[currentRoomIndex].style.display = "block";
    window.scrollTo(0, rooms[currentRoomIndex].offsetTop);

    // Stopper le son dans la salle 0 si nécessaire
    if (currentRoomIndex == 1 || currentRoomIndex == 6) {
      stopeSoudRoom0(false);
    }

    updateButtonStates();
  }

  function updateButtonStates() {
    prevBtn.disabled = currentRoomIndex === 1;
    nextBtn.disabled = currentRoomIndex === 3;
  }

  prevBtn.addEventListener("click", showPreviousRoom);
  nextBtn.addEventListener("click", showNextRoom);

  updateButtonStates();
});
