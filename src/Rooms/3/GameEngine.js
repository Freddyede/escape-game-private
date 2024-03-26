import { player } from "./utils.js";
import { opponent } from "./utils.js";
import { ball } from "./utils.js";
import { check_for_collisions } from "./utils.js";
import { draw_scores } from "./utils.js";
import { drawBG } from "./utils.js";
import { draw_center_line } from "./utils.js";
import { ctx } from "./utils.js";

export function draw() {
    drawBG(ctx);
    draw_center_line(ctx);
    // render player
    player.render();
    // render opponent
    opponent.render();
    ball.render();
    check_for_collisions();
    draw_scores(ctx);
    if(!draw_scores(ctx)){
        requestAnimationFrame(draw);
    }else {
        return true;
    }
}