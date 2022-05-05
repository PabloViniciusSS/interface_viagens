import React from 'react'
import styles from "../../styles/components/CardPlans.module.css";

export default function Card_Plans(props) {
  return (
    <div className={styles.plans_container}>
            <h3>{props.titulo}</h3>
        <div className={styles.list_container}>
            <div className={styles.services}>
                <p>Suporte 24h</p> 
                {props.suporte} 
            </div>
            <div className={styles.services}>
                <p>Serviços de Quarto</p>
                {props.quarto}
            </div >
            <div className={styles.services}>
                <p>Guia Turístico</p>
                {props.guia}
            </div>
            <div className={styles.services}>
                <p>Roteiro de Trilhas</p>
               {props.roteiro}
            </div>
            <div className={styles.services}>
                <p>Serviço Personalizado</p>
                {props.personalizado}
            </div>
            <div className={styles.services}>
                <p>Área Vip</p>
                {props.vip}
            </div>
            </div>
            <a href={props.link}>Saiba Mais</a>
          </div>
  )
}




