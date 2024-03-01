import styles from "./ExcelAt.module.css";
import images from "./image.png";
import mobiles from './mobile.png'
type Props = {};

export const ExcelAt = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <h1>
        What we&nbsp;<span className="colorText">excel</span>&nbsp;at.
      </h1>
      <div>
        <img className={styles.imageset} src={images} alt="" />
        <img className={styles.mobiles} src={mobiles} alt="" />
      </div>
    </div>
  );
};
