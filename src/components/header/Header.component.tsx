import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { BsCart4 } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { useSelector } from "react-redux";
import { useSidebarContext } from "@/services/useSidebarContext";
import { RootState } from "@/services/reduxProvider";

export const Header = () => {
  const { toggleSidebar } = useSidebarContext();
  const { products } = useSelector((state: RootState) => state.cart);
  const controls = useAnimation();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const getQuantity = () => {
      let total = 0;
      products.forEach((product) => {
        total += product.quantity;
      });
      setQuantity(total);
    };
    getQuantity();
  }, [products]);

  const startWaveAnimation = () => {
    controls.start({
      scale: [0.85, 1.15, 0.95, 1],

      transition: { duration: 0.5 },
    });
    toggleSidebar();
  };

  return (
    <header className={styles.headerSect}>
      <div className={styles.headerContainer}>
        <div className={styles.headerTitle}>
          <h1>
            MKS
            <span>Sistemas</span>
          </h1>
        </div>
        <motion.button
          className={styles.cartButton}
          onClick={startWaveAnimation}
          initial={{ scale: 1 }}
          animate={controls}
          transition={{
            type: "spring",
            damping: 10,
            stiffness: 50,
            mass: 0.5,
          }}
        >
          <BsCart4 />
          <p>{quantity}</p>
        </motion.button>
      </div>
    </header>
  );
};
