import React, { useState, useEffect } from "react";

const ETPQuestionTodoList1 = () => {
  // State to manage the list of items and the current input value
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  // Effect to log messages when the component mounts and unmounts
  useEffect(() => {
    console.log("Todo List Component Mounted");
    return () => {
      console.log("Todo List Component Unmounted");
    };
  }, []);

  // Handler to add an item to the list
  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue(""); // Clear the input field
    }
  };

  // Handler to remove an item from the list
  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a task"
          style={{
            width: "70%",
            padding: "8px",
            marginRight: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={addItem}
          style={{
            padding: "8px 16px",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>
      <ul style={{ marginTop: "20px", padding: "0", listStyleType: "none" }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          >
            {item}
            <button
              onClick={() => removeItem(index)}
              style={{
                padding: "4px 8px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ETPQuestionTodoList1;
