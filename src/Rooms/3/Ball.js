import { ctx, opponent } from "./utils.js";

export class Ball {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.speed = 3.5;

        this.changeAngle(0);
        this.movement = 0;

    }
    changeAngle(angle) {
        if(angle === 0) angle = 1; // angle cannot be equal to 0;
        this.angle = angle;
        this.radians = this.angle / (180 * Math.PI) * 10;
        this.xunits = Math.cos(this.radians) * this.speed;
        this.yunits = Math.sin(this.radians) * this.speed;
    }
    angleTo(x, y) {
        this.changeAngle(Math.atan2(y - this.y, x - this.x));
    }
    render() {
        this.x += this.xunits;
        this.y += this.yunits;
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "white";
        this.movement += this.speed;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.save();
        ctx.shadowColor = '#999';
        ctx.shadowBlur = 20;
        ctx.shadowOffsetX = 15;
        ctx.shadowOffsetY = 15;
        ctx.strokeStyle = "purple";
        ctx.fill();
        ctx.stroke();
        ctx.restore();
        ctx.restore();
        if(this.xunits > 0) opponent.moveTo(this.ghostPath(opponent.x));

    }
    ghostPath(toX) {
        let {x, y} = this;
        while(x < toX) {
            x += this.xunits;
            y += this.yunits;
        }
        return {x, y};
    }
}
