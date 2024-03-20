import { ImagesController } from "./ImagesController.js";
import { CanvasModules } from "../Modules/CanvasModules.js";

export class CanvasController {
    imagesController;
    canvas = null;
    context = null;
    constructor() {
        this.imagesController = new ImagesController();
    }
    getImagesController() {
        return this.imagesController;
    }

    getCanvas() {
        return this.canvas;
    }

    setCanvas(element) {
        this.canvas = element;
    }

    setCanvasClassName(classValue) {
        return this.canvas.classList.add('canvasElement', ...classValue);
    }

    setContext(contextType) {
        this.context = this.canvas.getContext(contextType);
    }
    draw() {
        CanvasModules.drawImages(this.context, this.canvas, this.imagesController);
    }
    loop(callBack) {
        callBack();
        this.draw();
        requestAnimationFrame(() => this.loop);
    }

    setImagesItem(sources, x, y) {
        this.getImagesController().setImage(sources, x, y);
        return this.getImagesController().getImage();
    }
}