

// let center = document.createElement('center');
// let chessboard = document.createElement('board');
//     for(let i = 0; i < 8; i++) {
//         let tr = document.createElement('tr');
//     for(let i = 0; i < 8; i++) {
//         let td = document.createElement('td');
//     if((j + i) % 2 === 0) {}    
//     }
// }

// const chess = new Chess() //move pieces or black/white goes in para. ? 
//     chess.move({from:})

//CHRIS: It is saying that document is not defined. And on stackoverflow it states something 
//about node.js or JSDom Support. ??
let whRookElement = document.querySelector(".whRook");
let whKnightElement = document.querySelector(".whKnight");
let whBishopElement = document.querySelector(".whBishop");
let whKingElement = document.querySelector(".whKing");
let whQueenElement = document.querySelector(".whQueen");
let whPawnElement = document.querySelector(".whPawn");

function addGamePieces(whRook) {
    whRook.addEventListener('mousedown', handleMouseDown);
}
addGamePieces();