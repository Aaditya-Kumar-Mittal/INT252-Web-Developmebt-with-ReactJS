import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function ETPMethodsHTTPAxios1() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Making a GET request with Axios
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data); // Save response data to state
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        setError(error.message); // Capture error message
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []); // Empty dependency array means this runs only once when the component mounts

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if request fails
  }

  return (
    <div>
      <h2>Data fetched from API using Axios:</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ETPMethodsHTTPAxios1;
