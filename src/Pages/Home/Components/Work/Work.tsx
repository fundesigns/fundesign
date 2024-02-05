import styles from "./Work.module.css";
import unnathi from "../../../projectAssets/Unnathi.png";
import opengrad from "../../../projectAssets/OpenGrad.png";
import { ClickArrowsvg } from "../../../../assets/svg";
type Props = {};

export const Work = (_props: Props) => {
  const data = [
    {
      image: unnathi,
      title: "Unnathi (KES)",
      description: "Kerala Empowerment Society | UI/UX Design + Development",
      link: "https://www.unnathikerala.org/",
    },
    {
      image: opengrad,
      title: "OpenGrad",
      description: "Non Governmental Organization | UI/UX Design + Development",
      link: "https://opengrad.in/",
    },
  ];
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <h1>
          Our favorite success <span className="colorText">stories</span>.
        </h1>
        <a href="/works">
          Check all of our works <ClickArrowsvg />
        </a>
      </div>
      <div className={styles.WrapperProject}>
        {data.map(({ image, title, description, link }) => {
          return (
            <a href={link} target="_blank" className={styles.Individual}>
              <img src={image} alt="" loading="lazy" />
              <div>
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
