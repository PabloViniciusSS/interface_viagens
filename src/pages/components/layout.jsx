/** @format */

import styles from "../../styles/components/Layout.module.css";
import Footer from "./footer";
import Header from "./header";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <main>{children}</main>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
