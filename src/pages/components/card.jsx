/** @format */

import styles from "../../styles/components/Card.module.css";
import Images from "./images";

function Card(props) {
  return (
    <div className={styles.card}>
      <img src={props.caminho} descricao={props.descricao} />
      <p>{props.nome}</p>
      <a url={props.link}> {props.chamar}</a>
    </div>
  );
}

export default Card;
