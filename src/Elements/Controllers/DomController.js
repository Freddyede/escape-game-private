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
        if(typeof element !== 'string'){
            this.elements = document.createElement("div");
            this.elements.setAttribute('id', element);
        } else {
            document.querySelector('#' + element);
        }
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
        this.elements.style.left = number + 'px';
        this.setPosElement(this.elements);
    }
    getPosY() {
        return this.pos.y;
    }
    setPosY(number) {
        this.elements.style.top = number + 'px';
        this.setPosElement(this.elements);
    }
    setEventListener(callBack) {
        return this.setDocumentListener(this.elements, this.listenerElement.click, callBack);
    }
}