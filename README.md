# CrazyChess/Checkers

-Normal Chess set-up
1. All normal rules apply for Chess. 
2. When one piece takes out another piece the piece yells out "Finish Him/Her" depending on the character.
3. Single phrase comments allowed for players to send to one another.
4. Stretch: When characters attack they turn into pre-set Mortal Combat characters during the attack. 

NEW: 1: Make Chess/Checkers Board inside the HTML
     2: Make Board inside the div, with all 8x8 squares marked with the correct number/letter combination. 
        SPAN CLASS AND IMG CLASS ie from Youtube expample: 
                <div id="e7" class="piece-box black-box">
                    <span class="piece-box-text">e7</span>
                    <img class="piece" piece-type="black_pawn" src=">
     3: Color board first black/white boxes with Checker pieces. 

     4: When creating a chessboard use a 
     <script></script>tag to find the total number of squares in a chessboard along with making sure the function created returns the correct count of squares. 
        function countSquares(n) {
            return (n * (n + 1) /2) * (2*n + 1 / 3;
        }

For quicker games access and startup try to follow the following: 
    1. use defer or async attributes on script tags needed by browser. (ask chris if this is relevant since it is not an app but in the browser)
    2. Do not include scripts or stylesheets that don't participate in the critical path of your startup HTML file. Load them only when needed. (look into this to see what I actually have to code to make this run correctly)
    3. STRETCH: Reduce the size of my JS files. Compression?? 
    4. 
