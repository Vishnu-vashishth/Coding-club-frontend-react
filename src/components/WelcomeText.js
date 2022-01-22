import React from 'react'
import img from './images/imgwlcm1.png'
function WelcomeText() {
    return (
        <div className='wlcmtext-box'>
            <div className="wlcmtext">
                <h3>Welcome Geeks</h3>
                <h1 id='largetext'>SDIET coding club welcomes you</h1>
                <button className="btn" style={{background: "transparent",border:"1px solid #ffff"}}>{"Explore more->"}</button>
            </div>
            <div className="wlcmpic">
                <img src={img} alt=""  />
            </div>
        </div>
    )
}

export default WelcomeText
