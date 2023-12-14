import Image from "next/image";
import { ForwardRefRenderFunction, forwardRef } from "react";
import { Fade, Slide } from "react-awesome-reveal";

const About: ForwardRefRenderFunction<HTMLElement, unknown> = (_props, ref) => {
  return (
    <section className="pt-[100px] min-h-screen" ref={ref}>
      <Fade triggerOnce>
        <div className="flex flex-col md:flex-row md:gap-20 lg:gap-24 items-center">
          <Image
            src="/new/my-image.webp"
            alt="profile"
            width={168}
            height={168}
            className="flex-shrink-0"
          />
          <div className="mt-10 md:mt-0">
            <h2 className="text-white font-bold text-3xl lg:text-[64px] lg:leading-[76.80px] mb-4">
              About Me
            </h2>
            <p className="text-white text-opacity-75 text-base font-medium leading-7 tracking-tight lg:w-2/3">
              Let’s get acquainted and find out what we have in common. I’m
              always curious to learn new things and meet new people.
            </p>
          </div>
        </div>
      </Fade>
      <Slide direction="up" triggerOnce>
        <article className="mt-10 md:mt-16 text-white text-lg md:text-xl lg:text-2xl font-semibold md:leading-[43.20px] tracking-wide">
          I’m currently working with{" "}
          <a
            href="https://metaco.gg"
            target="_blank"
            className="text-[#0D3DD5] hover:underline"
          >
            MetacoGG
          </a>
          , where I contribute to the development of websites, chat features,
          payment gateway integration, and group tournament systems. I use
          technologies such as Next JS, Express, Mongo, and etc to create
          user-friendly and scalable solutions.
        </article>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div className="flex flex-col items-start md:items-center gap-4 mt-20 md:flex-row md:gap-8 group">
          <div className="border-2 border-[#333437] flex-shrink-0 rounded-full p-5 group-hover:border-[#34A1F1] transition-all duration-500">
            <Image src="/new/brain.svg" width={64} height={64} alt="brain" />
          </div>
          <p className="text-white opacity-75 text-base font-medium leading-7 tracking-tight">
            I have a passion for learning new skills and technologies, and I
            always strive to deliver high-quality work that meets the
            expectations of my clients. I have also worked on big company
            projects such as ASD Bakrie, PMI Indonesia, and Lokakain, where I
            gained valuable experience in different domains and industries.
          </p>
        </div>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div className="flex flex-col items-start md:items-center gap-4 mt-10 md:flex-row md:gap-8 group">
          <div className="border-2 border-[#333437] flex-shrink-0 rounded-full p-5 group-hover:border-[#34A1F1] transition-all duration-500">
            <Image
              src="/new/education.svg"
              width={64}
              height={64}
              alt="brain"
            />
          </div>
          <p className="text-white opacity-75 text-base font-medium leading-7 tracking-tight">
            I hold an Associate Degree in Information System from Universitas
            Bina Sarana Informatika with a GPA of 3.80. I have also completed
            several online courses and certifications on web development.
          </p>
        </div>
      </Slide>
      <Slide direction="up" triggerOnce>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="order-2 md:order-1 flex flex-col gap-4 items-start">
            <article className="text-white text-lg md:text-xl lg:text-2xl font-semibold md:leading-[43.20px] tracking-wide">
              {`When I’m not coding or learning new things, I enjoy playing games
            🎮, watching movies 🎥, reading books 📚, and traveling 🌎.`}
            </article>
            <p className="text-white text-opacity-75 text-base font-medium leading-7 tracking-tight">
              If you are looking for a Fullstack Engineer who can help you with
              your web development needs or want to collaborate on some exciting
              projects.
            </p>
            <a
              href="https://drive.google.com/file/d/1lg_ymnf34kmQsuaSQLi8XYxLVX2ecNl1/view?usp=drive_link"
              target="_blank"
              className="text-white font-bold flex gap-4 items-center border pl-5 py-2 pr-2 rounded-full border-[#333437] cursor-pointer hover:scale-105 transition-transform"
            >
              <span>Download My CV</span>
              <div className="bg-white p-2 rounded-full">
                <Image
                  src="/new/download.svg"
                  width={24}
                  height={24}
                  alt="download"
                />
              </div>
            </a>
          </div>
          <div className="order-1 p-11 md:order-2 md:p-0">
            <Image
              src="/new/codes.webp"
              alt="codes"
              layout="responsive"
              width={504}
              height={380}
            />
          </div>
        </div>
      </Slide>
    </section>
  );
};

export default forwardRef(About);
