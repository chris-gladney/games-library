function Piece({ pieceColor }) {
  const borderColor = pieceColor === "white" ? "black" : "white";

  return (
    <div
      className="piece"
      style={{
        backgroundColor: pieceColor,
        border: `1px solid ${borderColor}`,
      }}
    ></div>
  );
}

export default Piece;
