import styles from "./Landing.module.css";
import elipse from "./elipse.png";
import mu from "./assets/mulearn.png";
import saras from "./assets/saras.png";
import unnathi from "./assets/unnathi.png";
import chola from "./assets/chola.png";

type Props = {};

export const Landing = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <img className={styles.elipse} src={elipse} alt="" />
      <div className={styles.NewElements}>
        <img className={styles.mu} src={mu} alt="" />
        <img className={styles.sar} src={saras} alt="" />
        <img className={styles.unn} src={unnathi} alt="" />
        <img className={styles.cho} src={chola} alt="" />
      </div>
    </div>
  );
};
