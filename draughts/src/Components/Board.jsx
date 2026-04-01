import Square from "./Square";
import { useState, createContext } from "react";

export const PieceContext = createContext();

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

  const [draughtPositions, setDraughtPositions] = useState([
    [null, "white", null, "white", null, "white", null, "white"],
    ["white", null, "white", null, "white", null, "white", null],
    [null, "white", null, "white", null, "white", null, "white"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["black", null, "black", null, "black", null, "black", null],
    [null, "black", null, "black", null, "black", null, "black"],
    ["black", null, "black", null, "black", null, "black", null],
  ]);

  return (
    <PieceContext.Provider value={{ draughtPositions, setDraughtPositions }}>
      <section>
        <div className="board">
          {squares
            .slice()
            .reverse()
            .map((row, y) => {
              return row.map((square, x) => {
                let squareColor = x + squares.length - y;
                squareColor % 2 === 0
                  ? (squareColor = "white")
                  : (squareColor = "black");
                return (
                  <Square
                    key={`${x}-${y}`}
                    squareColor={squareColor}
                    yCoordinate={squares.length - y - 1}
                    xCoordinate={x}
                  />
                );
              });
            })}
        </div>
      </section>
    </PieceContext.Provider>
  );
}

export default Board;
