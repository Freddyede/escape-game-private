import {Drawable} from "./Drawable.js";

class PoliceCar extends Drawable {

    constructor(x, y) {
        super(x, y, 'assets/img/police-car-siren-red.png', 'assets/img/police-car-siren-blue.png')
        this.isRed = true
        this.dateFrame = Date.now()
    }

    getImg() {
        if (this.dateFrame + 200 < Date.now()) {
            this.isRed = !this.isRed
            this.dateFrame = Date.now()
        }
        return this.isRed ? this.images[0] : this.images[1]
    }
}

export {PoliceCar}