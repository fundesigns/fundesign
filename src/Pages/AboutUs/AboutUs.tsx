import { Footer } from "../../Components/Footer/Footer";
import { LetsTalk } from "../../Components/LetsTalk/LetsTalk";
import { Navbar } from "../../Components/Navbar/Navbar";
import styles from "./AboutUs.module.css";
import { Detail } from "./Components/Detail/Detail";
import { Landing } from "./Components/Landing/Landing";
import { Team } from "./Components/Team/Team";
type Props = {};

export const AboutUs = (_props: Props) => {
  const preventRightClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    event.preventDefault();
  };
  return (
    <div className={styles.Wrapper} onContextMenu={preventRightClick}>
      <Navbar />
      <div className={styles.InnerSegment}>
        <Landing />
        <Detail />
        <Team />
      </div>
      <LetsTalk />

      <Footer />
    </div>
  );
};
