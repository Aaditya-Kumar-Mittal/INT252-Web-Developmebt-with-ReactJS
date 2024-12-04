import React from 'react'
import { useNavigate } from 'react-router-dom'

function ContactNav() {

  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };
  return (
    <div>
      <h2>Contact Nav Page</h2>
      <button onClick={goBack}>Go Back</button>
    </div>
  )
}

export default ContactNav
