import React from "react";
import ETPChild1 from "./ETPChild1";
import styles from "./ETPStyleParentChild1.module.css";

function ETPParent1() {
  const message = "Hello from the parent Component.";
  const sender = "ETPParent1";

  return (
    <div>
      <h1 className={styles.parentHeading}>
        Parent Component Sending Data to Child Component
      </h1>
      <ETPChild1 message={message} sender={sender} />
    </div>
  );
}

export default ETPParent1;
