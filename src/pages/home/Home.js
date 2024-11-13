import React from "react"
import Title from "../../components/Title"
import Image from "../../components/Image"
import Parrafo from "../../components/Parrafo"
import Navbar from "../../components/Navbar"
import Carta from "../../components/Carta"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        
        <div className="container">
            <Navbar/>
            <Title/>
            
            

            <Image/>
            <Parrafo/>

            <Carta/>

            <Link to={"/Main"}>Ver proyectos a detalle</Link>

        </div>
    )
}

export default Home;