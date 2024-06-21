
import React from 'react'
// import './App.css';
let name = "vivek paandey";

export default function Video4() {
    return (
        //  JSX fregment  use return "2 statement" in one return 
        <>
            <h1> Hello my name is {name}</h1>
            <h1> Hello i am outside div </h1>
            <div>
                <h1 className='blank'> Hello Developers I am here !</h1>
                <h2 style={{ color: "red", backgroundColor: " yellow" }}>Vivek Pandey </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, non excepturi et eos enim maxime temporibus odit commodi reprehenderit debitis. Nihil.</p>
            </div>
        </>
    )
}

