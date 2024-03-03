import styles from "./Detail.module.css";
type Props = {};

export const Detail = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div>
        <h1>
          {" "}
          Why You <span className="colorText">Chose Us</span>.
        </h1>

        <p>
          We're a UI UX design studio curating experiences that users{" "}
          <span className="colorText">fall in love</span> with.
          <br /> Our team live and breath UX, tackling design challenges with
          excitement. Our mission is to{" "}
          <span className="colorText">improve lives</span> and businesses
          through our design decisions. We love to solve real world problems
          with design solutions that are magically simple and useable.
          <br /> For us, design is not confined to aesthetic arrangement of
          objects. Rather, we consider design as a{" "}
          <span className="colorText">powerful tool</span> to create products
          and solutions for a better world.
        </p>
      </div>
      <div className={styles.Boxes}>
        <div>egd</div>
        <div>reg</div>
        <div>reg</div>
      </div>
    </div>
  );
};
