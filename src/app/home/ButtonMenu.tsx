import clsx from "clsx";
import { FC } from "react";

interface ButtonMenuProps {
  readonly isOpen: boolean;
  readonly onClick: () => void;
}

const ButtonMenu: FC<ButtonMenuProps> = ({ onClick, isOpen }) => {
  return (
    <button className="w-8 h-8 absolute right-2 " onClick={onClick}>
      <span
        className={clsx(
          "h-px bg-white w-8 block absolute transition-all duration-500",
          {
            "-rotate-45 top-4": isOpen,
            "rotate-0 top-1": !isOpen,
          },
        )}
      ></span>
      <span
        className={clsx(
          "h-px bg-white w-8 block absolute top-3 transition-all duration-500",
          {
            "opacity-0 translate-x-4": isOpen,
            "opacity-100 translate-x-0": !isOpen,
          },
        )}
      ></span>
      <span
        className={clsx(
          "h-px bg-white w-8 block absolute transition-all duration-500",
          {
            "rotate-45 top-4": isOpen,
            "rotate-0 top-5": !isOpen,
          },
        )}
      ></span>
    </button>
  );
};

export default ButtonMenu;
