import { GameEngine } from "../../../src/Rooms/3/GameEngine.js";


const game = new GameEngine()

document.getElementById('startBtn').onclick = () => {
    document.getElementById('menuRoom3').style = 'display: none'
    game.run()
}