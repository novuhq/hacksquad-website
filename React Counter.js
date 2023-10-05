import React, { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const incrementByThree = () => {
    setNumber(number + 3);
  };

  return (
    <div className="card">
      <h1 data-testid="counter">{number}</h1>
      <button onClick={incrementByThree}>Increment by 3</button>
    </div>
  );
}
