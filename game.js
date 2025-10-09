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

    const updateBoard = (obj) => { 
        let index;
        let name = obj.name
        let mark = obj.mark

        let askAgain = true;
        do {
            index = prompt(name + " what cell?")       
            if (board[index] === '' && index >= 0 && index <= 8){
                board[index] = mark
                askAgain = false
            } else {
                console.log("You cannot mark this cell.")
            }
        } while (askAgain)
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
            console.log("Player 1 wins!")
            return 0;
        }

        else if ((board[0] === 'O' && board[1] === 'O' && board[2] === 'O') ||
            (board[3] === 'O' && board[4] === 'O' && board[5] === 'O') ||
            (board[6] === 'O' && board[7] === 'O' && board[8] === 'O') ||
            (board[0] === 'O' && board[3] === 'O' && board[6] === 'O') ||
            (board[1] === 'O' && board[4] === 'O' && board[7] === 'O') ||
            (board[2] === 'O' && board[5] === 'O' && board[8] === 'O') ||
            (board[0] === 'O' && board[4] === 'O' && board[8] === 'O') ||
            (board[2] === 'O' && board[4] === 'O' && board[6] === 'O')) {
            console.log("Player 2 wins!")
            return 0;
        }

        else if (isBoardFilled()) {
            console.log("It's a draw.")
            return 0;
        }
        return 1;
    }

    let contGame = true;
    while(contGame) {
        updateBoard(player1)

        contGame = winCheck()
        if (contGame === 0) { return 0 }

        updateBoard(player2)

        contGame = winCheck()
        if (contGame === 0) { return 0 }
    }
    return 0;
})();