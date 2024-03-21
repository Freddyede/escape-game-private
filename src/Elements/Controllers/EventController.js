export class EventController {
    static listenerElement = {
        click: 'click'
    }
    static listenerMouse = {
        move: 'mousemove',
        leave: 'mouseleave',
        enter: 'mouseenter'
    }
    constructor() { }
    setDocumentListener(element, eventType, callBack) {
        return element.addEventListener(eventType, callBack);
    }
}