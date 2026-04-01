import { PieceContext } from "./Board";
import { regularMovesAvailableWhite } from "../utils/whiteMoves";
import { useContext } from "react";

function Piece({ pieceColor, xCoordinate, yCoordinate }) {
  const { draughtPositions, setDraughtPositions } = useContext(PieceContext);
  const borderColor = pieceColor === "white" ? "black" : "white";

  return (
    <div
      className="piece"
      style={{
        backgroundColor: pieceColor,
        border: `1px solid ${borderColor}`,
      }}
      onClick={() => {
        regularMovesAvailableWhite(
          xCoordinate,
          yCoordinate,
          draughtPositions,
        );
      }}
    ></div>
  );
}

export default Piece;
