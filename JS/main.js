// let gamePieces = newImage(whRook, blkRook)
// move(gamePieces).to(0,0)

// let whRook = newImage('assets/ChessPieces/White/RookWhiteBlackandWhite.JPG')
// move(whRook).to()

//to move chess pieces there are only two para needs, (x,y) or (h1,h3) or (a,b)
//Looking up equation for moving pieces. 

let dropzone=""; //(this information is from developer.mozilla.org I believe it
              //should work if I add the correct parameters etc. Work in progress fingers crossed!)
let draggable= [blkRook, blkKnight, blkBishop, blkQueen, blkKing];
/* events fired on the draggable target */
document.addEventListener("drag", function(event) {
    draggable = event.target;
}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
    event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);
