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
    </div>
  );
}