import React from "react";
import { useNavigate } from "react-router-dom";

function HomeNav() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/aboutNav");
  };
  const goToContact = () => {
    navigate("/contactNav");
  };
  const goBack = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Home Page for Navigation Demo</h1>
      <button onClick={goToAbout}>About Page</button>
      <button onClick={goToContact}>Contact Page</button>
      <button onClick={goBack}>Back To Home</button>
    </div>
  );
}

export default HomeNav;
