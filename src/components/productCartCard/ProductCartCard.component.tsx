import { ProductModel } from "@/models/product";
import styles from "./productCartCard.module.scss";
import { IoMdClose } from "react-icons/io";

import React from "react";
import Image from "next/image";
import QuantityDisplay from "../quantityComponent/QuantityDisplay.component";
import { useCartContext } from "@/services/useCartContext";
import { CartProductModel } from "@/models/inCartProduct";

const ProductCartCard = (product: CartProductModel) => {
  const { id, photo, name, brand, price, quantity } = product;
  const { addItemCart, editQuantity, removeItemCart } = useCartContext();

  const handleAdd = () => {
    addItemCart(product as unknown as ProductModel, 1);
  };
  const handleEdit = () => {
    if (quantity - 1 > 0) {
      editQuantity(product as unknown as ProductModel, quantity - 1);
    } else {
      removeItemCart(product as unknown as ProductModel);
    }
  };

  return (
    <div className={styles.productCartCardWrapper} key={id}>
      <Image src={photo} alt={name} width={46} height={57} />
      <h4>
        {brand} {name}
      </h4>
      <QuantityDisplay
        quantity={quantity}
        add={handleAdd}
        remove={handleEdit}
      />
      <p className={styles.priceTag}>R${(price * quantity).toFixed(0)}</p>
    </div>
  );
};

export default ProductCartCard;
