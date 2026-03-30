function Square({ squareColor, yCoordinate, xCoordinate }) {
  return (
    <div className="square" style={{ backgroundColor: squareColor }}>
        <p>x: {xCoordinate}</p>
        <p>y: {yCoordinate}</p>

    </div>
  );
}

export default Square;
