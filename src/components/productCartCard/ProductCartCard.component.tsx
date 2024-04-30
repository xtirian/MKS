import { ProductModel } from "@/models/product";
import styles from "./productCartCard.module.scss";

import React from "react";
import Image from "next/image";
import QuantityDisplay from "../quantityComponent/QuantityDisplay.component";

const ProductCartCard = (product: CartProps) => {
  const { id, photo, name, brand, price, quantity } = product;
  return (
    <div className={styles.productCartCardWrapper} key={id}>
      <Image src={photo} alt={name} width={46} height={57} />
      <h4>{brand} {name}</h4>
      <QuantityDisplay quantity={quantity} />
      <p className={styles.priceTag}>R${(price*quantity).toFixed(0)}</p>
    </div>
  );
};

export default ProductCartCard;

type CartProps = Omit< ProductModel, "description"> & {
  quantity: number;
};
