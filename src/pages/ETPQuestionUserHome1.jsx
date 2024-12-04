import React from "react";
import { Link } from "react-router-dom";

function ETPQuestionUserHome1() {
  

  return (
    <div>
      <h1>Home Page</h1>
      <nav>
        <ul>
          <li>
            <Link to="/aboutUser">About</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/userUser?username=John">User</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ETPQuestionUserHome1;
