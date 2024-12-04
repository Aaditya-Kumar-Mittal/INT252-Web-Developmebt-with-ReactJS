import React from "react";
import useWindowWidth from "./useWindowWidth.js";

function ETPCustomHookDemo() {
  const windowWidth = useWindowWidth(); // Using the custom hook

  return (
    <div>
      <h1>Window Width Tracker</h1>
      <p>The window width is: {windowWidth}px</p>
    </div>
  );
}

export default ETPCustomHookDemo;
