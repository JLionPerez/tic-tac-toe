// when players turn

// put mark on given index



// factories
// make Gameboard >
// make player object
// make object for controlling the flow of game (game obj)
// all wrapped in IIFE

const Game = (function () {
    let board = [
        '','','',
        '','','',
        '','',''
    ]

    function createPlayer (name,mark) {
        return {
            name: name,
            mark: mark
        }
    }

    const player1 = createPlayer("Player 1","X")
    const player2 = createPlayer("Player 2","O")

    const Gameboard = (function () {
        console.log(board) //return updated board
    })();

    const updateBoard = (index, mark) => {
        if (board[index] === ''){
            board[index] = mark
        } else {
            console.log("You cannot mark this cell.")
        }
    }

    const resetBoard = () => {
        for (let i = 0; i < board.length; i++) {
                board[i] = ''
        }
    }

    const isBoardFilled = () => {
        let fillCount = 0;
            for (let i = 0; i < board.length; i++) {
                if (board[i] != '') {
                    fillCount++
                }
            }
            if (fillCount === 9) {
                return true
            }
            return false;
    }

    const winCheck = () => {
        if ((board[0] === 'X' && board[1] === 'X' && board[2] === 'X') ||
            (board[3] === 'X' && board[4] === 'X' && board[5] === 'X') ||
            (board[6] === 'X' && board[7] === 'X' && board[8] === 'X') ||
            (board[0] === 'X' && board[3] === 'X' && board[6] === 'X') ||
            (board[1] === 'X' && board[4] === 'X' && board[7] === 'X') ||
            (board[2] === 'X' && board[5] === 'X' && board[8] === 'X') ||
            (board[0] === 'X' && board[4] === 'X' && board[8] === 'X') ||
            (board[2] === 'X' && board[4] === 'X' && board[6] === 'X')) {
            // console.log("Player 1 wins!")
            return 1;
        }

        else if ((board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
            (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') ||
            (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') ||
            (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') ||
            (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') ||
            (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') ||
            (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') ||
            (board[2] === 'O' && board[4] === 'O' && board[6] === 'O')) {
            // console.log("Player 2 wins!")
            return 2;
        }

        else if (isBoardFilled()) {
                // console.log("It's a draw!")
                return 3;
        }
        return 0;
    }

    const contGameFlag = () => {
        if (winCheck() === 1) {
            console.log("Player 1 wins!")
            return false;
        }
        
        else if (winCheck() === 2) {
            console.log("Player 2 wins!")
            return false;
        }

        else if (winCheck() === 3) {
            console.log("It's a draw.")
            return false;
        }
        return true;
    }

    // winCheck()

    // //while gameboard is not filled
    //     // let i = 0;
    //     //player 1 clicks on cell to mark
    //     let p1Index = prompt("P1 what cell?")
    //     updateBoard(p1Index, player1.mark)
    //     // console.log(board)
    //     //check for wins or ties
    //     // winCheck()
    //     //player 2 clicks on cell to mark
    //     let p2Index = prompt("P2 what cell?")
    //     updateBoard(p2Index, player2.mark)
    //     // console.log(board)
    //     //check for wins or ties
    //     // winCheck()
    //     //if either player wins or game ends on tie break out of loop; gameover
    //     // console.log(board)
    //     // return 0;
    //     // i++
    //     // console.log(i)
    

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

    let contGame = true;
    while(contGame) {
        let p1Idx;
        let p2Idx;

        p1Idx = prompt("P1 what cell?")
        updateBoard(p1Idx, player1.mark)

        if (winCheck() === 1) {
            console.log("Player 1 wins!")
            contGame = false;
            // return 0;
        }
        
        else if (winCheck() === 2) {
            console.log("Player 2 wins!")
            contGame = false;
            // return 0;
        }

        else if (winCheck() === 3) {
            console.log("It's a draw.")
            contGame = false;
            // return 0;
        }

        // contGame = contGameFlag()

        p2Idx = prompt("P2 what cell?")
        updateBoard(p2Idx, player2.mark)

        // contGame = contGameFlag()

        if (winCheck() === 1) {
            console.log("Player 1 wins!")
            contGame = false;
            // return 0;
        }
        
        else if (winCheck() === 2) {
            console.log("Player 2 wins!")
            contGame = false;
            // return 0;
        }

        else if (winCheck() === 3) {
            console.log("It's a draw.")
            contGame = false;
            // return 0;
        }
    }
    return 0;
})();