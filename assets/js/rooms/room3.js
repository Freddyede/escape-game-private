import { GameEngine } from "../../../src/Elements/Abstract/GameEngine.js";
import { EventController } from "../../../src/Elements/Controllers/EventController.js";
import {buttonHideMenu, parrallaxMethod} from "../object/rooms.js";
const gameEngine = new  GameEngine();

const timer = 60;
const timerParallaxElement = setInterval(parrallaxMethod, timer * 1000);
document.getElementById('menu_container').addEventListener('mouseenter', () => {

})

gameEngine.getDomController().setElement('roomNumber3-gameRunner');
const button = gameEngine.getDomController().getElement();
gameEngine.getDomController().setDocumentListener(button, EventController.listenerElement.click, () => buttonHideMenu(button, document.getElementById('menu_container')));