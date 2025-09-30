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

    function createPlayer (name, mark) {
        return {
            name: name,
            mark: mark
        }
    }

    const player1 = createPlayer("Joe","X")
    const player2 = createPlayer("Izin","O")

    // console.log(player1)
    // console.log(player2)

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

    // updateBoard(0, 0, player1.mark)
    // updateBoard(0, 1, player2.mark)

    // resetBoard()

    // win or tie?
    // if (board === )

    let p1row = prompt("What row will Player 1 pick?")
    let p1col = prompt("What will column will Player 1 pick?")
    updateBoard(p1row, p1col, player1.mark)
})();