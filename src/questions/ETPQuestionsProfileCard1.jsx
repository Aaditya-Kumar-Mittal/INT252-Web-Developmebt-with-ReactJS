import React from "react";
import styles from "./ETPQuestionsStyleProfile1.module.css"; // Importing CSS module

function ETPQuestionsProfileCard1({ name, age, bio }) {
  // Inline style for the card container
  const cardStyle = {
    border: "5px solid red",
    borderRadius: "8px",
    padding: "20px",
    width: "300px",
    margin: "20px auto",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={cardStyle} className={styles.profileCard}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.age}>Age: {age}</p>
      <p className={styles.bio}>{bio}</p>
    </div>
  );
}

export default ETPQuestionsProfileCard1;
