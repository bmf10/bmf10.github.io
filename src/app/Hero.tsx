"use client";
import Image from "next/image";
import { ForwardRefRenderFunction, forwardRef } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";

interface Props {
  readonly onWorkClick: () => void;
}

const Hero: ForwardRefRenderFunction<HTMLElement, Props> = (props, ref) => {
  return (
    <section
      className="min-h-screen z-0 relative flex items-center flex-col lg:mt-10 lg:flex-row group"
      ref={ref}
    >
      <Slide triggerOnce className="z-10">
        <div className="flex flex-col justify-center gap-4 h-full z-10 mt-20 items-start md:mt-80 w-full lg:mt-32">
          <h2 className="text-white text-[28px] font-bold leading-[33.60px] tracking-wide">
            <span className="text-sky-400 text-[28px] leading-[33.60px] tracking-wide">
              {"</>"}
            </span>{" "}
            Bima
            <br />
            <span className="opacity-75 z-0 text-white text-base font-normal leading-tight tracking-widest">
              Febriansyah
            </span>
          </h2>
          <TypeAnimation
            sequence={[
              "Hi, I'm Bima Febriansyah",
              1000,
              "Hi, I'm a Fullstack Engineer",
              4000,
            ]}
            repeat={Infinity}
            className="text-3xl w-full font-bold overflow-hidden lg:text-[64px] lg:leading-[76.80px] lg:w-[631px] h-20 md:h-auto lg:h-40"
          />
          <p className="text-opacity-75 text-white text-base font-medium leading-7 tracking-tight lg:w-[631px]">
            A Full stack Developer who has a strong passion for programming.{" "}
            <br />
            Easy to learn, solve problems, and love to learn new things.
          </p>

          <div className="mt-6 flex gap-10 items-center">
            <button
              onClick={props.onWorkClick}
              className="cursor-pointer py-2 pr-2 pl-5 border-2 rounded-full border-[#333437] leading-tight flex items-center gap-4 hover:scale-105 transition-transform"
            >
              <span> View My Work</span>
              <div className="bg-white rounded-full p-2">
                <Image
                  src="/new/arrow-down.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </div>
            </button>
            <div className="flex gap-4">
              <a
                href="https://github.com/bmf10"
                target="_blank"
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                <Image
                  src="/new/github.svg"
                  alt="arrow"
                  width={32}
                  height={32}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/bima-febriansyah/"
                target="_blank"
                className="cursor-pointer hover:scale-105 transition-transform"
              >
                <Image
                  src="/new/linkedin.svg"
                  alt="arrow"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
        </div>
      </Slide>

      <Image
        src="/new/hero.webp"
        alt="hero-img"
        width={584}
        height={506}
        className="mt-20 mx-auto relative lg:absolute lg:top-[60%] lg:right-0 lg:transform lg:-translate-y-1/2 lg:mt-0 lg:z-0 grayscale group-hover:grayscale-0 transition-all"
        priority
      />
    </section>
  );
};

export default forwardRef(Hero);
