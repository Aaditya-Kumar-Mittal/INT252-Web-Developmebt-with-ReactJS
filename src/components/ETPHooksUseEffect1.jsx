import React, { useEffect, useState } from "react";
import styles from "./ETPStyleHooks2.module.css";

function ETPHooksUseEffect1() {
  //Declare states for fetching Data

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data ", error);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Data Fetching with useEffect</h1>
      {loading ? (
        <p className={styles.loading}>Loading...</p> // Display loading message while fetching
      ) : (
        <div className={styles.dataContainer}>
          <h3 className={styles.title}>{data.title}</h3>
          <p className={styles.body}>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default ETPHooksUseEffect1;
