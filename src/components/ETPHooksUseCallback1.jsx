import React, { useCallback, useState } from "react";

function ETPHooksUseCallback1() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(true);

  // Step 1: Use useCallback to memoize the increment function
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Empty dependency array means the function is memoized once

  return (
    <div>
      <h1>Counter with useCallback</h1>
      <p>Count: {count}</p>
      {/* Step 2: Buttons to trigger functions */}
      <button onClick={increment}>Increment</button>
      <button onClick={() => setShow(!show)}>Toggle Show</button>

      {/* Conditionally show a message */}
      {show && <p>The increment function is memoized!</p>}
    </div>
  );
}

export default ETPHooksUseCallback1;
