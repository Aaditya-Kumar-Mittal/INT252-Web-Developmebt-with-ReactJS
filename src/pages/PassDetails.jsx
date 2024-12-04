import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function PassDetails() {
  const [searchParams] = useSearchParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const userId = searchParams.get("id"); // Extract 'id' from query parameters

  useEffect(() => {
    if (userId) {
      // Fetch data based on the userId
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data.");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setError("No User ID provided.");
      setLoading(false);
    }
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Details Page</h2>
      {data ? (
        <div>
          <p>
            <strong>Name:</strong> {data.name}
          </p>
          <p>
            <strong>Email:</strong> {data.email}
          </p>
          <p>
            <strong>Phone:</strong> {data.phone}
          </p>
        </div>
      ) : (
        <p>No data found.</p>
      )}
    </div>
  );
}

export default PassDetails;
