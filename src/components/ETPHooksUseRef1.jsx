import React, { useRef } from "react";

function ETPHooksUseRef1() {
  // Create a ref using useRef
  const inputRef = useRef(null);

  const inputFocus = () => {
    // Use the current property of the ref to access the DOM node and focus on it
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Using useRef to Focus Input</h1>
      <input type="text" ref={inputRef} placeholder="Click to focus on input" />
      <button onClick={inputFocus}>Focus Input</button>
    </div>
  );
}

export default ETPHooksUseRef1;
