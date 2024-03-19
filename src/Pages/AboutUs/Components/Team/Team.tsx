import styles from "./Team.module.css";
import enric from "./assets/enric.png";
import amalcp from "./assets/amalcp.png";
import ajay from "./assets/ajay.png";
import jenin from "./assets/jenin.png";
import vaishnav from "./assets/vaishnav.png";

import { FaGithub, FaLinkedin } from "react-icons/fa";

type Props = {};

export const Team = (_props: Props) => {
  const data = [
    {
      name: "Enric S Neelamkavil",
      image: enric,
      desig: "Co Founder, Sr. UI Designer",
      link: "https://www.linkedin.com/in/enricsneelamkavil/",
      github: "https://github.com/enricsneelamkavil",
    },
    {
      name: "Amal C P",
      image: amalcp,
      desig: "Co Founder, Lead UI Developer",
      link: "https://www.linkedin.com/in/amal-c-p/",
      github: "https://github.com/amalcpaulson/",
    },
    {
      name: "Ajay Vishnu E",
      image: ajay,
      desig: "Co Founder, Backend Developer",
      link: "https://www.linkedin.com/in/ajayvishnue/",
      github: "https://github.com/AjayVishnuE",
    },
    {
      name: "Jenin Joseph",
      image: jenin,
      desig: "Full Stack Developer",
      link: "https://www.linkedin.com/in/jenin-joseph/",
      github: "https://github.com/Jenin82",
    },
    {
      name: "Vaishnav M J",
      image: vaishnav,
      desig: "Project Manager",
      link: "",
      github: "https://github.com/Vaishnavmj",
    },
  ];
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.Wrapper}>
      <h1>
        <span className={styles.colorText}>Creatives</span> at Fun Designs.
      </h1>
      <div>
        {data.map((item, index) => (
          <div key={index} className={styles.teamMember}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.teamImage}
            />
            <div>
              <h2>{item.name}</h2>
              <p className={styles.colorText}>{item.desig}</p>
            </div>
            <div className={styles.ButtonWrapper}>
              {item.github && (
                <button
                  onClick={() => openInNewTab(item.github)}
                  className={styles.socialButton}
                >
                  <FaGithub />
                </button>
              )}
              {item.link && (
                <button
                  onClick={() => openInNewTab(item.link)}
                  className={styles.socialButton}
                >
                  <FaLinkedin />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
