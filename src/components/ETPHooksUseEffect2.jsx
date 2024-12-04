import React, { useEffect, useState } from "react";

function ETPHooksUseEffect2() {
  const [count, setCount] = useState(0);

  // Effect that runs after every render
  useEffect(() => {
    console.log("Component rendered or count changed:", count);

    // Cleanup function
    return () => {
      console.log("Cleanup for count:", count);
    };
  }, [count]); // Effect runs only when 'count' changes

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default ETPHooksUseEffect2;
