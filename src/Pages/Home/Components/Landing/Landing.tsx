import styles from "./Landing.module.css";
import elipse from "./elipse.png";
import mu from "./assets/mulearn.png";
import saras from "./assets/saras.png";
import unnathi from "./assets/unnathi.png";
import chola from "./assets/chola.png";
import { useWindowScroll } from "@mantine/hooks";

type Props = {};

export const Landing = (_props: Props) => {
  const scroll = useWindowScroll();
  return (
    <div className={styles.Wrapper}>
      <img className={styles.elipse} src={elipse} alt="" />
      <div className={styles.NewElements}>
        <img
          className={styles.mu}
          src={mu}
          alt=""
          style={{ translate: `-${scroll[0].y}px 0px` }}
        />
        <img
          className={styles.sar}
          src={saras}
          alt=""
          style={{ translate: `-${scroll[0].y}px 0px` }}
        />
        <img
          className={styles.unn}
          src={unnathi}
          alt=""
          style={{ translate: `${scroll[0].y}px 0px` }}
        />
        <img
          className={styles.cho}
          src={chola}
          alt=""
          style={{ translate: `${scroll[0].y}px 0px` }}
        />
      </div>
    </div>
  );
};
