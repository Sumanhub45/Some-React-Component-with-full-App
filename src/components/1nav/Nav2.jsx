import React from "react";
import './nav2.css';


const Nav2 = () => {
    return (
        <>
            <div className="nav" id="navbar">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="logos">
                    <h4 className='logo'><a href="http://192.168.202.128:3000">Logo</a></h4>
                </div>
                <div className="btns">
                    <button type='button' className="btn">Subscribe</button>
                </div>
            </div>


        </>
    );
}

export default Nav2;