import { FC, ReactNode, useEffect, useState } from "react";
import Paragraph from "../../../components/Paragraph";

interface Props {
  readonly icon?: ReactNode | string;
  readonly title?: string;
  readonly subtitle?: string;
  readonly text?: string;
  readonly align: "left" | "right";
}

const TimeLine: FC<Props> = ({ icon, subtitle, text, title, align }: Props) => {
  const [width, setWidth] = useState<number>(1366);
  const [alignState, setAlignState] = useState<"left" | "right">(align);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    if (width < 640) {
      setAlignState("right");
    }
  }, [width]);

  return (
    <div
      className={`my-4 flex justify-between items-center w-full left-timeline ${
        alignState === "left" ? "flex-row-reverse" : ""
      }`}
    >
      {width >= 640 ? <div className="order-1 sm:w-3/6" /> : undefined}
      <div className="z-20 flex items-center order-1 ml-px bg-primary w-10 h-10 rounded-full">
        <h1 className="mx-auto font-semibold text-lg text-white">{icon}</h1>
      </div>
      <div className="order-1 sm:w-3/6 w-10/12 px-6 py-4">
        <h3
          className={`mb-5 font-normal text-primary text-2xl ${
            alignState === "left" ? "text-right" : "text-left"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-gray-400 mb-5 ${
            alignState === "left" ? "text-right" : "text-left"
          }`}
        >
          {subtitle}
        </p>
        <Paragraph
          className={alignState === "left" ? "text-right" : "text-left"}
        >
          {text}
        </Paragraph>
      </div>
    </div>
  );
};

export default TimeLine;
