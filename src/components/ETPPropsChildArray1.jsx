import React from "react";
import styles from './ETPStyleParentChild2.module.css';

function ETPPropsChildArray1({ basket }) {
  return (
    <div className={styles.childDiv}>
      <h1>Child Component</h1>
      <h3>
        It takes basket of fruits from the parent component basically the array.
      </h3>
      <ul>
        {basket.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default ETPPropsChildArray1;
