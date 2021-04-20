import React from 'react'
import './Ttt.scss'
import ai from './img/ai.png'

function Ttt() {
    return (
        <>
        <div id='frontPage'>
            <h1>Game Modes</h1>
            <div id='bot'><h1>Player Vs Bot</h1></div>
            <div id='player'><h1>Player Vs Player</h1></div>
        </div>
        <div id="front">
            <div id="title1" className="reset"></div>
            <div className='resetContainer'>
                <div id="resetBtn1" className="reset">↺</div>
                <div id="aI1" className="reset"><img id='img1' src={ai}/></div>
            </div> 
        </div>
        <div className="block">
            <div id="title">X Turn</div>
            <div id='score'>
                <div id='aiScore'>
                    <div id='playerScore'>
                        Player-Score = 0
                    </div>
                    <div id='botScore'>
                        Bot-Score = 0
                    </div>
                </div>
                <div id='notAiScore'>
                    <div id='xScore'>
                        X-Score = 0
                    </div>
                    <div id='oScore'>
                        O-Score = 0
                    </div>
                </div>
                
            </div>
            <div className="row1">
                <span id="btn1" className="btn"> </span>
                <span id="btn2" className="btn"> </span>
                <span id="btn3" className="btn"> </span>
            </div>
            <div className="row2">
                <span id="btn4" className="btn"> </span>
                <span id="btn5" className="btn"> </span>
                <span id="btn6" className="btn"> </span>
            </div>
            <div className="row3">
                <span id="btn7" className="btn"> </span>
                <span id="btn8" className="btn"> </span>
                <span id="btn9" className="btn"> </span>
            </div>
            <div>
                <div id="resetBtn" className="Btn">↺</div>
                <div id="aI"><img id='img' src={ai}/></div>
            </div>
        </div>
        </>
    )
}

export default Ttt
