import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import styles from "./AboutUs.module.css";
import { Detail } from "./Components/Detail/Detail";
import { Landing } from "./Components/Landing/Landing";
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
      </div>
      <Footer />
    </div>
  );
};
