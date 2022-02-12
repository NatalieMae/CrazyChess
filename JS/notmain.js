// function countSquares(n) {
//     return (n * (n + 1) /2) * (2*n +1) / 2;
// }
// let n = 8;
// document.write("Count of square is " + countSquares(n));
const myGameSquare = ('8x8');

function startGame() {
    myGameArea.start();
    myGameSquare = new gameComponent(100, 100, "purple", 20, 120);
}

//look into the canvas program or tutorials to see what it is and how it is used. Ask Chris i
//this is ok to use with our project. It may be a third party platform/libaray of some sort. 
let myGameArea= {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width= 480;
        this.canvas.height= 270;
        this.context= this.canvas.getContext('2d');
            document.body.insertBefore(this.canvas, document.body.childNode);
    }
}

function gameComponent(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

function updateGameArea() {
    updateGameArea.clear();
    updateGameArea.update();
}