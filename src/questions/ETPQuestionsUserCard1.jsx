import React from "react";

const ETPQuestionsUserCard1 = ({ name, age, location }) => {
  return (
    <div
      style={{
        border: "5px solid red",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "300px",
        margin: "20px auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ margin: "10px 0", color: "green" }}>{name}</h2>
      <p style={{ margin: "5px 0", color: "orange" }}>Age: {age}</p>
      <p style={{ margin: "5px 0", color: "blue" }}>Location: {location}</p>
    </div>
  );
};

export default ETPQuestionsUserCard1;
