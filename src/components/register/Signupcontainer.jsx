import React from 'react'
import Input from './Input'

function container(props) {
    return (
    <div className="signup" style={props.disp}>
            <div className='signupcontainer'>
            <h1>Login</h1>
                <Input type ="text" placeholder="Enter Name"/>
                <Input type ="text" placeholder="Enter Password"/>
                {/* <Input type ="button" placeholder="Login"/> */}
                <button className='input inputbtn'>Login</button>
                <h3>OR</h3>
                <Input placeholder="Sign in with Google"/>
                <Input placeholder="Sign in with Facebook"/>
                {/* <Input placeholder="Sign in with Github"/> */}
            </div>
        </div>
    )
}

export default container
