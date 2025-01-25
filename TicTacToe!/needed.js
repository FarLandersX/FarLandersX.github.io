// game-api.js (for managing the Tic-Tac-Toe game state and logic)
(function() {
    // Internal game state (used locally for quick reference)
    let gameState = {
        board: ["", "", "", "", "", "", "", "", ""], // Board positions
        currentPlayer: "X",  // "X" starts
        movesMade: 0,        // Number of moves made
        winner: null         // Current winner (null, "X", "O", "Draw")
    };

    // Fetch the current game state from the server
    const getGameState = () => {
        return fetch('/gameState')  // Relative URL
            .then(response => response.json())
            .then(state => {
                // Update internal game state with server state
                gameState = state;
                return gameState;
            })
            .catch(err => {
                console.error("Error fetching game state:", err);
            });
    };

    // Make a move and update the game state on the server
    const makeMove = (index) => {
        return fetch('/makeMove', {  // Relative URL
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ index })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Update local game state after successful move
                gameState = data.gameState;
                return gameState;
            } else {
                throw new Error(data.message || "Invalid move");
            }
        })
        .catch(err => {
            console.error("Error making move:", err);
        });
    };

    // Reset the game on the server
    const resetGame = () => {
        return fetch('/resetGame', {  // Relative URL
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Reset internal game state
                gameState = data.gameState;
                return gameState;
            } else {
                throw new Error("Failed to reset the game");
            }
        })
        .catch(err => {
            console.error("Error resetting game:", err);
        });
    };

    // Expose the API methods globally to be used in the front-end code
    window.GameAPI = {
        getGameState,
        makeMove,
        resetGame,
        gameState  // Expose current game state for easy access in the front-end
    };

})();
