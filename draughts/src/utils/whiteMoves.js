export const regularMovesAvailableWhite = (
  xCoordinate,
  yCoordinate,
  currentBoard,
) => {
  const availableMoves = [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ];

  for (let i = currentBoard.length - 1; i >= yCoordinate + 1; i--) {
    console.log(currentBoard[i])
  }

};

export const upgradedMovesAvailableWhite = (currentSquare, currentBoard) => {
  const availableMoves = [];
};
