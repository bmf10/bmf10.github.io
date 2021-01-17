import { FC, ReactNode } from "react";

export interface Props {
  readonly children: ReactNode;
  readonly className?: string;
}

const Paragraph: FC<Props> = ({ children, className }: Props) => {
  return (
    <p className={`${className} text-base leading-relaxed text-gray-700`}>
      {children}
    </p>
  );
};

export default Paragraph;
