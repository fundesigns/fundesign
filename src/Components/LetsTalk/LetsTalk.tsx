import styles from "./LetsTalk.module.css";
type Props = {};

export const LetsTalk = (_props: Props) => {
  return (
    <div className={styles.Wrapper} id="contact">
      <h1>
        Lets <span className="colorText">talk</span>.
      </h1>
      <div className={styles.Container}>
        <div>
          <h2>Are you looking for the perfect design?</h2>
          <h3>
            Then you’re in the right place. Get the best designs you’re looking
            for. Just reach out and let us know!
          </h3>
        </div>
        <div>
          <a href="mailto:fundesignindia@gmail.com">fundesignindia@gmail.com</a>
          <div className={styles.phone}>
            <a href="tel:+917994043754">+91 79940 43754</a> |
            <a href="tel:+919400743624">+91 94007 43624</a>
          </div>
        </div>
      </div>
    </div>
  );
};
