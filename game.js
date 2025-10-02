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
            let fillCount = 0;
            for (let i = 0; i < board.length; i++) {
                for (let j = 0; j < board.length; j++) {
                    if (board[i][j] != '') {
                        fillCount++
                    }
                }
            }
            if (fillCount === 9) {
                console.log("It's a draw!")
                return 3;
            }
        }
    }

    winCheck()

    // let p1row = prompt("What row will Player 1 pick?")
    // let p1col = prompt("What will column will Player 1 pick?")
    // updateBoard(p1row, p1col, player1.mark)
})();