import React from "react";
import { useState } from "react";
import Tour from "reactour";
import "./style.css";

const Calculator = () => {
  const [value, setValue] = useState("");
  const [on, setOn] = useState(false);
  const [open, setOpen] = useState(true);

  console.log(value);

  const handleClick = (e) => {
    const btnValue = e.target.value;
    const currentValue = value.toString();
    const isNumber = /[0-9]/.test(currentValue.slice(-1));
    const isOperator = /[*/+-]/.test(currentValue.slice(-1));
    try {
      if (btnValue === "on") {
        setValue("");
        setOn(!on);
      } else if (btnValue === "1" && on) {
        setValue(currentValue + btnValue);
      } else if (btnValue === "2" && on) {
        setValue(currentValue + btnValue);
      } else if (btnValue === "3" && on) {
        setValue(currentValue + btnValue);
      } else if (btnValue === "4" && on) {
        setValue(currentValue + btnValue);
      } else if (btnValue === "5" && on) {
        setValue(currentValue + btnValue);
      } else if (btnValue === "6" && on) {
        setValue(currentValue + btnValue);
      } else if (btnValue === "7" && on) {
        setValue(currentValue + btnValue);
      } else if (btnValue === "8" && on) {
        setValue(currentValue + btnValue);
      } else if (btnValue === "9" && on) {
        setValue(currentValue + btnValue);
      } else if (btnValue === "0" && on) {
        if (isNumber || isOperator) {
          setValue(currentValue + btnValue);
        }
      } else if (btnValue === "00" && on) {
        if (isNumber || isOperator) {
          setValue(currentValue + btnValue);
        }
      } else if (btnValue === "000" && on) {
        if (isNumber || isOperator) {
          setValue(currentValue + btnValue);
        }
      } else if (btnValue === "+" && on) {
        if (isNumber) {
          setValue(currentValue + btnValue);
        } else if (isOperator) {
          setValue(currentValue.slice(0, -1) + btnValue);
        }
      } else if (btnValue === "-" && on) {
        if (isNumber) {
          setValue(currentValue + btnValue);
        } else if (isOperator) {
          setValue(currentValue.slice(0, -1) + btnValue);
        }
      } else if (btnValue === "/" && on) {
        if (isNumber) {
          setValue(currentValue + btnValue);
        } else if (isOperator) {
          setValue(currentValue.slice(0, -1) + btnValue);
        }
      } else if (btnValue === "*" && on) {
        if (isNumber) {
          setValue(currentValue + btnValue);
        } else if (isOperator) {
          setValue(currentValue.slice(0, -1) + btnValue);
        }
      } else if (btnValue === "=" && on) {
        if (isNumber) {
          // eslint-disable-next-line no-eval
          const result = eval(currentValue);
          setValue(result);
        }
      } else if (btnValue === "c" && on) {
        setValue("");
      } else if (btnValue === "ce" && on) {
        setValue(currentValue.slice(0, -1));
      }
    } catch (error) {
      setValue("Error! Invalid Input");
    }
  };

  const step = [
    {
      selector: '[data-tut="button"]',
      content: `Action Button`,
    },
    {
      selector: '[data-tut="on"]',
      content: `Power Button`,
    },
    {
      selector: '[data-tut="input"]',
      content: `Input Container`,
    },
  ];

  return (
    <>
      <div className="container">
        <div className="container-child">
          <div className="calculator-container">
            <input
              type="text"
              placeholder=""
              value={value}
              disabled={!on}
              className="calculator-input"
              data-tut="input"
            />
            <div data-tut="button">
              <div className="calculator-button">
                <button
                  value="on"
                  onClick={handleClick}
                  type="button"
                  data-tut="on"
                >
                  {on ? "OFF" : "ON"}
                </button>
                <button value="ce" onClick={handleClick} type="button">
                  CE
                </button>
                <button value="c" onClick={handleClick} type="button">
                  C
                </button>
                <button value="+" onClick={handleClick} type="button">
                  +
                </button>
              </div>
              <div className="calculator-button">
                <button value="1" onClick={handleClick} type="button">
                  1
                </button>
                <button value="2" onClick={handleClick} type="button">
                  2
                </button>
                <button value="3" onClick={handleClick} type="button">
                  3
                </button>
                <button value="-" onClick={handleClick} type="button">
                  -
                </button>
              </div>
              <div className="calculator-button">
                <button value="4" onClick={handleClick} type="button">
                  4
                </button>
                <button value="5" onClick={handleClick} type="button">
                  5
                </button>
                <button value="6" onClick={handleClick} type="button">
                  6
                </button>
                <button value="*" onClick={handleClick} type="button">
                  *
                </button>
              </div>
              <div className="calculator-button">
                <button value="7" onClick={handleClick} type="button">
                  7
                </button>
                <button value="8" onClick={handleClick} type="button">
                  8
                </button>
                <button value="9" onClick={handleClick} type="button">
                  9
                </button>
                <button value="/" onClick={handleClick} type="button">
                  /
                </button>
              </div>
              <div className="calculator-button">
                <button value="0" onClick={handleClick} type="button">
                  0
                </button>
                <button value="00" onClick={handleClick} type="button">
                  00
                </button>
                <button value="000" onClick={handleClick} type="button">
                  000
                </button>
                <button value="=" onClick={handleClick} type="button">
                  =
                </button>
              </div>
            </div>
            <p className="calculator-text">Made in Indonesia</p>
          </div>
        </div>
      </div>
      <Tour
        steps={step}
        isOpen={open}
        rounded={5}
        disableDotsNavigation={false}
        showNavigationNumber={false}
        onRequestClose={() => setOpen(false)}
      />
    </>
  );
};

export default Calculator;
