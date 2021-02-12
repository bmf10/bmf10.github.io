import { FC, useEffect, useState } from "react";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import { FaNode, FaReact, FaDatabase, FaWordpress } from "react-icons/fa";
import List from "./List";
import { useTranslation } from "react-i18next";

const Service: FC = () => {
  const [width, setWidth] = useState<number | undefined>();
  const { t } = useTranslation();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="w-full bg-primary">
      <Container className="text-textPrimary">
        <Header className="text-textPrimary">{t("serviceTitle")}</Header>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 mt-20">
          <List
            icon={<FaNode className="text-7xl text-primary" />}
            title="Backend Development"
            description={t("serviList1Desc")}
          />
          <List
            icon={<FaReact className="text-7xl text-primary animate-spin" />}
            title="Frontend Development"
            description={t("serviList2Desc")}
          />
          <List
            icon={<FaDatabase className="text-5xl text-primary" />}
            title="Database Administration"
            description={t("serviList3Desc")}
          />
          {width && width > 1280 ? <div /> : undefined}
          <List
            icon={<FaWordpress className="text-6xl text-primary" />}
            title="Worpress Development"
            description={t("serviList4Desc")}
          />
          {width && width > 1280 ? <div /> : undefined}
        </div>
      </Container>
    </div>
  );
};

export default Service;
