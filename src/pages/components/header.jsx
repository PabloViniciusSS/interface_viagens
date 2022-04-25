/** @format */

import styles from "../../styles/components/Header.module.css";
import React, { Component } from "react";
import Link from "next/link";

export default class Header extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.container_header}>
          <h1>FlexTurismo</h1>
          <ul className={styles.container_header}>
            <li>
              <a href='/quem_somos'>Quem Somos</a>
            </li>
            <li>
              <a href='/serviços'>Serviços</a>
            </li>
            <li>
              <a href='/Planos'>Planos</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
