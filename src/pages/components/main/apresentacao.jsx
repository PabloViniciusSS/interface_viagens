/** @format */

import styles from "../../../styles/components/main/Apresentacao.module.css";

import React, { Component } from "react";
import Button from "../button";
import Images from "../images";

export default class Apresentacao extends Component {
  render() {
    return (
      <div className={styles.container_apresentacao}>
        <div className={styles.texto_apresentacao}>
          <h1>FlexTurismo</h1>
          <p>O melhor serviços para você</p>
          <Button link='/servicos' name='Saiba mais!'></Button>
        </div>
        <div>
          <Images caminho='../images/main.png' />
        </div>
      </div>
    );
  }
}
