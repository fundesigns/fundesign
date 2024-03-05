import styles from "./Detail.module.css";
import image from "../../../Home/Components/DefineUS/designlogo.png";
type Props = {};

export const Detail = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <img src={image} alt="" />
      <div>
        <p>
          We're a UI UX design studio curating experiences that users{" "}
          <span className="colorText">fall in love</span> with.
        </p>
        <p>
          Our team live and breath UX, tackling design challenges with
          excitement. Our mission is to{" "}
          <span className="colorText">improve lives</span> and businesses
          through our design decisions. We love to solve real world problems
          with design solutions that are magically simple and useable.
        </p>
        <p>
          For us, design is not confined to aesthetic arrangement of objects.
          Rather, we consider design as a{" "}
          <span className="colorText">powerful tool</span> to create products
          and solutions for a better world.
        </p>
      </div>
    </div>
  );
};
