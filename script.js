import {chargeArrayKey} from "./assets/js/inventory.js";

console.log('Room1 script loaded');

let timeLeft = 30;
let currentRoom = 1;
const winningSequence = ['left', 'right', 'right', 'left'];

const timerElement = document.getElementById('timer').querySelector('span');
const resultElement = document.getElementById('result');
const door1 = document.getElementById('door1');
const door2 = document.getElementById('door2');

function updateTimer() {
    timerElement.textContent = timeLeft;
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        gameOver(false);
    }
    timeLeft--;
}

function chooseDoor(choice) {
    if (winningSequence[currentRoom - 1] === choice) {
        if (currentRoom === winningSequence.length) {
            gameOver(true);
        } else {
            resultElement.textContent = `Bonne porte ! Avancez à la pièce ${++currentRoom}...`;
            timeLeft = 30;
        }
    } else {
        gameOver(false);
    }
}

    function gameOver(isWinner) {
        clearInterval(timerInterval);
        if (isWinner) {
            resultElement.textContent = 'Vous avez traversé le labyrinthe avec succès !';
            document.querySelector('button[data-key="key1"]').classList.remove('hide');
            document.querySelector('button[data-key="key1"]').addEventListener('click', () => {
                chargeArrayKey(document.querySelector('button[data-key="key1"]'));
            });
        } else {
            resultElement.textContent = 'Mauvaise porte... Jeu terminé !';
        }
        door1.disabled = true;
        door2.disabled = true;
    }

door1.addEventListener('click', () => chooseDoor('left'));
door2.addEventListener('click', () => chooseDoor('right'));

const timerInterval = setInterval(updateTimer, 1000);
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
  
    const posX = (clientX / innerWidth) * 100;
    const posY = (clientY / innerHeight) * 100;
  
    const scene = document.querySelector('#room1');
    if (scene) {
      scene.style.perspectiveOrigin = `${posX}% ${posY}%`;
    }
  });
  
  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
  
    const posX = (clientX / innerWidth) * 100;
    const posY = (clientY / innerHeight) * 100;
  
    const scene = document.querySelector('#room1');
    if (scene) {
      scene.style.perspectiveOrigin = `${posX}% ${posY}%`;
    }
  });
  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
  
    const posX = (clientX / innerWidth) * 100;
    const posY = (clientY / innerHeight) * 100;
  
    const scene = document.querySelector('#room1');
    if (scene) {
        scene.style.perspectiveOrigin = `${posX}% ${posY}%`;
    }
  });
  
  document.addEventListener('mousemove', (e) => {
    // Calculer la position de la souris en pourcentage
    const posX = (e.clientX / window.innerWidth) * 100;
    const posY = (e.clientY / window.innerHeight) * 100;
  
    // Obtenir la ligne et la scène
    const line = document.querySelector('.line');
    const scene = document.querySelector('#room1');
  
    // Modifier la perspective en fonction de la position de la souris
    if (scene) {
        scene.style.perspectiveOrigin = `${posX}% ${posY}%`;
    }
  
    // Appliquer une animation à la ligne pour qu'elle s'étire et monte le mur
    if (line) {
        const scaleX = posX / 100; // La longueur de la ligne sera basée sur la position X de la souris
        const scaleY = posY > 50 ? (posY - 50) / 50 : 0; // Monter le mur seulement si la souris est dans la partie supérieure
        line.style.transform = `translateZ(-${posX}px) scaleX(${scaleX}) scaleY(${scaleY})`;
    }
  });
  document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
  
    const posX = (clientX / innerWidth) * 100;
    const posY = (clientY / innerHeight) * 100;
  
    const scene = document.querySelector('#room1');
    scene.style.perspectiveOrigin = `${posX}% ${posY}%`;
  });
  