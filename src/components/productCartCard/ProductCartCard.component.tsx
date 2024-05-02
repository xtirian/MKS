import { ProductModel } from "@/models/product";
import { CartProductModel } from "@/models/inCartProduct";
import styles from "./productCartCard.module.scss";
import React, { useCallback } from "react";
import Image from "next/image";
import QuantityDisplay from "../quantityComponent/QuantityDisplay.component";
import { useCartContext } from "@/services/useCases/useCartContext";
import { IoMdClose } from "react-icons/io";

const ProductCartCard = <T extends CartProductModel>(product: Readonly<T>) => {
  const { id, photo, name, brand, price, quantity } = product;
  const { addItemCart, editQuantity, removeItemCart } = useCartContext();

  const handleAdd = useCallback(() => {
    addItemCart(product as unknown as ProductModel, 1);
  }, [addItemCart, product]);

  const handleRemoveFromCart = useCallback(() => {
    removeItemCart(product as unknown as ProductModel);
  }, [product, removeItemCart]);

  const handleEdit = useCallback(() => {
    if (quantity - 1 > 0) {
      editQuantity(product as unknown as ProductModel, quantity - 1);
    } else {
      removeItemCart(product as unknown as ProductModel);
    }
  }, [editQuantity, product, quantity, removeItemCart]);

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
      <button
        type="button"
        onClick={() => handleRemoveFromCart()}
        className={styles.removeButton}
      >
        <IoMdClose />
      </button>
    </div>
  );
};

export default ProductCartCard;
