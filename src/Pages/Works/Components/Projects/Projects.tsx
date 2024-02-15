
import styles from "./Projects.module.css";

import unnathi from "../../../projectAssets/Unnathi.png";
import opengrad from "../../../projectAssets/OpenGrad.png";
import cdw from '../../../projectAssets/cdw.png'
import sarastechno from "../../../projectAssets/sarahsTechno.png";
import chola from "../../../projectAssets/chola.png";
import gta from "../../../projectAssets/gta.png";
import mucce from "../../../projectAssets/mucce.png";
import wrap from "../../../projectAssets/wrap.png";
import top100 from "../../../projectAssets/top100.png";
import creatorcommune from "../../../projectAssets/creatorcommune.png";
import fram from "../../../projectAssets/fram.png";
import protoheim from "../../../projectAssets/protohein.png";
import designathon from "../../../projectAssets/designathon.png";
import samibagi from "../../../projectAssets/samibagi.png";
import techletics from "../../../projectAssets/techletics.png";
import enric from "../../../projectAssets/enricportfolio.png";
import cupids from "../../../projectAssets/cupidchase.png";

type Props = {};

export const Projects = (_props: Props) => {
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
      link: "http://opengrad.in/",
    },
    {
      image: cdw,
      title: "CODe Design Week ‘23",
      description: "College Event | UI/UX Design + Development",
      link: "https://codedesignweek.netlify.app/",
    },
    {
      image: chola,
      title: "Chola Art Gallery",
      description: "Art Gallery | UI/UX Design + Development",
      link: "cholaart.in",
    },
    {
      image: sarastechno,
      title: "Sarahs Techno",
      description: "Food Machine Manufacturer | UI/UX Design + Development",
      link: "https://saras-techno.vercel.app/",
    },
    {
      image: gta,
      title: "Grand Tech Adventure",
      description: "National Event | UI/UX Design + Development",
      link: "https://gta.mulearn.org/",
    },
    {
      image: mucce,
      title: "MuLearn CCE Chapter",
      description: "Community | UI/UX Design + Development",
      link: "https://mulearn-cce.vercel.app/",
    },
    {
      image: wrap,
      title: "WRAP - Waste Management",
      description: "Web Application | UI/UX Design + Development",
      link: "https://wrap-web-app.netlify.app/",
    },
    {
      image: top100,
      title: "Top 100 Coders",
      description: "National Event | UI/UX Design",
      link: "https://top100coders.com/",
    },
    {
      image: creatorcommune,
      title: "Creators Commune",
      description: "Community | UI/UX Design + Development",
    },
    {
      image: fram,
      title: "FRAM - Farmers Assistant",
      description: "Mobile Application | UI/UX Design + Development",
    },
    {
      image: protoheim,
      title: "Protoheim",
      description: "Educational Startup | UI/UX Design",
    },
    {
      image: designathon,
      title: "Designathon ‘24",
      description: "National Event | UI/UX Design",
      link: "https://designathon-24.vercel.app/",
    },
    {
      image: samibagi,
      title: "Sami Bazzi",
      description: "Portfolio | UI/UX Design",
    },
    {
      image: techletics,
      title: "Techletics ‘24",
      description: "National Event | UI/UX Design",
      link: "https://techletics-24.vercel.app/",
    },
    {
      image: enric,
      title: "Enric S Neelamkavil",
      description: "Portfolio | UI/UX Design",
    },
    {
      image: cupids,
      title: "Cupid’s Chase",
      description: "Web Application | UI/UX Design + Development",
      link: "https://cupidschase.vercel.app/",
    },
  ];
  return (
    <div className={styles.Wrapper}>
      {data.map(({ image, title, description, link },key) => {
        return (
          <a href={link} target="_blank" className={styles.Individual}  key={key}>
            <img src={image} alt="" loading="lazy" />
            <div>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </a>
        );
      })}
    </div>
  );
};
