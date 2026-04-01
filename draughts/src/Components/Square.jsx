import { useContext, useEffect, useState } from "react";
import { PieceContext } from "./Board";
import Piece from "./Piece";

function Square({ squareColor, yCoordinate, xCoordinate }) {
  const { draughtPositions } = useContext(PieceContext);
  const [piece, setPiece] = useState("");

  useEffect(() => {
    const square = draughtPositions[yCoordinate][xCoordinate];
    if (square !== null) {
      setPiece(square);
    }
  }, [draughtPositions]);

  return (
    <div className="square" style={{ backgroundColor: squareColor }}>
      {piece ? (
        <Piece
          pieceColor={piece}
          xCoordinate={xCoordinate}
          yCoordinate={yCoordinate}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Square;
