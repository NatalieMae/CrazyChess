// function countSquares(n) {
//     return (n * (n + 1) /2) * (2*n +1) / 2;
// }
// let n = 8;
// document.write("Count of square is " + countSquares(n));
const myGameSquare;

function startGame() {
    myGameArea.start();
}

let myGameArea={
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width= 480;
        this.canvas.height= 270;
        this.context= this.canvas.getContext('2d');
            document.body.insertBefore(this.canvas, document.body.childNode[]);
    }
}



function startGame() {
    myGameArea.start();
        myGameSquare = new component(30, 30, "purple", 10, 120);
    }
