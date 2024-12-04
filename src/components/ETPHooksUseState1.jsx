import React, { useState } from "react";
import styles from "./ETPStyleHooks1.module.css";
function ETPHooksUseState1() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className={styles.stateDiv}>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default ETPHooksUseState1;
