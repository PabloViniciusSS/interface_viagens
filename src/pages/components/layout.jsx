/** @format */

import styles from "../../styles/components/Layout.module.css";
import Footer from "./footer";
import Header from "./header";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header  />
      </div>
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
