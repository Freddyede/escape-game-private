import {chargeArrayKey} from "./assets/js/inventory.js";

class RoomGame {
    constructor(roomElement) {
        this.roomElement = roomElement;
        this.playerChoices = [];
        this.winningSequence = ['left', 'right', 'right', 'left']; // correspond au tableau des rooms [l,r,r,l] === []
        this.buttonDoors = [
            this.roomElement.querySelector('#door1 button'),
            this.roomElement.querySelector('#door2 button')
        ];
        this.resultElement = document.querySelector('#result');
        this.initGame();
    }
    initGame() {
        console.log('Initialisation du jeu...');// [{}] [1, 2, 3] => 1, 2, 3 => HTML
        for (let i = 0; i < this.buttonDoors.length; i++) {
            this.buttonDoors[i].addEventListener(
                'click',
                () => this.chooseDoor(this.buttonDoors[i].getAttribute('data-doors'))
            );
        }
        this.roomElement.addEventListener('mousemove', e => this.adjustPerspective(e))
    }
    chooseDoor(choice) {
        if(this.playerChoices.length <= 3) {
            this.playerChoices.push(choice);
            const copyPlayer = this.playerChoices;
            let count = 0;
            for (let i = 0; i < this.playerChoices.length; i++) {
                count = i+1;
            }
            if(copyPlayer.length === this.winningSequence.length) {
                for (let i = 0; i < copyPlayer.length; i++) {
                    if(copyPlayer[i] === this.winningSequence[i]){
                        this.#winningGame();
                    } else {
                        this.#gameOver();
                    }
                }
                for (let i = 0; i < this.buttonDoors.length; i++) {
                    this.buttonDoors[i].removeEventListener('click', () => this.chooseDoor(this.buttonDoors[i].getAttribute('data-doors')));
                }
            } else {
                this.resultElement.textContent = `Bon choix Veuillez avancer à la porte ${count}`;
            }
        }
    }

    #winningGame() {
        this.resultElement.textContent = null;
        this.resultElement.textContent = 'Bien jouer vous avez finis le labyrinth';
        return chargeArrayKey(this.roomElement.querySelector('.room-key[data-key="key1"]'));
    }
    #gameOver() {
        this.resultElement.innerHTML = 'Mauvaise séquence... Jeu terminé !';
        setTimeout(() =>this.roomElement.style.zIndex = 0, 2000);
        setTimeout(() => window.location.reload(), 2001);
    }

    adjustPerspective(e) {
        const rect = this.roomElement.getBoundingClientRect();
        const posX = ((e.clientX - rect.left) / rect.width) * 100;
        const posY = ((e.clientY - rect.top) / rect.height) * 100;
        this.roomElement.style.perspectiveOrigin = `${posX}% ${posY}%`;
    }
}

new RoomGame(document.querySelector('#room1'));