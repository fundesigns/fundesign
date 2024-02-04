import symbol from "../../assets/Symbol.png";
import logo from "../../assets/Logo.png";
import styles from "./CommingSoon.module.css";

type Props = {};

export const CommingSoon = (_props: Props) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.symbol} src={symbol} alt="" loading="lazy" />
      <img className={styles.logo} src={logo} alt="" loading="lazy" />
      <h3>COMING SOON</h3>

      <a href="/">Home</a>
    </div>
  );
};
