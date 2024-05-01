import { motion } from "framer-motion";
import React, { useMemo } from "react";
import styles from "./SideBar.module.scss";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState } from "@/services/reduxProvider";
import ProductCartCard from "../productCartCard/ProductCartCard.component";
import { useSidebarContext } from "@/services/useCases/useSidebarContext";
import { useCartContext } from "@/services/useCases/useCartContext";
import { ProductModel } from "@/models/product";

export const SideBar = () => {
  const { toggleSidebar } = useSidebarContext();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const { products } = useSelector((state: RootState) => state.cart);

  const total = useMemo(() => {
    return products.reduce((accumulator, product) => {
      return accumulator + product.price * product.quantity;
    }, 0);
  }, [products]);

  const { removeItemCart } = useCartContext();
  const handleRemoveFromCart = (product: ProductModel) => {
    removeItemCart(product);
  };

  return (
    <motion.div
      className={styles.sideBarWraper}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      variants={sideBarAnimation}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 50,
        mass: 0.5,
      }}
    >
      <div className={styles.sideBarContainer}>
        <header>
          <h2>Carrinho de compras</h2>
          <button type="button" onClick={() => toggleSidebar()}>
            <IoMdClose />
          </button>
        </header>
        <div className={styles.productCartGrid}>
          {products.length ? (
            products.map((product) => (
              <div key={product.id} className={styles.productCartCardWrapper}>
                <ProductCartCard
                  id={product.id}
                  name={product.name}
                  brand={product.brand}
                  photo={product.photo}
                  price={product.price}
                  quantity={product.quantity}
                />
                <button
                  type="button"
                  onClick={() =>
                    handleRemoveFromCart(product as unknown as ProductModel)
                  }
                  className={styles.removeButton}
                >
                  <IoMdClose />
                </button>
              </div>
            ))
          ) : (
            <h2>Nenhum produto no carrinho</h2>
          )}
        </div>
        <footer>
          <p>Total:</p>
          <p>R$ {total.toFixed(0)}</p>
        </footer>
      </div>
      <button className={styles.submitButton}>Finalizar Compra</button>
    </motion.div>
  );
};
const sideBarAnimation = {
  hidden: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};
