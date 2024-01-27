import { Footer } from "../../Components/Footer/Footer";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Landing } from "./Components/Landing/Landing";

type Props = {};

export const Home = (_props: Props) => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
};
