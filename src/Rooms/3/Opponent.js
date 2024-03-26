import {canvas} from "./utils.js";
import {Player} from "./Player.js";

export class Opponent extends Player {
    constructor(x, y, width, height, ctx, innerColor, outerColor) {
        super(x, y, width, height, ctx);
        this.innerColor = innerColor;
        this.outerColor = outerColor;
        this.count = 0;
    }
    drawBG() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(canvas.width / 2 + 10, 0, canvas.width / 2, canvas.height);
    }
    moveTo(y) {
        //Opponent AI
        //Every second step there is a 50% chance of a much smaller
        //Move towards the intersection of the ball
        //On the Y axis.
        if(y > 0 && y < canvas.height) {
            let step = (this.y - (y - this.height / 12)) / this.speed/12;
            if(this.count % 2) (Math.random() > .5) ? this.y -= step : this.y -= step / 4;
            this.count++;
        }
    }
}
