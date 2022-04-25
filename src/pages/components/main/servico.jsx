/** @format */

import React, { Component } from "react";
import styles from "../../../styles/components/main/Servico.module.css";
import Card from "../card";
import Images from "../images";

export default class Servico extends Component {
  render() {
    return (
      <div className={styles.container_service}>
        <div>
          <h2>Serviços</h2>
        </div>
        <div className={styles.container_itens}>
          <div>
            <Card
              caminho='../images/icon-2.png'
              descricao='hospedagens'
              nome='Hospedagens'
              link='#'
              chamar='Comprar Agora'
            />
          </div>
          <div>
            <Card
              caminho='../images/icon-1.png'
              descricao='pacote de viagens'
              nome='Pacotes de viagens'
              link='#'
              chamar='Comprar Agora'
            />
          </div>
          <div>
            <Card
              caminho='../images/icon-3.png'
              descricao='roteiros personalizados'
              nome='Roteiros personalizados'
              link='#'
              chamar='Comprar Agora'
            />
          </div>
        </div>
      </div>
    );
  }
}
