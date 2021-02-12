import { FC } from "react";
import { PieChart } from "react-minimal-pie-chart";
import Container from "../../../components/Container";
import Header from "../../../components/Header";
import Pie from "./Pie";
import List from "./List";
import { useTranslation } from "react-i18next";

const Skills: FC = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Header className="text-textNiceOne">{t("skillTitle")}</Header>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mt-20">
        <Pie name="TypeScript" percentage={75} />
        <Pie name="PHP" percentage={80} />
        <Pie name="MySQL" percentage={90} />
        <Pie name="PostgreSQL" percentage={75} />
        <Pie name="React" percentage={75} />
        <Pie name="Express JS" percentage={80} />
        <Pie name="CodeIginiter" percentage={80} />
        <Pie name="Laravel" percentage={50} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-20">
        <List name="Tailwind" percentage={80} color="green" />
        <List name="Bootstrap" percentage={85} color="blue" />
        <List name="Firebase" percentage={50} color="yellow" />
        <List name="JQuery" percentage={90} color="red" />
      </div>
    </Container>
  );
};

export default Skills;
