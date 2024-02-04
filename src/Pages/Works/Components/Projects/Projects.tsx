import image from "../../assets/default.png";
import styles from "./Projects.module.css";

import unnathi from '../../../projectAssets/Unnathi.png'
import opengrad from '../../../projectAssets/OpenGrad.png'
import sarastechno from "../../../projectAssets/sarahsTechno.png";
type Props = {};

export const Projects = (_props: Props) => {
  const data = [
    {
      image: unnathi,
      title: "Unnathi (KES)",
      description: "Kerala Empowerment Society | UI/UX Design + Development",
    },
    {
      image: opengrad,
      title: "OpenGrad",
      description: "Non Governmental Organization | UI/UX Design + Development",
    },
    {
      image: image,
      title: "CODe Design Week ‘23",
      description: "College Event | UI/UX Design + Development",
    },
    {
      image: image,
      title: "Chola Art Gallery",
      description: "Art Gallery | UI/UX Design + Development",
    },
    {
      image: sarastechno,
      title: "Sarahs Techno",
      description: "Food Machine Manufacturer | UI/UX Design + Development",
    },
    {
      image: image,
      title: "Grand Tech Adventure",
      description: "National Event | UI/UX Design + Development",
    },
    {
      image: image,
      title: "MuLearn CCE Chapter",
      description: "Community | UI/UX Design + Development",
    },
    {
      image: image,
      title: "WRAP - Waste Management",
      description: "Web Application | UI/UX Design + Development",
    },
    {
      image: image,
      title: "Top 100 Coders",
      description: "National Event | UI/UX Design",
    },
    {
      image: image,
      title: "Creators Commune",
      description: "Community | UI/UX Design + Development",
    },
    {
      image: image,
      title: "FRAM - Farmers Assistant",
      description: "Mobile Application | UI/UX Design + Development",
    },
    {
      image: image,
      title: "Protoheim",
      description: "Educational Startup | UI/UX Design",
    },
  ];
  return (
    <div className={styles.Wrapper}>
      {data.map(({ image, title, description }) => {
        return (
          <div className={styles.Individual}>
            <img src={image} alt="" />
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
