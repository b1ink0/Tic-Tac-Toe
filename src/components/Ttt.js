import React from 'react'
import './Ttt.scss'
import ai from './img/ai.svg'
import reset from './img/reset.svg'
import XandO from './XandO'

function Ttt() {
    return (
        <>
        <div id='frontPage'>
            <h1>Game Modes</h1>
            <div id='bot'><h1>Player Vs Bot</h1></div>
            <div id='player'><h1>Player Vs Player</h1></div>
        </div>
        <div id="front">
            <div id="title1" className="reset"><XandO nameSvgO='oResetTitle' nameSvgX='xResetTitle' nameResetTitle='Wins'/></div>
            <div className='resetContainer'>
                <div id="resetBtn1" className="reset"><img id='resetImg' src={reset}/></div>
                <div id="aI1" className="reset"><img id='img1' src={ai}/></div>
            </div> 
        </div>
        <div className="block">
            <div id="title"><XandO nameSvgO='oTitle' nameSvgX='xTitle' nameTitle='Turn'/></div>
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
            <div id='btnCon'>
                <div className="row1">
                    <span id="btn1" className="btn"><XandO nameGo='gO' nameGx='gX' nameSvgO='spanSvgO1' nameSvgX='spanSvgX1' nameO1='spanO11'nameO2='spanO21' nameX11='spanX11' nameX12='spanX121' nameX21='spanX21' nameX22='spanX221'/></span>
                    <span id="btn2" className="btn"><XandO nameGo='gO' nameGx='gX' nameSvgO='spanSvgO2' nameSvgX='spanSvgX2' nameO1='spanO12'nameO2='spanO22' nameX11='spanX12' nameX12='spanX122' nameX21='spanX22' nameX22='spanX222'/></span>
                    <span id="btn3" className="btn"><XandO nameGo='gO' nameGx='gX' nameSvgO='spanSvgO3' nameSvgX='spanSvgX3' nameO1='spanO13'nameO2='spanO23' nameX11='spanX13' nameX12='spanX123' nameX21='spanX23' nameX22='spanX223'/></span>
                </div> 
                <div className="row2"> 
                    <span id="btn4" className="btn"><XandO nameGo='gO' nameGx='gX' nameSvgO='spanSvgO4' nameSvgX='spanSvgX4' nameO1='spanO14'nameO2='spanO24' nameX11='spanX14' nameX12='spanX124' nameX21='spanX24' nameX22='spanX224'/></span>
                    <span id="btn5" className="btn"><XandO nameGo='gO' nameGx='gX' nameSvgO='spanSvgO5' nameSvgX='spanSvgX5' nameO1='spanO15'nameO2='spanO25' nameX11='spanX15' nameX12='spanX125' nameX21='spanX25' nameX22='spanX225'/></span>
                    <span id="btn6" className="btn"><XandO nameGo='gO' nameGx='gX' nameSvgO='spanSvgO6' nameSvgX='spanSvgX6' nameO1='spanO16'nameO2='spanO26' nameX11='spanX16' nameX12='spanX126' nameX21='spanX26' nameX22='spanX226'/></span>
                </div> 
                <div className="row3"> 
                    <span id="btn7" className="btn"><XandO nameGo='gO' nameGx='gX' nameSvgO='spanSvgO7' nameSvgX='spanSvgX7' nameO1='spanO17'nameO2='spanO27' nameX11='spanX17' nameX12='spanX127' nameX21='spanX27' nameX22='spanX227'/></span>
                    <span id="btn8" className="btn"><XandO nameGo='gO' nameGx='gX' nameSvgO='spanSvgO8' nameSvgX='spanSvgX8' nameO1='spanO18'nameO2='spanO28' nameX11='spanX18' nameX12='spanX128' nameX21='spanX28' nameX22='spanX228'/></span>
                    <span id="btn9" className="btn"><XandO nameGo='gO' nameGx='gX' nameSvgO='spanSvgO9' nameSvgX='spanSvgX9' nameO1='spanO19'nameO2='spanO29' nameX11='spanX19' nameX12='spanX129' nameX21='spanX29' nameX22='spanX229'/></span>
                </div>
                <div id='lines'>
                    <div id='line1'>
                        <div className='line1a lineMain'></div>
                        <div className='line1b lineBlur'></div>
                    </div>
                    <div id='line2'>
                        <div className='line2a lineMain'></div>
                        <div className='line2b lineBlur'></div>
                    </div>
                    <div id='line3'>
                        <div className='line3a lineMain'></div>
                        <div className='line3b lineBlur'></div>
                    </div>
                    <div id='line4'>
                        <div className='line4a lineMain'></div>
                        <div className='line4b lineBlur'></div>
                    </div>
                    <div id='line5'>
                        <div className='line5a lineMain'></div>
                        <div className='line5b lineBlur'></div>
                    </div>
                    <div id='line6'>
                        <div className='line6a lineMain'></div>
                        <div className='line6b lineBlur'></div>
                    </div>
                    <div id='line7'>
                        <div className='line7a lineMain'></div>
                        <div className='line7b lineBlur'></div>
                    </div>
                    <div id='line8'>
                        <div className='line8a lineMain'></div>
                        <div className='line8b lineBlur'></div>
                    </div>
                </div>
            </div>
            <div>
                <div id="resetBtn" className="Btn"><img id='resetImg' src={reset}/></div>
                <div id="aI"><img id='img' src={ai}/></div>
            </div>
        </div>
        </>
    )
}

export default Ttt
