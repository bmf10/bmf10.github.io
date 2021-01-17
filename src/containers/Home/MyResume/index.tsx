import { FC } from "react";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import Timeline from "./Timeline";
import { useTranslation } from "react-i18next";

const MyResume: FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Header>{t("myResume")}</Header>
      <div className="relative wrap overflow-hidden sm:px-10 h-full">
        <div className="flex flex-row sm:justify-center justify-start">
          <h3 className="text-xl text-center mt-16 font-semibold tracking-widest uppercase bg-gray-300 px-3 py-2 rounded-md">
            {t("workExp")}
          </h3>
        </div>
        <div className="border-2-2 absolute border-gray-300 h-full border ml-5 sm:ml-0 sm:left-1/2"></div>
        <Timeline
          align="left"
          icon={<BsFillBriefcaseFill />}
          title="Fullstack Developer"
          subtitle={t("exp1Date")}
          text={t("exp1Job")}
        />
        <Timeline
          align="right"
          icon={<BsFillBriefcaseFill />}
          title="React Native Developer (Freelance)"
          subtitle={t("exp2Date")}
          text={t("exp2Job")}
        />
        <Timeline
          align="left"
          icon={<BsFillBriefcaseFill />}
          title="Fullstack Developer (Freelance)"
          subtitle={t("exp3Date")}
          text={t("exp3Job")}
        />
        <Timeline
          align="right"
          icon={<BsFillBriefcaseFill />}
          title="Fullstack Developer (Freelance)"
          subtitle={t("exp4Date")}
          text={t("exp4Job")}
        />
      </div>

      <div className="relative wrap overflow-hidden sm:px-10 h-full">
        <div className="flex flex-row sm:justify-center justify-start">
          <h3 className="text-xl text-center font-semibold tracking-widest uppercase bg-gray-300 px-3 py-2 rounded-md">
            {t("education")}
          </h3>
        </div>
        <div className="border-2-2 absolute border-gray-300 h-full border ml-5 sm:ml-0 sm:left-1/2"></div>
        <Timeline
          align="left"
          icon={<FaGraduationCap />}
          title="Fullstack Mobile Developer (Bootcamp)"
          subtitle={t("edu1Date")}
          text={t("edu1Desc")}
        />
        <Timeline
          align="right"
          icon={<FaGraduationCap />}
          title={t("edu2Title")}
          subtitle={t("edu2Date")}
          text={t("edu2Desc")}
        />
      </div>
    </Container>
  );
};

export default MyResume;
