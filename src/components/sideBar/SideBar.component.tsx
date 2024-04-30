import { motion } from "framer-motion";
import React from "react";
import styles from "./SideBar.module.scss";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/services/reduxProvider";

export const SideBar = () => {
  const dispatch = useDispatch();
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

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
        <footer>
          <p>Total:</p>
          <p>R$ 0,00</p> {/* This value should be calculated */}
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
