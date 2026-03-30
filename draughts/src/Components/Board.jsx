import Square from "./Square";

function Board() {
  const squares = [
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
    [1, 2, 3, 4, 5, 6, 7, 8],
  ];

  return (
    <section>
      <div className="board">
        {squares
          .slice()
          .reverse()
          .map((row, y) => {
            return row.map((square, x) => {
              console.log(x, "<<< x");
              console.log(y, "<<< y");

              let squareColor = x + squares.length - y;
              squareColor % 2 === 0
                ? (squareColor = "white")
                : (squareColor = "black");
              return (
                <>
                  <Square
                    key={x.toString() + y.toString()}
                    squareColor={squareColor}
                    yCoordinate={squares.length - y}
                    xCoordinate={x + 1}
                  />
                </>
              );
            });
          })}
      </div>
    </section>
  );
}

export default Board;
