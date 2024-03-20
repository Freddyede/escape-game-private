import { DomController } from "../Controllers/DomController.js";
import { CanvasController } from "../Controllers/CanvasController.js";
import { Timer } from "../Utils/Timer.js";

export class GameEngine {
    domController;
    canvasController;
    timer;
    constructor() {
        this.domController = new DomController();
        this.canvasController = new CanvasController();
        this.timer = new Timer()
    }
    getDomController() {
        return this.domController;
    }
    getCanvasController() {
        return this.canvasController;
    }
    getTimer() {
        return this.timer;
    }
    setTimer(secondsTimes, elementChrono) {
        return this.timer.setTimer(secondsTimes, elementChrono);
    }
}