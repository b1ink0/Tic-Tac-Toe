import React from 'react'

function XandO(props) {
    return (
        <>
           <svg height="100" width="100" className='xAndO' id={props.nameSvgO}>
                <circle 
                    className={props.nameGo}
                    cx="50" cy="50" r="33" 
                    id={props.nameO1}
                    stroke="green" 
                    strokeWidth="9" 
                    strokeLinecap="round"
                    fill="none" 
                />
                 <circle 
                    className={props.nameGo}
                    cx="50" cy="50" r="33" 
                    id={props.nameO2}
                    stroke="green" 
                    strokeWidth="9" 
                    strokeLinecap="round"
                    fill="none" 
                    filter="blur(3px)"
                />
            </svg>
            <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" className='xAndO' id={props.nameSvgX}>
                <g>
                    <line 
                        className={props.nameGx}
                        id={props.nameX11}
                        stroke="red" 
                        strokeLinecap="round"
                        strokeWidth="25"  
                        y2="297.7314" x2="272.84297" y1="144.66116" x1="119.77273" 
                        fill="none"
                    />
                    <line 
                        className={props.nameGx}
                        id={props.nameX21}
                        stroke="red" 
                        strokeLinecap="round"
                        strokeWidth="25"  
                        y2="297.7314" x2="272.84297" y1="144.66116" x1="119.77273" 
                        fill="none"
                        filter="blur(14px)"
                    />
                    <line 
                        className={props.nameGx}
                        id={props.nameX12}
                        stroke="red" 
                        strokeLinecap="round"
                        strokeWidth="25"  
                        transform="rotate(90 196.307861328125,221.19628906250003) " 
                        y2="297.7314" x2="272.84297" y1="144.66116" x1="119.77273" 
                        fill="none"
                    />
                     <line 
                        className={props.nameGx}
                        id={props.nameX22}
                        stroke="red" 
                        strokeLinecap="round"
                        strokeWidth="25"  
                        transform="rotate(90 196.307861328125,221.19628906250003) " 
                        y2="297.7314" x2="272.84297" y1="144.66116" x1="119.77273" 
                        fill="none"
                        filter="blur(14px)"
                    />
                </g>
            </svg>
            {
                props.nameTitle ? <h3 id='subTitle'>{props.nameTitle}</h3> : ''
            }  
            {
                props.nameResetTitle ? <h3 id='resetTitle'>{props.nameResetTitle}</h3> : ''
            }  
        </>
    )
}

export default XandO
