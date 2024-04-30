import React from "react";
import styles from "./Header.module.scss";
import { BsCart4 } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { useDispatch } from "react-redux";

export const Header = () => {
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };
  const controls = useAnimation();
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
          <p>0</p>
          {/* TODO: Atualizar para colocar o número de itens do carrinho vindos do Redux */}
        </motion.button>
      </div>
    </header>
  );
};
