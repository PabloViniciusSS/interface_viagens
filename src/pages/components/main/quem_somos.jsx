/** @format */

import styles from "../../../styles/components/main/QuemSomos.module.css";

import React, { Component } from "react";

export default class QuemSomos extends Component {
  render() {
    return (
      <div className={styles.container_quemsomos}> 
       <h2>Quem somos</h2>   
        <div className={styles.container_conteudo}>
          <img src='../images/1-quem-somos.png' alt='balcão de atendimento' />
            <p> It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The point
              of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here, content
              here', making it look like readable English.
            </p>
        
        </div>
      </div>
    );
  }
}
