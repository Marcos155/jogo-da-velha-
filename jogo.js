      const squares = document.querySelectorAll('.square');
      const message = document.getElementById('message');
      let currentPlayer = 'X';
      let gameBoard = ['', '', '', '', '', '', '', '', ''];
      let isGameOver = false;

      // define funções
      function handleSquareClick(event) {
        const squareIndex = event.target.dataset.index;
        if (gameBoard[squareIndex] !== '' || isGameOver) return;

        gameBoard[squareIndex] = currentPlayer;
        event.target.textContent = currentPlayer;
        event.target.classList.add(currentPlayer);

        if (checkForWin()) {
          isGameOver = true;
          message.textContent = `${currentPlayer} venceu!`;
          return;
        }

        if (checkForTie()) {
          isGameOver = true;
          message.textContent = 'Empate!';
          return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        message.textContent = `É a vez do ${currentPlayer}`;
      }

      function checkForWin() {
        const winningCombinations = [
          [0, 1, 2],
        ]
    }
