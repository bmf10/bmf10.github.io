"use client";

import { CSSProperties, useCallback, useEffect, useState } from "react";
import NavItem from "./NavItem";
import clsx from "clsx";

import { useInView } from "react-intersection-observer";
import Hero from "./Hero";
import About from "./About";
import { Metadata } from "next";
import Portfolio from "./Portofolio";

export interface Menu {
  label: string;
  link: string;
  width?: number;
  height?: number;
  top?: number;
  left?: number;
  active?: boolean;
  entry?: IntersectionObserverEntry;
}

const Home = () => {
  const [homeRef, homeInView, homeEntry] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutInView, aboutEntry] = useInView({ threshold: 0.5 });
  const [portfolioRef, portfolioInView, portfolioEntry] = useInView({
    threshold: 0.5,
  });

  const [menu, setMenu] = useState<Menu[]>([
    {
      label: "Home",
      link: "#home",
      active: true,
      entry: homeEntry,
    },
    { label: "About Me", link: "#about", entry: aboutEntry },
    { label: "Portfolio", link: "#portfolio", entry: portfolioEntry },
    { label: "Hire Me", link: "#hire" },
  ]);
  const [indicator, setIndicator] = useState<CSSProperties>();

  const handleRender = useCallback((menu: Menu) => {
    setMenu((prev) =>
      prev.map((item) => (item.link === menu.link ? menu : item)),
    );
  }, []);

  const generateStyle = useCallback(() => {
    const activeMenu = menu.find((v) => v.active);
    if (activeMenu) {
      setIndicator({
        top: (activeMenu?.top || 0) - 5,
        left: (activeMenu.left || 0) - 10,
        width: (activeMenu.width || 0) + 20,
        height: (activeMenu.height || 0) + 10,
      });
    }
  }, [menu]);

  useEffect(() => {
    generateStyle();
  }, [generateStyle]);

  useEffect(() => {
    if (homeEntry) {
      setMenu((prev) =>
        prev.map((m) => (m.link === "#home" ? { ...m, entry: homeEntry } : m)),
      );
    }

    if (aboutEntry) {
      setMenu((prev) =>
        prev.map((m) =>
          m.link === "#about" ? { ...m, entry: aboutEntry } : m,
        ),
      );
    }

    if (portfolioEntry) {
      setMenu((prev) =>
        prev.map((m) =>
          m.link === "#portfolio" ? { ...m, entry: portfolioEntry } : m,
        ),
      );
    }
  }, [homeEntry, aboutEntry, portfolioEntry]);

  useEffect(() => {
    if (homeInView) {
      setMenu((prev) =>
        prev.map((m) =>
          m.link === "#home" ? { ...m, active: true } : { ...m, active: false },
        ),
      );
    }

    if (aboutInView) {
      setMenu((prev) =>
        prev.map((m) =>
          m.link === "#about"
            ? { ...m, active: true }
            : { ...m, active: false },
        ),
      );
    }

    if (portfolioInView) {
      setMenu((prev) =>
        prev.map((m) =>
          m.link === "#portfolio"
            ? { ...m, active: true }
            : { ...m, active: false },
        ),
      );
    }
  }, [aboutInView, homeInView, portfolioInView]);

  return (
    <div className="flex justify-center">
      <div className="w-full lg:max-w-5xl p-4">
        <nav className="w-full flex justify-center gap-8 py-4 backdrop-blur fixed top-0 left-0 z-50">
          {menu.map((item, i) => (
            <NavItem
              key={i}
              menu={item}
              onRender={handleRender}
              onClick={() => {
                if (item.entry) {
                  item.entry.target.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          ))}
          <div
            className={clsx(
              "absolute bg-cyan-500 z-0 transition-all drop-shadow rounded-md hidden",
              { "!block": !!indicator },
            )}
            style={indicator}
          />
        </nav>
        <main>
          <Hero ref={homeRef} />
          <About ref={aboutRef} />
          <Portfolio ref={portfolioRef} />
        </main>
      </div>
    </div>
  );
};

export default Home;
