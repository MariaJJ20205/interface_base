import React, { useEffect, useState } from "react";
import '../../src/Styles/text.css'
const Title =()=>{


    const [text,setText] =useState("Bienvenidos")
    
    useEffect(() =>{
        setText("Bienvenidos a mi portafolio")
    }, [text])

    return(
        <div className="shadow-left">
            <h1 className="text">{text}</h1>
           
        </div>
    )
}

export default Title