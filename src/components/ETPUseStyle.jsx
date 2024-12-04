import React from "react";
import styles from "./ETPStyleDemo.module.css";

function ETPUseStyle() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Hello, World!</h1>
      <p className={styles.para}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
        velit similique animi vero excepturi? Placeat explicabo officiis labore.
        Sunt, molestias repellat similique voluptate expedita nisi fugit placeat
        consequatur necessitatibus corrupti nostrum, qui esse laudantium impedit
        dignissimos assumenda a enim neque, consequuntur cum facilis ut autem
        quae? In, amet. Reiciendis, repudiandae.
      </p>
    </div>
  );
}

export default ETPUseStyle;
