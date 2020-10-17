import React, { useState } from "react";
import Default from "./Default";
import First from "./One";
import Seven from "./Seven";
import Six from "./Six";
import Five from "./Five";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Eight from "./Eight";
import Tour from "reactour";
import Nine from "./Nine";
import Ten from "./Ten";

const Home = () => {
  const [section, setSection] = useState(1);
  const [open, setOpen] = useState(true);

  const handleClick = (e) => {
    const windowSize = window.innerWidth;
    const middle = windowSize / 2;
    const position = e.clientX;

    if (middle > position) {
      if (section !== 1) {
        setSection(section - 1);
      }
    } else if (middle < position) {
      if (section !== 10) {
        setSection(section + 1);
      }
    }
  };

  const view = (section) => {
    switch (section) {
      case 1:
        return <First />;
      case 2:
        return <Two />;
      case 3:
        return <Three />;
      case 4:
        return <Four />;
      case 5:
        return <Five />;
      case 6:
        return <Six />;
      case 7:
        return <Seven />;
      case 8:
        return <Eight />;
      case 9:
        return <Nine />;
      case 10:
        return <Ten />;
      default:
        return <Default />;
    }
  };

  const step = [
    {
      selector: '[data-tut="left"]',
      content: `Tap here for back`,
      position: [window.innerWidth / 4 - 100, window.innerHeight / 2 - 100],
    },
    {
      selector: '[data-tut="right"]',
      content: `Tap here for next`,
      position: [
        (window.innerWidth / 4) * 3 - 100,
        window.innerHeight / 2 - 100,
      ],
    },
  ];

  const reqClose = () => {
    setOpen(false);
    localStorage.setItem("isTourOpen", true);
  };

  return (
    <>
      <div className="App" onClick={handleClick}>
        <div className="App-header">{view(section)}</div>
      </div>
      {open ? (
        <>
          <div className="left" data-tut="left" />
          <div className="right" data-tut="right" />
          <Tour
            steps={step}
            isOpen={open}
            rounded={5}
            disableDotsNavigation={false}
            showNavigationNumber={false}
            onRequestClose={reqClose}
          />
        </>
      ) : undefined}
    </>
  );
};

export default Home;
