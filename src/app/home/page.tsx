"use client";
import clsx from "clsx";
import { Orbitron } from "next/font/google";
import { CSSProperties, useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import NavItem from "./NavItem";
import Image from "next/image";
import Hero from "./Hero";
import useWindowSize from "@/hooks/useWindowSize";
import { AnimatePresence, motion } from "framer-motion";
import ButtonMenu from "./ButtonMenu";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
import Footer from "./Footer";

const orbitron = Orbitron({ subsets: ["latin"] });

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
  const [isClient, setIsClient] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [, width] = useWindowSize();
  const [homeRef, homeInView, homeEntry] = useInView({ threshold: 0.3 });
  const [aboutRef, aboutInView, aboutEntry] = useInView({ threshold: 0.3 });
  const [workRef, workInView, workEntry] = useInView({
    threshold: 0.1,
  });
  const [contactRef, , contactEntry] = useInView();

  const [menu, setMenu] = useState<Menu[]>([
    {
      label: "Home",
      link: "#home",
      entry: homeEntry,
      active: true,
    },
    { label: "About Me", link: "#about", entry: aboutEntry },
    { label: "Work", link: "#work", entry: workEntry },
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
        top: (activeMenu?.top || 0) + (activeMenu.height || 0) / 2 - 40 / 2,
        left: (activeMenu.left || 0) + (activeMenu.width || 0) / 2 - 40 / 2,
        width: 40,
        height: 40,
      });
    }
  }, [menu]);

  useEffect(() => {
    generateStyle();
    setIsClient(true);
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

    if (workEntry) {
      setMenu((prev) =>
        prev.map((m) => (m.link === "#work" ? { ...m, entry: workEntry } : m)),
      );
    }
  }, [homeEntry, aboutEntry, workEntry]);

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

    if (workInView) {
      setMenu((prev) =>
        prev.map((m) =>
          m.link === "#work" ? { ...m, active: true } : { ...m, active: false },
        ),
      );
    }
  }, [aboutInView, homeInView, workInView]);

  return (
    <main className={orbitron.className}>
      <div className="flex justify-center bg-[#000105] text-white">
        <div className="w-full lg:max-w-6xl p-4 min-h-screen relative">
          <>
            {isClient && width >= 768 ? (
              <header
                className={clsx(
                  "sticky top-6 w-full py-2 pl-8 pr-2 overflow-hidden rounded-full bg-white bg-opacity-[0.07] backdrop-blur-[20px] flex z-10",
                )}
              >
                <nav className="z-20 py-4 flex gap-14 relative flex-1">
                  {menu.map((item, i) => (
                    <NavItem
                      key={i}
                      menu={item}
                      onRender={handleRender}
                      onClick={() => {
                        if (item.entry) {
                          item.entry.target.scrollIntoView({
                            behavior: "smooth",
                          });
                        }
                      }}
                    />
                  ))}
                  <div
                    className={clsx(
                      "absolute bg-[#0D3DD5] rounded-full blur-lg transition-all",
                      {
                        "!block": !!indicator,
                      },
                    )}
                    style={indicator}
                  />
                </nav>
                <button
                  onClick={() =>
                    contactEntry?.target.scrollIntoView({ behavior: "smooth" })
                  }
                  className="flex pl-5 pr-2 py-2 bg-[#0D3DD5] rounded-full justify-center gap-4 items-center"
                >
                  <span>Hire Me</span>
                  <div className="bg-white rounded-full p-2">
                    <Image
                      className=""
                      src="/new/hire-icon.svg"
                      width={24}
                      height={24}
                      alt="icon"
                    />
                  </div>
                </button>
              </header>
            ) : (
              <header className="sticky z-10 top-6 h-auto">
                <ButtonMenu
                  onClick={() => setShowMenu(!showMenu)}
                  isOpen={showMenu}
                />
                <AnimatePresence>
                  {showMenu && (
                    <motion.nav
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className={clsx(
                        "w-full h-52 top-8 flex flex-col absolute gap-2 z-10 p-4 bg-opacity-[0.07] backdrop-blur-[20px]",
                      )}
                    >
                      {menu.map((item, i) => (
                        <NavItem
                          className="text-lg text-center relative"
                          key={i}
                          menu={item}
                          onRender={handleRender}
                          onClick={() => {
                            if (item.entry) {
                              item.entry.target.scrollIntoView({
                                behavior: "smooth",
                              });
                            }
                          }}
                        />
                      ))}
                      <button
                        onClick={() =>
                          contactEntry?.target.scrollIntoView({
                            behavior: "smooth",
                          })
                        }
                        className="mt-3 flex pl-5 pr-2 py-2 bg-[#0D3DD5] rounded-full justify-center gap-4 items-center"
                      >
                        <span>Hire Me</span>
                        <div className="bg-white rounded-full p-2">
                          <Image
                            className=""
                            src="/new/hire-icon.svg"
                            width={24}
                            height={24}
                            alt="icon"
                          />
                        </div>
                      </button>
                      <div
                        className={clsx(
                          "absolute bg-[#0D3DD5] rounded-full blur-lg transition-all",
                          {
                            "!block": !!indicator,
                          },
                        )}
                        style={indicator}
                      />
                    </motion.nav>
                  )}
                </AnimatePresence>
              </header>
            )}
          </>
          <main className="md:-mt-[200px]">
            <Hero
              ref={homeRef}
              onWorkClick={() =>
                workEntry?.target.scrollIntoView({ behavior: "smooth" })
              }
            />
            <About ref={aboutRef} />
            <Work ref={workRef} />
            <Contact ref={contactRef} />
            <Footer />
          </main>
        </div>
      </div>
    </main>
  );
};

export default Home;
