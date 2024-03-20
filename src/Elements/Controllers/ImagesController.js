import {pushArrayModules, verifyIsArrayModules} from "../Utils/modules.js";
import {ArrayModules} from "../Modules/ArrayModules";

/**
 * Génération une ou plusieurs images avec comme information ses sources et ses positions initiales
 */
export class ImagesController {
    imgElement = null;
    imgElements = [];
    x = 0;
    y = 0;
    w = 0;
    h = 0;
    constructor() { }

    setImage(sources, x, y) {
        this.imgElement = new Image();
        this.imgElement.src = sources;
        this.x = x;
        this.y = y;
    }
    setWidth(width) {
        this.w = width;
    }
    getWidth() {
        return this.w;
    }

    setHeight(height) {
        this.h = height;
    }
    getHeight() {
        return this.h;
    }
    getImage() {
        return this.imgElement;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    loaded(callBack) {
        if(this.imgElements === undefined) {
            return this.imgElement.onload = () => {
                callBack();
            };
        } else {
            for (const element of this.imgElements) {
                element.sources.onload = () => {
                    callBack();
                }
            }
        }
    }

    /** WARNING: this methods return all elements directly */
    setImages(array = null) {
        let newArray = [];
        let object = {};
        if(ArrayModules.verifyIsArrayModules(array)) {
            for (const element of array) {
                let image = new ImagesController();
                image.setWidth(element.width);
                image.setHeight(element.height);
                image.setImage(element.sources, element.x, element.y)
                object = {
                    height: image.getHeight(),
                    sources: image.getImage(),
                    width: image.getWidth(),
                    x: image.getX(),
                    y: image.getY()
                }
                ArrayModules.pushArrayModules(newArray, object);
            }
        }

        this.imgElements = newArray;
    }
    getImages() {
        return this.imgElements;
    }
}