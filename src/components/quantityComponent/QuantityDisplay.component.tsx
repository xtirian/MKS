import styles from "./quantityDisplay.module.scss";

import React from "react";

const QuantityDisplay = ({ quantity }: QuantityProps) => {
  return (
    <div>
      <p className={styles.displayLabel}>Qtd:</p>
    <div className={styles.displayWrapper}>
      <button className={styles.left}>-</button>
      <div>{quantity}</div>
      <button className={styles.right}>+</button>
    </div>
    </div>
  );
};

export default QuantityDisplay;

type QuantityProps = {
  quantity: number;
};
