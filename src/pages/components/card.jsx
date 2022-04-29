/** @format */

import styles from "../../styles/components/Card.module.css";
import Images from "./images";

function Card(props) {
  return (
    <main class={styles.cards}>
      <section class={styles.cards_section}>
        <div class={styles.icon}>
          <img src={props.caminho} descricao={props.descricao} />
        </div>
        <p>{props.nome}</p>
        <a url={props.link}> {props.chamar}</a>
      </section>
    </main>
  );
}

export default Card;
