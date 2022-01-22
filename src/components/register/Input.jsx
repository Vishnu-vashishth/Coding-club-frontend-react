import React from 'react'

function Input(props) {
    return (
        <div className='input'>
            <input type={props.type}  placeHolder={props.placeholder}/>
        </div>
    )
}

export default Input
