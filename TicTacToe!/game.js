const boardCells = document.querySelectorAll(".cell");
const gameStatus = document.getElementById("game-status");
const resetButton = document.getElementById("reset-game");

let gameState = {
    board: ["", "", "", "", "", "", "", "", ""],
    currentPlayer: "X", // Player 1 starts
    movesMade: 0,
    winner: null
};

// Poll the server for game state updates
function fetchGameState() {
    fetch('http://192.168.1.137:8000/gameState')  // Use the server's IP address
        .then(response => response.json())
        .then(state => {
            gameState = state;
            renderBoard();
        })
        .catch(error => console.error('Error fetching game state:', error));
}

// Make a move and update the server
function makeMove(index) {
    if (gameState.board[index] === "" && gameState.winner === null) {
        fetch('http://192.168.1.137:8000/makeMove', {  // Use the server's IP address
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ index })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                gameState = data.gameState;
                renderBoard();
            } else {
                console.error("Failed to make move:", data.message);
            }
        })
        .catch(error => console.error('Error making move:', error));
    }
}

// Reset the game (clear the board)
function resetGame() {
    fetch('http://192.168.1.137:8000/resetGame', {  // Send reset request to the server
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            gameState = data.gameState;  // Update the gameState after reset
            renderBoard();                // Re-render the board
        } else {
            console.error("Failed to reset the game:", data.message);
        }
    })
    .catch(error => console.error('Error resetting the game:', error));
}

// Render the board with the current game state
function renderBoard() {
    boardCells.forEach((cell, index) => {
        cell.textContent = gameState.board[index];
        // Disable clicks on filled cells or if there's a winner
        cell.style.pointerEvents = gameState.board[index] || gameState.winner ? "none" : "auto"; 
    });

    // Update game status
    if (gameState.winner) {
        gameStatus.textContent = gameState.winner === "Draw" ? "It's a Draw!" : `${gameState.winner} Wins!`;
    } else {
        gameStatus.textContent = `Player ${gameState.currentPlayer === "X" ? 1 : 2} (${gameState.currentPlayer}), your move!`;
    }
}

// Poll the server every 500ms to get the latest game state
setInterval(fetchGameState, 500);

// Event listeners for the game
boardCells.forEach((cell, index) => {
    cell.addEventListener("click", () => makeMove(index));
});

// Event listener for the reset button
resetButton.addEventListener("click", resetGame);

// Initial game state fetch
fetchGameState();
