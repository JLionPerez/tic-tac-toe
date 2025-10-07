// when players turn

// put mark on given index



// factories
// make Gameboard >
// make player object
// make object for controlling the flow of game (game obj)
// all wrapped in IIFE

const Game = (function () {
    let board = [
        ['','',''],
        ['','',''],
        ['','','']
    ]

    function createPlayer (mark) {
        return {
            mark: mark
        }
    }

    // const getCellVal = (row, col) => {
    //     return board[row][col]
    // }

    const setCellVal = (row,col,mark) => {
        if (board[row][col] === '') {
            board[row][col] = mark;
        }
        else {
            console.log("You can't put a mark there.")
        }
    }

    const player1 = createPlayer("X")
    const player2 = createPlayer("O")

    const Gameboard = (function () {
        console.log(board) //return updated board
    })();

    const updateBoard = (row, col, mark) => {
        if (board[row][col] === ''){
            board[row][col] = mark
        } else {
            console.log("You cannot mark this cell.")
        }
    }

    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board.length; j++) {
                board[i][j] = ''
            }
        }
    }

    const isBoardFilled = () => {
        let fillCount = 0;
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board.length; j++) {
                    if (board[i][j] != '') {
                        fillCount++
                    }
                }
            }
            if (fillCount === 9) {
                return true
            }
            return false;
    }

    const winCheck = () => {
        if ((board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') ||
            (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') ||
            (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') ||
            (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') ||
            (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') ||
            (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') ||
            (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') ||
            (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X')) {
            console.log("Player 1 wins!")
            return 1;
        }

        else if ((board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') ||
            (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') ||
            (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O') ||
            (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') ||
            (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') ||
            (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') ||
            (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') ||
            (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O')) {
            console.log("Player 2 wins!")
            return 2;
        }

        else {
            if (isBoardFilled()) {
                console.log("It's a draw!")
                return 3;
            }
        }
        return 0;
    }

    // winCheck()

    //while gameboard is not filled
    while() {
        let i = 0;
        //player 1 clicks on cell to mark
        let p1r = prompt("P1 what row?")
        let p1c = prompt("P1 what col?")
        setCellVal(p1r, p1c, player1.mark)
        // console.log(board)
        //check for wins or ties
        // winCheck()
        //player 2 clicks on cell to mark
        let p2r = prompt("P2 what row?")
        let p2c = prompt("P2 what col?")
        setCellVal(p2r, p2c, player2.mark)
        // console.log(board)
        //check for wins or ties
        // winCheck()
        //if either player wins or game ends on tie break out of loop; gameover
        // console.log(board)
        // return 0;
        i++
        console.log(i)
    }

    // const GameFlow = (function () {
    //     //player 1 clicks on cell to mark
    //     let p1r = prompt("P1 what row?")
    //     let p1c = prompt("P1 what col?")
    //     setCellVal(p1r, p1c, player1.mark)
    //     // console.log(board)
    //     //check for wins or ties
    //     winCheck()
    //     //player 2 clicks on cell to mark
    //     let p2r = prompt("P2 what row?")
    //     let p2c = prompt("P2 what col?")
    //     setCellVal(p2r, p2c, player2.mark)
    //     // console.log(board)
    //     //check for wins or ties
    //     winCheck()
    //     //if either player wins or game ends on tie break out of loop; gameover
    // })();
    return 0;
})();