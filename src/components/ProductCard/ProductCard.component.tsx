import React, { Dispatch } from "react";
import styles from "./productCard.module.scss";
import { ProductModel } from "@/models/product";
import { FiShoppingBag } from "react-icons/fi";

import Image from "next/image";
import { useCartContext } from "@/services/useCases/useCartContext";
import { useSidebarContext } from "@/services/useCases/useSidebarContext";

const ProductCard = (product: ProductModel) => {
  const { id, name, brand, description, price, photo } = product;
  const { addItemCart } = useCartContext();
  const { toggleSidebar } = useSidebarContext();

  const handleAddToCart = () => {
    addItemCart(product, 1);
    toggleSidebar(true);
  };

  return (
    <div className={styles.cardWrap} key={id}>
      <div className={styles.cardContainer} key={id}>
        <Image
          src={photo}
          alt={`image${name + brand}`}
          width={111}
          height={138}
          className={styles.cardImage}
        />
        <div className={styles.cardInfoWrapper}>
          <h3 className={styles.cardProductName}>
            {brand} {name}
          </h3>
          <div className={styles.cardProductPrice}>
            <p>R${Number(price).toFixed(0)} </p>
          </div>
        </div>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      <button className={styles.addCartButton} onClick={handleAddToCart}>
        <FiShoppingBag /> <p>Comprar</p>
      </button>
    </div>
  );
};

export default ProductCard;
