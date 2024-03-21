import { GameEngine } from "../../../src/Rooms/3/GameEngine.js";


const game = new GameEngine()

document.getElementById('startBtn').onclick = () => {
    document.getElementById('menu').style = 'display: none'
    game.run()
}