import { FC, ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
}

const Title: FC<Props> = ({ children }) => (
  <h1 className="text-2xl font-bold lg:text-4xl">{children}</h1>
);

export default Title;
