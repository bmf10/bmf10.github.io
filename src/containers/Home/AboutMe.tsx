import { FC } from "react";

const AboutMe: FC = () => {
  return (
    <div className="container mx-auto py-28 max-w-6xl">
      <h2 className="text-center text-5xl mb-2">About Me</h2>
      <div className="grid lg:grid-cols-9 mt-28 lg:gap-5 xl:gap-5">
        <div className="lg:col-span-3 px-4">
          <ul className="w-full">
            <li className="pb-3">
              <span className="font-bold w-1/3 inline-block float-left">
                Full Name:
              </span>
              <span className="w-2/3 inline-block text-gray-500">
                Bima Febriansyah
              </span>
            </li>
            <li className="py-3">
              <span className="font-bold w-1/3 inline-block float-left">
                Phone:
              </span>
              <a href="tel:+6289693943932">
                <span className="w-2/3 inline-block text-gray-500">
                  +628 96 9394 3932
                </span>
              </a>
            </li>
            <li className="py-3">
              <span className="font-bold w-1/3 inline-block float-left">
                Email:
              </span>
              <a href="mailto:bimafebriansyah1002@gmail.com">
                <span className="w-2/3 inline-block text-gray-500 truncate sm:overflow-hidden">
                  bimafebriansyah@gmail.com
                </span>
              </a>
            </li>
            <li className="py-3">
              <span className="font-bold w-1/3 inline-block float-left">
                Webiste:
              </span>
              <a href="https://bmf10.github.io" target="blank">
                <span className="w-2/3 inline-block text-gray-500 truncate sm:overflow-hidden">
                  https://bmf10.github.io
                </span>
              </a>
            </li>
            <li className="py-3">
              <span className="font-bold w-1/3 inline-block float-left">
                Address:
              </span>
              <span className="w-2/3 inline-block text-gray-500">
                Jl. Perdamaian, Komp. Borneo 1 Blok B3, Pal IX, Sui Kakap, Kab.
                Kubu Raya, Kalimantan Barat, Indonesia
              </span>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-6 px-4 mt-16 lg:mt-0">
          <h2 className="text-3xl mb-5">Hello There!</h2>
          <p className="text-base leading-relaxed text-gray-700">
            I'm Bima Febriansyah, now I am 22 years old. I'm graduated from
            Universitas Bina Sarana Informatika Pontianak majoring in
            Information System. I have 1 years experience as a programmer,
          </p>
          <br /> <br />
          <p className="text-base leading-relaxed text-gray-700">
            A Fullstack Developer who has a strong passion for the world of
            programing and likes to learn new things. Experienced in working as
            a team as well as individually. Get used to creating Backends with
            Javascript (Express JS) and PHP (CodeIgniter and Laravel), and
            Frontend with ReactJs, React Native, or bootstraps.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
