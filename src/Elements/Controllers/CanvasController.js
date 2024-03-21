import { ImagesController } from "./ImagesController.js";
import { CanvasModules } from "../Modules/CanvasModules.js";

/**
 * Récupération d'un canvas
 * TODO call RatioImagesModules => En fonction de la position de l'image set la width et la height de l'image
 */
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
        return CanvasModules.drawImages(this.context, this.canvas, this.getImagesController());
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