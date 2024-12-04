import React, { useState } from "react";

function ETPEventHandling1() {
  const [message, setMessage] = useState(
    "Click the button to change this message!"
  );

  const handleClick = () => {
    setMessage("Button was clicked!");
  };

  const handleInputChange = (event) => {
    setMessage(`You typed : ${event.target.value}`);
  };

  return (
    <div>
      <h1>Event Handling Example</h1>

      <button onClick={handleClick}>Click Me</button>
      <p>{message}</p>

      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Type something..."
      />
    </div>
  );
}

export default ETPEventHandling1;
