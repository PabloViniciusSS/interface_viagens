/** @format */

import styles from "../../styles/components/Card.module.css";
import Images from "./images";

function Card(props) {
  return (
    <main class={styles.cards}>
      <section>
        <div class={styles.icon}>
          <img src={props.caminho} descricao={props.descricao} />
        </div>
        <p>{props.nome}</p>
        <div class={styles.link}>
          <a url={props.link}> {props.chamar}</a>
        </div>
      </section>
    </main>
  );
}

export default Card;
