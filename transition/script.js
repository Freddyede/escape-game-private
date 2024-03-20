var canvas = document.querySelector(".hacker-3d-shiz"),
    ctx = canvas.getContext("2d"),
    canvasBars = document.querySelector(".bars-and-stuff"),
    ctxBars = canvasBars.getContext("2d"),
    outputConsole = document.querySelector(".output-console");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasBars.width = window.innerWidth;
    canvasBars.height = window.innerHeight;
    outputConsole.style.height = window.innerHeight + 'px';
    outputConsole.style.width = window.innerWidth + 'px';
    focal = canvas.width / 2;
    vpx = canvas.width / 2;
    vpy = canvas.height / 2;
}
resizeCanvas(); // Call resize function on start

window.addEventListener('resize', resizeCanvas);


function Square(z) {
    this.width = canvas.width/2;

    if(canvas.height < 200){
        this.width = 280;
    }

    this.height = canvas.height;
    z = z || 0;

    this.points = [
        new Point({
            x: (canvas.width / 2) - this.width,
            y: (canvas.height / 2) - this.height,
            z: z
        }),
        new Point({
            x: (canvas.width / 2) + this.width,
            y: (canvas.height / 2) - this.height,
            z: z
        }),
        new Point({
            x: (canvas.width / 2) + this.width,
            y: (canvas.height / 2) + this.height,
            z: z
        }),
        new Point({
            x: (canvas.width / 2) - this.width,
            y: (canvas.height / 2) + this.height,
            z: z
        })
    ];
    this.dist = 0;
}

Square.prototype.update = function () {
    for (var p = 0; p < this.points.length; p++) {
        this.points[p].rotateZ(0.001);
        this.points[p].z -= 3;
        if (this.points[p].z < -300) {
            this.points[p].z = 2700;
        }
        this.points[p].map2D();
    }
};

Square.prototype.render = function () {
    ctx.beginPath();
    ctx.moveTo(this.points[0].xPos, this.points[0].yPos);
    for (var p = 1; p < this.points.length; p++) {
        ctx.lineTo(this.points[p].xPos, this.points[p].yPos);
    }
    ctx.closePath();
    ctx.stroke();
    this.dist = this.points[this.points.length - 1].z;
};

function Point(pos) {
    this.x = pos.x - canvas.width / 2 || 0;
    this.y = pos.y - canvas.height / 2 || 0;
    this.z = pos.z || 0;

    this.cX = 0;
    this.cY = 0;
    this.cZ = 0;

    this.xPos = 0;
    this.yPos = 0;
    this.map2D();
}

Point.prototype.rotateZ = function (angleZ) {
    var cosZ = Math.cos(angleZ),
        sinZ = Math.sin(angleZ),
        x1 = this.x * cosZ - this.y * sinZ,
        y1 = this.y * cosZ + this.x * sinZ;

    this.x = x1;
    this.y = y1;
};

Point.prototype.map2D = function () {
    var scaleX = focal / (focal + this.z + this.cZ),
        scaleY = focal / (focal + this.z + this.cZ);

    this.xPos = vpx + (this.cX + this.x) * scaleX;
    this.yPos = vpy + (this.cY + this.y) * scaleY;
};

var squares = [],
    focal = canvas.width / 2,
    vpx = canvas.width / 2,
    vpy = canvas.height / 2;

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    squares.sort(function (a, b) { return b.dist - a.dist; });
    for (var i = 0, len = squares.length; i < len; i++) {
        squares[i].update();
        squares[i].render();
    }

    requestAnimationFrame(render);
}
Square.prototype.update = function () {
    for (var p = 0; p < this.points.length; p++) {
        // Augmenter la vitesse de rotation et de déplacement
        this.points[p].rotateZ(0.00); // Augmenté de 0.001 à 0.005 pour une rotation plus rapide
        this.points[p].z -= 18; // Augmenté de 3 à 15 pour un déplacement plus rapide
        if (this.points[p].z < -300) {
            this.points[p].z = 2700;
        }
        this.points[p].map2D();
    }
};

setTimeout(function(){   
    for (var i = 0; i < 15; i++) {
        squares.push(new Square(-400 + (i * 200)));
    }

    ctx.strokeStyle = '#00FF00';
    render();
}, 200);

window.addEventListener('resize', function(){
    canvas.width = (window.innerWidth/3)*2;
    canvas.height = window.innerHeight / 3;

    focal = canvas.width / 2;
    vpx = canvas.width / 2;
    vpy = canvas.height / 2;

    ctx.strokeStyle = '#00FF00';
});