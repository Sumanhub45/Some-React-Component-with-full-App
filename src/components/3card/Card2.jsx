import React from "react";
import './card2.css';


const Card2 = (props) => {



    return (
        <>
        
            <div className="card2">
                <div className="card-body2">
                    <img src={props.imgsrc} alt="Avatar" className="hii2" />
                    <div className="container2">
                        <h4 className="m1"><b>{props.name}</b></h4>
                        <p className="m1">{props.description}</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Card2;