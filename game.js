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

    console.log(player1)
    console.log(player2)

    const updateBoard = (row, col, mark) => {
        if (board[row][col] === ''){
            board[row][col] = mark
        } else {
            console.log("You cannot mark this cell.")
        }
    }

    const Gameboard = (function () {
        console.log(board) //return updated board
    })();

    updateBoard(0, 0, player1.mark)
    updateBoard(0, 1, player2.mark)

})();