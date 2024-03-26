import {canvas} from "./utils.js";

export class Player {
    constructor(x, y, width, height, ctx) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.ctx = ctx;
        this.speed = 4;

        this.up = false;
        this.down = false;
        this.innerColor = "rgba(0, 150, 0, .2)";
        this.outerColor = "rgba(0, 200, 0, .7)";
    }
    drawBG() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, canvas.width / 2 - 10, canvas.height);
    }
    render() {
        let ctx = this.ctx;
        this.drawBG();
        ctx.beginPath();
        ctx.fillStyle = this.innerColor;
        ctx.strokeStyle = this.outerColor;

        if (this.up) {
            if (this.y > 0) this.y -= this.speed;
        } else if (this.down) {
            if (this.y < canvas.height - 100) this.y += this.speed;
        }

        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.fill();

    }
    direction(dir) {
        switch (dir) {
            case "down":
                this.up = false;
                this.down = true;

                break;
            case "up":
                this.up = true;
                this.down = false;

                break;
        }
    }
}