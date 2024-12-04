import React, { useMemo, useState } from "react";

const calculateFibonacci = (num) => {
  if (num <= 1) {
    return num;
  }
  return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
};

function ETPHooksUseMemo1() {
  const [number, setNumber] = useState(0);
  const [show, setShow] = useState(true);

  const fibResult = useMemo(() => calculateFibonacci(number), [number]);

  return (
    <div>
      <h1>Fibonacci Calculator with useMemo</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <h2>
        Fibonacci of {number} is: {fibResult}
      </h2>

      {/* Toggle display */}
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} Result
      </button>

      {show && <p>The Fibonacci calculation is memoized!</p>}
    </div>
  );
}

export default ETPHooksUseMemo1;
