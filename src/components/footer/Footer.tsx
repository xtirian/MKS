import styles from "./Footer.module.scss";

import React from "react";

const Footer = () => {
  return (
    <footer className={styles.footerSect}>
      <div className="footContainer">
        MKS sistemas &#169; Todos os direitos reservados
      </div>
    </footer>
  );
};

export default Footer;
