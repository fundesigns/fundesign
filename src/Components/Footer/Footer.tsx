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
          <a href="https://www.linkedin.com/company/fundesign/">Linkedin</a>
          <a href="https://www.instagram.com/fundesign.in/">Instagram</a>
          <a href="https://www.behance.net/fundesigns">Behance</a>
          <a href="">Dribbble</a>
          <a href="">Twitter</a>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          Copyright © 2023 <b>fun designs.</b>
        </p>
        <div>
          <p>
            All Rights Reserved | <a href="">Terms and Conditions</a> |{" "}
            <a href="">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};
