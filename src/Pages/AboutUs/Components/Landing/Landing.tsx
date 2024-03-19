import landing from "../../../Works/assets/halfCircle.png";
import styles  from "./Landing.module.css";
type Props = {}

export const Landing = (_props: Props) => {
  return (
    <div className={styles.Wrapper} id="landing">
      <img src={landing} alt="" loading="lazy" />
      <h1>
        ABOUT <span className="colorText">US</span>.
      </h1>
      <h3>We believe in crafting sweet experiences.</h3>
    </div>
  );
}