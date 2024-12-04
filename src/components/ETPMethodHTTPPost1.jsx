import React, { useState } from "react";
import axios from "axios";

function ETPMethodHTTPPost1() {
  const [data, setData] = useState({
    title: "",
    body: "",
    userId: 1,
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send POST request using Axios
    axios
      .post("https://jsonplaceholder.typicode.com/posts", data)
      .then((response) => {
        setResponseMessage(
          "Data sent successfully: " + JSON.stringify(response.data)
        );
        setError(""); // Clear any previous error message
      })
      .catch((error) => {
        setError("Error sending data: " + error.message);
        setResponseMessage(""); // Clear any previous success message
      });
  };

  return (
    <div>
      <h2>Send POST Request Example</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            name="body"
            value={data.body}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Send POST Request</button>
        </div>
      </form>

      {responseMessage && (
        <div style={{ color: "green", marginTop: "10px" }}>
          <strong>{responseMessage}</strong>
        </div>
      )}

      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          <strong>{error}</strong>
        </div>
      )}
    </div>
  );
}

export default ETPMethodHTTPPost1;
