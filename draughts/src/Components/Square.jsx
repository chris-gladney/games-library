import { useContext, useEffect, useState } from "react";
import { PieceContext } from "./Board";
import Piece from "./Piece";

function Square({ squareColor, yCoordinate, xCoordinate }) {
  const { draughtPositions, setDraughtPositions } = useContext(PieceContext);
  const [piece, setPiece] = useState("");

  useEffect(() => {
    const square = draughtPositions[yCoordinate - 1][xCoordinate - 1];
    if (square !== null) {
      setPiece(square);
    }
  }, [draughtPositions]);

  return (
    <div
      className="square"
      style={{ backgroundColor: squareColor }}
      onClick={() => {
        console.log(draughtPositions, "<<< all draughts");
        console.log(
          draughtPositions[yCoordinate - 1][xCoordinate - 1],
          "<<< square",
        );
      }}
    >
      {piece ? <Piece pieceColor={piece} /> : ""}
    </div>
  );
}

export default Square;
