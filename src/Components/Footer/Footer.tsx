import styles from './Footer.module.css'
type Props = {};

export const Footer = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <h3>
          <span className="colorText">Follow our work</span>
        </h3>
        <div>
          <a href="">Linkedin</a>
          <a href="">Instagram</a>
          <a href="">Behance</a>
          <a href="">Dribbble</a>
          <a href="">Twitter</a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          Copyright © 2023 <b>fun designs.</b>
        </p>
        <div>
          <p>All Rights Reserved | <a href="">Terms and Conditions</a> | <a href="">Privacy Policy</a></p>
        </div>
      </div>
    </div>
  );
};
