import React, { useState } from 'react'
import './App.css';


export default function Password() {

    const [ShowPassword, setPassword] = useState(false);
    const [ShowText, setText] = useState("Hide")

    function HandleMouseOut() {
        setPassword(false)
        setText("Hide")

    }
    function HandleMouseOver() {
        setPassword(true)
        setText("Show")

    }
    return (
        <div>
            <h2>Hello Everyone Welcome to my Website </h2>
            <input className='PASSWORD' type={ShowPassword ? "Text" : "password"} placeholder='Enter your password '
                onMouseOver={HandleMouseOver}
                onMouseOut={HandleMouseOut}
            />
            <button>{ShowText}</button>
        </div>
    )
}

