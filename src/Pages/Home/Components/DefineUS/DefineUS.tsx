import styles from "./DefineUS.module.css";
import main from "./main.png";
import designlogo from "./designlogo.png";
type Props = {};

export const DefineUS = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <h1>
        What <span className="colorText">define</span>s us.
      </h1>
      <div className={styles.ImageContainer}>
        <div className={styles.LogoImg}>
          <img src={designlogo} alt="" loading="lazy" />
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
              For us, design is not confined to aesthetic arrangement of
              objects. Rather, we consider design as a{" "}
              <span className="colorText">powerful tool</span> to create products
              and solutions for a better world.
            </p>
          </div>
        </div>

        <img className={styles.MainImg} src={main} alt="" loading="lazy" />
      </div>
    </div>
  );
};
