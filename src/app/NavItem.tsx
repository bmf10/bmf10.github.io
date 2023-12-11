import { FC, useEffect, useRef } from "react";
import { Menu } from "./page";
import clsx from "clsx";
import useWindowSize from "@/hooks/useWindowSize";

interface Props {
  menu: Menu;
  onRender: (renderValue: Menu) => void;
  onClick: () => void;
}

const NavItem: FC<Props> = ({ menu, onRender, onClick }) => {
  const [, width] = useWindowSize();
  const ref = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    onRender({
      ...menu,
      height: ref.current?.offsetHeight,
      width: ref.current?.offsetWidth,
      left: ref.current?.offsetLeft,
      top: ref.current?.offsetTop,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onRender, width]);

  return (
    <a
      href={menu.link}
      className={clsx("z-10 hover:text-cyan-500", {
        "text-white hover:text-white": menu.active,
      })}
      ref={ref}
      onClick={onClick}
    >
      {menu.label}
    </a>
  );
};

export default NavItem;
