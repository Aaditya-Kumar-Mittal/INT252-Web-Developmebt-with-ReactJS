import React from "react";
import { Link, useNavigate } from "react-router-dom";
function ETPQuestionUserAbout1() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/userUser?username=John">User</Link>
          </li>
        </ul>
      </nav>
      <button onClick={goBack}>Back To Home</button>
    </div>
  );
}

export default ETPQuestionUserAbout1;
