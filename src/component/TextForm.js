import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('')
    const [savedText, setSavedText] = useState("")

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);


    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)

    }
    const handleChange = (event) => {

        setText(event.target.value)

    }
    const handleClr = () => {

        setSavedText(text);

        setText("");


    }
    const handleRt = () => {
        let newText = savedText;
        setText(newText);
    }
    const handleCopy = () => {


    }
    const handleSpace = () => {

    }
    return (
        <>
            <div className='container my-4' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h3 >{props.heading}</h3>
                <div className='mb-3'>
                    <textarea className="form-control" id="myBox" rows="5" value={text} onChange={handleChange} style={{ backgroundColor: props.mode === 'dark' ? '#6f78aa52' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} placeholder='Enter Text Here:' ></textarea>

                </div>
                <button className='btn btn-danger mx-2' onClick={handleUpClick}> convert to Uppercase </button>
                <button className='btn btn-primary mx-2' onClick={handleLoClick}> convert to LowerCase </button>


                <button className='btn btn-success mx-2' onClick={handleRt}>Retrive Text</button>
                <button className='btn btn-dark mx-2' onClick={handleClr}> Clear Text </button>
                <button className='btn btn-primary mx-2' onClick={handleCopy}> Copy Text </button>
                <button className='btn btn-info mx-2' onClick={handleSpace}> Remove Extra space</button>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>
                    {text.split(" ").length} words ,
                    {text.length} character
                </p>
                {/* <p>" {0.008 * text.split(" ").length} " Minutes to take read this text </p> */}
                <p>{0.008 * text.split(" ").filter((element) => element.length !== 0).length} Minutes to read this text</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Something text in the abobe box to preview"}</p>
                {/* <p>{savedText}</p> */}

            </div>
        </>
    )
}
