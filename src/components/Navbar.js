import React,{useState} from 'react'
import Signupcontainer from './register/Signupcontainer'
import navlogo from './images/s4.png'
function Navbar() {
    const[display,setDisplay] = useState({display:"none"});
   
    console.log(display);
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={navlogo} alt="" />
            </div>
            
                <ul className="nav">
                    <li><a href="/" >HOME</a></li>
                    <li><a href="/" >ABOUT</a></li>
                    <li><a href="/" >CONTACT US</a></li>
                </ul>
                    <button onClick={()=>{setDisplay({display:"flex"})}}>SIGN IN</button>
            
            <Signupcontainer disp={display}/>
        </div>
    )
}

export default Navbar

