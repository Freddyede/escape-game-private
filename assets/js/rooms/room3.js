import * as Room3 from "./modules/Room3Modules.js";
import {CanvasModules} from "./modules/Room3Modules.js";



const gameEngine = new  Room3.GameEngine();

gameEngine.getDomController().setElement('roomNumber3-gameRunner');
const button = gameEngine.getDomController().getElement();
gameEngine.getDomController().setDocumentListener(button, Room3.EventController.listenerElement.click, () => Room3.buttonHideMenu(button, document.getElementById('menu_container')));
const canvas = document.querySelector('#containerCanvas');
gameEngine.getCanvasController().getImagesController().setImage('assets/img/pngegg.png', 120, 78);
const images = gameEngine.getCanvasController().getImagesController().getImage();
CanvasModules.init({
    element: canvas,
    source: 'assets/img/pngegg.png',
    pos: {
        x: 120,
        y: 78
    }
}, () => {
    document.addEventListener('keydown', e => {
        if(e.code === 'ArrowRight') {
            console.log(images.x);
        }
    })
});