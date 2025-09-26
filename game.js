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

    const Gameboard = (function () {
        board[0][0] = player1.mark
        
        console.log(board)
    })();

})();