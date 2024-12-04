import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function PassHome() {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/details?id=${userId}`);
  };

  return (
    <div>
      <h1>Home Page for Passing The Data</h1>
      <input
        type="text"
        value={userId}
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default PassHome;
