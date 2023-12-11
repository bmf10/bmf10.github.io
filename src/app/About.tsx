import Button from "@/components/Button";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { forwardRef, useState } from "react";
import ModalAbout from "./ModalAbout";

const About = forwardRef<any>((_props, ref) => {
  const [modal, setModal] = useState(false);
  return (
    <section className="min-h-screen pt-20" ref={ref}>
      <Title>About Me</Title>
      <Subtitle>Nice to see you here!</Subtitle>
      <p className="mt-4">
        Hi, I’m Bima - a Fullstack Engineer who loves building websites and apps
        that solve real-world problems.
        <br /> <br /> I’m currently working with{" "}
        <a href="https://metaco.gg" target="_blank">
          MetacoGG
        </a>{" "}
        , where I contribute to the development of websites, chat features,
        payment gateway integration, and group tournament systems. I use
        technologies such as Next JS, Express, Mongo, and etc to create
        user-friendly and scalable solutions.
        <br /> <br />I have a passion for learning new skills and technologies,
        and I always strive to deliver high-quality work that meets the
        expectations of my clients. I have also worked on big company projects
        such as ASD Bakrie, PMI Indonesia, and Lokakain, where I gained valuable
        experience in different domains and industries.
        <br /> <br /> I hold an Associate Degree in Information System from
        Universitas Bina Sarana Informatika with a GPA of 3.80. I have also
        completed several online courses and certifications on web development.{" "}
        <br /> <br />
        When I’m not coding or learning new things, I enjoy playing games 🎮,
        watching movies 🎥, reading books 📚, and traveling 🌎.
        <br /> <br /> If you are looking for a Fullstack Engineer who can help
        you with your web development needs or want to collaborate on some
        exciting projects.
        <br /> <br />
        #fullstack #webdevelopment #nextjs #express #firebase, feel free to
        connect with me.
      </p>

      <div className="flex justify-center mt-5">
        <Button onClick={() => setModal(true)}>Further Information</Button>
      </div>
      <ModalAbout onClose={() => setModal(false)} isOpen={modal} />
    </section>
  );
});

About.displayName = "About";

export default About;
