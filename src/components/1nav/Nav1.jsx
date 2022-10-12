import React from "react";
import './nav.css';


const Nav1 = () => {
    return (
        <>
            <div className="nav" id="navbar">

                <h4 className='logo'><a href="http://192.168.202.128:3000">Logo</a></h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <button type='button'>Subscribe</button>

            </div>
 

        </>
    );
}

export default Nav1;