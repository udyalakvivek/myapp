
import React, { useState } from 'react'

import Navbar from './component/Navbar'
import TextForm from './component/TextForm'
import About from './component/About'

export default function Video5() {

    const [mode, setMode] = useState("light")
    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark")
            document.body.style.backgroundColor = '#153b73'

        }
        else {
            setMode("light")
            document.body.style.backgroundColor = 'white'
        }
    }
    return (
        <>
            <Navbar title="TextUtils" AboutUtils="About Utils" mode={mode} toggleMode={toggleMode} />

            <TextForm heading="Enter your Text :" mode={mode} />
            <About mode={mode} />


        </>
    )
}
