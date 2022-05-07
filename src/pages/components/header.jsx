/** @format */

import styles from "../../styles/components/Header.module.css";
import React, { Component } from "react";
import Link from "next/link";

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header_container}>
        <div className={styles.logo_header}>
          <h1>FlexTurismo</h1>
        </div>
        <div className={styles.navbar}>
          <button className={styles.button}>
            <a href='/quem_somos'>Quem Somos</a>
          </button>
          <button className={styles.button}>
            <a href='/serviços'>Serviços</a>
          </button>
          <button className={styles.button}>
            <a href='/Planos'>Planos</a>
          </button>
        </div>
      </div>
    );
  }
}
