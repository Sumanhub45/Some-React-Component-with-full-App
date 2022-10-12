import React from "react";
import "./app.css";
import Sdata from "../3card/Mydata";
import Nav1 from "../1nav/Nav1.jsx";
// import Nav2 from "../1nav/Nav2.jsx";
import Status from "../2status/Status.jsx";
import Card1 from "../3card/Card1";
import Card2 from "../3card/Card2";
// import Form from "../form/Form";
// import Pra from "../practic-compo/Pra";

const NCard = (val) => {
    return (
        <Card2
            imgsrc={val.imgsrc}
            name={val.name}
            description={val.description} />
    )
}

const App = () => {
    return (
        <>
            <div>

                <Nav1 />
                {/* <Form /> */}
                <Status />


                <div>
                    <h1>  My Development Team  </h1>
                    <div className="apppp">

                        {Sdata.map(NCard)}
                       
                    </div>
                </div>



                <div>
                    <h1>My Services</h1>
                    <div className="apppp">
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                        <Card1 />
                    </div>

                    
                </div>

                {/* <Form /> */}

            </div>
        </>
    );
}

export default App;