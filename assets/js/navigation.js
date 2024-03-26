import {stopeSoudRoom0} from './dialog.js';
document.addEventListener("DOMContentLoaded", function () {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const rooms = document.querySelectorAll(".room");
    let currentRoomIndex = 0;

    // Désactiver le scroll
    document.body.style.overflow = "hidden";

    // Afficher la première salle au chargement de la page
    rooms[currentRoomIndex].style.display = "block";

    // Aller à la salle suivante
    function showNextRoom() {
        rooms[currentRoomIndex].style.display = "none";
        currentRoomIndex = (currentRoomIndex + 1) % rooms.length;
        rooms[currentRoomIndex].style.display = "block";
        window.scrollTo(0, rooms[currentRoomIndex].offsetTop);
        // stop the soud in room0
        if(currentRoomIndex == 1 || currentRoomIndex == 6){
           stopeSoudRoom0(false)
        }
    }

    // Aller à la salle précédente
    function showPreviousRoom() {
        rooms[currentRoomIndex].style.display = "none";
        currentRoomIndex = (currentRoomIndex - 1 + rooms.length) % rooms.length;
        rooms[currentRoomIndex].style.display = "block";
        window.scrollTo(0, rooms[currentRoomIndex].offsetTop);
        // stop the soud in room0
        if(currentRoomIndex == 1 || currentRoomIndex == 6){
            stopeSoudRoom0(false)
        }
    }
    prevBtn.addEventListener("click", showPreviousRoom);
    nextBtn.addEventListener("click", showNextRoom);
});