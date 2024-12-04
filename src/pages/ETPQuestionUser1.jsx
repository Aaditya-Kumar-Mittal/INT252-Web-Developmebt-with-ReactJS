import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
function ETPQuestionUser1() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const username = queryParams.get("username");
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>User Page</h1>
      {username ? <p>Welcome, {username}!</p> : <p>No username provided</p>}
      <button onClick={goBack}>Back To Home</button>
    </div>
  );
}

export default ETPQuestionUser1;
