// YOUR CODE BELOW

let emptyBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

let ticTacToe = {
    board: emptyBoard,

    move: function(player, rowNum, colNum) {
        // if the row/column is empty
        if(this.board[rowNum][colNum]===null) {
       // if(!this.board[rowNum][colNum]) {

            this.board[rowNum][colNum] = player;
        }

        console.log(this.board);
        return this.board;

    },

    clear: function() {
        this.board = emptyBoard

        console.log(this.board);
        return this.board;
    }


}