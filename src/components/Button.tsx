import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";

type Props = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: FC<Props> = (props) => {
  return (
    <button
      {...props}
      className="text-white bg-cyan-500 mt-4 px-4 py-2 rounded-md transition-shadow hover:shadow-md"
    />
  );
};

export default Button;
