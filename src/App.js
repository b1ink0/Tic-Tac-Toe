import React from 'react'
import "./App.scss";
import Ttt from "./components/Ttt";
import bot from './components/img/ai.png'
import player from './components/img/player.png'


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
    oScor
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
  const img1 = document.getElementById('img')
  const img2 = document.getElementById('img1')
  const AiBtn1 = document.getElementById("aI1");
  const btns = document.querySelectorAll("span");
  const title = document.getElementById("title");
  const title1 = document.getElementById("title1");
  const frontPage = document.getElementById('frontPage')
  const Bot = document.getElementById('bot')
  const Player = document.getElementById('player')
  const aiScore = document.getElementById('aiScore')
  const notAiScore = document.getElementById('notAiScore')
  const playerScore = document.getElementById('playerScore')
  const botScore = document.getElementById('botScore')
  const xScore = document.getElementById('xScore')
  const oScore = document.getElementById('oScore')
    const resetValues = () => {
        [condition, win, count1, count2, count3, count4, count5, count6, count7, count8, count9] = [true, false, 2, 2, 2, 2, 2, 2, 2, 2, 2];
        let i = 1;
        while (i < 10) {
          title.innerText = "X Turn";
          document.querySelector(`#btn${i}`).innerText = " ";
          document.querySelector(`#btn${i}`).style.pointerEvents = "all";
          i++;
        }
    }
    const resetPage = () => {
      document.getElementById('front').style.opacity = 0;
      document.getElementById('front').style.pointerEvents= 'none';
          document.getElementById('front').classList.remove('blur');
          document.getElementById('resetBtn1').style.opacity = 0;
          document.getElementById('resetBtn1').style.pointerEvents= 'none';
          document.getElementById('aI1').style.opacity = 0;
          document.getElementById('aI1').style.pointerEvents= 'none';
          document.getElementById('title1').style.opacity = 0;
          document.getElementById('title1').style.pointerEvents= 'none';
    }
    const titleChangeO = () => {
      title.innerText = 'O Turn'
    }
    const titleChangeX = () => {
      title.innerText = 'X Turn'
    }
    const titleChangeOWin = () => {
      title.innerText = 'O Wins!'
      title1.innerText = 'O Wins!'
      if(ai){
        bScore++;
        botScore.innerText = `Bot-Score = ${bScore}`
      } else if (!ai){
        oScor++;
        oScore.innerText = `O-Score = ${oScor}`
      }
    }
    const titleChangeXWin = () => {
      title.innerText = 'X Wins!'
      title1.innerText = 'X Wins!'
      if(ai){
        pScore++;
        playerScore.innerText = `Player-Score = ${pScore}`
      } else if (!ai){
        xScor++;
        xScore.innerText = `X-Score = ${xScor}`
      }
    }
    const titleChangeTie = () => {
      title.innerText = 'Tie'
      title1.innerText = 'Tie'
    }
    const gameMode = () => {
      resetValues();
      [ pScore, bScore, xScor, oScor ] = [0, 0, 0, 0]
      playerScore.innerText = `Player-Score = ${pScore}`
      botScore.innerText = `Bot-Score = ${bScore}`
      xScore.innerText = `X-Score = ${xScor}`
      oScore.innerText = `O-Score = ${oScor}`
      ai = !ai
      if (ai){ img1.src = `${bot}`; img1.src = `${bot}`}
      else if (!ai){ img1.src = `${player}`;  img2.src = `${player}`}
      if (ai){
        notAiScore.style.display = 'none'
        aiScore.style.display = 'flex';
      }
      else if (!ai){
        aiScore.style.display = 'none';
        notAiScore.style.display = 'flex';
      }
    }
    Bot.addEventListener('click',()=>{
      frontPage.style.opacity = 0;
      frontPage.style.pointerEvents = 'none';
    })
    Player.addEventListener('click',()=>{
      gameMode();
      frontPage.style.opacity = 0;
      frontPage.style.pointerEvents = 'none';
    })
    AiBtn.addEventListener('click', () =>{ 
      gameMode();
    })
    AiBtn1.addEventListener('click', () =>{ 
      gameMode();
      resetPage();
    })
    
    function AI() {
        
    if      ( (count3 === 4 && count2 === 4 && (count1 === 2)) || (count5 === 4 && count9 === 4 && (count1 === 2)) || (count4 === 4 && count7 === 4 && (count1 === 2))) { count1 = 3; Btn1.innerText = "O"; Btn1.style.pointerEvents = "none"; }
    else if ( (count5 === 4 && count8 === 4 && (count2 === 2)) || (count1 === 4 && count3 === 4 && (count2 === 2))) { count2 = 3; Btn2.innerText = "O"; Btn2.style.pointerEvents = "none"; }
    else if ( (count1 === 4 && count2 === 4 && (count3 === 2)) || (count6 === 4 && count9 === 4 && (count3 === 2)) || (count5 === 4 && count7 === 4 && (count3 === 2))) { count3 = 3; Btn3.innerText = "O"; Btn3.style.pointerEvents = "none"; }
    else if ( (count5 === 4 && count6 === 4 && (count4 === 2)) || (count1 === 4 && count7 === 4 && (count4 === 2))) { count4 = 3; Btn4.innerText = "O"; Btn4.style.pointerEvents = "none"; }
    else if ( (count1 === 4 && count9 === 4 && (count5 === 2)) || (count3 === 4 && count7 === 4 && (count5 === 2)) || ((count4 === 4 && count6 === 4 && (count5 === 2)) || ((count8 === 4 && count2 === 4 && (count5 === 2))))) { count5 = 3; Btn5.innerText = "O"; Btn5.style.pointerEvents = "none"; }
    else if ( (count4 === 4 && count5 === 4 && (count6 === 2)) || (count3 === 4 && count9 === 4 && (count6 === 2))) { count6 = 3; Btn6.innerText = "O"; Btn6.style.pointerEvents = "none"; } 
    else if ( (count8 === 4 && count9 === 4 && (count7 === 2)) || (count1 === 4 && count4 === 4 && (count7 === 2)) || (count3 === 4 && count5 === 4 && (count7 === 2))) { count7 = 3; Btn7.innerText = "O"; Btn7.style.pointerEvents = "none"; }
    else if ( (count5 === 4 && count2 === 4 && (count8 === 2)) || (count7 === 4 && count9 === 4 && (count8 === 2))) { count8 = 3; Btn8.innerText = "O"; Btn8.style.pointerEvents = "none"; }
    else if ( (count7 === 4 && count8 === 4 && (count9 === 2)) || (count3 === 4 && count6 === 4 && (count9 === 2)) || (count1 === 4 && count5 === 4 && (count9 === 2))) { count9 = 3; Btn9.innerText = "O"; Btn9.style.pointerEvents = "none"; }
    else {
      if( count1 === 2 ){ aiList.push(1)}
      if( count2 === 2 ){ aiList.push(2)}
      if( count3 === 2 ){ aiList.push(3)}
      if( count4 === 2 ){ aiList.push(4)}
      if( count5 === 2 ){ aiList.push(5)}
      if( count6 === 2 ){ aiList.push(6)}
      if( count7 === 2 ){ aiList.push(7)}
      if( count8 === 2 ){ aiList.push(8)}
      if( count9 === 2 ){ aiList.push(9)}
      listIndex = aiList[Math.floor(Math.random()*aiList.length)]
      if (listIndex === 1 || listIndex === 2 || listIndex === 3 || listIndex === 4 || listIndex === 5 || listIndex === 6 || listIndex === 7 || listIndex === 8 || listIndex === 9){
        document.getElementById(`btn${listIndex}`).innerText='O';
        document.getElementById(`btn${listIndex}`).style.pointerEvents='none';
      }
      if (listIndex === 1){count1 = 3}
      if (listIndex === 2){count2 = 3}
      if (listIndex === 3){count3 = 3}
      if (listIndex === 4){count4 = 3}
      if (listIndex === 5){count5 = 3}
      if (listIndex === 6){count6 = 3}
      if (listIndex === 7){count7 = 3}
      if (listIndex === 8){count8 = 3}
      if (listIndex === 9){count9 = 3}
      }
      if (count1 === count2 && count2 === count3 && count3 === 3) {
        titleChangeOWin();
        win = !win;
      } else if (count4 === count5 && count5 === count6 && count6 === 3) {
        titleChangeOWin();
        win = !win;
      } else if (count7 === count8 && count8 === count9 && count9 === 3) {
        titleChangeOWin();
        win = !win;
      } else if (count1 === count4 && count4 === count7 && count7 === 3) {
        titleChangeOWin();
        win = !win;
      } else if (count2 === count5 && count5 === count8 && count8 === 3) {
        titleChangeOWin();
        win = !win;
      } else if (count3 === count6 && count6 === count9 && count9 === 3) {
        titleChangeOWin();
        win = !win;
      } else if (count1 === count5 && count5 === count9 && count9 === 3) {
        titleChangeOWin();
        win = !win;
      } else if (count3 === count5 && count5 === count7 && count7 === 3) {
        titleChangeOWin();
        win = !win;
      } else if (
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

      aiList = [];
      listIndex = 0;
    }
    
    document.getElementById("resetBtn").addEventListener("click", () => resetValues());
    document.getElementById("resetBtn1").addEventListener("click", () => {resetValues(); resetPage();});
    if (ai){
      notAiScore.style.display = 'none'
      aiScore.style.display = 'flex';
    }
    if (!ai){
      aiScore.style.display = 'none';
      notAiScore.style.display = 'flex';
    }
    btns.forEach((btn) => {
      btn.addEventListener("click", function () {
        let count = parseInt(btn.id.slice(-1));
        if (condition) {
          if(!ai){ titleChangeO(); }
          btn.innerText = "X";
          //
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
          //
          if (count1 === count2 && count2 === count3 && count3 === 4) {
            titleChangeXWin();
            win = !win;
          } else if (
            count4 === count5 &&
            count5 === count6 &&
            count6 === 4
          ) {
            titleChangeXWin();
            win = !win;
          } else if (
            count7 === count8 &&
            count8 === count9 &&
            count9 === 4
          ) {
            titleChangeXWin();
            win = !win;
          } else if (
            count1 === count4 &&
            count4 === count7 &&
            count7 === 4
          ) {
            titleChangeXWin();
            win = !win;
          } else if (
            count2 === count5 &&
            count5 === count8 &&
            count8 === 4
          ) {
            titleChangeXWin();
            win = !win;
          } else if (
            count3 === count6 &&
            count6 === count9 &&
            count9 === 4
          ) {
            titleChangeXWin();
            win = !win;
          } else if (
            count1 === count5 &&
            count5 === count9 &&
            count9 === 4
          ) {
            titleChangeXWin();
            win = !win;
          } else if (
            count3 === count5 &&
            count5 === count7 &&
            count7 === 4
          ) {
            titleChangeXWin();
            win = !win;
          } else if (
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
          if (ai && !win) {
            AI();
          }
         
        }
        if (!ai && !condition){
          titleChangeX();
          btn.innerText = "O";
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
          //
          if (count1 === count2 && count2 === count3 && count3 === 3) {
            titleChangeOWin();
            win = !win;
          } else if (count4 === count5 && count5 === count6 && count6 === 3) {
            titleChangeOWin();
            win = !win;
          } else if (count7 === count8 && count8 === count9 && count9 === 3) {
            titleChangeOWin();
            win = !win;
          } else if (count1 === count4 && count4 === count7 && count7 === 3) {
            titleChangeOWin();
            win = !win;
          } else if (count2 === count5 && count5 === count8 && count8 === 3) {
            titleChangeOWin();
            win = !win;
          } else if (count3 === count6 && count6 === count9 && count9 === 3) {
            titleChangeOWin();
            win = !win;
          } else if (count1 === count5 && count5 === count9 && count9 === 3) {
            titleChangeOWin();
            win = !win;
          } else if (count3 === count5 && count5 === count7 && count7 === 3) {
            titleChangeOWin();
            win = !win;
          } else if (
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
        if (win) {
          document.getElementById('front').style.opacity = 1;
          document.getElementById('front').style.pointerEvents= 'all';
          document.getElementById('front').classList.add('blur');
          document.getElementById('resetBtn1').style.opacity = 1;
          document.getElementById('resetBtn1').style.pointerEvents= 'all';
          document.getElementById('aI1').style.opacity = 1;
          document.getElementById('aI1').style.pointerEvents= 'all';
          document.getElementById('title1').style.opacity = 1;
          document.getElementById('title1').style.pointerEvents= 'all';
          let i = 1;
          while (i < 10) {
            document.querySelector(`#btn${i}`).style.pointerEvents = "none";
            i++;
          }
        }
        btn.style.pointerEvents = "none";
        if (!ai){
            condition = !condition
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
