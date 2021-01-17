import { FC, Fragment, useEffect, useRef, useState } from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";
import { useTranslation } from "react-i18next";
import Tour, { ReactourStep } from "reactour";
import MyResume from "./MyResume";

const Home: FC = () => {
  const [lang, setLang] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(true);

  const onStarted = () => ref.current!.scrollIntoView();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage("id");
    } else {
      i18n.changeLanguage("en");
    }
  }, [i18n, lang]);

  const steps: ReactourStep[] = [
    {
      selector: '[data-tour="translate"]',
      content: "Translate toggle",
    },
  ];

  return (
    <Fragment>
      <Tour
        steps={steps}
        showNavigationNumber={false}
        rounded={6}
        isOpen={open}
        onRequestClose={() => setOpen(false)}
        showNumber={false}
        showNavigation={false}
        showCloseButton={false}
        prevButton={<div />}
        nextButton={<div />}
        lastStepNextButton={
          <button className="bg-primary text-textPrimary border rounded-md py-2 px-4">
            {t("closeGuide")}
          </button>
        }
      />
      <div
        data-tour="translate"
        className="fixed top-4 right-5 z-20 text-sm flex items-center justify-center"
      >
        <label className="flex items-center cursor-pointer">
          <div className="relative">
            <input
              type="checkbox"
              onChange={() => setLang(!lang)}
              className="hidden"
            />
            <div className="toggle-line w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
            <div className="toggle-dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"></div>
          </div>
        </label>
      </div>
      <Header onClickButton={onStarted} />
      <AboutMe ref={ref} />
      <MyResume />
    </Fragment>
  );
};

export default Home;
