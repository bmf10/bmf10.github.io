import { FC, ReactNode } from "react";

interface Props {
  readonly children: ReactNode;
}

const Subtitle: FC<Props> = ({ children }) => (
  <h2 className="text-lg font-bold mt-2">{children}</h2>
);

export default Subtitle;
