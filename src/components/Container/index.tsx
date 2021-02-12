import { FC, ReactNode } from "react";

export interface Props {
  readonly children: ReactNode;
  readonly className?: string;
}

const Container: FC<Props> = ({ children, className }: Props) => (
  <div
    className={`${className} container mx-auto py-24 max-w-6xl px-4 lg:px-4`}
  >
    {children}
  </div>
);

export default Container;
