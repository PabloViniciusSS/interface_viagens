/** @format */

import React, { Component } from "react";
import styles from "../../../styles/components/main/Servico.module.css";
import Images from "../images";

export default class Servico extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Serviços</h1>
        <div className={styles.container_itens}>
          <div div className={styles.items}>
            <div>
              <Images caminho='../images/icon-2.png' descricao='hospedagens' />
            </div>
            <div className={styles.text}>
              <p>Hospedagens</p>
              <a href='#'>Comprar Agora</a>
            </div>
          </div>

          <div div className={styles.items}>
            <div>
              <Images
                caminho='../images/icon-1.png'
                descricao='pacote de viagens'
              />{" "}
            </div>
            <div className={styles.text}>
              <p>Pacotes de viagens</p>
              <a href='#'>Comprar Agora</a>
            </div>
          </div>

          <div className={styles.items}>
            <div className={styles.img}>
              <Images
                caminho='../images/icon-3.png'
                descricao='roteiros personalizados'
              />
            </div>
            <div className={styles.text}>
              <p>Roteiros personalizados</p>
              <a href='#'>Comprar Agora</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
