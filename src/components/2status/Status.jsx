import React, { useEffect } from "react";
import "./status.css";

const Status = () => {
  var current = new Date();
  let hours = current.getHours();
  let myStatus = "";
  // let hours = 22;
  const myStatusColor = {};
  if (hours < 12 && hours >= 5) {
    myStatus = "Good Morning";
    myStatusColor.color = "#040f3c";
  } else if (hours < 18 && hours >= 12) {
    myStatus = "Good Afternoon";
    myStatusColor.color = "#048207";
  }
  else if (hours < 24 && hours >= 18) {
    myStatus = "Good Evening";
    myStatusColor.color = "#976804";
  }
  else {
    console.log(hours);
    myStatus = "Good Night";
    myStatusColor.color = "#976804";
  }


  let time = new Date().toLocaleTimeString();
  const [timeString, setTimeString] = React.useState(time);
  const updateTime = () => {
    const utime = new Date().toLocaleTimeString();
    setTimeString(utime);
  }

  setInterval(updateTime, 1000);

  useEffect(() => {
    fetch("http://localhost:5000/education-history").then(result => {
      result.json().then(data => {
        console.log("result", data);
      })
    }).catch(err => {
      console.log(err);
    })
  }, []);



  return (
    <>
      <div className="status">
        <div className="status-text">
          <p style={myStatusColor}>{myStatus}</p>
          <p>{timeString}</p>
        </div>
      </div>
    </>
  );
}
export default Status;