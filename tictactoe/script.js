const statusElem = document.getElementById('status');
const boardElem = document.getElementById('board');
const resetBtn = document.getElementById('reset');
let board = Array(9).fill('');
let currentPlayer = 'X';
let gameActive = true;

function renderBoard() {
    boardElem.innerHTML = '';
    board.forEach((cell, idx) => {
        const cellElem = document.createElement('div');
        cellElem.className = 'cell';
        cellElem.textContent = cell;
        cellElem.addEventListener('click', () => handleCellClick(idx));
        boardElem.appendChild(cellElem);
    });
}

function handleCellClick(idx) {
    // Evita que se juegue si el juego terminó o si la celda ya está ocupada
    if (!gameActive) {
        // Si el juego no está activo, no hacer nada
        return;
    }
    if (board[idx]) {
        // Si la celda ya tiene una X u O, no hacer nada
        return;
    }
    board[idx] = currentPlayer;
    renderBoard();
    const winner = checkWinner();
    if (winner) {
        statusElem.textContent = `Ganó el jugador ${winner}!`;
        highlightWinner(winner);
        gameActive = false;
    } else if (board.every(cell => cell)) {
        statusElem.textContent = "It's a draw!";
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusElem.textContent = `turno del jugador ${currentPlayer}`;
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
        [0, 4, 8], [2, 4, 6]          // diags
    ];
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

function highlightWinner(winner) {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    winPatterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if (board[a] === winner && board[b] === winner && board[c] === winner) {
            [a, b, c].forEach(i => {
                boardElem.children[i].classList.add('winner');
            });
        }
    });
}

resetBtn.addEventListener('click', () => {
    board = Array(9).fill('');
    currentPlayer = 'X';
    gameActive = true;
    statusElem.textContent = "Turno del jugador X";
    renderBoard();
});

renderBoard();