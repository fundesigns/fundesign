import landing from "../../assets/halfCircle.png";
import styles  from "./Landing.module.css";
type Props = {}

export const Landing = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
        <img src={landing} alt="" />
        <h1>OUR{" "}<span className="colorText">WORKS</span>.</h1>
    </div>
  )
}