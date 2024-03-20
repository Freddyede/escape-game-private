export class DomModules {
    static removeElement(parent, element) {
        return document.getElementById(parent).removeChild(document.getElementById(element))
    }
    static moveElements(arrayElements) {

    }
}