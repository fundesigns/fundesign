import symbol from "../../assets/Symbol.png";
import logo from "../../assets/Logo.png";
import styles from "./CommingSoon.module.css";

type Props = {};

export const CommingSoon = (_props: Props) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.symbol} src={symbol} alt="" />
      <img className={styles.logo} src={logo} alt="" />
      <h3>COMING SOON</h3>
    </div>
  );
};
