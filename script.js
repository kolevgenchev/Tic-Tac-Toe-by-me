function solve() {
    let currentPlayer = 'X';
    let textAreaEl = document.getElementById('display');
    textAreaEl.textContent = `It's ${currentPlayer}'s turn!`;
    let tableEl = document.getElementById('gameboard');
    let allCellsElements = tableEl.querySelectorAll('td');
  
    function cellClickHandler(e) {
      if (e.target.textContent === '') {
        e.target.textContent = currentPlayer;
        if (currentPlayer === 'X') {
          currentPlayer = 'O';
        } else {
          currentPlayer = 'X';
        }
        textAreaEl.textContent = `It's ${currentPlayer}'s turn!`;
        checkWinner();
      }
    }
  
    allCellsElements.forEach((cell) => {
      cell.addEventListener('click', cellClickHandler);
    });
  
    function checkWinner() {
      let winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      for (let i = 0; i < winCombos.length; i++) {
        let [a, b, c] = winCombos[i];
        if (allCellsElements[a].textContent === '' ||
            allCellsElements[b].textContent === '' ||
            allCellsElements[c].textContent === '') {
          continue;
        }
        if (allCellsElements[a].textContent === allCellsElements[b].textContent &&
            allCellsElements[b].textContent === allCellsElements[c].textContent) {
                currentPlayer=allCellsElements[a].textContent
          textAreaEl.textContent = `${currentPlayer} wins!`;
          allCellsElements.forEach((cell) => {
            cell.removeEventListener('click', cellClickHandler);
          });
          return;
        }
      }
    }
  }
  
  solve();
  