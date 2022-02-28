import { FC } from "react"
import Wrapper from "components/Wrapper"
import { Col, Divider, Row, Typography } from "antd"
import NavigationButton from "components/NavigationButton"
import { Title } from "./styled"

interface Props {
  readonly onNext?: () => void
  readonly onPrev?: () => void
}

const Education: FC<Props> = ({ onNext, onPrev }: Props) => (
  <Wrapper>
    <Row gutter={[24, 16]}>
      <Col xs={{ order: 2, span: 24 }} sm={{ order: 1, span: 12 }}>
        <Typography.Title level={3}>Work Experience</Typography.Title>
        <Title type="secondary" level={4}>
          Full Stack Engineer
        </Title>
        <Title level={5}>
          MetacoGG<Typography.Text>, Nov 2021 - Present</Typography.Text>
        </Title>
        <Typography.Paragraph style={{ textAlign: "justify" }}>
          <ul>
            <li>
              Develop existing website with Next JS, React JS, Express JS, etc
            </li>
            <li>
              Coordinate with Developer Team, UI/UX Designer, and Project
              Manager
            </li>
            <li>Fix Bugs</li>
          </ul>
        </Typography.Paragraph>
        <br />
        <Title type="secondary" level={4}>
          Full Stack Engineer
        </Title>
        <Title level={5}>
          Breef Studio<Typography.Text>, Mar 2020 - Nov 2021</Typography.Text>
        </Title>
        <Typography.Paragraph style={{ textAlign: "justify" }}>
          <ul>
            <li>{`Make system, according to client's request`}</li>
            <li>Coordinate with UI/UX designer to create website appearance</li>
            <li>Fix bugs and maintenance existing project/website</li>
          </ul>
        </Typography.Paragraph>
      </Col>
      <Col xs={{ order: 1, span: 24 }} sm={{ order: 2, span: 12 }}>
        <Typography.Title level={3}>Formal Education</Typography.Title>
        <Title type="secondary" level={4}>
          Universitas Bina Sarana Informatika
        </Title>
        <Title level={5}>
          Sistem Informasi<Typography.Text>, 2016 - 2019</Typography.Text>
        </Title>
        <Typography.Paragraph>
          <ul style={{ textAlign: "justify" }}>
            <li>GPA: 3.8</li>
            <li>
              Learn systems analysis, computer science, and programming language
              such as C++, Java, and PHP
            </li>
            <li>
              {`
            Make a final project with the title "Information System for Web-Based Driving Courses on CV .Mitra Utama Mengemudi"`}
            </li>
          </ul>
        </Typography.Paragraph>
        <Typography.Title level={3}>Informal Education</Typography.Title>
        <Title type="secondary" level={4}>
          Arkademy (Bootcamp)
        </Title>
        <Title level={5}>
          Fullstack Software Developer
          <Typography.Text>, 2019 - 2020</Typography.Text>
        </Title>
        <Typography.Paragraph>
          Learn to build websites and mobile applications with
          <ul style={{ textAlign: "justify" }}>
            <li>Backend: Express JS and MySQL</li>
            <li>Frontend: React Js & Redux</li>
            <li>Mobile: React Native</li>
            <li>Additonal: Firebase</li>
          </ul>
        </Typography.Paragraph>
      </Col>
    </Row>
    <NavigationButton
      onClick={onNext}
      state="next"
      tooltipText="My Portofolio"
    />
    <NavigationButton onClick={onPrev} state="prev" tooltipText="My Resume" />
  </Wrapper>
)

export default Education
