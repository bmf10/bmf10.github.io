import { FC, useEffect, useState } from "react";
import Img from "./img.jpg";
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

interface Props {
  readonly onClickButton?: () => void;
}

const Header: FC<Props> = ({ onClickButton }: Props) => {
  const [height, setHeight] = useState<number | undefined>();
  const { t } = useTranslation();

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
    <header style={{ height: height ? height : "100vh" }}>
      <div className="absolute bg-primary inset-0 z-0" />
      <div className="h-full flex flex-col justify-center items-center relative z-10 fade-in">
        <img src={Img} alt="profile" className="w-52 rounded-full mb-8" />
        <h1 className="font-cursive md:text-5xl text-3xl text-textPrimary transform -rotate-6">
          - Bima Febriansyah -
        </h1>
        <h3 className="mt-8 text-textPrimary">Fullstack Developer</h3>
        <div className="flex flex-row mt-8">
          <a
            href="https://facebook.com/bmf1002"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebookSquare className="text-textPrimary text-3xl mx-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/bima-febriansyah-26286b194/"
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedinIn className="text-textPrimary text-3xl mx-5" />
          </a>
          <a
            href="https://instagram.com/_febriansyah10"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagram className="text-textPrimary text-3xl mx-5" />
          </a>
          <a href="https://github.com/bmf10" rel="noreferrer" target="_blank">
            <FaGithub className="text-textPrimary text-3xl mx-5" />
          </a>
        </div>
        <button
          onClick={onClickButton}
          className="bg-transparent hover:bg-textPrimary hover:text-textNiceOne text-textPrimary border rounded-md py-2 px-5 mt-12"
        >
          {t("getStarted")}
        </button>
      </div>
    </header>
  );
};

export default Header;
