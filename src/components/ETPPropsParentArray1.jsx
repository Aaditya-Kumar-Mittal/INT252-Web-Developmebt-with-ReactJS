import React from "react";
import ETPPropsChildArray1 from "./ETPPropsChildArray1";
import styles from './ETPStyleParentChild2.module.css';

function ETPPropsParentArray1() {
  const fruitsArr = ["Apple", "Mango", "Grapes", "Kiwi", "Pineapple"];

  return (
    <div className={styles.parentDiv}>
      <h1>Parent Component</h1>
      <h3>
        Parent will pass an array of fruits to the child component to display as
        list.
      </h3>
      <ETPPropsChildArray1 basket={fruitsArr} />
    </div>
  );
}

export default ETPPropsParentArray1;
