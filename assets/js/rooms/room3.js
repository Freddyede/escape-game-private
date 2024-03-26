import { draw } from "../../../src/Rooms/3/GameEngine.js";

document.getElementById('startBtn').onclick = () => {
    document.getElementById('menuRoom3').classList.add('hide');
    draw();
}