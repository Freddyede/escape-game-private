import {GameEngine} from "../../src/Elements/Abstract/GameEngine.js";

const gameEngine = new GameEngine();
const images = [
    {
        sources: 'assets/img/police_car.png',
        x: 10,
        y: 10,
        width: 100,
        height: 200
    },
    {
        sources: 'assets/img/police-car-siren-red.png',
        x: 50,
        y: 10,
        width: 100,
        height: 200
    }
]
const canvas = document.querySelector('#canvas');
gameEngine.getCanvasController().setCanvas(canvas);
gameEngine.getCanvasController().setContext('2d');
console.log('test');
gameEngine.getCanvasController().getImagesController().setImages(images);
console.log('test2');
gameEngine.getCanvasController().getImagesController().loaded(() => {
    gameEngine.getCanvasController().loop(() => console.log('draw'));
});