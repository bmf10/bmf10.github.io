import Modal from "@/components/Modal";
import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import { FC } from "react";

interface Props {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

const ModalAbout: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="max-w-[calc(768px-16px)] p-4 md:p-6 max-h-[calc(100vh-300px)] overflow-auto">
        <div className="grid grid-cols-1 gap-2 md:gap-6 md:grid-cols-2">
          <div>
            <Subtitle>Education</Subtitle>
            <div className="mt-2 mb-4">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-semibold flex-1">
                  <a target="_blank" href="https://www.bsi.ac.id/ubsi/index.js">
                    Universitas Bina Sarana Informatika
                  </a>
                </h3>
                <span className="text-sm font-medium text-gray-400">
                  2016 - 2019
                </span>
              </div>
              <h4 className="text-sm text-gray-400">
                Associate Degree in Information System
              </h4>
              <h4 className="text-xs text-gray-400">GPA: 3.80</h4>
              <ul className="list-disc mt-2">
                <li className="text-sm mb-1">
                  Volunteered to teach computer skills to orphaned children.
                </li>
                <li className="text-sm mb-1">
                  Developed an app for driving course management and scheduling.
                </li>
                <li className="text-sm mb-1">
                  Studied programming languages, databases, system analysis, and
                  various diagrams such as Activity Diagram, Sequence Diagram,
                  Use Case Diagram, and Class Diagram.
                </li>
              </ul>
            </div>
            <Subtitle>Certification</Subtitle>
            <div className="mt-2">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-semibold flex-1">
                  <a target="_blank" href="https://www.fazztrack.com/">
                    Fazztrack
                  </a>
                </h3>
                <span className="text-sm font-medium text-gray-400">
                  Dec 2020 - Jan 2020
                </span>
              </div>
              <h4 className="text-sm text-gray-400">
                Software Engineering Bootcamp
              </h4>
              <ul className="list-disc mt-2">
                <li className="text-sm mb-1">
                  Studied about Javascript, ReactJS, and Express JS.
                </li>
                <li className="text-sm mb-1">
                  Build Hiring Apps with ExpressJS, ReactJS, and React Native.
                </li>
                <li className="text-sm mb-1">
                  Making the &quot;Tookoin&quot; application with a group of 5
                  people, I am the Backend with ExpressJS
                </li>
              </ul>
              <a
                className="underline text-sm"
                href="https://drive.google.com/file/d/1xdrsAvweqK2dOD3Oth9oExOQMAZjj7gM/view"
              >
                View Document
              </a>
            </div>
          </div>
          <div>
            <Subtitle>Work Experiences</Subtitle>
            <div className="mt-2">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-semibold">
                  <a target="_blank" href="https://metaco.gg">
                    Metaco GG
                  </a>
                </h3>
                <span className="text-sm font-medium text-gray-400">
                  Nov 2021 - Current
                </span>
              </div>
              <h4 className="text-sm text-gray-400">
                Jakarta, Indonesia (Remote)
              </h4>
              <ul className="list-disc mt-2">
                <li className="text-sm mb-1">
                  Created Metaco Esport Network, a web app for event organizers,
                  increasing the user base by 200% in a year.
                </li>
                <li className="text-sm mb-1">
                  Developed a group tournament system, simplifying match
                  management and boosting user engagement by 85.5%. Tackled
                  complex challenges with multiple database tables and logical
                  processors.
                </li>
                <li className="text-sm mb-1">
                  Developed a chat feature for tournament participants, with
                  general and private chat rooms, enhancing user engagement and
                  satisfaction.
                </li>
                <li className="text-sm mb-1">
                  Integrated with Xendit payment gateway, providing users with
                  more payment options for the shop and top-up feature.
                </li>
                <li className="text-sm">
                  Collaborated with the developer team, UI/UX designer, and
                  project manager to plan features using scrum.
                </li>
              </ul>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h3 className="text-base font-semibold">
                  <a target="_blank" href="https://breefstudio.com/">
                    Breef Studio
                  </a>
                </h3>
                <span className="text-sm font-medium text-gray-400">
                  Mar 2020 - Oct 2021
                </span>
              </div>
              <h4 className="text-sm text-gray-400">
                Yogyakarta, Indonesia (Remote)
              </h4>
              <ul className="list-disc mt-2">
                <li className="text-sm mb-1">
                  Participated in big company projects such as ASD Bakrie, PMI
                  Indonesia, and Lokakain.
                </li>
                <li className="text-sm mb-1">
                  At ASD Bakrie, I contributed to developing an e-commerce app
                  for palm oil commodities, integrating with Midtrans payment
                  gateway and supporting two languages. Used React Native,
                  NextJS, Express, Styled Component, and Typescript.
                </li>
                <li className="text-sm mb-1">
                  At PMI Indonesia, I contributed to developing a certification
                  website for society, especially PMI employees, with various
                  types of questions. Improved my skills in NextJS, Express,
                  Material UI, and Typescript.
                </li>
                <li className="text-sm mb-1">
                  At Lokakain, I contributed to developing an e-commerce app for
                  fabrics, enabling offline stores to join as partners and
                  integrating with Midtrans payment gateway. Gained experience
                  in payment gateway integration and maps for e-commerce
                  development. Used NextJS, Express, Material UI, Typescript,
                  and Pigeon Maps.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalAbout;
