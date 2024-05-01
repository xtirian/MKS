import styles from "./quantityDisplay.module.scss";

import React from "react";

const QuantityDisplay = ({ quantity, add, remove }: QuantityProps) => {
  return (
    <div>
      <p className={styles.displayLabel}>Qtd:</p>
    <div className={styles.displayWrapper}>
      <button className={styles.left} type="button" onClick={remove}>-</button>
      <div>{quantity}</div>
      <button className={styles.right} type="button" onClick={add}>+</button>
    </div>
    </div>
  );
};

export default QuantityDisplay;

type QuantityProps = {
  quantity: number;
  add: () => void;
  remove: () => void;
};
