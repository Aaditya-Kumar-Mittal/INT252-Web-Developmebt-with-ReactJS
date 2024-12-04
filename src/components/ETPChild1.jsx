import React from "react";
import styles from "./ETPStyleParentChild1.module.css";

function ETPChild1({ message, sender }) {
  return (
    <div>
      <br />
      <h2 className={styles.childHeading}>This is the child Component</h2>
      <h3>
        {message} from {sender}
      </h3>
    </div>
  );
}

export default ETPChild1;
