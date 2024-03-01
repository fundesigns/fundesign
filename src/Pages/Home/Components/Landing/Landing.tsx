import styles from "./Landing.module.css";
import elipse from "./elipse.png";
import mu from "./assets/mulearn.png";
import saras from "./assets/saras.png";
import unnathi from "./assets/unnathi.png";
import chola from "./assets/chola.png";
import { useWindowScroll } from "@mantine/hooks";

import logo from "../../../../assets/Logo.png";
import { useEffect, useState } from "react";

type Props = {};

export const Landing = (_props: Props) => {
  const scroll = useWindowScroll();

  const [navbg, setNavBg] = useState(false);
  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <div className={styles.Wrapper} id="landing">
      <img
        className={`${styles.logo} ${navbg ? styles.hidden : ""}`}
        src={logo}
        alt="logo"
      />
      <img
        style={{ translate: `0px ${scroll[0].y}px` }}
        className={styles.elipse}
        src={elipse}
        alt=""
      />
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
