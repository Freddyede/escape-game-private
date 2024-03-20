//import { dialog } from './room2-module.js';
document.addEventListener("DOMContentLoaded", function () {
const coffre1 = document.getElementById("coffre1");
const coffre2 = document.getElementById("coffre2");
const parchemin = document.getElementById("parchemin");
const item2 = document.querySelector(".inventory-item.item2");
const key = document.getElementById("key");
const serrure = document.getElementById("serrure");
const detracor = document.getElementById("detracor");
const armoire = document.getElementById("armoire");
const safe = document.getElementById("safe");
const success = document.getElementById("success");
const game_over = document.getElementById("game_over");
const sound_game_over = document.getElementById("sound_game_over");
const sound_success = document.getElementById("sound_success");
const btn_key = document.getElementById("btn_key");
const btn_restart = document.getElementById("btn_restart");
const room2dialog = document.getElementById('room2Dialog');
const dialogH3 = document.getElementById('dialogH3');
const dialogP = document.getElementById('dialogP');
const closeDialog = document.getElementById('closeDialog');


let isParchemin = false
let isKey = false

// saisir le code pour ouvrir le coffre
coffre1.addEventListener("click", function () {
    const key = prompt("Veuiller saisir le code svp! ")

    if(key == 687){
        coffre1.style.visibility = "hidden";
        coffre2.style.visibility = "visible";
        parchemin.style.visibility = "visible";
    }else {
        dialog('flex', "Code incorrect !", "Votre Cle n'est pas correcte!")
    }
});


// recuperer le parchemin
parchemin.addEventListener("click", function () {
    isParchemin = true
});


// recuperer la cle
key.addEventListener("click", function () {
    if(!isParchemin){
        dialog('flex', "Parchemin abscent !", "Veuillez recuperer le parchemin avant svp!")
     }else {
        key.style.visibility = "hidden";
        btn_key.style.display = "inline-block"
        isKey = true
     } 
});

//sauve qui peut hh
serrure.addEventListener("click", function () {
    if(!isParchemin){
       dialog('flex', "Parchemin abscent !", "Veuillez recuperer le parchemin avant svp!")
     }else if(!isKey){
        dialog('flex', "La cle est abscente !", "Veuillez recuperer la cle avant svp!")
         
     }else {
         sound_success.play()
         success.style.visibility = "visible";
         btn_key.style.display = "none"
     }
});


// au click sur l'armoir (game over)
armoire.addEventListener("click", function () {
    detracor.style.visibility = "visible" ;
    detracor.style.animation = "avancerEtGrandir 6s ease-in-out forwards"
    armoire.style.visibility = "hidden";
    safe.style.visibility = "hidden";
    sound_game_over.play()
    
    setTimeout(() => {
        detracor.style.visibility = "hidden"
        game_over.style.visibility = "visible"
        btn_restart.style.visibility = "visible"
      }, "2000");
});

// rejouer
btn_restart.addEventListener("click", function () {
    isParchemin = false
    isKey = false
    game_over.style.visibility = "hidden"
    armoire.style.visibility = "visible";
    btn_restart.style.visibility = "hidden"
    sound_game_over.pause()
    btn_key.style.visibility = "hidden"
    coffre1.style.visibility = "visible";
    coffre2.style.visibility = "hidden";
    parchemin.style.visibility = "hidden";
    key.style.visibility = "visible";
    item2.style.display = "none"
    safe.style.visibility = "visible";
});

// fermer la boite de dialogue
closeDialog.addEventListener("click", function () {
    dialog("none", "", "")
});


function dialog(display, textH3, textP) {
    room2dialog.style.display = display;

    if(display != "none"){
        dialogH3.textContent = textH3
        dialogP.textContent = textP
    }
}

});