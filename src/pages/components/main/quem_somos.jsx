/** @format */

import styles from "../../../styles/components/main/QuemSomos.module.css";

import React, { Component } from "react";
import Button from "../button";
import Images from "../images";

export default class QuemSomos extends Component {
  render() {
    return (
      <div className={styles.container_quemsomos}>
        <div className={styles.text}>
          <h2>Quem somos</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
        <div className={styles.img}>
          <Images
            caminho='../images/1-quem-somos.png'
            descricao='balcão de atendimento'
          />
        </div>
      </div>
    );
  }
}
