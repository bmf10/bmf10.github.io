import { FC, ReactNode } from "react";

export interface Props {
  readonly children: ReactNode;
  readonly className?: string;
}

const Header: FC<Props> = ({ children, className }: Props) => {
  return (
    <h2 className={`text-center text-5xl mb-2 text-textNiceOne ${className}`}>
      {children}
    </h2>
  );
};

export default Header;
