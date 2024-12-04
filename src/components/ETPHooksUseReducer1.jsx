import React, { useReducer } from "react";

// Step 1: Define the reducer function

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
      break;
    case "decrement":
      return { count: state.count - 1 };
      break;
    case "reset":
      return { count: 0 };
      break;
    default:
      return state;
  }
}

function ETPHooksUseReducer1() {
  // Step 2: Set up the useReducer hook
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Counter with useReducer</h1>
      <p>Count: {state.count}</p>

      {/* Step 3: Dispatch actions */}
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <br />
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <br />
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
}

export default ETPHooksUseReducer1;
