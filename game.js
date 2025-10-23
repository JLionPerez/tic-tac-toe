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

    const msgBoard = document.querySelector(".message-board")
    msgBoard.textContent = "Welcome to Tic Tac Toe!\r\n"
    msgBoard.textContent += "Player 1 will be starting this round."

    const cells = document.querySelectorAll(".cell");

    let mark = ''
    let name = ''
    let continueGame = true;

    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener('click', () => {
            if (board[i] === '' && mark === '' && continueGame === true){
                msgBoard.textContent = "Player 2's turn."
                mark = player1.mark
                name = player1.name
                board[i] = mark
                cells[i].textContent = board[i]
            }

            else if (board[i] === '' && mark === 'X' && continueGame === true) {
                mark = player2.mark
                msgBoard.textContent = name + "'s turn."
                name = player2.name
                board[i] = mark
                cells[i].textContent = board[i]
            }

            else if (board[i] === '' && mark === 'O' && continueGame === true) {
                mark = player1.mark
                msgBoard.textContent = name + "'s turn."
                name = player1.name
                board[i] = mark
                cells[i].textContent = board[i]
            }

            if (winCheck() === 0) {
                mark = ''
                name = ''
                continueGame = false
            }
        })
    }

    const resetBtn = document.getElementById("reset_btn")
    resetBtn.addEventListener('click', () => {
        for (let i = 0; i < board.length; i++) {
            board[i] = ''
            cells[i].textContent = ''
        }
        msgBoard.textContent = "Welcome to Tic Tac Toe!\r\n"
        msgBoard.textContent += "Player 1 will be starting this round."
        continueGame = true
    })

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
            msgBoard.textContent = "Player 1 wins!\r\n"
            msgBoard.textContent += "If you would like to play again please press the 'Reset Game' button."
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
            msgBoard.textContent = "Player 2 wins!\r\n"
            msgBoard.textContent += "If you would like to play again please press the 'Reset Game' button."
            return 0;
        }

        else if (isBoardFilled()) {
            msgBoard.textContent = "It's a draw!\r\n"
            msgBoard.textContent += "If you would like to play again please press the 'Reset Game' button."
            return 0;
        }
        return 1;
    }
})();