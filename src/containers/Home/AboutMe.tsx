import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import Paragraph from "../../components/Paragraph";
import Header from "../../components/Header";
import Container from "../../components/Container";

const AboutMe = forwardRef<HTMLDivElement>((_, ref) => {
  const { t } = useTranslation();
  return (
    <div ref={ref}>
      <Container>
        <Header>{t("aboutMe")}</Header>
        <div className="grid lg:grid-cols-9 mt-28 lg:gap-5 xl:gap-5">
          <div className="lg:col-span-3 lg:px-4">
            <ul className="w-full">
              <li className="pb-3">
                <span className="font-bold text-textNiceOne w-1/3 inline-block float-left">
                  {t("fullName")}
                </span>
                <span className="w-2/3 inline-block text-gray-500">
                  Bima Febriansyah
                </span>
              </li>
              <li className="py-3">
                <span className="font-bold text-textNiceOne w-1/3 inline-block float-left">
                  {t("phone")}
                </span>
                <a href="tel:+6289693943932">
                  <span className="w-2/3 inline-block text-gray-500">
                    +628 96 9394 3932
                  </span>
                </a>
              </li>
              <li className="py-3">
                <span className="font-bold text-textNiceOne w-1/3 inline-block float-left">
                  {t("email")}
                </span>
                <a href="mailto:bimafebriansyah1002@gmail.com">
                  <span className="w-2/3 inline-block text-gray-500 truncate sm:overflow-hidden">
                    bimafebriansyah1002@gmail.com
                  </span>
                </a>
              </li>
              <li className="py-3">
                <span className="font-bold text-textNiceOne w-1/3 inline-block float-left">
                  {t("website")}
                </span>
                <a href={window.location.href} target="blank">
                  <span className="w-2/3 inline-block text-gray-500 truncate sm:overflow-hidden">
                    {window.location.href}
                  </span>
                </a>
              </li>
              <li className="py-3">
                <span className="font-bold text-textNiceOne w-1/3 inline-block float-left">
                  {t("address")}
                </span>
                <span className="w-2/3 inline-block text-gray-500">
                  Jl. Perdamaian, Komp. Borneo 1 Blok B3, Pal IX, Sui Kakap,
                  Kab. Kubu Raya, Kalimantan Barat, Indonesia
                </span>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-6 lg:px-4 mt-16 lg:mt-0">
            <h3 className="text-3xl text-textNiceOne mb-5">{t("hello")}</h3>
            <Paragraph>{t("about1")}</Paragraph>
            <br /> <br />
            <Paragraph>{t("about2")}</Paragraph>
          </div>
        </div>
      </Container>
    </div>
  );
});

export default AboutMe;
