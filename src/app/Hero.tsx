import { forwardRef, useEffect, useState } from "react";
import { Controls, Player } from "@lottiefiles/react-lottie-player";
import technologies from "./technologies.json";
import { TypeAnimation } from "react-type-animation";
import Button from "../components/Button";
import clsx from "clsx";

const Hero = forwardRef<any>((_props, ref) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 2750);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 pt-14"
      ref={ref}
    >
      <div className="flex justify-center items-center min-h-[calc(100vh-300px)] lg:min-h-[calc(100vh-100px)]">
        <div className="w-96 relative">
          <Player autoplay hover src="/avatar.json" className="z-10 relative">
            <Controls visible={false} />
          </Player>
          <div className="background-hero w-full h-full absolute left-0 top-4 z-0" />
          {technologies.map(({ alt, className, src, classNameShow }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={alt}
              src={src}
              className={clsx(className, { [classNameShow]: isLoaded })}
              alt={alt}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-start lg:justify-center lg:items-start">
        <TypeAnimation
          sequence={[
            "Hi, I'm Bima Febriansyah",
            3000,
            "Hi, I'm a Fullstack Developer",
            2000,
          ]}
          repeat={Infinity}
          className="text-2xl font-bold lg:text-4xl"
        />
        <p className="text-lg mt-4">
          A Full stack Developer who has a strong passion for programming. Easy
          to learn, solve problems, and love to learn new things.
        </p>
        <Button>Hire Me!</Button>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
