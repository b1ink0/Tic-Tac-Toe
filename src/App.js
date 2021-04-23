import React from "react";
import "./App.scss";
import Ttt from "./components/Ttt";
import bot from "./components/img/ai.svg";
import player from "./components/img/player.svg";

function App() {
  document.addEventListener("DOMContentLoaded", function () {
    let aiList = [];
    let listIndex = 0;
    let [
      ai,
      condition,
      win,
      count1,
      count2,
      count3,
      count4,
      count5,
      count6,
      count7,
      count8,
      count9,
      pScore,
      bScore,
      xScor,
      oScor,
    ] = [true, true, false, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0];
    const Btn1 = document.getElementById("btn1");
    const Btn2 = document.getElementById("btn2");
    const Btn3 = document.getElementById("btn3");
    const Btn4 = document.getElementById("btn4");
    const Btn5 = document.getElementById("btn5");
    const Btn6 = document.getElementById("btn6");
    const Btn7 = document.getElementById("btn7");
    const Btn8 = document.getElementById("btn8");
    const Btn9 = document.getElementById("btn9");
    const AiBtn = document.getElementById("aI");
    const img1 = document.getElementById("img");
    const img2 = document.getElementById("img1");
    const AiBtn1 = document.getElementById("aI1");
    const btns = document.querySelectorAll("span");
    const title = document.getElementById("title");
    const title1 = document.getElementById("title1");
    const frontPage = document.getElementById("frontPage");
    const Bot = document.getElementById("bot");
    const Player = document.getElementById("player");
    const aiScore = document.getElementById("aiScore");
    const notAiScore = document.getElementById("notAiScore");
    const playerScore = document.getElementById("playerScore");
    const botScore = document.getElementById("botScore");
    const xScore = document.getElementById("xScore");
    const oScore = document.getElementById("oScore");

    // For title to be X at start
    document.getElementById("xTitle").classList.add("displayOX");

    // Display wining lines
    const displayWin = (num) => {
      document.querySelector(`.line${num}a`).classList.add("svgWin");
      document.querySelector(`.line${num}b`).classList.add("svgWin");
    };

    // Displaying svg of X with animation
    const displayX = (num) => {
      document.getElementById(`spanSvgX${num}`).classList.add("displayOX");
      document.getElementById(`spanX1${num}`).classList.add("X1");
      document.getElementById(`spanX12${num}`).classList.add("X2");
      document.getElementById(`spanX2${num}`).classList.add("X1");
      document.getElementById(`spanX22${num}`).classList.add("X2");
    };

    // Displaying svg of O with animation
    const displayO = (num) => {
      document.getElementById(`spanSvgO${num}`).classList.add("displayOX");
      document.getElementById(`spanO1${num}`).classList.add("O");
      document.getElementById(`spanO2${num}`).classList.add("O");
    };

    // Reseting every value 
    const resetValues = () => {
      [
        condition,
        win,
        count1,
        count2,
        count3,
        count4,
        count5,
        count6,
        count7,
        count8,
        count9,
      ] = [true, false, 2, 2, 2, 2, 2, 2, 2, 2, 2];

      // Reseting X and O svgs
      let i = 1;
      while (i < 10) {
        document.getElementById(`spanSvgX${i}`).classList.remove("displayOX");
        document.getElementById(`spanSvgO${i}`).classList.remove("displayOX");
        document.getElementById(`spanX1${i}`).classList.remove("X1");
        document.getElementById(`spanX12${i}`).classList.remove("X2");
        document.getElementById(`spanO1${i}`).classList.remove("O");
        document.getElementById(`spanO2${i}`).classList.remove("O");
        document.getElementById(`spanX2${i}`).classList.remove("X1");
        document.getElementById(`spanX22${i}`).classList.remove("X2");
        document.querySelector(`#btn${i}`).style.pointerEvents = "all";
        i++;
      }

      // Reseting Titles
      let j = 1;
      while (j < 9) {
        document.querySelector(`.line${j}a`).classList.remove("svgWin");
        document.querySelector(`.line${j}b`).classList.remove("svgWin");
        j++;
      }
      document.getElementById("oTitle").classList.remove("displayOX");
      document.getElementById("xTitle").classList.add("displayOX");
      document.getElementById("xResetTitle").classList.remove("displayOX");
      document.getElementById("oResetTitle").classList.remove("displayOX");
      document.getElementById("subTitle").innerText = " Turn";
      document.getElementById("resetTitle").innerText = "Wins";
    };

    // Reseting intro page
    const resetPage = () => {
      document.getElementById("front").style.opacity = 0;
      document.getElementById("front").style.pointerEvents = "none";
      document.getElementById("front").classList.remove("blur");
      document.getElementById("resetBtn1").style.opacity = 0;
      document.getElementById("resetBtn1").style.pointerEvents = "none";
      document.getElementById("aI1").style.opacity = 0;
      document.getElementById("aI1").style.pointerEvents = "none";
      document.getElementById("title1").style.opacity = 0;
      document.getElementById("title1").style.pointerEvents = "none";
    };

    // Changing title for O
    const titleChangeO = () => {
      document.getElementById("xTitle").classList.remove("displayOX");
      document.getElementById("oTitle").classList.add("displayOX");
      document.getElementById("xResetTitle").classList.remove("displayOX");
      document.getElementById("oResetTitle").classList.add("displayOX");
    };

    // Changing title for X
    const titleChangeX = () => {
      document.getElementById("oTitle").classList.remove("displayOX");
      document.getElementById("xTitle").classList.add("displayOX");
      document.getElementById("oResetTitle").classList.remove("displayOX");
      document.getElementById("xResetTitle").classList.add("displayOX");
    };

    // Changing title for O wining
    const titleChangeOWin = () => {
      titleChangeO();
      document.getElementById("subTitle").innerText = " Wins";

      if (ai) {
        // Bot-Score update
        bScore++;
        botScore.innerText = `Bot-Score = ${bScore}`;
      } else if (!ai) {
        // O-Score update
        oScor++;
        oScore.innerText = `O-Score = ${oScor}`;
      }
    };

    // Changing title for X wining
    const titleChangeXWin = () => {
      titleChangeX();
      document.getElementById("subTitle").innerText = " Wins";
      if (ai) {
        // Player-Score update
        pScore++;
        playerScore.innerText = `Player-Score = ${pScore}`;
      } else if (!ai) {
        // X-Score update
        xScor++;
        xScore.innerText = `X-Score = ${xScor}`;
      }
    };
    
    // Changeing title for Tie
    const titleChangeTie = () => {
      document.getElementById("xResetTitle").classList.remove("displayOX");
      document.getElementById("oResetTitle").classList.remove("displayOX");
      document.getElementById("oTitle").classList.remove("displayOX");
      document.getElementById("xTitle").classList.remove("displayOX");
      document.getElementById("subTitle").innerText = "Tie";
      document.getElementById("resetTitle").innerText = "Tie";
    };

    // For changing gameMode
    const gameMode = () => {
      resetValues();
      [pScore, bScore, xScor, oScor] = [0, 0, 0, 0];
      playerScore.innerText = `Player-Score = ${pScore}`;
      botScore.innerText = `Bot-Score = ${bScore}`;
      xScore.innerText = `X-Score = ${xScor}`;
      oScore.innerText = `O-Score = ${oScor}`;
      ai = !ai;
      if (ai) {
        img1.src = `${bot}`;
        img1.src = `${bot}`;
      } else if (!ai) {
        img1.src = `${player}`;
        img2.src = `${player}`;
      }
      if (ai) {
        notAiScore.style.display = "none";
        aiScore.style.display = "flex";
      } else if (!ai) {
        aiScore.style.display = "none";
        notAiScore.style.display = "flex";
      }
    };

    // Listening for click for changing gameMode
    Bot.addEventListener("click", () => {
      frontPage.style.opacity = 0;
      frontPage.style.pointerEvents = "none";
    });
    Player.addEventListener("click", () => {
      gameMode();
      frontPage.style.opacity = 0;
      frontPage.style.pointerEvents = "none";
    });
    AiBtn.addEventListener("click", () => {
      gameMode();
    });
    AiBtn1.addEventListener("click", () => {
      gameMode();
      resetPage();
    });

    // Bot (only if else and else if statement 😅)
    function AI() {
      
      // For bot second move
      if (
        (count3 === 4 && count2 === 4 && count1 === 2) ||
        (count5 === 4 && count9 === 4 && count1 === 2) ||
        (count4 === 4 && count7 === 4 && count1 === 2)
      ) {
        count1 = 3;
        displayO(1);
        Btn1.style.pointerEvents = "none";
      } else if (
        (count5 === 4 && count8 === 4 && count2 === 2) ||
        (count1 === 4 && count3 === 4 && count2 === 2)
      ) {
        count2 = 3;
        displayO(2);
        Btn2.style.pointerEvents = "none";
      } else if (
        (count1 === 4 && count2 === 4 && count3 === 2) ||
        (count6 === 4 && count9 === 4 && count3 === 2) ||
        (count5 === 4 && count7 === 4 && count3 === 2)
      ) {
        count3 = 3;
        displayO(3);
        Btn3.style.pointerEvents = "none";
      } else if (
        (count5 === 4 && count6 === 4 && count4 === 2) ||
        (count1 === 4 && count7 === 4 && count4 === 2)
      ) {
        count4 = 3;
        displayO(4);
        Btn4.style.pointerEvents = "none";
      } else if (
        (count1 === 4 && count9 === 4 && count5 === 2) ||
        (count3 === 4 && count7 === 4 && count5 === 2) ||
        (count4 === 4 && count6 === 4 && count5 === 2) ||
        (count8 === 4 && count2 === 4 && count5 === 2)
      ) {
        count5 = 3;
        displayO(5);
        Btn5.style.pointerEvents = "none";
      } else if (
        (count4 === 4 && count5 === 4 && count6 === 2) ||
        (count3 === 4 && count9 === 4 && count6 === 2)
      ) {
        count6 = 3;
        displayO(6);
        Btn6.style.pointerEvents = "none";
      } else if (
        (count8 === 4 && count9 === 4 && count7 === 2) ||
        (count1 === 4 && count4 === 4 && count7 === 2) ||
        (count3 === 4 && count5 === 4 && count7 === 2)
      ) {
        count7 = 3;
        displayO(7);
        Btn7.style.pointerEvents = "none";
      } else if (
        (count5 === 4 && count2 === 4 && count8 === 2) ||
        (count7 === 4 && count9 === 4 && count8 === 2)
      ) {
        count8 = 3;
        displayO(8);
        Btn8.style.pointerEvents = "none";
      } else if (
        (count7 === 4 && count8 === 4 && count9 === 2) ||
        (count3 === 4 && count6 === 4 && count9 === 2) ||
        (count1 === 4 && count5 === 4 && count9 === 2)
      ) {
        count9 = 3;
        displayO(9);
        Btn9.style.pointerEvents = "none";
      }
      
      // For randomiz bot move 
      else {
        if (count1 === 2) {
          aiList.push(1);
        }
        if (count2 === 2) {
          aiList.push(2);
        }
        if (count3 === 2) {
          aiList.push(3);
        }
        if (count4 === 2) {
          aiList.push(4);
        }
        if (count5 === 2) {
          aiList.push(5);
        }
        if (count6 === 2) {
          aiList.push(6);
        }
        if (count7 === 2) {
          aiList.push(7);
        }
        if (count8 === 2) {
          aiList.push(8);
        }
        if (count9 === 2) {
          aiList.push(9);
        }
        listIndex = aiList[Math.floor(Math.random() * aiList.length)];
        if (
          listIndex === 1 ||
          listIndex === 2 ||
          listIndex === 3 ||
          listIndex === 4 ||
          listIndex === 5 ||
          listIndex === 6 ||
          listIndex === 7 ||
          listIndex === 8 ||
          listIndex === 9
        ) {
          displayO(listIndex);
          document.getElementById(`btn${listIndex}`).style.pointerEvents =
            "none";
        }
        if (listIndex === 1) {
          count1 = 3;
        }
        if (listIndex === 2) {
          count2 = 3;
        }
        if (listIndex === 3) {
          count3 = 3;
        }
        if (listIndex === 4) {
          count4 = 3;
        }
        if (listIndex === 5) {
          count5 = 3;
        }
        if (listIndex === 6) {
          count6 = 3;
        }
        if (listIndex === 7) {
          count7 = 3;
        }
        if (listIndex === 8) {
          count8 = 3;
        }
        if (listIndex === 9) {
          count9 = 3;
        }
      }

      // Checking for O wining 
      if (count1 === count2 && count2 === count3 && count3 === 3) {
        titleChangeOWin();
        displayWin(2);
        console.log("h");
        win = !win;
      } else if (count4 === count5 && count5 === count6 && count6 === 3) {
        titleChangeOWin();
        displayWin(1);
        win = !win;
      } else if (count7 === count8 && count8 === count9 && count9 === 3) {
        titleChangeOWin();
        displayWin(3);
        win = !win;
      } else if (count1 === count4 && count4 === count7 && count7 === 3) {
        titleChangeOWin();
        displayWin(6);
        win = !win;
      } else if (count2 === count5 && count5 === count8 && count8 === 3) {
        titleChangeOWin();
        displayWin(4);
        win = !win;
      } else if (count3 === count6 && count6 === count9 && count9 === 3) {
        titleChangeOWin();
        displayWin(5);
        win = !win;
      } else if (count1 === count5 && count5 === count9 && count9 === 3) {
        titleChangeOWin();
        displayWin(7);
        win = !win;
      } else if (count3 === count5 && count5 === count7 && count7 === 3) {
        titleChangeOWin();
        displayWin(8);
        win = !win;
      } 
      
      // Checking  for Tie
      else if (
        count1 !== 2 &&
        count2 !== 2 &&
        count3 !== 2 &&
        count4 !== 2 &&
        count5 !== 2 &&
        count6 !== 2 &&
        count7 !== 2 &&
        count8 !== 2 &&
        count9 !== 2
      ) {
        titleChangeTie();
        win = !win;
      }
      
      // Reseting values of randomiz
      aiList = [];
      listIndex = 0;
    }

    // Listening for click for reset
    document.getElementById("resetBtn").addEventListener("click", () => resetValues());
    document.getElementById("resetBtn1").addEventListener("click", () => {
      resetValues();
      resetPage();
    });

    // Displaying Score for bot and player
    if (ai) {
      notAiScore.style.display = "none";
      aiScore.style.display = "flex";
    }
    if (!ai) {
      aiScore.style.display = "none";
      notAiScore.style.display = "flex";
    }

    // Listening for click on btns
    btns.forEach((btn) => {
      btn.addEventListener("click", function () {
        let count = parseInt(btn.id.slice(-1));

        // X turn
        if (condition) {
          if (!ai) {
            titleChangeO();
          }
          displayX(count);
          if (count === 1) {
            count1 = 4;
          } else if (count === 2) {
            count2 = 4;
          } else if (count === 3) {
            count3 = 4;
          } else if (count === 4) {
            count4 = 4;
          } else if (count === 5) {
            count5 = 4;
          } else if (count === 6) {
            count6 = 4;
          } else if (count === 7) {
            count7 = 4;
          } else if (count === 8) {
            count8 = 4;
          } else if (count === 9) {
            count9 = 4;
          }
          

          // Checking for X wining
          if (count1 === count2 && count2 === count3 && count3 === 4) {
            titleChangeXWin();
            displayWin(2);
            win = !win;
          } else if (count4 === count5 && count5 === count6 && count6 === 4) {
            titleChangeXWin();
            displayWin(1);
            win = !win;
          } else if (count7 === count8 && count8 === count9 && count9 === 4) {
            displayWin(3);
            titleChangeXWin();
            win = !win;
          } else if (count1 === count4 && count4 === count7 && count7 === 4) {
            displayWin(6);
            titleChangeXWin();
            win = !win;
          } else if (count2 === count5 && count5 === count8 && count8 === 4) {
            displayWin(4);
            titleChangeXWin();
            win = !win;
          } else if (count3 === count6 && count6 === count9 && count9 === 4) {
            displayWin(5);
            titleChangeXWin();
            win = !win;
          } else if (count1 === count5 && count5 === count9 && count9 === 4) {
            displayWin(7);
            titleChangeXWin();
            win = !win;
          } else if (count3 === count5 && count5 === count7 && count7 === 4) {
            displayWin(8);
            titleChangeXWin();
            win = !win;
          } 
          
          // Checking for Tie
          else if (
            count1 !== 2 &&
            count2 !== 2 &&
            count3 !== 2 &&
            count4 !== 2 &&
            count5 !== 2 &&
            count6 !== 2 &&
            count7 !== 2 &&
            count8 !== 2 &&
            count9 !== 2
          ) {
            titleChangeTie();
            win = !win;
          }

          // Calling bot 
          if (ai && !win) {
            AI();
          }
        }

        // Player O Turn
        if (!ai && !condition) {
          titleChangeX();
          displayO(count);
          if (count === 1) {
            count1 = 3;
          } else if (count === 2) {
            count2 = 3;
          } else if (count === 3) {
            count3 = 3;
          } else if (count === 4) {
            count4 = 3;
          } else if (count === 5) {
            count5 = 3;
          } else if (count === 6) {
            count6 = 3;
          } else if (count === 7) {
            count7 = 3;
          } else if (count === 8) {
            count8 = 3;
          } else if (count === 9) {
            count9 = 3;
          }

          // Checking for O wining
          if (count1 === count2 && count2 === count3 && count3 === 3) {
            displayWin(2);
            titleChangeOWin();
            win = !win;
          } else if (count4 === count5 && count5 === count6 && count6 === 3) {
            displayWin(1);
            titleChangeOWin();
            win = !win;
          } else if (count7 === count8 && count8 === count9 && count9 === 3) {
            displayWin(3);
            titleChangeOWin();
            win = !win;
          } else if (count1 === count4 && count4 === count7 && count7 === 3) {
            displayWin(6);
            titleChangeOWin();
            win = !win;
          } else if (count2 === count5 && count5 === count8 && count8 === 3) {
            displayWin(4);
            titleChangeOWin();
            win = !win;
          } else if (count3 === count6 && count6 === count9 && count9 === 3) {
            displayWin(5);
            titleChangeOWin();
            win = !win;
          } else if (count1 === count5 && count5 === count9 && count9 === 3) {
            displayWin(7);
            titleChangeOWin();
            win = !win;
          } else if (count3 === count5 && count5 === count7 && count7 === 3) {
            displayWin(8);
            titleChangeOWin();
            win = !win;
          } 
          
          // Checking for Tie
          else if (
            count1 !== 2 &&
            count2 !== 2 &&
            count3 !== 2 &&
            count4 !== 2 &&
            count5 !== 2 &&
            count6 !== 2 &&
            count7 !== 2 &&
            count8 !== 2 &&
            count9 !== 2
          ) {
            titleChangeTie();
            win = !win;
          }
        }

        // Waiting to complete animation of wining lines and then displaying reset page
        if (win) {
          setTimeout(() => {
            document.getElementById("front").style.opacity = 1;
            document.getElementById("front").style.pointerEvents = "all";
            document.getElementById("front").classList.add("blur");
            document.getElementById("resetBtn1").style.opacity = 1;
            document.getElementById("resetBtn1").style.pointerEvents = "all";
            document.getElementById("aI1").style.opacity = 1;
            document.getElementById("aI1").style.pointerEvents = "all";
            document.getElementById("title1").style.opacity = 1;
            document.getElementById("title1").style.pointerEvents = "all";
          }, 700);
          let i = 1;
          while (i < 10) {
            document.querySelector(`#btn${i}`).style.pointerEvents = "none";
            i++;
          }
        }
        btn.style.pointerEvents = "none";
        if (!ai) {
          condition = !condition;
        }
      });
    });
  });

  return (
    <div className="App">
      <Ttt />
    </div>
  );
}

export default App;
