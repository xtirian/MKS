import React from "react";
import styles from "./grid42.module.scss";
interface Grid42Props {
  children: React.ReactNode;
}
const Grid42: React.FC<Grid42Props> = ({ children }) => {
  return <div className={styles.gridContainer42}>{children}</div>;
};

export default Grid42;
