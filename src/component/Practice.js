import React, { useState } from 'react'
import { jsx } from 'react/jsx-runtime';

export default function BgChanger() {
    // let btn1=document.querySelector(".btn-primary")
    // let btn2= btn1.target.value()
    // console.log(btn2)
    const [color, setColor] = useState("white")
    function handlecolor1() {
        if (color === "light") {
            setColor("white")
            document.body.style.backgroundColor = 'white';
        }
        else {
            document.body.style.backgroundColor = "#0d6efd ";
            setColor("light")
        }
    }

    function handlecolor2() {
        if (color === "light") {
            setColor("white")
            document.body.style.backgroundColor = "white";
        }
        else {
            document.body.style.backgroundColor = '#343a40';
            setColor("light")
        }
    }

    function handlecolor3() {
        if (color === "light") {
            setColor("dark")
            document.body.style.backgroundColor = 'green';
        }
        else {
            document.body.style.backgroundColor = "white";
            setColor("light")
        }
    }

    function handlecolor4() {
        if (color === "light") {
            setColor("dark")
            document.body.style.backgroundColor = 'red';
        }
        else {
            document.body.style.backgroundColor = "white";
            setColor("light")
        }
    }
    function handlecolor5() {
        if (color === "light") {
            setColor("dark")
            document.body.style.backgroundColor = 'yellow';
        }
        else {
            document.body.style.backgroundColor = "white";
            setColor("light")
        }
    }

    function handlecolor6() {
        if (color === "light") {
            setColor("dark")
            document.body.style.backgroundColor = 'cyan';
        }
        else {
            document.body.style.backgroundColor = "white";
            setColor("light")
        }
    }

    function handlecolor7() {
        if (color === "light") {
            setColor("dark")
            document.body.style.backgroundColor = 'black';
        }
        else {
            document.body.style.backgroundColor = "white";
            setColor("light")
        }
    }



    return (
        <div>
            <div className=' fixed-bottom d-flex justify-content-center align-items-center gap-3 mb-4'>
                <button type="button" className="btn btn-primary" onClick={handlecolor1}>Primary</button>
                <button type="button" className="btn btn-secondary" onClick={handlecolor2}>Secondary</button>
                <button type="button" className="btn btn-success" onClick={handlecolor3}>Success</button>
                <button type="button" className="btn btn-danger" onClick={handlecolor4}>Danger</button>
                <button type="button" className="btn btn-warning" onClick={handlecolor5}>Warning</button>
                <button type="button" className="btn btn-info" onClick={handlecolor6}>Info</button>
                {/* <button type="button" className="btn btn-blue">Blue</button> */}
                <button type="button" className="btn btn-dark" onClick={handlecolor7}>Dark</button>
            </div>
        </div>
    )
}


// css in about jsx
// const [myStyle, setStyle] = useState({
//     color: 'black',
//     backgroundColor: 'white'
// })
// const [text, setText] = useState("Light Mode")
// const toggleStyle = () => {
//     if (myStyle.color === 'white') {
//         setStyle({
//             color: 'black',
//             backgroundColor: 'white',
//         })
//         setText("Dark Mode")
//     }
//     else {
//         setStyle({
//             color: 'white',
//             backgroundColor: 'black',

//         })
//         setText("Light Mode")
//     }



// }