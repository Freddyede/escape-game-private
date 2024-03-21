import { EventController } from './EventController.js'
import { DomModules } from "../Modules/DomModules.js";
/**
 * Parent of all other object secondary classes
 */
export class DomController extends EventController {
    elements;
    pos = {};
    constructor() { super(); }
    getPosX() {
        return this.pos.x;
    }
    getElement() {
        return this.elements;
    }
    setElement(element) {
        this.elements = document.getElementById(element);
    }
    setPosElement(element) {
        this.pos = {
            x: element.getBoundingClientRect().left + window.scrollX,
            y: element.getBoundingClientRect().top + window.screenY
        }
    }

    removeElementFromDom(target, element) {
        return DomModules.removeElement(target, element);
    }

    setPosX(number) {
        this.elements.style.left = number + window.scrollX + 'px';
        this.setPosElement(this.elements);
    }
    getPosY() {
        return this.pos.y;
    }
    setPosY(number) {
        this.elements.style.top = number + 'px';
        this.setPosElement(this.elements);
    }
}