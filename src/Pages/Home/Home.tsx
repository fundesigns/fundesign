import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Landing } from "./Components/Landing/Landing";
import styles from './Home.module.css'
type Props = {};

export const Home = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
};
