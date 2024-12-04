import React from "react";
import { useNavigate } from "react-router-dom";

function AboutNav() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h2>About Nav Page</h2>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default AboutNav;
