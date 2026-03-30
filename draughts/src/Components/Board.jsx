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
        {squares.map((row, i) => {
          return row.map((square, j) => {
            console.log(i.toString() + j.toString(), "<<< key");
            console.log(j + 1, "<<< yCoordinate");
            console.log(i + 1, "<<< xCoordinate");
            return (
              <>
                <Square
                  key={i.toString() + j.toString()}
                  yCoordinate={j + 1}
                  xCoordinate={i + 1}
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
