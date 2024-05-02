import { motion } from "framer-motion";
import React from "react";
import styles from "./SideBar.module.scss";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { RootState } from "../../services/reduxProvider";
import ProductCartCard from "../productCartCard/ProductCartCard.component";
import { useSidebarContext } from "../../services/useCases/useSidebarContext";
import { useRouter } from "next/router";
import useGetTotalCart from "../../services/useCases/useGetTotalCart";

export const SideBar = () => {
  const { toggleSidebar } = useSidebarContext();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const { products } = useSelector((state: RootState) => state.cart);

  const total = useGetTotalCart();

  const router = useRouter();
  const goCheckout = () => {
    if (products.length === 0) return alert("Adicione produtos ao carrinho");
    router.push("/checkout");
    toggleSidebar();
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
              </div>
            ))
          ) : (
            <h2>Nenhum produto no carrinho</h2>
          )}
        </div>
      </div>
      <footer>
        <p>Total:</p>
        <p>R$ {total.toFixed(0)}</p>
      </footer>
      <button className={styles.submitButton} onClick={goCheckout}>
        Finalizar Compra
      </button>
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
