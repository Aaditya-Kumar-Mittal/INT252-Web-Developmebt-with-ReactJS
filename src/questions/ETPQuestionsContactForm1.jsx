import React, { useState, useRef } from "react";

function ETPQuestionsContactForm1() {
  // State for controlled components (name and email)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Ref for uncontrolled component (message)
  const messageRef = useRef();

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Log the form data to the console
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", messageRef.current.value); // Access value of uncontrolled component

    // Optionally, reset the form fields after submission
    setName("");
    setEmail("");
    messageRef.current.value = ""; // Reset uncontrolled component (message)
  };

  return (
    <div>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Controlled Name Field */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Controlled Email Field */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Uncontrolled Message Field */}
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            ref={messageRef} // Attach ref to the textarea (uncontrolled)
            placeholder="Write your message"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ETPQuestionsContactForm1;
