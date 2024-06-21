
import React, { useState } from 'react'

export default function BgChanger() {
    const [color, setColor] = useState("white")
    function handlecolor(newcolor) {
        if (color === "light") {
            setColor("white")
            document.body.style.backgroundColor = "white";
        }
        else {
            document.body.style.backgroundColor = newcolor;

        }
    }

    function handlecolor1() {
        setColor("white")
        document.body.style.backgroundColor = "white";
    }



    return (
        <div>
            <div className=' fixed-bottom col-12 flex-wrap d-flex justify-content-center align-items-center gap-3 mb-4'>
                <button type="button" className="btn btn-outline-warning" onClick={() => handlecolor1("white")}>Reset-Color</button>
                <button type="button" className="btn btn-secondary" onMouseOver={() => handlecolor("#343a40")}>Secondary</button>
                <button type="button" className="btn btn-success" onMouseOver={() => handlecolor("green")}>Success</button>
                <button type="button" className="btn btn-danger" onMouseOver={() => handlecolor("red")}>Danger</button>
                <button type="button" className="btn btn-warning" onMouseOver={() => handlecolor("yellow")}>Warning</button>
                <button type="button" className="btn btn-info" onMouseOver={() => handlecolor("cyan")}>Info</button>
                {/* <button type="button" className="btn btn-blue">Blue</button> */}
                <button type="button" className="btn btn-dark" onMouseOver={() => handlecolor("black")}>Dark</button>
            </div>
        </div>
    )
}

