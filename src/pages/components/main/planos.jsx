/** @format */

import React, { Component } from "react";
import styles from "../../../styles/components/main/Planos.module.css";

export default class Planos extends Component {
  render() {
    return (
      <>
        <div className={styles.container_planos}>
          <div className={styles.plano}>
            <h3>Plano 2</h3>
            <ul>
              <li>Suporte 24h</li>
              <li>Serviços de quarto</li>
              <li>Guia turístico</li>
            </ul>
            <a href='#'>Saiba Mais!</a>
          </div>

          <div className={styles.plano}>
            <h3>Plano 2</h3>
            <ul>
              <li>Suporte 24h</li>
              <li>Serviços de quarto</li>
              <li>Guia turístico</li>
              <li>Roteiro de trilhas</li>
              <li>Serviço personalizado</li>
            </ul>
            <a href='#'>Saiba Mais!</a>
          </div>

          <div>
            <h3>Plano 3</h3>
            <ul>
              <li>Suporte 24h</li>
              <li>Serviços de quarto</li>
              <li>Guia turístico</li>
              <li>Roteiro de trilhas</li>
              <li>Serviço personalizado</li>
              <li>Área Vip</li>
            </ul>
            <a href='#'>Saiba Mais!</a>
          </div>
        </div>
      </>
    );
  }
}
