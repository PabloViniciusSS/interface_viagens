/** @format */
import styles from "../../styles/components/Images.module.css";

function Images(props) {
  return (
    <div className={styles.img}>
      <img src={props.caminho} alt={props.descricao} />
    </div>
  );
}

export default Images;
