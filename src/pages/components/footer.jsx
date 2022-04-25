/** @format */

import styles from "../../styles/components/Footer.module.css";

import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        <footer>
          <p>&copy; 2022 CSS Flexbox</p>
          <p>Desenvolvido por: Pablo Vinícius</p>
        </footer>
      </div>
    );
  }
}
