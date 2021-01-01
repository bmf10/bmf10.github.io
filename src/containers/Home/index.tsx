import { FC, Fragment } from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";

const Home: FC = () => {
  return (
    <Fragment>
      <Header />
      <AboutMe />
    </Fragment>
  );
};

export default Home;
