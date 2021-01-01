import { FC, useEffect, useState } from "react";
import Img from "./img.jpg";
import { ImFacebook2, ImLinkedin, ImInstagram, ImGithub } from "react-icons/im";

const Header: FC = () => {
  const [height, setHeight] = useState<number | undefined>();

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
    <header style={{ height: height ? height : "100vh" }}>
      <div className="absolute bg-primary inset-0 z-0" />
      <div className="h-full flex flex-col justify-center items-center relative z-10 fade-in">
        <img src={Img} alt="profile" className="w-52 rounded-full mb-8" />
        <h1 className="font-cursive md:text-5xl text-3xl text-white transform -rotate-6">
          - Bima Febriansyah -
        </h1>
        <h3 className="mt-8 text-white">Fullstack Developer</h3>
        <div className="flex flex-row mt-8">
          <a
            href="https://facebook.com/bmf1002"
            rel="noreferrer"
            target="_blank"
          >
            <ImFacebook2 className="text-white text-3xl mx-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/bima-febriansyah-26286b194/"
            rel="noreferrer"
            target="_blank"
          >
            <ImLinkedin className="text-white text-3xl mx-5" />
          </a>
          <a
            href="https://instagram.com/_febriansyah10"
            rel="noreferrer"
            target="_blank"
          >
            <ImInstagram className="text-white text-3xl mx-5" />
          </a>
          <a href="https://github.com/bmf10" rel="noreferrer" target="_blank">
            <ImGithub className="text-white text-3xl mx-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
