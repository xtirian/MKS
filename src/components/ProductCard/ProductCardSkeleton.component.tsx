import React from "react";
import styles from "./productCard.module.scss";
import { FiShoppingBag } from "react-icons/fi";

const ProductCardSkeleton = () => {
  return (
    <div className={styles.cardWrap}>
      <div className={styles.cardContainer}>
        <div className={styles.cardImage} style={{ width: 111, height: 138 }} />
        <div className={styles.cardInfoWrapper}>
          <h3 className={styles.cardProductName} style={{ width: 100 }} />
          <div className={styles.cardProductPrice}>
            <p style={{ width: 50 }} />
          </div>
        </div>
        <p className={styles.cardDescription} style={{ width: 200 }} />
      </div>
      <button className={styles.addCartButton}>
        <FiShoppingBag /> <p>Comprar</p>
      </button>
    </div>
  );
};

export default ProductCardSkeleton;
