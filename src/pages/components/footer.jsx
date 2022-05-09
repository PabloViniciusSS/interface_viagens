/** @format */

import styles from "../../styles/components/Footer.module.css";
import { BsWhatsapp } from 'react-icons/bs';

import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (

        <footer className={styles.container}>
          <p>&copy; 2022 CSS Flexbox</p>
          <p>Desenvolvido por: Pablo Vinícius Sousa Silva</p>
            <p><BsWhatsapp /> (62) 99329-6503</p>
        </footer>
    );
  }
}
