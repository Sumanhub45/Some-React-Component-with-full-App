import React from "react";
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './card1.css';

const Card1 = () => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <img src="./p.jpg" alt="Avatar" className="hii" />
                    <div className="container">
                        <h4><b>John Doe</b></h4>
                        <p>Architect & Engineer</p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Card1;