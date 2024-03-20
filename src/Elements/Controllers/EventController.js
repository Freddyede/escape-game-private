export class EventController {
    listenerElement = {
        click: 'click'
    }
    listenerMouse = {
        move: 'mousemove',
        leave: 'mouseleave',
        enter: 'mouseenter'
    }
    constructor() { }
    setDocumentListener(element, eventType, callBack) {
        return element.addEventListener(eventType, callBack);
    }
}