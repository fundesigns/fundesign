import { Footer } from "../../Components/Footer/Footer";
import { LetsTalk } from "../../Components/LetsTalk/LetsTalk";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Landing } from "./Components/Landing/Landing";
import { Projects } from "./Components/Projects/Projects";

type Props = {}

export const Works = (_props: Props) => {
  return (
    <div>
      <Navbar />
      <Landing />
      <Projects />
      <LetsTalk />
      <Footer />
    </div>
  );
}