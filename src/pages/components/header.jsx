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
         <li className={styles.button}>
            <a href='/quem_somos'>Quem Somos</a>
        </li> 
        <li className={styles.button}>
            <a href='/serviços'>Serviços</a>
        </li> 
        <li className={styles.button}>
            <a href='/Planos'>Planos</a>
        </li> 
        </div>
      </div>
    );
  }
}
