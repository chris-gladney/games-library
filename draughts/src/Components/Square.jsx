import { useContext } from "react";
import { PieceContext } from "./Board";

function Square({ squareColor, yCoordinate, xCoordinate }) {
  const { draughtPositions, setDraughtPositions } = useContext(PieceContext);

  return (
    <div className="square" style={{ backgroundColor: squareColor }}></div>
  );
}

export default Square;
