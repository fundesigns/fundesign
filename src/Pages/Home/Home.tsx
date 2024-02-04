import { Footer } from "../../Components/Footer/Footer";
import { LetsTalk } from "../../Components/LetsTalk/LetsTalk";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Companies } from "./Components/Companies/Companies";
import { Landing } from "./Components/Landing/Landing";
import { Work } from "./Components/Work/Work";
import styles from "./Home.module.css";

type Props = {};

import opengrad from "../../assets/companies/opengrad.png";
import sarahs from "../../assets/companies/sarahstechno.png";
import mulearn from "../../assets/companies/mulearn.png";
import hound from "../../assets/companies/houndelect.png";
import cce from "../../assets/companies/cce.png";
import chola from "../../assets/companies/cholaart.png";
import unnathi from "../../assets/companies/unnathi.png";
import { DefineUS } from "./Components/DefineUS/DefineUS";
import { CounterContainer } from "./Components/CounterContainer/CounterContainer";

export const Home = (_props: Props) => {
  const partnersData = [
    { image: opengrad },
    { image: sarahs },
    { image: hound },
    { image: cce },
    { image: mulearn },
    { image: chola },
    { image: unnathi },
  ];
  return (
    <div className={styles.Wrapper}>
      <Navbar />
      <Landing />
      <Work />
      <Companies partners={partnersData} />
      <DefineUS />
      <CounterContainer />
      <LetsTalk />
      <Footer />
    </div>
  );
};
