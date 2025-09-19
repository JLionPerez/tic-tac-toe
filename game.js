function createBoard () {
    let board = [
        "","","",
        "","","",
        "","",""
    ]
    return { board }
}

function createPlayer (mark) {
    return { mark }
}

const gameboard = createBoard()
const player1 = createPlayer("X")
const player2 = createPlayer("O")

console.log({
        board: gameboard.board,
        player1: player1.mark,
        player2: player2.mark
    })

// factories
// make Gameboard >
// make player object
// make object for controlling the flow of game (game obj)
// all wrapped in IIFE