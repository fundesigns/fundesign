import styles from "./Detail.module.css";
import Fav from "/Fav.png";
type Props = {};

export const Detail = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.LeftWrapper}>
        <img src={Fav} alt="" />
        <div>
          <h1>CREATIVE</h1>
          <h2>DESIGN STUDIO</h2>
        </div>
      </div>
      <div className={styles.RightWrapper}>
        <p>
          We're a UI UX design studio curating experiences that users{" "}
          <span className="colorText">fall in love</span> with.
        </p>
        <p>
          {" "}
          Our team live and breath UX, tackling design challenges with
          excitement. Our mission is to{" "}
          <span className="colorText">improve lives</span> and businesses
          through our design decisions. We love to solve real world problems
          with design solutions that are magically simple and useable.
        </p>
        <p>
          For us, design is not confined to aesthetic arrangement of objects.
          Rather, we consider design as a <span className="colorText">powerful tool</span> to create
          products and solutions for a better world.
        </p>
      </div>
    </div>
  );
};
