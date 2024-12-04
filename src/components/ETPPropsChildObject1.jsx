import React from "react";
import styles from "./ETPStyleParentChild3.module.css";

function ETPPropsChildObject1({ basket }) {
  return (
    <div className={styles["table-container"]}>
      <h2>Fruit Basket from Parent in Child Component</h2>
      <table className={styles["fruit-table"]}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Icon</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((object, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{object.name}</td>
              <td>{object.icon}</td>
              <td>{object.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ETPPropsChildObject1;
