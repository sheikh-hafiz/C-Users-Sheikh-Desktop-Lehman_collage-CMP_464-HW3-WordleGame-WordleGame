import React from "react";
import { CiSquareRemove } from "react-icons/ci";
import { useState } from "react";
import randomword from "./features/randomword";
const Main = () => {
  const [words, setwords] = useState(randomword);
  const [won, setwon] = useState(false);
  console.log(words);
  const [countrow, setcountrow] = useState(1);
  let word = [];
  const enterFunction = () => {
    let Selectedword = words.split("");
    if (word.length === 5) {
      let counter = 0;
      let green = 0;
      word.forEach((values, index) => {
        document.getElementById(
          `box${index + countrow}`
        ).style.backgroundColor = "grey";
        document.getElementById(`box${index + countrow}`).style.color = "black";
        for (let a = 0; a < 5; a++) {
          if (values === Selectedword[a]) {
            counter++;
            if (index === a) {
              document.getElementById(
                `box${index + countrow}`
              ).style.backgroundColor = "green";
              green++;
              document.getElementById(`box${index + countrow}`).style.color =
                "white";
            } else {
              if (
                document.getElementById(`box${index + countrow}`).style
                  .backgroundColor !== "green"
              ) {
                document.getElementById(
                  `box${index + countrow}`
                ).style.backgroundColor = "#ff9800";
                document.getElementById(`box${index + countrow}`).style.color =
                  "white";
              }
            }
          }
        }
      });
      if (green === 5) {
        document.querySelector(".congrats").style.display = "flex";
        setwon(true);
        return;
      }
      if (counter !== 0) {
        setcountrow(countrow + 5);
        word = [];
      } else {
        document.querySelector(".noword").style.display = "flex";
        setTimeout(() => {
          document.querySelector(".noword").style.display = "none";
        }, 2000);
        word.forEach((values, index) => {
          document.getElementById(
            `box${index + countrow}`
          ).style.backgroundColor = "white";
          document.getElementById(`box${index + countrow}`).style.color =
            "black";
        });
      }
    } else {
      document.querySelector(".tooshort").style.display = "flex";
      setTimeout(() => {
        document.querySelector(".tooshort").style.display = "none";
      }, 2000);
    }
    if (countrow >= 23 && won !== true) {
      document.querySelector(".lost").style.display = "flex";
    }
  };

  function changeHandler(e) {
    for (let i = 1; i < 31; i++) {
      if (document.getElementById(`box${i}`).innerHTML === "") {
        if (word.length !== 5) {
          word.push(e.target.innerHTML.toUpperCase());
        } else {
          break;
        }

        document.getElementById(`box${i}`).innerHTML = e.target.innerHTML;
        break;
      }
    }
  }
  function removerHandler(e) {
    if (word.length === 0) {
      return;
    } else {
      for (let a = 30; a > 0; a--) {
        if (document.getElementById(`box${a}`).innerHTML !== "") {
          word.shift();

          document.getElementById(`box${a}`).innerHTML = "";
          break;
        }
      }
    }
  }
  return (
    <>
      <div className="boxes">
        <div>
          <div className="box" id="box1"></div>
          <div className="box" id="box2"></div>
          <div className="box" id="box3"></div>
          <div className="box" id="box4"></div>
          <div className="box" id="box5"></div>
        </div>
        <div>
          <div className="box" id="box6"></div>
          <div className="box" id="box7"></div>
          <div className="box" id="box8"></div>
          <div className="box" id="box9"></div>
          <div className="box" id="box10"></div>
        </div>
        <div>
          <div className="box" id="box11"></div>
          <div className="box" id="box12"></div>
          <div className="box" id="box13"></div>
          <div className="box" id="box14"></div>
          <div className="box" id="box15"></div>
        </div>
        <div>
          <div className="box" id="box16"></div>
          <div className="box" id="box17"></div>
          <div className="box" id="box18"></div>
          <div className="box" id="box19"></div>
          <div className="box" id="box20"></div>
        </div>
        <div>
          <div className="box" id="box21"></div>
          <div className="box" id="box22"></div>
          <div className="box" id="box23"></div>
          <div className="box" id="box24"></div>
          <div className="box" id="box25"></div>
        </div>
        <div>
          <div className="box" id="box26"></div>
          <div className="box" id="box27"></div>
          <div className="box" id="box28"></div>
          <div className="box" id="box29"></div>
          <div className="box" id="box30"></div>
        </div>
      </div>

      <div className="tooshort overlay" id="">
        <div>
          
          <p>Too short</p>
        </div>
      </div>
      <div className="noword overlay" id="">
        <div>
          <p>no words matched</p>
        </div>
      </div>
      <div className="congrats overlay" id="">
        <div>
          <p>
            word was:{words}
            <br />
            Congrats You won
            <button
              onClick={() => {
                window.location.reload(false);
              }}
            >
              Restart
            </button>
          </p>
        </div>
      </div>
      <div className="lost overlay" id="">
        <div>
          <p>
            word was:{words} <br />
            You lost
            <button
              onClick={() => {
                window.location.reload(false);
              }}
            >
              Restart
            </button>
          </p>
        </div>
      </div>
      <div className="buttonsstack">
        <div>
          {" "}
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button1"
          >
            q
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button2"
          >
            w
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button3"
          >
            e
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button4"
          >
            r
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button5"
          >
            t
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button6"
          >
            y
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button7"
          >
            u
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button8"
          >
            i
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button9"
          >
            o
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button10"
          >
            p
          </button>
        </div>
        <div>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button11"
          >
            a
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button12"
          >
            s
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button13"
          >
            d
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button14"
          >
            f
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button15"
          >
            g
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button16"
          >
            h
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button17"
          >
            j
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button18"
          >
            k
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button19"
          >
            l
          </button>
        </div>
        <div>
          <button className="buttons" onClick={enterFunction} id="button20">
            enter
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button21"
          >
            z
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button22"
          >
            x
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button23"
          >
            c
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button24"
          >
            v
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button25"
          >
            b
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button26"
          >
            n
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              changeHandler(e);
            }}
            id="button27"
          >
            m
          </button>
          <button
            className="buttons"
            onClick={(e) => {
              removerHandler(e);
            }}
            id="button28"
          >
            <CiSquareRemove />
          </button>
        </div>
      </div>
    </>
  );
};

export default Main;
