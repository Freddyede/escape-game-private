import {chargeArrayKey} from "../../../assets/js/inventory.js";
import { Ball } from "./Ball.js";
import { Player } from "./Player.js";
import { Opponent } from "./Opponent.js";

export const canvas = document.querySelector('#gameRoom3');
export const ctx = canvas.getContext('2d');

function adjust_for_dpi(canvas_ele) {
    canvas_ele.style.width = "100%";
    canvas_ele.style.height = "100%";

    let canvas_gcs = getComputedStyle(canvas_ele);
    let canvas_css_width = canvas_gcs.getPropertyValue('width')
        .slice(0, -2);
    let canvas_css_height = canvas_gcs.getPropertyValue('height')
        .slice(0, -2);

    let dpi = window.devicePixelRatio;

    let setAttr = canvas_ele.setAttribute.bind(canvas_ele);
    setAttr('width', canvas_css_width * dpi);
    setAttr('height', canvas_css_height * dpi);

    let setCss = canvas_ele.style;
    setCss.width = canvas_css_width;
    setCss.height = canvas_css_height;
}

export function drawBG(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

export function draw_center_line(ctx) {
    let currentX = canvas.width / 2,
        currentY = 0;
    ctx.moveTo(currentX, currentY);
    let buffer = 2;
    let numberOfDashes = 30;
    let heightOfDash = canvas.height / numberOfDashes;
    for (let i = 0; i < numberOfDashes; i++) {
        currentY += heightOfDash;
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.beginPath();
        currentY += buffer;
        ctx.moveTo(currentX, currentY);
    }
}

function init_ball(ctx) {
    ctx.beginPath();
    let ball_x = canvas.width / 2;
    let ball_y = canvas.height / 2;
    let ball_radius = 5;
    ctx.arc(ball_x, ball_y, ball_radius, 0, 2 * Math.PI);
    ball = new Ball(ball_x, ball_y, ball_radius);
    ctx.fillStyle = "white";
    ctx.save();
    ctx.shadowColor = '#999';
    ctx.shadowBlur = 20;
    ctx.shadowOffsetX = 15;
    ctx.shadowOffsetY = 15;
    ctx.strokeStyle = "purple";
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

function init_paddles(ctx) {

    function draw_player() {
        ctx.beginPath();
        let paddle_x = canvas.width / 4;
        let paddle_y = canvas.height / 2 - 50;
        ctx.fillStyle = "rgba(0, 150, 0, .2)";
        ctx.strokeStyle = "rgba(0, 200, 0, .7)";
        ctx.rect(paddle_x, paddle_y, 10, 100);
        ctx.stroke();
        ctx.fill();
        player = new Player(paddle_x, paddle_y, 2, 100, ctx);
    }

    function draw_opponent() {
        ctx.beginPath();
        let paddle_x = canvas.width / 4 * 3;
        let paddle_y = canvas.height / 2 - 50;
        ctx.fillStyle = "rgba(150, 0, 0, .2)";
        ctx.strokeStyle = "rgba(200, 0, 0, .7)";
        ctx.rect(paddle_x, paddle_y, 10, 100);
        ctx.stroke();
        ctx.fill();
        opponent = new Opponent(paddle_x, paddle_y, 2, 100, ctx, "rgba(150, 0, 0, .2)", "rgba(200, 0, 0, .7)");
    }
    draw_player();
    draw_opponent();

}

function add_keys(player) {
    window.addEventListener('keydown', function(e) {
        switch (e.code) {
            case 'ArrowUp':
                player.direction('up');
                break;
            case 'ArrowDown':
                player.direction('down');
                break;
        }
    });
    window.focus();
}
function add_touch(player) {

    document.addEventListener('touchstart', (e) => {
        touch_variables.yStart = e.touches[0].clientY;
    })
    document.addEventListener('touchmove', (e) => {


        player.y += (e.touches[0].clientY - touch_variables.yStart)/5;


    });
}
export function draw_scores(ctx) {
    ctx.fillStyle = "white";
    ctx.fillText("Player: " + player_points, 20, 30);
    ctx.fillText("Opponent: " + opponent_points, canvas.width - 100, 30);
    if(opponent_points === 5) {
        document.querySelector('#titleMenu').textContent = 'LOOOOOOOOOSEEEEEEERRRR !!!';
        document.getElementById('menuRoom3').classList.remove('hide');
        document.getElementById('contentMenu').classList.add('hide');
        document.getElementById('startBtn').classList.add('hide');
        setTimeout(() => window.location.reload(), 2000);
    }
    if(player_points === 5) {
        chargeArrayKey(document.querySelector('#room3 .room-key'));
        document.querySelector('#titleMenu').textContent = 'WINNER !!!';
        document.getElementById('menuRoom3').classList.remove('hide');
        document.getElementById('contentMenu').classList.add('hide');
        document.getElementById('startBtn').classList.add('hide');
        return true;
    }

}
export function check_for_collisions() {
    let audio;
    // if ball is at goal
    if (ball.x > canvas.width || ball.x < 0) {
        audio = new Audio('assets/img/sounds/myinstants.mp3');
        audio.play().then();
        if (ball.x > canvas.width) addPoint("player");
        if (ball.x < 0) addPoint("opponent");

    } else if (ball.y >= canvas.height - ball.radius || ball.y <= 0 + ball.radius) {
        ball.changeAngle(360 - ball.angle);
        if (ball.y >= canvas.height - ball.radius) ball.y = canvas.height - ball.radius - 1;
        if (ball.y <= 0 + ball.radius) ball.y = ball.radius + 1;
    }
    //if player paddle collision
    if (ball.x - ball.radius < player.x + player.width && ball.x + ball.radius > player.x + player.width &&
        ball.y - ball.radius > player.y && ball.y + ball.radius < player.y + player.height && ball.xunits < 0) {
        ball.changeAngle( Math.floor(Math.random() * (175 - 180) + 175) - ball.angle);
        audio = new Audio('assets/img/sounds/laser.wav');
        audio.play().then();
    }
    //if opponent paddle collision
    if (ball.x + ball.radius > opponent.x - opponent.width && ball.x - ball.radius < opponent.x + opponent.width &&
        ball.y - ball.radius >= opponent.y && ball.y + ball.radius <= opponent.y + opponent.height && ball.xunits > 0) {
        ball.changeAngle( Math.floor(Math.random() * (185 - 175) + 175) - ball.angle);
        audio = new Audio('assets/img/sounds/blast.wav');
        audio.play().then();
    }

    function addPoint(playerORopponent) {
        switch(playerORopponent) {
            case "player":
                player_points += 1;
                break;
            case "opponent":
                opponent_points += 1;
                break;
        }
        ball.changeAngle(180 - ball.angle);
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;

    }
}

function redraw() {
    adjust_for_dpi(canvas);
    drawBG(ctx);
    draw_center_line(ctx);
}

adjust_for_dpi(canvas);
window.addEventListener('resize', redraw);

export let player, opponent, ball;
let player_points = 0;
let opponent_points = 0;

init_paddles(ctx);
init_ball(ctx);
add_keys(player, canvas);
add_touch(player, canvas);